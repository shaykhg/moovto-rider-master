(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Home\r\n    </ion-title>\r\n      <ion-buttons slot=\"secondary\">\r\n          <ion-icon name=\"md-power\" style=\"zoom:1.5;\" (click)=\"logout()\" class=\"m-r-5\"></ion-icon>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div *ngIf=\"!socketService.delivery && !onGoing\" class=\"m-t-100 text-center p-t-10\">\r\n\r\n      <img src=\"/assets/images/box.png\" width=\"100\" height=\"100\">\r\n      <h4 class=\"text-light-grey m-t-25\">Waiting For Delivery Request!</h4>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"socketService.delivery && !onGoing\" class=\"p-t-10\">\r\n        <ion-card class=\"welcome-card\">\r\n            <img [src]=\"socketService.delivery.map\" alt=\"\" />\r\n\r\n            <div class=\"content\">\r\n                <ion-card-title>Delivery Request</ion-card-title>\r\n                <ion-card-subtitle>#{{socketService.delivery.id}}</ion-card-subtitle>\r\n                <hr>\r\n                <p *ngFor=\"let item of socketService.delivery.items\">• {{item.name}}</p>\r\n                <p>Pickup • {{socketService.delivery.pickup.street}}, {{socketService.delivery.pickup.city}}, {{socketService.delivery.pickup.postcode}}</p>\r\n                <p>Drop&nbsp;&nbsp;   • {{socketService.delivery.drop.street}}, {{socketService.delivery.drop.city}}, {{socketService.delivery.drop.postcode}}</p>\r\n                <p>Distance • {{socketService.delivery.distance}}KM</p>\r\n                <p>• Requires {{socketService.delivery.people}} People</p>\r\n                <h6><b>&euro; {{socketService.delivery.total}}</b></h6>\r\n                <br>\r\n\r\n                <button mat-raised-button class=\"green-button\" style=\"margin-right: 20px\" (click)=\"action(socketService.delivery.id, true)\">Accept</button><button mat-raised-button class=\"m-l-30 red-button\" (click)=\"action(socketService.delivery.id, false)\">Reject</button>\r\n\r\n\r\n            </div>\r\n        </ion-card>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"onGoing && order\">\r\n\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\" (mapClick)=\"map = !map\">\r\n            <agm-marker [latitude]=\"order.pickup_lat\" [longitude]=\"order.pickup_lng\">\r\n                <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\r\n                    <div>\r\n                        Pickup Point\r\n                        <br>\r\n                        <h6>{{order.pickup.name}} </h6>\r\n                        <p>{{order.pickup.door}}, {{order.pickup.street}}, {{order.pickup.street}}, {{order.pickup.postcode}}, {{order.pickup.city}}, Finland</p>\r\n                    </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n\r\n            <agm-marker [latitude]=\"order.drop_lat\" [longitude]=\"order.drop_lng\">\r\n                <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\r\n                    <div>\r\n                        Drop Point\r\n                        <br>\r\n                        <h6>{{order.drop.name}} </h6>\r\n                        <p>{{order.drop.door}}, {{order.drop.street}}, {{order.drop.street}}, {{order.drop.postcode}}, {{order.drop.city}}, Finland</p>\r\n                    </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n                <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\r\n                    <div>\r\n                       Your Location\r\n                    </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n        </agm-map>\r\n\r\n            <div class=\"delivery-details\">\r\n                <ion-card class=\"delivery-card mat-elevation-z5\" (click)=\"convertToCard()\" *ngIf=\"status==='pickup'\">\r\n                    <div class=\"content\">\r\n                        <button mat-mini-fab style=\"float: right; display: block; background-color: teal\" (click)=\"openMap()\">\r\n                            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                                <path fill=\"#ffffff\" d=\"M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z\" />\r\n                            </svg>\r\n                        </button>\r\n                        <ion-card-title>Ongoing Delivery : Pickup</ion-card-title>\r\n                        <ion-card-subtitle>#{{order.id}}</ion-card-subtitle>\r\n                        <div *ngIf=\"!map\">\r\n                            <hr>\r\n                            <p *ngFor=\"let item of order.items\">• {{item.name}}</p>\r\n                            <hr>\r\n                            <h6>{{order.pickup.name}} </h6>\r\n                            <p>{{order.pickup.door}}, {{order.pickup.street}}, {{order.pickup.street}}, {{order.pickup.postcode}}, {{order.pickup.city}}, Finland</p>\r\n                            <p><svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                                <path fill=\"#767676\" d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\r\n                            </svg> &nbsp; {{order.pickup.phone}}</p>\r\n                            <h6>Notes: {{order.pickup.notes}}</h6>\r\n                            <button mat-raised-button class=\"pickup-button\" (click)=\"markPickupComplete()\">Pickup Complete</button>\r\n                        </div>\r\n                    </div>\r\n                </ion-card>\r\n\r\n                <ion-card class=\"delivery-card mat-elevation-z5\" *ngIf=\"status==='drop'\" (click)=\"convertToCard()\">\r\n                    <div class=\"content\">\r\n                            <button mat-mini-fab style=\"float: right; display: block; background-color: teal\" (click)=\"openMap()\">\r\n                                <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                                    <path fill=\"#ffffff\" d=\"M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z\" />\r\n                                </svg>\r\n                            </button>\r\n                        <ion-card-title>Ongoing Delivery : Drop</ion-card-title>\r\n                        <ion-card-subtitle>#{{order.id}}</ion-card-subtitle>\r\n                        <div *ngIf=\"!map\">\r\n                            <hr>\r\n                            <p *ngFor=\"let item of order.items\">• {{item.name}}</p>\r\n                            <hr>\r\n                            <h6>{{order.drop.name}} </h6>\r\n                            <p>{{order.drop.door}}, {{order.drop.street}}, {{order.drop.street}}, {{order.drop.postcode}}, {{order.drop.city}}, Finland</p>\r\n                            <p><svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                                <path fill=\"#767676\" d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\r\n                            </svg> &nbsp; {{order.drop.phone}}</p>\r\n                            <h6>Notes: {{order.drop.notes}}</h6>\r\n                            <button mat-raised-button class=\"pickup-button\" (click)=\"markDropComplete()\">Drop Complete</button>\r\n                        </div>\r\n                    </div>\r\n                </ion-card>\r\n            </div>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n* {\n  font-family: \"Karla\", sans-serif;\n}\n\n.content {\n  padding: 20px;\n}\n\n.map {\n  height: 90vh;\n}\n\nagm-map {\n  height: 88vh;\n}\n\n.delivery-details {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 150;\n  height: auto;\n}\n\n.delivery-card {\n  background-color: white;\n}\n\n.pickup-button {\n  background-color: dodgerblue;\n  color: whitesmoke;\n  margin-top: 10px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcc2lkZGhhcnRoXFxyZXNlYXJjaFxcd2ViLXByb2plY3RzXFxpb25pY1xcc25hdGNoLXJpZGVyL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUVFLGdDQUFBO0FDQUY7O0FER0E7RUFFRSxhQUFBO0FDREY7O0FESUE7RUFFRSxZQUFBO0FDRkY7O0FES0E7RUFFRSxZQUFBO0FDSEY7O0FETUE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNKRjs7QURRQTtFQUVFLHVCQUFBO0FDTkY7O0FEU0E7RUFFRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbipcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudFxyXG57XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hcFxyXG57XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG5hZ20tbWFwXHJcbntcclxuICBoZWlnaHQ6IDg4dmg7XHJcbn1cclxuXHJcbi5kZWxpdmVyeS1kZXRhaWxzXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG59XHJcblxyXG4uZGVsaXZlcnktY2FyZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5waWNrdXAtYnV0dG9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJLYXJsYVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDg4dmg7XG59XG5cbi5kZWxpdmVyeS1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxNTA7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRlbGl2ZXJ5LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpY2t1cC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AppConstants */ "./src/app/AppConstants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let Tab1Page = class Tab1Page {
    constructor(storage, router, socket, socketService, http) {
        this.storage = storage;
        this.router = router;
        this.socket = socket;
        this.socketService = socketService;
        this.http = http;
        this.delivery = false;
        this.onGoing = false;
        this.request = true;
        this.status = '';
        this.map = false;
        this.lat = 28.5593264;
        this.lng = 77.1589252;
        //  this.getOrderDetails('5d63cab1a0d2290134130403');
        // this.storage.remove('order');
        this.storage.get('order').then(value => {
            if (value !== undefined && value !== null) {
                this.getOrderDetails(value);
            }
        });
        this.storage.get('status').then(value => {
            console.log('Status', value);
            this.status = value;
        });
        this.notifyLocation();
    }
    logout() {
        this.storage.remove('user');
        this.storage.remove('token');
        this.storage.remove('login');
        this.router.navigateByUrl('/login');
    }
    action(id, accept) {
        if (accept) {
            this.socketService.sendAdminMessage({
                accept: true, title: `${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.name} accepted delivery
    request of Order# ${id}!`, avatar: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.avatar
            });
            this.acceptOrder(this.socketService.delivery.id);
        }
        else {
            this.socketService.sendAdminMessage({
                accept: false, title: `${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.name} declined delivery
    request of Order# ${id}.!`, avatar: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.avatar
            });
            this.socketService.delivery = undefined;
        }
    }
    notifyLocation() {
        if (navigator) {
            if (_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].IS_LOGGED_IN) {
                this.storage.get('user').then(value => {
                    _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user = value;
                    console.log('User stored data', JSON.stringify(value));
                    // this.socket.emit('riders', {action: 'add', rider: AppConstants.user});
                    navigator.geolocation.getCurrentPosition(pos => {
                        _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lng = +pos.coords.longitude;
                        _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lat = +pos.coords.latitude;
                        this.lat = _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lat;
                        this.lng = _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lng;
                        this.updateLocation();
                    });
                });
            }
        }
        setTimeout(() => {
            this.notifyLocation();
        }, 30000);
    }
    updateLocation() {
        console.log('About to make call', JSON.stringify(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.rider));
        const id = _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.rider.id === undefined ? _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.rider : _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.rider.id;
        this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API.RIDERS + '/' + id, { lat: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lat, lng: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].lng }, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].token}` } }).subscribe(value => {
            console.log('Update location', JSON.stringify(value));
            _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.rider = value;
            const riderInfo = JSON.parse(JSON.stringify(value));
            riderInfo.status = _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].ONGOING ? 'In Delivery' : 'Available';
            if (!_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].ADDED) {
                this.socket.emit('riders', { action: 'add', rider: riderInfo });
                _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].ADDED = true;
            }
            console.log('Will update this location', riderInfo);
            this.socket.emit('riders', { action: 'update', rider: riderInfo });
        }, error => {
            console.log('An error occurred!', JSON.stringify(error));
        });
    }
    acceptOrder(id) {
        this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API.ORDERS + '/' + id, { rider: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.id, status: 'ASSIGNED DELIVERY' }, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].token}` } }).subscribe(data => {
            console.log('Order details', data);
            this.order = data;
            this.onGoing = true;
            this.status = 'pickup';
            this.storage.set('status', this.status);
            this.storage.set('order', id);
        }, error => {
            console.log('Looks like an error occurred', error);
        });
    }
    getOrderDetails(id) {
        this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API.ORDERS + '/' + id).subscribe(data => {
            console.log('Order details', data);
            this.order = data;
            this.onGoing = true;
            _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].ONGOING = true;
            if (this.status !== '' && this.status !== null && this.status !== undefined) {
                console.log('Status already set');
            }
            else {
                this.status = 'pickup';
                this.storage.set('status', this.status);
            }
            this.storage.set('order', id);
        }, error => {
            console.log('Looks like an error occurred', error);
        });
    }
    getMapImage() {
        this.order.map = `https://maps.googleapis.com/maps/api/staticmap?center=${this.order.pickup_lat},${this.order.pickup_lng}&zoom=13&size=600x300
    &maptype=roadmap&markers=color:blue%7Clabel:P%7C${this.order.pickup_lat},${this.order.pickup_lng}&markers=color:blue%7Clabel:D%7C${this.order.drop_lat},
            ${this.order.drop_lng}&key=${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API_KEY_MAP}`;
    }
    convertToCard() {
        if (this.map) {
            this.map = false;
        }
    }
    openMap() {
        console.log('Open map');
        if (this.status === 'pickup') {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.order.pickup_lat},${this.order.pickup_lng}&travelmode=driving`);
        }
        else {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.order.drop_lat},${this.order.drop_lng}&travelmode=driving`);
        }
    }
    markPickupComplete() {
        this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API.ORDERS + '/' + this.order.id, { rider: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.id, status: 'PICKUP COMPLETE' }, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].token}` } }).subscribe(data => {
            console.log('Order details', data);
            this.order = data;
            this.onGoing = true;
            this.status = 'drop';
            this.storage.set('status', this.status).then(value => {
                console.log('Status set');
            });
            this.storage.set('order', this.order.id);
            this.socketService.sendAdminMessage({
                accept: true, title: `${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.name} completed pickup of Order# ${this.order.id}!`,
                avatar: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.avatar
            });
        }, error => {
            console.log('Looks like an error occurred', error);
        });
    }
    markDropComplete() {
        this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].API.ORDERS + '/' + this.order.id, { rider: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.id, status: 'DROP COMPLETE' }, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].token}` } }).subscribe(data => {
            console.log('Order details', data);
            this.order = data;
            this.onGoing = false;
            this.status = 'drop';
            this.storage.remove('status');
            this.storage.remove('order');
            this.socketService.sendAdminMessage({
                accept: true, title: `${_AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.name} completed drop of Order# ${this.order.id}!`,
                avatar: _AppConstants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].user.avatar
            });
            this.router.navigateByUrl('/delivery-successful');
        }, error => {
            console.log('Looks like an error occurred', error);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"],
        _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map