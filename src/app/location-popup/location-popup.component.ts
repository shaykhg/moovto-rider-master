import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {OpenNativeSettings} from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.scss'],
})
export class LocationPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LocationPopupComponent>, private openNativeSettings: OpenNativeSettings) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {}

}
