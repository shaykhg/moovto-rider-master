import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import {ImagePopupPage} from "../image-popup/image-popup.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
        MatButtonModule,
        AgmCoreModule,
        MatCardModule,
        MatIconModule
    ],
    entryComponents: [ImagePopupPage],
  declarations: [Tab1Page, ImagePopupPage]
})
export class Tab1PageModule {}
