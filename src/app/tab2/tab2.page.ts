import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    fullName: any;
    email: any;
    phone: any;
    pass: any;
    bankName: any;
    ibanInfo: any;
    swiftId: any;
    user;
  constructor(private http: HttpClient, private storage: Storage, public toastController: ToastController) {}

    ngOnInit(): void {

    }

    ionViewWillEnter() {
        this.getProfile();
    }

    getProfile() {
        this.http.get(AppConstants.API.USER + '/' + AppConstants.user.id,
            {headers: { Authorization: `Bearer ${AppConstants.token}`}}).subscribe(
            (res) => {
                this.user = JSON.parse(JSON.stringify(res));
                this.storage.set('user', this.user);
                console.log('this is my user', this.user);
               // this.presentToast('Your profile updated successfully!');
            },
            (error) => {
                console.error('Error while getting user', error);
            }
        );
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    updateUser() {
      const body = {
          name: this.user.name,
          mobile: this.user.mobile
      };
      this.http.put(AppConstants.API.USER + '/' + AppConstants.user.id, body,
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
                console.log('this is updated data', data);
                this.getProfile();
                this.presentToast('User info updated successfully');
        }, error => {
            console.error(error);

        });
  }

    updatePaymentInfo() {
      const body = {
          bank: this.user.rider.bank,
          iban: this.user.rider.iban,
          swift: this.user.rider.swift
      };

      console.log('this is body of ', body);
      this.http.put(AppConstants.API.RIDERS + '/' + AppConstants.user.rider.id, body,
            {headers: {Authorization: `Bearer ${AppConstants.token}`}}).subscribe(data => {
                console.log('this is updated data', data);
                this.getProfile();
                this.presentToast('Payment info updated successfully');
        }, error => {
            console.error(error);

        });
  }

}
