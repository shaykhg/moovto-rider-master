import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { LottieAnimationViewModule } from 'ng-lottie';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {SocketService} from './socket.service';
import {AppConstants} from './AppConstants';
import {AgmCoreModule} from '@agm/core';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {ConfirmationPopupPage} from './confirmation-popup/confirmation-popup.page';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
const config: SocketIoConfig = { url: 'https://www.easyshifters.com', options: {} };
@NgModule({
    declarations: [AppComponent, ConfirmationPopupPage],
    entryComponents: [ConfirmationPopupPage],
    imports: [BrowserModule, IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        SocketIoModule.forRoot(config),
        AgmCoreModule.forRoot({
            apiKey: AppConstants.API_KEY_MAP
        }),
        MatDialogModule,
        LottieAnimationViewModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SocketService,
        NativeGeocoder,
        OpenNativeSettings,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
