import { Component } from '@angular/core';
import {AppConstants} from '../AppConstants';
import {HttpClient} from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private http: HttpClient, private socket: Socket, private storage: Storage) {
    // if (navigator) {
    //     if (AppConstants.IS_LOGGED_IN) {
    //         this.storage.get('user').then(value => {
    //             AppConstants.user = value;
    //             console.log('User stored data', JSON.stringify(value));
    //           //  this.socket.emit('riders', {action: 'add', rider: AppConstants.user});
    //             navigator.geolocation.getCurrentPosition( pos => {
    //                 AppConstants.lng = +pos.coords.longitude;
    //                 AppConstants.lat = +pos.coords.latitude;
    //                 this.updateLocation();
    //             });
    //         });
    //
    //     }
    //
    // }
  }

    // updateLocation() {
    //     console.log('About to make call', JSON.stringify(AppConstants.user.rider));
    //     const id = AppConstants.user.rider.id === undefined ? AppConstants.user.rider : AppConstants.user.rider.id;
    //     this.http.put(AppConstants.API.RIDERS + '/' + id, {lat: AppConstants.lat, lng: AppConstants.lng},
    //         {headers: { Authorization: `Bearer ${AppConstants.token}`}}).subscribe(
    //         value => {
    //             console.log('Update location', JSON.stringify(value));
    //             AppConstants.user.rider = value;
    //             const riderInfo = JSON.parse(JSON.stringify(value));
    //             riderInfo.status = AppConstants.ONGOING ? 'In Delivery' : 'Available';
    //             if (!AppConstants.ADDED){
    //                 this.socket.emit('riders', {action: 'add', rider: riderInfo});
    //                 AppConstants.ADDED = true;
    //             }
    //             this.socket.emit('riders', {action: 'update', rider: riderInfo});
    //         },
    //         error => {
    //             console.log('An error occurred!', JSON.stringify(error));
    //         }
    //     );
    // }


}
