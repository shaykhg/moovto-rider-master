(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-successful-delivery-successful-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delivery-successful/delivery-successful.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delivery-successful/delivery-successful.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delivery Complete</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"background-color: #f0f0f0;\">\r\n  <div >\r\n    <mat-card class=\"text-center m-t-10 m-l-10 m-r-10 mat-elevation-z6\">\r\n      <h1>Great Job!</h1>\r\n      <mat-card-content>\r\n        <lottie-animation-view\r\n                [options]=\"lottieConfig\"\r\n                [width]=\"200\"\r\n                [height]=\"200\"\r\n                (animCreated)=\"handleAnimation($event)\">\r\n        </lottie-animation-view>\r\n\r\n        <h6>Delivery is completed successfully. You can check this delivery information anytime by going into delivery history.</h6>\r\n\r\n        <div class=\"row m-t-20\">\r\n          <div class=\"col\">\r\n            <button mat-raised-button class=\"red-button\" routerLink=\"/\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\r\n          </div>\r\n\r\n          <div class=\"col\">\r\n            <button mat-raised-button class=\"blue-button\" routerLink=\"/tabs/tab3\">Order History</button>\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"m-b-10\">\r\n          <p>If you have any issue, you can reach us out at +918484884844</p>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delivery-successful/delivery-successful.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/delivery-successful/delivery-successful.module.ts ***!
  \*******************************************************************/
/*! exports provided: DeliverySuccessfulPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverySuccessfulPageModule", function() { return DeliverySuccessfulPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delivery_successful_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-successful.page */ "./src/app/delivery-successful/delivery-successful.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");









var routes = [
    {
        path: '',
        component: _delivery_successful_page__WEBPACK_IMPORTED_MODULE_6__["DeliverySuccessfulPage"]
    }
];
var DeliverySuccessfulPageModule = /** @class */ (function () {
    function DeliverySuccessfulPageModule() {
    }
    DeliverySuccessfulPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieAnimationViewModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
            ],
            declarations: [_delivery_successful_page__WEBPACK_IMPORTED_MODULE_6__["DeliverySuccessfulPage"]]
        })
    ], DeliverySuccessfulPageModule);
    return DeliverySuccessfulPageModule;
}());



/***/ }),

/***/ "./src/app/delivery-successful/delivery-successful.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/delivery-successful/delivery-successful.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: \"Karla\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnktc3VjY2Vzc2Z1bC9EOlxcc2lkZGhhcnRoXFxyZXNlYXJjaFxcd2ViLXByb2plY3RzXFxpb25pY1xcc25hdGNoLXJpZGVyL3NyY1xcYXBwXFxkZWxpdmVyeS1zdWNjZXNzZnVsXFxkZWxpdmVyeS1zdWNjZXNzZnVsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsaXZlcnktc3VjY2Vzc2Z1bC9kZWxpdmVyeS1zdWNjZXNzZnVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeS1zdWNjZXNzZnVsL2RlbGl2ZXJ5LXN1Y2Nlc3NmdWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkthcmxhXCIsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/delivery-successful/delivery-successful.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/delivery-successful/delivery-successful.page.ts ***!
  \*****************************************************************/
/*! exports provided: DeliverySuccessfulPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverySuccessfulPage", function() { return DeliverySuccessfulPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppConstants */ "./src/app/AppConstants.ts");



var DeliverySuccessfulPage = /** @class */ (function () {
    function DeliverySuccessfulPage() {
        this.orderId = '5f151f1f1sfd1f8f1sfs1ffdsdf';
        this.animationSpeed = 0.5;
        this.lottieConfig = {
            path: 'https://assets3.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }
    DeliverySuccessfulPage.prototype.ngOnInit = function () {
        _AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].ONGOING = false;
    };
    DeliverySuccessfulPage.prototype.handleAnimation = function (anim) {
        this.anim = anim;
        this.anim.setSpeed(this.animationSpeed);
    };
    DeliverySuccessfulPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-successful',
            template: __webpack_require__(/*! raw-loader!./delivery-successful.page.html */ "./node_modules/raw-loader/index.js!./src/app/delivery-successful/delivery-successful.page.html"),
            styles: [__webpack_require__(/*! ./delivery-successful.page.scss */ "./src/app/delivery-successful/delivery-successful.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliverySuccessfulPage);
    return DeliverySuccessfulPage;
}());



/***/ })

}]);
//# sourceMappingURL=delivery-successful-delivery-successful-module-es5.js.map