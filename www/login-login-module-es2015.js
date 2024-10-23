(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"m1 bg-gray muted\">\r\n    <mat-card>\r\n\r\n      <div class=\"login-content\">\r\n\r\n        <div class=\"mt1\">\r\n          <img src=\"assets/icon/icon.png\" width=\"10%\" height=\"10%\" class=\"block mx-auto\">\r\n          <h2 class=\"logo inline\" style=\"margin-bottom: 5%\">SNATCH</h2>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <form class=\"login-form\">\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput placeholder=\"Email or username\" type=\"email\" #email>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput placeholder=\"Password\" type=\"password\" #password>\r\n        </mat-form-field>\r\n\r\n\r\n        <button mat-raised-button (click)=\"login(email.value, password.value)\" class=\"mt2 full-width blue-button\">Login</button>\r\n\r\n        <hr>\r\n\r\n        <p class=\"text-center\">Forgot your password? <span class=\"link-text\">Click Here</span></p>\r\n\r\n\r\n      </form>\r\n\r\n      <hr>\r\n\r\n      <p class=\"text-center\">Don't have an account? <span class=\"link-text\" routerLink=\"/signup\">Register Now</span></p>\r\n\r\n\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  text-align: center;\n}\n\n.facebook-button {\n  background-color: #3b5998;\n  color: white;\n  width: 100%;\n}\n\n.google-button {\n  background-color: #dd4b39;\n  color: white;\n  width: 100%;\n}\n\n.login-form {\n  margin-top: 10px;\n}\n\n* {\n  font-family: Karla, sans-serif;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHNpZGRoYXJ0aFxccmVzZWFyY2hcXHdlYi1wcm9qZWN0c1xcaW9uaWNcXHNuYXRjaC1yaWRlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7QUNBRjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0FDSEY7O0FETUE7RUFFRSw4QkFBQTtBQ0pGOztBRE1BO0VBRUUsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnRcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5mYWNlYm9vay1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nb29nbGUtYnV0dG9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm1cclxue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbipcclxue1xyXG4gIGZvbnQtZmFtaWx5OiBLYXJsYSwgc2Fucy1zZXJpZlxyXG59XHJcbi5mdWxsLXdpZHRoXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufSIsIi5sb2dpbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmFjZWJvb2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdvb2dsZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbioge1xuICBmb250LWZhbWlseTogS2FybGEsIHNhbnMtc2VyaWY7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppConstants */ "./src/app/AppConstants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");








let LoginPage = class LoginPage {
    constructor(http, router, storage, toast, socket) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.toast = toast;
        this.socket = socket;
    }
    ngOnInit() {
    }
    login(username, pass) {
        const body = {
            identifier: username,
            password: pass
        };
        this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API.LOGIN, body).subscribe((res) => {
            const result = JSON.parse(JSON.stringify(res));
            console.log('Result', result);
            if (result.user.isRider) {
                this.storage.set('user', result.user);
                this.storage.set('token', result.jwt);
                this.storage.set('login', true);
                _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].user = result.user;
                _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].token = result.jwt;
                _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].IS_LOGGED_IN = true;
                if (navigator) {
                    if (_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].IS_LOGGED_IN) {
                        this.storage.get('user').then(value => {
                            _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].user = value;
                            console.log(value);
                            this.socket.emit('riders', { action: 'add', rider: _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].user });
                            navigator.geolocation.getCurrentPosition(pos => {
                                _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].lng = +pos.coords.longitude;
                                _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].lat = +pos.coords.latitude;
                                this.updateLocation();
                            });
                        });
                    }
                }
                this.router.navigateByUrl('/');
            }
            else {
                this.presentToast('You are not a rider!');
            }
        }, (error) => {
            console.error(error);
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
    updateLocation() {
        this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API.RIDERS + '/' + _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].user.rider, { lat: _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].lat, lng: _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].lng }, { headers: { Authorization: `Bearer ${_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].token}` } }).subscribe(value => {
            console.log('Update location', value);
            console.log(' location', JSON.parse(JSON.stringify(value)));
            _AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].user.rider = value;
            this.socket.emit('riders', { action: 'update', rider: JSON.parse(JSON.stringify(value)) });
        }, error => {
            console.log('An error occurred!', error);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map