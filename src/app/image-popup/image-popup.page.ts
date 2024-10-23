import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from "../AppConstants";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.page.html',
  styleUrls: ['./image-popup.page.scss'],
})
export class ImagePopupPage implements OnInit {

  @Input() image: string;
  imageUrl;
  constructor(private modal: ModalController) { }

  ngOnInit() {
    this.imageUrl = AppConstants.BASE_URL + this.image;
  }

  close() {
    this.modal.dismiss();
  }
}
