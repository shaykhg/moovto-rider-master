import { Injectable } from '@angular/core';
import {AppConstants} from './AppConstants';
import {Storage} from '@ionic/storage';
import {SocketService} from './socket.service';
import {HttpClient} from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmationPopupPage} from './confirmation-popup/confirmation-popup.page';
import {LocationService} from './location.service';
import * as moment from 'moment';
import {
    Plugins,
    PermissionType,
    HapticsImpactStyle, Geolocation
} from '@capacitor/core';

import {AlertController} from '@ionic/angular';
import {LocationPopupComponent} from './location-popup/location-popup.component';
import {OpenNativeSettings} from '@ionic-native/open-native-settings/ngx';

const { Haptics } = Plugins;
const { LocalNotifications } = Plugins;
const { Permissions } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {
    order: any;
    onGoing = false;
    status: string;
    map = false;
    lat = 28.5593264;
    lng = 77.1589252;
    public riderInfo: any;
    public autoCancel;

    constructor(private location: LocationService, private openNativeSettings: OpenNativeSettings,
                public dialog: MatDialog, private router: Router,
                public socket: Socket, private storage: Storage, public socketService: SocketService,
                private http: HttpClient, public alertController: AlertController) {
        // const isAndroid = device.platform == 'Android';
        this.checkGpsActive();
        const isAndroid  =  'Android';
        this.storage.get('order').then(value => {
            if (value !== undefined && value !== null) {
                this.getOrderDetails(value);
            }
        });

        this.storage.get('status').then(value => {
            console.log('Status', value);
            this.status = value;
        });

        this.storage.get('user').then(value => {
            console.log('Status', value);
            AppConstants.user = value;
            console.log('this is user set in Appconstants', AppConstants.user);
        });

        this.socketService.newDelivery.subscribe(resp => {
            if (resp) {
                this.hapticsVibrate();
                this.sendNotifications();
                setTimeout(() => {
                    this.openDialog();
                }, 300);
                this.autoCancel = setTimeout(d => {
                    // auto rejecting order
                    this.action(this.socketService.delivery.id, false);
                }, 15000);
            }
        });
        this.notifyLocation();
    }

    async checkGpsActive() {
        const hasPermission = await Permissions.query({name: PermissionType.Geolocation});
        this.getCurrentPosition();
        if (!hasPermission) {
            const alert = await this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Location Not Available!',
                message: 'Hi, it looks like that your location permission is turned off, Please turn on location in order to use this app.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Settings',
                        handler: () => {
                            this.openNativeSettings.open('location');
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });

            await alert.present();
        }
    }

    async getCurrentPosition() {
        const coordinates = await Geolocation.getCurrentPosition().then((e) => {
            console.log('**********', e);
        }, err => {
            console.log('an error occurred', err);
        });
        // console.log('Current', coordinates);
    }

   async sendNotifications() {
     const notifs =  await LocalNotifications.schedule({
           notifications: [
               {
                   title: 'Order received',
                   body: 'Click here to view the order',
                   id: 1,
                   // schedule: { at: new Date(Date.now() + 1000 * 5) },
                   sound: null,
                   attachments: null,
                   actionTypeId: '',
                   extra: null
               }
           ]
       });
     console.log('scheduled notifications', notifs);

   }

    hapticsImpact(style = HapticsImpactStyle.Heavy) {
       Haptics.vibrate();
    }
    hapticsVibrate() {
        this.hapticsImpact();
    }

    notifyLocation() {
        console.log('Notifying location', navigator);
        if (navigator) {
            if (AppConstants.IS_LOGGED_IN) {
                this.storage.get('user').then(value => {
                    AppConstants.user = value;
                    // console.log('User stored data', JSON.stringify(value));
                    // this.socket.emit('riders', {action: 'add', rider: AppConstants.user});
                    this.location.getCurrentLocation().subscribe(loc => {
                        console.log('location mil gayi!', loc);
                        AppConstants.lng = +loc.lng;
                        AppConstants.lat = +loc.lat;
                        this.lat = AppConstants.lat;
                        this.lng = AppConstants.lng;
                        this.updateLocation();
                    }, error => {
                        console.log('Error in getting location!', error);
                    });
                });
            }
        }
        setTimeout(() => {
            this.notifyLocation();
        }, 18000);
    }

    updateLocation() {
        console.log('About to make call', JSON.stringify(AppConstants.user.rider));
        const id = AppConstants.user.rider.id;
        // const id = this.storage.get('user').then();
        this.http.put(AppConstants.API.RIDERS + '/' + id, {lat: AppConstants.lat, lng: AppConstants.lng},
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(
            value => {
                // console.log('Update location', JSON.stringify(value));
                AppConstants.user.rider = value;
                this.riderInfo = JSON.parse(JSON.stringify(value));
                this.riderInfo.status = AppConstants.ONGOING ? 'In Delivery' : 'Available';
                if (!AppConstants.ADDED) {
                    this.socket.emit('riders', {action: 'add', rider: this.riderInfo});
                    AppConstants.ADDED = true;
                }
                // console.log('Will update this location', this.riderInfo);
                this.socket.emit('riders', {action: 'update', rider: this.riderInfo});
            },
            error => {
                console.log('An error occurred!', JSON.stringify(error));
            }
        );
    }

    getOrderDetails(id) {
        console.log('this is order id', id);
        this.http.get(AppConstants.API.ORDERS + '/' + id).subscribe(data => {
                console.log('Order details', data);
                this.order = data;
                console.log('this is order', this.order);
                this.onGoing = true;
                AppConstants.ONGOING = true;
                if (this.status !== '' && this.status !== null && this.status !== undefined) {
                    console.log('Status already set', this.status);
                } else {
                    this.status = 'pickup';
                    this.storage.set('status', this.status);
                }
                this.storage.set('order', id);
            },
            error => {
                console.log('Looks like an error occurred', error);
            });
    }

    getMapImage() {
        this.order.map = `https://maps.googleapis.com/maps/api/staticmap?center=${this.order.pickup_lat},${this.order.pickup_lng
        }&zoom=13&size=600x300
    &maptype=roadmap&markers=color:blue%7Clabel:P%7C${this.order.pickup_lat},${this.order.pickup_lng
        }&markers=color:blue%7Clabel:D%7C${this.order.drop_lat},
            ${this.order.drop_lng}&key=${AppConstants.API_KEY_MAP}`;
    }

    action(id, accept) {
        // clear pending timeout to stop auto cancel if action is taken by user
        clearTimeout(this.autoCancel);
        if (accept) {
            this.socketService.sendAdminMessage({
                accept: true, title: `${AppConstants.user.name} accepted delivery
    request of Order# ${id}!`, avatar: AppConstants.user.avatar
            });
            this.acceptOrder(this.socketService.delivery.id);
        } else {
            this.socketService.sendAdminMessage({
                accept: false, title: `${AppConstants.user.name} declined delivery
    request of Order# ${id}.!`, avatar: AppConstants.user.avatar
            });
            this.socketService.delivery = undefined;
        }

    }

    acceptOrder(id) {
        this.http.put(AppConstants.API.ORDERS + '/' + id, {rider: AppConstants.user.id, status: 'ASSIGNED DELIVERY'},
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
                console.log('Order details', data);
                this.order = data;
                this.onGoing = true;
                this.status = 'pickup';
                this.storage.set('status', this.status);
                this.storage.set('order', id);
            },
            error => {
                console.log('Looks like an error occurred', error);
            });
    }

    markPickupComplete() {
        this.http.put(AppConstants.API.ORDERS + '/' + this.order.id, {status: 'PICKUP COMPLETE'},
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
                console.log('Order details', data);
                this.order = data;
                this.onGoing = true;
                this.status = 'drop';
                this.storage.set('status', this.status).then(value => {
                    console.log('Status set');
                });
                this.storage.set('order', this.order.id);
                this.postPickupNotification();
                this.socketService.sendAdminMessage({
                    accept: true, title: `${AppConstants.user.name} completed pickup of Order# ${this.order.id}!`,
                    avatar: AppConstants.user.avatar
                });
            },
             err => {
                console.log('Looks like an error occurred', err);
            });
    }

    markDropComplete() {
        this.http.put(AppConstants.API.ORDERS + '/' + this.order.id, {status: 'DROP COMPLETE'},
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
                console.log('Order details', data);
                this.order = JSON.parse(JSON.stringify(data));
                this.sendEmail(this.order);
                this.onGoing = false;
                this.status = 'drop';
                this.storage.remove('status');
                this.storage.remove('order');
                this.postDropNotification();
                this.socketService.sendAdminMessage({
                    accept: true, title: `${AppConstants.user.name} completed drop of Order# ${this.order.id}!`,
                    avatar: AppConstants.user.avatar
                });
                this.router.navigateByUrl('/delivery-successful');

            },
            error => {
                console.log('Looks like an error occurred', error);
            });
    }

    postDropNotification() {
        const body = {
            title : 'Order Dropped',
            text: AppConstants.user.name + ' has dropped your order successfully',
            type: '3',
            user: this.order.user.id,
            order: this.order.id,
        };
        this.http.post(AppConstants.API.NOTIFICATIONS, body, {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe( data => {
            console.log('Notification posted successfully');
        }, error => {
            console.log('An error occurred while sending notification', error);
        });
    }

    postPickupNotification() {
        const body = {
            title : 'Order Picked',
            text: AppConstants.user.name + ' has Picked your order successfully',
            type: '2',
            user: this.order.user.id,
            order: this.order.id,
        };
        this.http.post(AppConstants.API.NOTIFICATIONS, body, {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe( data => {
            console.log('Notification posted successfully');
        }, error => {
            console.log('An error occurred while sending notification', error);
        });
    }


    sendEmail(order) {
        const body = {
            to: this.order.user.email,
            subject: 'Order Update',
            type: 'customer',
            text: `Hi ${order.user.name}, \n This email is to inform you that your order on Easyshifters with Order ID #${order._id} is now delivered to the drop address. \n Thanks and Regards \n Team Easyshifters`,
            html: `<p>Hi ${order.user.name},</p> <p>This email is to inform you that your order on Easyshifters with Order ID #${order._id} is now delivered to the drop address.</p><p>Thanks &amp; Regards</p><p>Team Easyshifters</p>`
        };

        this.http.post(AppConstants.API.SEND_EMAIL, body).subscribe(
            res => {
                console.log('res : ', res);
            },
            err => {
                console.log('err : ', err);
            }
        );
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmationPopupPage, {
            width: '300',
            // data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

    openGpsDialog(): void {
        const dialogRef = this.dialog.open(LocationPopupComponent, {
            width: '300',
            // data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

    public getHumanShortDate(date) {
        return moment(date).format('DD-MMM-YYYY');
    }


    /**
     * This function can be used to display alerts by passing
     * title and message.
     * @param title Title of your message
     * @param message Message which you want to display
     * @param subtitle Optional field, used to display subtitle of dialog
     */
    async presentAlert(title: string, message: string, subtitle?: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            subHeader: subtitle ? subtitle : null,
            message,
            buttons: ['OK']
        });

        await alert.present();
    }


    public returnTime(date) {
        return moment(date).format('HH:mm');
    }



}
