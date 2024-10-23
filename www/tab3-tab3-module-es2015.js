(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Previous Deliveries\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"orders.length === 0\" class=\"m-t-100 text-center p-t-30\">\r\n\r\n    <img src=\"/assets/images/box.png\" width=\"100\" height=\"100\">\r\n    <h4 class=\"text-light-grey m-t-25\">No Deliveries!</h4>\r\n\r\n  </div>\r\n\r\n  <div class=\"content\" *ngIf=\"orders.length > 0\">\r\n\r\n    <mat-card class=\"order-card\" *ngFor=\"let order of orders\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"><p>#{{order.id}}</p></div>\r\n        <div class=\"col text-right\"> <mat-icon (click)=\"copyToClipBoard(order.id)\"><svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n          <path fill=\"#767676\" d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\" />\r\n        </svg></mat-icon></div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-icon>\r\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"#767676\" d=\"M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z\" />\r\n            </svg>\r\n          </mat-icon>\r\n          {{order.date}}\r\n        </div>\r\n\r\n        <div class=\"col\">\r\n          <mat-icon>\r\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"#767676\" d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\" />\r\n            </svg>\r\n          </mat-icon>\r\n          {{order.from}}\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"m-t-10 name\">{{itemsToName(order.items)}}</p>\r\n\r\n      <p class=\"m-t-7\">Charges : &nbsp; <b>&euro;{{order.total}}</b></p>\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-card {\n  margin: 10px;\n}\n\n.content {\n  background-color: #f9f9f9;\n  min-height: 100vh;\n  height: 100%;\n  margin-top: -7px;\n}\n\n* {\n  font-family: \"Karla\", sans-serif;\n}\n\n.name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9EOlxcc2lkZGhhcnRoXFxyZXNlYXJjaFxcd2ViLXByb2plY3RzXFxpb25pY1xcc25hdGNoLXJpZGVyL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItY2FyZFxyXG57XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuKlxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG59XHJcblxyXG4iLCIub3JkZXItY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiS2FybGFcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm5hbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppConstants */ "./src/app/AppConstants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let Tab3Page = class Tab3Page {
    constructor(http, storage, toast) {
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.orders = [];
    }
    ngOnInit() {
        this.storage.get('token').then(value => {
            _AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].token = value;
            this.getOrders();
        }).catch(error => {
            console.log('Error reading order', error);
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    getOrders() {
        console.log('GET ORDERS', { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].token}` } });
        this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API.ORDERS + '?rider=' + _AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].user.id, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].token}` } }).subscribe((res) => {
            this.orders = JSON.parse(JSON.stringify(res));
            console.log('Order placed', this.orders);
        }, (error) => {
            console.error(error);
        });
    }
    itemsToName(items) {
        let name = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < items.length; i++) {
            if (name !== '') {
                name = name + ', ' + items[i].name;
            }
            else {
                name = items[i].name;
            }
        }
        return name;
    }
    copyToClipBoard(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.presentToast('Order id copied to clipboard!');
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map