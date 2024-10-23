import {Component, HostListener} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';
import {AppConstants} from './AppConstants';
import {Router} from '@angular/router';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen, private socket: SocketService,
    private statusBar: StatusBar, private storage: Storage, private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('user').then(value => {
      AppConstants.user = value;
    });

    this.storage.get('login').then(value => {
      AppConstants.IS_LOGGED_IN = value;
      if (AppConstants.IS_LOGGED_IN) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });

    this.storage.get('token').then(value => {
      AppConstants.token = value;
    });
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    this.socket.goOffline();
  }
}
