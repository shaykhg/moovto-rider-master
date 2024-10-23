import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {ImagePopupPage} from '../image-popup/image-popup.page';
import {DataService} from '../data.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    delivery = false;
    // onGoing = false;
    request = true;
    order;
    // status = '';
    map = false;
    // lat = 28.5593264;
    // lng = 77.1589252;
    riderInfo;


    constructor(public toast: ToastController, public data: DataService, private alertController: AlertController,
                public modalController: ModalController, private storage: Storage, private router: Router, public socket: Socket) {
    }

    ionViewDidLeave() {
        // Do actions here
        setTimeout(d => {
            // auto rejecting order
            this.socket.emit('riders', {action: 'remove', rider: this.riderInfo});
        }, 7000);
    }

    logout() {
        console.log('on logout rider info', this.riderInfo);
        console.log('on logout rider info 1', this.riderInfo);

        this.socket.emit('riders', {action: 'remove', rider: this.riderInfo});
        this.storage.remove('user');
        this.storage.remove('token');
        this.storage.remove('login');
        this.router.navigateByUrl('/login');
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Logout',
            message: 'Are you sure you want to logout from the app!',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.logout();
                    }
                }
            ]
        });

        await alert.present();
    }


    convertToCard() {
        if (this.map) {
            this.map = false;
        }
    }

    openMap() {
        console.log('Open map', this.data.order);
        if (this.data.status === 'pickup') {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.data.order.pickup_lat},${this.data.order.pickup_lng}&travelmode=driving`);
        } else {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.data.order.drop_lat},${this.data.order.drop_lng}&travelmode=driving`);
        }

    }

    async viewImagePopup(url) {
        const modal = await this.modalController.create({
            component: ImagePopupPage,
            cssClass: 'my-custom-class',
            componentProps: {
                image: url,
            }
        });
        return await modal.present();
    }

    copyToClipBoard(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.presentToast('Order id copied to clipboard!');
    }
    async presentToast(msg) {
        const toast = await this.toast.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

}
