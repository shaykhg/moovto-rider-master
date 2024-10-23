import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliverySuccessfulPage } from './delivery-successful.page';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {LottieAnimationViewModule} from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: DeliverySuccessfulPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatCardModule,
        LottieAnimationViewModule,
        MatButtonModule
    ],
  declarations: [DeliverySuccessfulPage]
})
export class DeliverySuccessfulPageModule {}
