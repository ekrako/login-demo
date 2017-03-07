webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.APP_ID = "152";
    AppSettings.ENC_MDN = "";
    // public static ENC_MDN = "B9jTziKYKikA4w==";
    AppSettings.TOS_POPUP = "1";
    AppSettings = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppSettings);
    return AppSettings;
}());
//# sourceMappingURL=D:/projects/login-demo/src/appSettings.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateMDN = function (mdn) {
        var re = /^(05[0-9]{8})$/;
        return re.test(mdn);
    };
    ValidateService.prototype.validatePassword = function (password) {
        var re = /^((?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10})$/;
        return re.test(password);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=D:/projects/login-demo/src/validate.service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/projects/login-demo/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/projects/login-demo/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appSettings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_validate_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_auth2user_auth2user_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sendotp_sendotp_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_validate_otp_validate_otp_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_password_user_password_component__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















//Routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'auth2user', component: __WEBPACK_IMPORTED_MODULE_13__components_auth2user_auth2user_component__["a" /* Auth2userComponent */] },
    { path: 'sendotp', component: __WEBPACK_IMPORTED_MODULE_14__components_sendotp_sendotp_component__["a" /* SendotpComponent */] },
    { path: 'validateotp', component: __WEBPACK_IMPORTED_MODULE_15__components_validate_otp_validate_otp_component__["a" /* ValidateOtpComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_user_password_user_password_component__["a" /* UserPasswordComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_auth2user_auth2user_component__["a" /* Auth2userComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_sendotp_sendotp_component__["a" /* SendotpComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_validate_otp_validate_otp_component__["a" /* ValidateOtpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_password_user_password_component__["a" /* UserPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_popup_service__["a" /* PopupService */],
                __WEBPACK_IMPORTED_MODULE_8__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_9__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_6__appSettings__["a" /* AppSettings */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/projects/login-demo/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appSettings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth2userComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Auth2userComponent = (function () {
    function Auth2userComponent(popupService, loginService, flashMessage, router) {
        this.popupService = popupService;
        this.loginService = loginService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    Auth2userComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log();
        if (!(this.loginService.userToken == null)) {
            this.loginService.auth2user(__WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* AppSettings */].APP_ID, this.loginService.userToken).subscribe(function (data) {
                if (data.RetCode == '0') {
                    _this.loginService.userToken = data.UserToken;
                    _this.appParams = data.AppsParams;
                    _this.accessToken = data.AccessToken;
                    _this.details = JSON.stringify(_this.appParams, null, 2);
                    _this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 });
                }
                else if (data.RetDesc == 'PCL_NOT_REGISTERED') {
                    _this.router.navigate(['/sendotp']);
                }
                else if (data.RetCode == '10') {
                    _this.loginService.userToken = null;
                    _this.router.navigate(['/']);
                }
                else {
                    _this.flashMessage.show(_this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    Auth2userComponent.prototype.onLogoutClick = function () {
        this.loginService.logout();
        this.flashMessage.show('Logged out successfully', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    Auth2userComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth2user',
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], Auth2userComponent);
    return Auth2userComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projects/login-demo/src/auth2user.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appSettings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(popupService, loginService, flashMessage, router) {
        this.popupService = popupService;
        this.loginService = loginService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.done = false;
        this.popupService.getPopupBundle(__WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* AppSettings */].APP_ID).subscribe(function (data) {
            if (data.RetCode == '0') {
                _this.popupService.popups = data.PopUps;
            }
        });
        this.loginService.getUserTokenByHI(__WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* AppSettings */].APP_ID).subscribe(function (data) {
            if (data.RetCode == '0') {
                _this.loginService.userToken = data.UserToken;
            }
            if (_this.loginService.userToken == null) {
                _this.done = true;
                _this.flashMessage.show('Failed to login through network identification', { cssClass: 'alert-info', timeout: 5000 });
            }
            else {
                _this.router.navigate(['/auth2user']);
            }
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projects/login-demo/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/projects/login-demo/src/navbar.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendotpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendotpComponent = (function () {
    function SendotpComponent(validateService, flashMessage, popupService, loginService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.popupService = popupService;
        this.loginService = loginService;
        this.router = router;
    }
    SendotpComponent.prototype.ngOnInit = function () {
    };
    SendotpComponent.prototype.onSendOtpSubmit = function () {
        var _this = this;
        if (!this.validateService.validateMDN(this.mdn)) {
            this.flashMessage.show('Please enter a Valid phone numeber', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.loginService.sendotp(this.mdn).subscribe(function (data) {
            if (data.RetCode == '0') {
                _this.loginService.register = data.Register;
                _this.router.navigate(['/validateotp']);
            }
            else {
                _this.flashMessage.show(_this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    SendotpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sendotp',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], SendotpComponent);
    return SendotpComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/projects/login-demo/src/sendotp.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPasswordComponent = (function () {
    function UserPasswordComponent(validateService, flashMessage, popupService, loginService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.popupService = popupService;
        this.loginService = loginService;
        this.router = router;
    }
    UserPasswordComponent.prototype.ngOnInit = function () {
    };
    UserPasswordComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (!this.validateService.validateMDN(this.username) && !this.validateService.validateEmail(this.username)) {
            this.flashMessage.show('Please enter a Valid username', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validatePassword(this.password)) {
            this.flashMessage.show('Please enter a Valid password', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.loginService.validateuserpassword(this.username, this.password).subscribe(function (data) {
            if (data.RetCode == '0') {
                _this.loginService.userToken = data.UserToken;
                _this.router.navigate(['/auth2user']);
            }
            else {
                _this.flashMessage.show(_this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    UserPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-password',
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], UserPasswordComponent);
    return UserPasswordComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/projects/login-demo/src/user-password.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appSettings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateOtpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ValidateOtpComponent = (function () {
    function ValidateOtpComponent(flashMessage, popupService, loginService, router) {
        this.flashMessage = flashMessage;
        this.popupService = popupService;
        this.loginService = loginService;
        this.router = router;
    }
    ValidateOtpComponent.prototype.ngOnInit = function () {
        this.register = this.loginService.register;
        this.tos = this.popupService.getPopup(__WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* AppSettings */].TOS_POPUP).PopupText;
        this.submitButtontext = this.register == 'Y' ? 'Register' : 'Submit';
    };
    ValidateOtpComponent.prototype.onValidateOtpSubmit = function () {
        var _this = this;
        this.loginService.validateotp(this.otp).subscribe(function (data) {
            if (data.RetCode == '0') {
                _this.loginService.userToken = data.UserToken;
                _this.router.navigate(['/auth2user']);
            }
            else {
                _this.flashMessage.show(_this.popupService.getPopup(data.PopUpID).PopupText, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ValidateOtpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validate-otp',
            template: __webpack_require__(692),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup_service__["a" /* PopupService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ValidateOtpComponent);
    return ValidateOtpComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projects/login-demo/src/validate-otp.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/projects/login-demo/src/environment.js.map

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, ".loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #9d9d9d; /* Grey */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"accessToken\" class=\"container\">\r\n  <h2>Login Successfully</h2>\r\n  <p>\r\n    Access Token: {{accessToken}}\r\n  </p>\r\n  <h3>App Parameters</h3>\r\n  <p>\r\n    {{details}}\r\n  </p>\r\n  <div>\r\n    <a href=\"#\" (click)=\"onLogoutClick()\" class=\"btn btn-danger\">Logout</a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"!done\">\r\n</div>\r\n<div class='container' *ngIf=\"done\">\r\n  <div class=\"row\">\r\n    <h2>Choose Login Option</h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <a routerLink=\"/login\" class=\"btn btn-primary btn-lg\">Password</a>\r\n    <a routerLink=\"/sendotp\" class=\"btn btn-primary btn-lg\">Text Message</a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">Pelephone Login Demo</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/\">Home</a></li>\r\n        <li><a routerLink=\"/login\">Login</a></li>\r\n        <li><a routerLink=\"/sendotp\">Send OTP</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Send OTP</h2>\r\n<form (submit)=\"onSendOtpSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Phone Number</label>\r\n    <input type=\"tel\" [(ngModel)]=\"mdn\" name=\"mdn\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Validate OTP</h2>\r\n<form (submit)=\"onValidateOtpSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Enter Password</label>\r\n    <input type=\"tel\" [(ngModel)]=\"otp\" name=\"otp\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"{{submitButtontext}}\">\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"register=='Y'\">\r\n    <div style=\"border: 1px solid #e5e5e5; height: 200px; overflow: auto; padding: 10px;\">\r\n      <p>\r\n        {{tos}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appSettings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getUserTokenByHI = function (appId) {
        var req = { ApplicationID: appId };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            headers.append('encr_MSISDN', __WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].ENC_MDN);
            return this.http.post('https://enigmatic-headland-95760.herokuapp.com/login/api/GetUserTokenByHI', req, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        ;
        return this.http.post('http://login.pelephone.co.il/api/GetUserTokenByHI', req, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    Object.defineProperty(LoginService.prototype, "userToken", {
        get: function () {
            this._userToken = localStorage.getItem('userToken');
            return this._userToken;
        },
        set: function (userToken) {
            localStorage.setItem('userToken', userToken);
            this._userToken = userToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "mdn", {
        get: function () {
            this._mdn = localStorage.getItem('mdn');
            return this._mdn;
        },
        set: function (mdn) {
            localStorage.setItem('mdn', mdn);
            this._userToken = mdn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "register", {
        get: function () {
            this._register = localStorage.getItem('register');
            return this._register;
        },
        set: function (register) {
            localStorage.setItem('register', register);
            this._userToken = register;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.auth2user = function (appId, userToken) {
        var req = { ApplicationID: appId, UserToken: userToken, Register: "N" };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://login.pelephone.co.il/api/Auth2User', req, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.sendotp = function (mdn) {
        var req = {
            MDN: mdn,
            ApplicationID: __WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].APP_ID
        };
        this.mdn = mdn;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://login.pelephone.co.il/api/SendOTP', req, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.validateotp = function (otp) {
        var req = {
            MDN: this.mdn,
            OTP: otp,
            Register: this.register,
            ApplicationID: __WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].APP_ID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://login.pelephone.co.il/api/GetTokenByOTP', req, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.validateuserpassword = function (user, password) {
        var req = {
            USER: user,
            PASSWORD: password,
            ApplicationID: __WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].APP_ID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://login.pelephone.co.il/api/GetTokenByUserPassword', req, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
        this._mdn = null;
        this._register = null;
        this._userToken = null;
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=D:/projects/login-demo/src/login.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupService = (function () {
    function PopupService(http) {
        this.http = http;
    }
    PopupService.prototype.getPopupBundle = function (appId, lang) {
        if (lang === void 0) { lang = 'he'; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Conetnt-Type', 'application/json');
        return this.http.get('https://enigmatic-headland-95760.herokuapp.com/pele/getBundle/' + appId + '/' + lang) //, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    Object.defineProperty(PopupService.prototype, "popups", {
        set: function (popups) {
            localStorage.setItem('popups', JSON.stringify(popups));
            this._popups = popups;
        },
        enumerable: true,
        configurable: true
    });
    PopupService.prototype.loadPopups = function () {
        var popups = JSON.parse(localStorage.getItem('popups'));
        this._popups = popups;
    };
    PopupService.prototype.getPopup = function (id) {
        this.loadPopups();
        return this._popups.find(function (popup) { return popup.PopupID === id; });
    };
    PopupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PopupService);
    return PopupService;
    var _a;
}());
//# sourceMappingURL=D:/projects/login-demo/src/popup.service.js.map

/***/ })

},[712]);
//# sourceMappingURL=main.bundle.js.map