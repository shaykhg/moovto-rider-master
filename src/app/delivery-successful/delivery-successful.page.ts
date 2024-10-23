import { Component, OnInit } from '@angular/core';
import {AppConstants} from '../AppConstants';

@Component({
  selector: 'app-delivery-successful',
  templateUrl: './delivery-successful.page.html',
  styleUrls: ['./delivery-successful.page.scss'],
})
export class DeliverySuccessfulPage implements OnInit {

  private anim: any;
  orderId = '5f151f1f1sfd1f8f1sfs1ffdsdf';
  private animationSpeed = 0.5;
  lottieConfig = {
    path: 'https://assets3.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };
  constructor() { }

  ngOnInit() {
    AppConstants.ONGOING = false;
  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.setSpeed(this.animationSpeed);
  }

}
