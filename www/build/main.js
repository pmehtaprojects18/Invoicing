webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_enums__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UiServiceProvider = /** @class */ (function () {
    function UiServiceProvider() {
        this.selectedUI = __WEBPACK_IMPORTED_MODULE_1__enums_enums__["a" /* UICOMPONENTS */].MAINMENU;
        console.log('Hello UiServiceProvider Provider');
    }
    UiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UiServiceProvider);
    return UiServiceProvider;
}());

//# sourceMappingURL=ui-service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UICOMPONENTS; });
/* unused harmony export STORAGEVALUES */
var UICOMPONENTS;
(function (UICOMPONENTS) {
    UICOMPONENTS["MAINMENU"] = "MAINMENU";
    UICOMPONENTS["CUSTOMERINVOICE"] = "CUSTOMERINVOICE";
    UICOMPONENTS["CUSTOMERS"] = "CUSTOMERS";
    UICOMPONENTS["REPORTS"] = "REPORTS";
})(UICOMPONENTS || (UICOMPONENTS = {}));
var STORAGEVALUES;
(function (STORAGEVALUES) {
    STORAGEVALUES["CUSTOMER"] = "customers";
    STORAGEVALUES["CUSTINVOICES"] = "customerinvoices";
})(STORAGEVALUES || (STORAGEVALUES = {}));
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      \n    <ion-title text-center>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--  -->\n\n  <ion-list>\n    <ion-item>\n      <img src="assets/imgs/login_icon.png" class="login-icon"/>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n        <button ion-button block large (click)="login()">Login</button>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui_service_ui_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_enums__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, uiService) {
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.uiComponent = __WEBPACK_IMPORTED_MODULE_3__enums_enums__["a" /* UICOMPONENTS */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Home Page\n    </ion-title>\n    <!-- <button ion-button menuToggle ion-right>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <main-menu></main-menu>\n  <!-- <cust-invoice *ngIf="uiService.selectedUI === uiComponent.CUSTOMERINVOICE"></cust-invoice>\n  <customer-detail *ngIf="uiService.selectedUI === uiComponent.CUSTOMERS"></customer-detail> -->\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui_service_ui_service__["a" /* UiServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustInvoiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustInvoiceComponent = /** @class */ (function () {
    function CustInvoiceComponent(datePicker) {
        this.datePicker = datePicker;
        this.invoiceDate = new Date().toLocaleDateString();
        this.invoiceDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-MM-DD');
    }
    CustInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cust-invoice',template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/cust-invoice/cust-invoice.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Home Page\n    </ion-title>\n    <!-- <button ion-button menuToggle ion-right>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">Invoice Date :</ion-label>\n      <ion-input type="date" [(ngModel)]="invoiceDate" value="{{invoiceDate}}" class="invoiceDate"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Invoice Number :</ion-label>\n      <ion-input type="text" [(ngModel)]="invoiceNumber" value="{{invoiceNumber}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Customer :</ion-label>\n      <ion-input type="text" [(ngModel)]="invoiceNumber" value="{{invoiceNumber}}"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/cust-invoice/cust-invoice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */]])
    ], CustInvoiceComponent);
    return CustInvoiceComponent;
}());

//# sourceMappingURL=cust-invoice.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'customer-detail',template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/customer/customer-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Home Page\n        </ion-title>\n        <!-- <button ion-button menuToggle ion-right>\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary">Customer Name :</ion-label>\n            <ion-input type="text" [(ngModel)]="customerName" value="{{customerName}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Address 1 :</ion-label>\n            <ion-input type="text" [(ngModel)]="addressLine1" value="{{addressLine1}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Address 2 :</ion-label>\n            <ion-input type="text" [(ngModel)]="addressLine2" value="{{addressLine2}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">City :</ion-label>\n            <ion-input type="text" [(ngModel)]="city" value="{{city}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Province :</ion-label>\n            <ion-input type="text" [(ngModel)]="province" value="{{province}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Postal Code :</ion-label>\n            <ion-input type="text" [(ngModel)]="postalCode" value="{{postalCode}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Phone 1 :</ion-label>\n            <ion-input type="text" [(ngModel)]="phone1" value="{{phone2}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Phone 2 :</ion-label>\n            <ion-input type="text" [(ngModel)]="phone2" value="{{phone2}}"></ion-input>\n        </ion-item>\n        <ion-item>\n            <button ion-button outline color="secondary">Save</button>\n            <button ion-button outline color="danger">Cancel</button>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/customer/customer-details.html"*/
        })
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());

