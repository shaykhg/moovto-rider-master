import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([{path: '', component: Tab2Page}]),
    MatButtonModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
