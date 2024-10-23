import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  orders = [];

  constructor(private http: HttpClient, private storage: Storage, public toast: ToastController, private router: Router, public data: DataService) { }

  ngOnInit() {
    // this.storage.get('token').then(value => {
    //  AppConstants.token = value;
    //  this.getOrders();
    // }).catch(error => {
    //   console.log('Error reading order', error);
    // });
  }

  ionViewWillEnter() {
    this.storage.get('token').then(value => {
      AppConstants.token = value;
      this.getOrders();
    }).catch(error => {
      console.log('Error reading order', error);
    });
    console.log('this is user', AppConstants.user);
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  getOrders() {
    console.log('GET ORDERS', {headers: { Authorization: `Bearer ${AppConstants.token}`}});
    this.http.get(AppConstants.API.ORDERS + '?rider=' + AppConstants.user.rider.id,
        {headers: { Authorization: `Bearer ${AppConstants.token}`}}).subscribe(
        (res) => {
          this.orders = JSON.parse(JSON.stringify(res));
          this.orders = this.orders.reverse();
          console.log('Order placed', this.orders);
        },
        (error) => {
          console.error(error);
        }
    );

  }

  itemsToName(items) {
    let name = '';

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      if (name !== '') {
        name = name + ', ' + items[i].name;
      } else {
        name = items[i].name;
      }
    }
    return name;
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

    openDetails(order: any) {
      this.router.navigateByUrl('/order-details/' + order.id);

    }
}