//# sourceMappingURL=customer-details.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ui_service_ui_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__namaneledb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_ui_service_ui_service__["a" /* UiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/app/app.html"*/'<ion-menu type="overlay" [content]="mycontent">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item>\n                <button ion-item>\n                    <ion-icon name="star" item-start></ion-icon>\n                    Button Item\n                </button>\n                <button ion-item>\n                    <ion-icon name="star" item-start></ion-icon>\n                    Button Item\n                </button>\n                <button ion-item>\n                    <ion-icon name="star" item-start></ion-icon>\n                    Button Item\n                </button>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_invoice_cust_invoice__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_details__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_3__cust_invoice_cust_invoice__["a" /* CustInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__customer_customer_details__["a" /* CustomerDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__cust_invoice_cust_invoice__["a" /* CustInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__customer_customer_details__["a" /* CustomerDetailsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_3__cust_invoice_cust_invoice__["a" /* CustInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__customer_customer_details__["a" /* CustomerDetailsComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ui_service_ui_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_enums__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cust_invoice_cust_invoice__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_details__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(uiService, navCtrl) {
        this.uiService = uiService;
        this.navCtrl = navCtrl;
        this.uiComponent = __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* UICOMPONENTS */];
    }
    MainMenuComponent.prototype.openModule = function (compModule) {
        switch (compModule) {
            case __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* UICOMPONENTS */].CUSTOMERINVOICE:
                this.uiService.selectedUI = __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* UICOMPONENTS */].CUSTOMERINVOICE;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cust_invoice_cust_invoice__["a" /* CustInvoiceComponent */]);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* UICOMPONENTS */].CUSTOMERS:
                this.uiService.selectedUI = __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* UICOMPONENTS */].CUSTOMERS;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__customer_customer_details__["a" /* CustomerDetailsComponent */]);
                break;
        }
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-menu',template:/*ion-inline-start:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/main-menu/main-menu.html"*/'<ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card (click)="openModule(uiComponent.CUSTOMERINVOICE)">\n          <img src="assets/imgs/invoice.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Sales\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card  (click)="openModule(uiComponent.CUSTOMERS)">\n          <img src="assets/imgs/customers.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Customers\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card>\n          <img src="assets/imgs/Products.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Products\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card>\n          <img src="assets/imgs/reports.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Reports\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card>\n          <img src="assets/imgs/accounts.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Accounts\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-xl-2>\n        <ion-card>\n          <img src="assets/imgs/customers.png" />\n          <ion-card-content>\n            <ion-card-title text-center>\n              Suppliers\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>'/*ion-inline-end:"/Users/pranavmehta/Documents/MyProject/Invoicing/Invoicing/src/components/main-menu/main-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_ui_service_ui_service__["a" /* UiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());

//# sourceMappingURL=main-menu.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-au": 226,
	"./en-au.js": 226,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 228,
	"./en-gb.js": 228,
	"./en-ie": 229,
	"./en-ie.js": 229,
	"./en-il": 230,
	"./en-il.js": 230,
	"./en-nz": 231,
	"./en-nz.js": 231,
	"./eo": 232,
	"./eo.js": 232,
	"./es": 233,
	"./es-do": 234,
	"./es-do.js": 234,
	"./es-us": 235,
	"./es-us.js": 235,
	"./es.js": 233,
	"./et": 236,
	"./et.js": 236,
	"./eu": 237,
	"./eu.js": 237,
	"./fa": 238,
	"./fa.js": 238,
	"./fi": 239,
	"./fi.js": 239,
	"./fo": 240,
	"./fo.js": 240,
	"./fr": 241,
	"./fr-ca": 242,
	"./fr-ca.js": 242,
	"./fr-ch": 243,
	"./fr-ch.js": 243,
	"./fr.js": 241,
	"./fy": 244,
	"./fy.js": 244,
	"./gd": 245,
	"./gd.js": 245,
	"./gl": 246,
	"./gl.js": 246,
	"./gom-latn": 247,
	"./gom-latn.js": 247,
	"./gu": 248,
	"./gu.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it.js": 256,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ky": 264,
	"./ky.js": 264,
	"./lb": 265,
	"./lb.js": 265,
	"./lo": 266,
	"./lo.js": 266,
	"./lt": 267,
	"./lt.js": 267,
	"./lv": 268,
	"./lv.js": 268,
	"./me": 269,
	"./me.js": 269,
	"./mi": 270,
	"./mi.js": 270,
	"./mk": 271,
	"./mk.js": 271,
	"./ml": 272,
	"./ml.js": 272,
	"./mn": 273,
	"./mn.js": 273,
	"./mr": 274,
	"./mr.js": 274,
	"./ms": 275,
	"./ms-my": 276,
	"./ms-my.js": 276,
	"./ms.js": 275,
	"./mt": 277,
	"./mt.js": 277,
	"./my": 278,
	"./my.js": 278,
	"./nb": 279,
	"./nb.js": 279,
	"./ne": 280,
	"./ne.js": 280,
	"./nl": 281,
	"./nl-be": 282,
	"./nl-be.js": 282,
	"./nl.js": 281,
	"./nn": 283,
	"./nn.js": 283,
	"./pa-in": 284,
	"./pa-in.js": 284,
	"./pl": 285,
	"./pl.js": 285,
	"./pt": 286,
	"./pt-br": 287,
	"./pt-br.js": 287,
	"./pt.js": 286,
	"./ro": 288,
	"./ro.js": 288,
	"./ru": 289,
	"./ru.js": 289,
	"./sd": 290,
	"./sd.js": 290,
	"./se": 291,
	"./se.js": 291,
	"./si": 292,
	"./si.js": 292,
	"./sk": 293,
	"./sk.js": 293,
	"./sl": 294,
	"./sl.js": 294,
	"./sq": 295,
	"./sq.js": 295,
	"./sr": 296,
	"./sr-cyrl": 297,
	"./sr-cyrl.js": 297,
	"./sr.js": 296,
	"./ss": 298,
	"./ss.js": 298,
	"./sv": 299,
	"./sv.js": 299,
	"./sw": 300,
	"./sw.js": 300,
	"./ta": 301,
	"./ta.js": 301,
	"./te": 302,
	"./te.js": 302,
	"./tet": 303,
	"./tet.js": 303,
	"./tg": 304,
	"./tg.js": 304,
	"./th": 305,
	"./th.js": 305,
	"./tl-ph": 306,
	"./tl-ph.js": 306,
	"./tlh": 307,
	"./tlh.js": 307,
	"./tr": 308,
	"./tr.js": 308,
	"./tzl": 309,
	"./tzl.js": 309,
	"./tzm": 310,
	"./tzm-latn": 311,
	"./tzm-latn.js": 311,
	"./tzm.js": 310,
	"./ug-cn": 312,
	"./ug-cn.js": 312,
	"./uk": 313,
	"./uk.js": 313,
	"./ur": 314,
	"./ur.js": 314,
	"./uz": 315,
	"./uz-latn": 316,
	"./uz-latn.js": 316,
	"./uz.js": 315,
	"./vi": 317,
	"./vi.js": 317,
	"./x-pseudo": 318,
	"./x-pseudo.js": 318,
	"./yo": 319,
	"./yo.js": 319,
	"./zh-cn": 320,
	"./zh-cn.js": 320,
	"./zh-hk": 321,
	"./zh-hk.js": 321,
	"./zh-tw": 322,
	"./zh-tw.js": 322
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 401;

/***/ })

},[324]);
//# sourceMappingURL=main.js.map