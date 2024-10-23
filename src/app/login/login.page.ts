import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private storage: Storage,
              private toast: ToastController, public socket: Socket) { }

  ngOnInit() {
  }

  login(username: string, pass: string) {
    const body = {
      identifier: username,
      password: pass
    };

    this.http.post(AppConstants.API.LOGIN, body).subscribe(
        (res) => {
          const result = JSON.parse(JSON.stringify(res));
          console.log('Result', result);
          if (result.user.isRider) {
            this.storage.set('user', result.user);
            this.storage.set('token', result.jwt);
            this.storage.set('login', true);
            AppConstants.user = result.user;
            AppConstants.token = result.jwt;
            AppConstants.IS_LOGGED_IN = true;
            if (navigator) {
              if (AppConstants.IS_LOGGED_IN) {
                  AppConstants.user = result.user;
                  navigator.geolocation.getCurrentPosition( pos => {
                      AppConstants.lng = +pos.coords.longitude;
                      AppConstants.lat = +pos.coords.latitude;
                      this.updateLocation();
                  });

              }

            }
            this.router.navigateByUrl('/');
          } else {
            this.presentToast('You are not a rider!');
          }

        },
        (error) => {
            this.presentToast('Please check your email and password.');
            console.error(error);
        }
    );
  }


  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  updateLocation() {
    this.http.put(AppConstants.API.RIDERS + '/' + AppConstants.user.rider, {lat: AppConstants.lat, lng: AppConstants.lng},
        {headers: { Authorization: `Bearer ${AppConstants.token}`}}).subscribe(
        value => {
          console.log('Update location', value);
          console.log(' location', JSON.parse(JSON.stringify(value)));
          AppConstants.user.rider = value;
          this.socket.emit('riders', {action: 'update', rider: JSON.parse(JSON.stringify(value))});
        },
        error => {
          console.log('An error occurred!', error);
        }
    );
  }

}
