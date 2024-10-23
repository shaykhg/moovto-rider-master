import { Component, OnInit } from '@angular/core';
import {SocketService} from '../socket.service';
import {AppConstants} from '../AppConstants';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {DataService} from '../data.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.page.html',
  styleUrls: ['./confirmation-popup.page.scss'],
})
export class ConfirmationPopupPage implements OnInit {

    order;
    status = '';
    onGoing = false;

  constructor(public dialogRef: MatDialogRef<ConfirmationPopupPage>,
              public data: DataService, public socketService: SocketService, private storage: Storage, private http: HttpClient) {
                dialogRef.disableClose = true;
  }

  ngOnInit() {
      console.log('this is the data from socket order', this.socketService.delivery);
      setTimeout(() => {
          // this.action(this.socketService.delivery.id, false);
          this.dialogRef.close(0);
      }, 14500);
  }

  action(id, accept) {
      clearTimeout(this.data.autoCancel);
      if (accept) {
      this.socketService.sendAdminMessage({
        accept: true, title: `${AppConstants.user.name} accepted delivery
    request of Order# ${id}!`, avatar: AppConstants.user.avatar
      });
      console.log('Order acceppt kr liya');
      this.acceptOrder(this.socketService.delivery.id);
      this.dialogRef.close(1);
    } else {
      this.socketService.sendAdminMessage({
        accept: false, title: `${AppConstants.user.name} declined delivery
    request of Order# ${id}.!`, avatar: AppConstants.user.avatar
      });
      this.socketService.delivery = undefined;
      this.dialogRef.close(0);
    }

  }

  acceptOrder(id) {
        console.log('this is user', AppConstants.user);
        this.http.put(AppConstants.API.ORDERS + '/' + id, {rider: AppConstants.user.rider.id, status: 'ASSIGNED DELIVERY'},
        {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
          console.log('Order details', data);
          this.data.order = data;
          this.data.onGoing = true;
          this.data.status = 'pickup';
          this.storage.set('status', this.status);
          this.storage.set('order', id);
          this.postNotification();
          this.dialogRef.close(1);
        },
        error => {
          console.log('Looks like an error occurred', error);
          this.dialogRef.close();

        });


  }

    postNotification() {
      const body = {
          title : 'Rider assigned',
          text: AppConstants.user.name + ' is on his way receive your order',
          type: '1',
          user: this.data.order.user.id,
          order: this.data.order.id,
      };
      this.http.post(AppConstants.API.NOTIFICATIONS, body, {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe( data => {
          console.log('Notification posted successfully');
      }, error => {
          console.log('An error occurred while sending notification', error);
      });
    }
}
