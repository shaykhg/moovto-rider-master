import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {AppConstants} from './AppConstants';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  delivery;
  private isNew: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public newDelivery: Observable<boolean> = this.isNew.asObservable();

  constructor(public socket: Socket, private http: HttpClient) {
    this.getDelivery();
  }

  getDelivery() {
   this.socket.on('delivery', value => {
     console.log('#############################', AppConstants.user.rider, value.rider);
     if (value.rider === AppConstants.user.rider.id) {
       console.log('Its for me', value);
       if (!AppConstants.ONGOING) {
         this.isNew.next(true);
         // Put Notification code here
         this.getOrderDetails(value.order);
       } else {
         console.log('Rider is busy!');
       }
     } else {
       console.log('Someone else', value.rider, AppConstants.user.rider.id);
     }
   });
  }

  getOrderDetails(id) {
    this.http.get(AppConstants.API.ORDERS + '/' + id).subscribe(data => {
      console.log('Order details', data);
      this.delivery = data;
      console.log('this is delivery', this.delivery);
      this.getMapImage();
    },
    error => {
      console.log('Looks like an error occurred', error);
    });
  }

  getMapImage() {
    this.delivery.map = `https://maps.googleapis.com/maps/api/staticmap?center=${this.delivery.pickup_lat},${this.delivery.pickup_lng
    }&zoom=13&size=600x300
    &maptype=roadmap&markers=color:blue%7Clabel:P%7C${this.delivery.pickup_lat},${this.delivery.pickup_lng
    }&markers=color:blue%7Clabel:D%7C${this.delivery.drop_lat},
            ${this.delivery.drop_lng}&key=${AppConstants.API_KEY_MAP}`;
  }

  sendAdminMessage(data) {
    this.socket.emit('admin', data);
  }

  goOffline() {
    this.socket.emit('riders', {action: 'remove', rider: AppConstants.user.rider});
  }


}
