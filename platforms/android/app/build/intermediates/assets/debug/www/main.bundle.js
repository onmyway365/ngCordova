webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0; \r\n    background-color: lightgrey;\r\n}\r\n\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    height: calc(100% / 2);\r\n    width: 800px;\r\n    -ms-flex-line-pack: distribute;\r\n        align-content: space-around;\r\n}\r\n\r\n.flexcontainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n }\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    background-color: grey;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: white;\r\n    padding: 25px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"flexcontainer\">\r\n        <div class=\"flex-item\">\r\n            <router-outlet></router-outlet>\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_manage_credit_service__ = __webpack_require__("../../../../../src/app/services/manage-credit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__credit_available_credit_available_credit_component__ = __webpack_require__("../../../../../src/app/credit/available-credit/available-credit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__credit_buy_credit_buy_credit_component__ = __webpack_require__("../../../../../src/app/credit/buy-credit/buy-credit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_document_button_sign_document_button_component__ = __webpack_require__("../../../../../src/app/sign-document-button/sign-document-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upload_document_button_upload_document_button_component__ = __webpack_require__("../../../../../src/app/upload-document-button/upload-document-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__take_image_button_take_image_button_component__ = __webpack_require__("../../../../../src/app/take-image-button/take-image-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__make_pdf_button_make_pdf_button_component__ = __webpack_require__("../../../../../src/app/make-pdf-button/make-pdf-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__select_document_select_document_component__ = __webpack_require__("../../../../../src/app/select-document/select-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sign_document_options_screen_sign_document_options_screen_component__ = __webpack_require__("../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__existing_document_load_button_existing_document_load_button_component__ = __webpack_require__("../../../../../src/app/existing-document-load-button/existing-document-load-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__upload_document_options_screen_upload_document_options_screen_component__ = __webpack_require__("../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_button_home_button_component__ = __webpack_require__("../../../../../src/app/home-button/home-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__select_image_button_select_image_button_component__ = __webpack_require__("../../../../../src/app/select-image-button/select-image-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__select_image_feature_select_image_feature_component__ = __webpack_require__("../../../../../src/app/select-image-feature/select-image-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__existing_document_feature_existing_document_feature_component__ = __webpack_require__("../../../../../src/app/existing-document-feature/existing-document-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__take_image_feature_take_image_feature_component__ = __webpack_require__("../../../../../src/app/take-image-feature/take-image-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'available-credit', component: __WEBPACK_IMPORTED_MODULE_12__credit_available_credit_available_credit_component__["a" /* AvailableCreditComponent */] },
    { path: 'buy-credit', component: __WEBPACK_IMPORTED_MODULE_13__credit_buy_credit_buy_credit_component__["a" /* BuyCreditComponent */] },
    { path: 'sign-options', component: __WEBPACK_IMPORTED_MODULE_20__sign_document_options_screen_sign_document_options_screen_component__["a" /* SignDocumentOptionsScreenComponent */] },
    { path: 'upload-options', component: __WEBPACK_IMPORTED_MODULE_22__upload_document_options_screen_upload_document_options_screen_component__["a" /* UploadDocumentOptionsScreenComponent */] },
    { path: 'select-image', component: __WEBPACK_IMPORTED_MODULE_25__select_image_feature_select_image_feature_component__["a" /* SelectImageFeatureComponent */] },
    { path: 'existing-document', component: __WEBPACK_IMPORTED_MODULE_26__existing_document_feature_existing_document_feature_component__["a" /* ExistingDocumentFeatureComponent */] },
    { path: 'take-image', component: __WEBPACK_IMPORTED_MODULE_27__take_image_feature_take_image_feature_component__["a" /* TakeImageFeatureComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_28__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: '**', redirectTo: '/not-found' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__credit_available_credit_available_credit_component__["a" /* AvailableCreditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__credit_buy_credit_buy_credit_component__["a" /* BuyCreditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__sign_document_button_sign_document_button_component__["a" /* SignDocumentButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_15__upload_document_button_upload_document_button_component__["a" /* UploadDocumentButonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__take_image_button_take_image_button_component__["a" /* TakeImageButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_18__make_pdf_button_make_pdf_button_component__["a" /* MakePdfButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_19__select_document_select_document_component__["a" /* SelectDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sign_document_options_screen_sign_document_options_screen_component__["a" /* SignDocumentOptionsScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_21__existing_document_load_button_existing_document_load_button_component__["a" /* ExistingDocumentLoadButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_22__upload_document_options_screen_upload_document_options_screen_component__["a" /* UploadDocumentOptionsScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_button_home_button_component__["a" /* HomeButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_24__select_image_button_select_image_button_component__["a" /* SelectImageButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_25__select_image_feature_select_image_feature_component__["a" /* SelectImageFeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_26__existing_document_feature_existing_document_feature_component__["a" /* ExistingDocumentFeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_27__take_image_feature_take_image_feature_component__["a" /* TakeImageFeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_28__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_manage_credit_service__["a" /* ManageCreditService */], __WEBPACK_IMPORTED_MODULE_10__services_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/credit/available-credit/available-credit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-buy {\r\n    padding-top: 10px;\r\n    background-color: green;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-home {\r\n    padding-top: 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/credit/available-credit/available-credit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['flex-item']\">\n    <span class=\"floatLeft\">Available Credits: </span>\n    <span class=\"floatRight\">{{creditsData.credits}}</span>\n  </div>\n  <div [ngClass]=\"['button-buy', 'flex-button-item']\" [routerLink]=\"['/buy-credit']\">\n    <span>Buy</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-plus\"></i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/credit/available-credit/available-credit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableCreditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__ = __webpack_require__("../../../../../src/app/services/manage-credit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailableCreditComponent = (function () {
    function AvailableCreditComponent(manageCreditService) {
        this.manageCreditService = manageCreditService;
    }
    // ngOnInit() {
    //   this.getCreditsData();
    // }
    // getCreditsData(): void {
    //   this.manageCreditsService.getCredits()
    //   .subscribe(
    //   (data) => {
    //     this.creditsData = data;
    //   },
    //   (err) => console.log('Something went wrong with getting the Credits Data'),
    //   () => console.log('Observable complete')
    //   );
    // }
    AvailableCreditComponent.prototype.ngOnInit = function () {
        this.creditsData = this.getCreditsData();
    };
    AvailableCreditComponent.prototype.getCreditsData = function () {
        return {
            'active': 'true',
            'credits': 200
        };
    };
    AvailableCreditComponent.prototype.clickButton = function () {
        alert('Available Credits Clicked!');
    };
    AvailableCreditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-available-credit',
            template: __webpack_require__("../../../../../src/app/credit/available-credit/available-credit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/credit/available-credit/available-credit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__["a" /* ManageCreditService */]])
    ], AvailableCreditComponent);
    return AvailableCreditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/credit/buy-credit/buy-credit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#credit-text{\r\n    color: black;\r\n}\r\n\r\n#button-align-right{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/credit/buy-credit/buy-credit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Credit Management</div>\n    <div class=\"panel-body\" id=\"credit-text\">Total Remaining Credits: {{creditsData.credits}}</div>\n    <div class=\"panel-footer\" id=\"\">\n      <button class=\"btn btn-primary\" (click)=\"clickButton()\">Buy Credits</button>\n      <button class=\"btn btn-primary\" routerLink=\"/\">Home</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/credit/buy-credit/buy-credit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyCreditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__ = __webpack_require__("../../../../../src/app/services/manage-credit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyCreditComponent = (function () {
    function BuyCreditComponent(manageCreditService) {
        this.manageCreditService = manageCreditService;
    }
    BuyCreditComponent.prototype.clickButton = function () {
        alert('Buy Credits Clicked!');
    };
    BuyCreditComponent.prototype.ngOnInit = function () {
        this.creditsData = this.getCreditsData();
    };
    BuyCreditComponent.prototype.getCreditsData = function () {
        return {
            'active': 'true',
            'credits': 200
        };
    };
    BuyCreditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buy-credit',
            template: __webpack_require__("../../../../../src/app/credit/buy-credit/buy-credit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/credit/buy-credit/buy-credit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__["a" /* ManageCreditService */]])
    ], BuyCreditComponent);
    return BuyCreditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/existing-document-feature/existing-document-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/existing-document-feature/existing-document-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  existing-document-feature works!\n</p>\n<app-home-button></app-home-button>"

/***/ }),

/***/ "../../../../../src/app/existing-document-feature/existing-document-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingDocumentFeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExistingDocumentFeatureComponent = (function () {
    function ExistingDocumentFeatureComponent() {
    }
    ExistingDocumentFeatureComponent.prototype.ngOnInit = function () {
    };
    ExistingDocumentFeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-existing-document-feature',
            template: __webpack_require__("../../../../../src/app/existing-document-feature/existing-document-feature.component.html"),
            styles: [__webpack_require__("../../../../../src/app/existing-document-feature/existing-document-feature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExistingDocumentFeatureComponent);
    return ExistingDocumentFeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/existing-document-load-button/existing-document-load-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-existing {\r\n    padding-top: 10px;\r\n    background-color:green;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-home {\r\n    padding-top: 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/existing-document-load-button/existing-document-load-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-existing', 'flex-button-item']\" [routerLink]=\"['/existing-document']\">\n    <span class=\"\">Sign Existing Document</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/existing-document-load-button/existing-document-load-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingDocumentLoadButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExistingDocumentLoadButtonComponent = (function () {
    function ExistingDocumentLoadButtonComponent() {
    }
    ExistingDocumentLoadButtonComponent.prototype.ngOnInit = function () {
    };
    ExistingDocumentLoadButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-existing-document-load-button',
            template: __webpack_require__("../../../../../src/app/existing-document-load-button/existing-document-load-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/existing-document-load-button/existing-document-load-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExistingDocumentLoadButtonComponent);
    return ExistingDocumentLoadButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    height: 20px;\r\n}\r\n\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    bottom: 5px;\r\n    position: absolute;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['flex-item']\">\n    <span class=\"floatLeft\">Developed by: xcelcious technologies</span>\n  </div>\n  <div [ngClass]=\"['flex-item']\">\n    <span class=\"floatRight\">contact</span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-button/home-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-home {\r\n    padding-top: 10px;\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-button/home-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-home', 'flex-button-item']\" [routerLink]=\"['/']\">\n    <span class=\"\">Home</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-home\"></i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-button/home-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeButtonComponent = (function () {
    function HomeButtonComponent() {
    }
    HomeButtonComponent.prototype.ngOnInit = function () {
    };
    HomeButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-button',
            template: __webpack_require__("../../../../../src/app/home-button/home-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-button/home-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeButtonComponent);
    return HomeButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0; \r\n    background-color: lightgrey;\r\n}\r\n\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    width: 800px;\r\n    -ms-flex-line-pack: distribute;\r\n        align-content: space-around;\r\n}\r\n\r\n.flexcontainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n }\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    background-color: grey;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: white;\r\n    padding: 25px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-available-credit></app-available-credit>\n<app-sign-document-button></app-sign-document-button>\n<app-upload-document-button></app-upload-document-button>\n<hr>\n\n<h3>Device Details:</h3>\n<div>Device Id: {{ deviceDetails.deviceId}}</div>\n<div>Device Model: {{ deviceDetails.deviceModel}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__ = __webpack_require__("../../../../../src/app/services/manage-credit.service.ts");
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
    function HomeComponent(manageCreditService) {
        this.manageCreditService = manageCreditService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        test.alert();
        test.newAlert();
        this.creditsData = this.getCreditsData();
        this.deviceDetails = this.getDeviceDetails();
    };
    HomeComponent.prototype.getCreditsData = function () {
        return {
            'active': 'true',
            'credits': 200
        };
    };
    HomeComponent.prototype.getDeviceDetails = function () {
        return {
            'deviceModel': device.model,
            'devicePlatform': device.platform,
            'deviceId': device.uuid,
            'deviceManufacturer': device.manufacturer,
            'deviceVersion': device.version,
            'deviceCordova': device.cordova,
            'deviceIsVirtual': device.isVirtual,
            'deviceSerial': device.serial
        };
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_manage_credit_service__["a" /* ManageCreditService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/make-pdf-button/make-pdf-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/make-pdf-button/make-pdf-button.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  make-pdf-button works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/make-pdf-button/make-pdf-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePdfButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakePdfButtonComponent = (function () {
    function MakePdfButtonComponent() {
    }
    MakePdfButtonComponent.prototype.ngOnInit = function () {
    };
    MakePdfButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-make-pdf-button',
            template: __webpack_require__("../../../../../src/app/make-pdf-button/make-pdf-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/make-pdf-button/make-pdf-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MakePdfButtonComponent);
    return MakePdfButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Page not found!</h3>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/select-document/select-document.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-document/select-document.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  select-document works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/select-document/select-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectDocumentComponent = (function () {
    function SelectDocumentComponent() {
    }
    SelectDocumentComponent.prototype.ngOnInit = function () {
    };
    SelectDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-document',
            template: __webpack_require__("../../../../../src/app/select-document/select-document.component.html"),
            styles: [__webpack_require__("../../../../../src/app/select-document/select-document.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectDocumentComponent);
    return SelectDocumentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/select-image-button/select-image-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-select-images {\r\n    padding-top: 10px;\r\n    background-color: rgb(21, 29, 133);\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-image-button/select-image-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-select-images', 'flex-button-item']\" [routerLink]=\"['/select-image']\">\n    <span class=\"\">Select Image(s)</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-list\"></i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/select-image-button/select-image-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectImageButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectImageButtonComponent = (function () {
    function SelectImageButtonComponent() {
    }
    SelectImageButtonComponent.prototype.ngOnInit = function () {
    };
    SelectImageButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-image-button',
            template: __webpack_require__("../../../../../src/app/select-image-button/select-image-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/select-image-button/select-image-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectImageButtonComponent);
    return SelectImageButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/select-image-feature/select-image-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-image-feature/select-image-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  select-image-feature works!\n</p>\n<app-home-button></app-home-button>"

/***/ }),

/***/ "../../../../../src/app/select-image-feature/select-image-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectImageFeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectImageFeatureComponent = (function () {
    function SelectImageFeatureComponent() {
    }
    SelectImageFeatureComponent.prototype.ngOnInit = function () {
    };
    SelectImageFeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-image-feature',
            template: __webpack_require__("../../../../../src/app/select-image-feature/select-image-feature.component.html"),
            styles: [__webpack_require__("../../../../../src/app/select-image-feature/select-image-feature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectImageFeatureComponent);
    return SelectImageFeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/manage-credit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCreditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ManageCreditService = (function () {
    function ManageCreditService(location, http, messageService) {
        this.location = location;
        this.http = http;
        this.messageService = messageService;
        this.creditData = '50';
        this.contextRoot = this.location.path();
        console.log('OnInit');
        console.log('Location Path: ' + this.contextRoot);
        this.getCreditsURL = '/api/?' + this.contextRoot;
    }
    ManageCreditService.prototype.getCredits = function () {
        return this.creditData;
    };
    ManageCreditService.prototype.getData = function () {
        return this.creditData;
    };
    /** GET credits from the server */
    // getCredits (): Observable<any> {
    //   const newURL = AppConfig.WebServiceURL + this.getCreditsURL;
    //   return this.http.get(newURL)
    //     .pipe(
    //       tap(credits => this.log(`fetched credits`)),
    //       catchError(this.handleError('getCredits', []))
    //     );
    // }
    /** Log a HeroService message with the MessageService */
    ManageCreditService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    ManageCreditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], ManageCreditService);
    return ManageCreditService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/sign-document-button/sign-document-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-sign {\r\n    padding-top: 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-home {\r\n    padding-top: 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-document-button/sign-document-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-sign', 'flex-button-item']\" [routerLink]=\"['/sign-options']\">\n    <span class=\"\">Sign Document</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign-document-button/sign-document-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignDocumentButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignDocumentButtonComponent = (function () {
    function SignDocumentButtonComponent() {
    }
    SignDocumentButtonComponent.prototype.ngOnInit = function () {
    };
    SignDocumentButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-document-button',
            template: __webpack_require__("../../../../../src/app/sign-document-button/sign-document-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-document-button/sign-document-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignDocumentButtonComponent);
    return SignDocumentButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-upload-document-button></app-upload-document-button>\n<app-existing-document-load-button></app-existing-document-load-button>\n<app-home-button></app-home-button>"

/***/ }),

/***/ "../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignDocumentOptionsScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignDocumentOptionsScreenComponent = (function () {
    function SignDocumentOptionsScreenComponent() {
    }
    SignDocumentOptionsScreenComponent.prototype.ngOnInit = function () {
    };
    SignDocumentOptionsScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-document-options-screen',
            template: __webpack_require__("../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-document-options-screen/sign-document-options-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignDocumentOptionsScreenComponent);
    return SignDocumentOptionsScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/take-image-button/take-image-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-image {\r\n    padding-top: 10px;\r\n    background-color: rgb(71, 162, 204);\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-selfie {\r\n  padding-top: 10px;\r\n  background-color: rgb(100, 71, 204);\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left;\r\n}\r\n\r\n.floatRight{\r\n    float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/take-image-button/take-image-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-image', 'flex-button-item']\" [routerLink]=\"['/take-image']\">\n    <span class=\"\">Take an Image</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-camera\"></i></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/take-image-button/take-image-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeImageButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TakeImageButtonComponent = (function () {
    function TakeImageButtonComponent() {
    }
    TakeImageButtonComponent.prototype.ngOnInit = function () {
    };
    TakeImageButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-take-image-button',
            template: __webpack_require__("../../../../../src/app/take-image-button/take-image-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/take-image-button/take-image-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TakeImageButtonComponent);
    return TakeImageButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/take-image-feature/take-image-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.flex-item {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  text-align: center;\r\n  border: 1px solid white;\r\n  background-color: rgb(22, 22, 160);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  height: 40px;\r\n  font-weight: bold;\r\n  border-radius: 3px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  text-align: center;\r\n  border: 1px solid white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  margin-right: 5px;\r\n  padding: 5px;\r\n  height: 40px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-image {\r\n  padding-top: 10px;\r\n  background-color: rgb(71, 162, 204);\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.button-selfie {\r\npadding-top: 10px;\r\nbackground-color: rgb(100, 71, 204);\r\ncolor: white;\r\nfont-size: 14px;\r\nfont-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n  float: left;\r\n}\r\n\r\n.floatRight{\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/take-image-feature/take-image-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Image</h1>\n\n<img [src]=\"DomSanitizer.bypassSecurityTrustUrl(selfieImage)\" />\n\n<div class=\"flex-container\" (click)=\"callCamera()\">\n  <div [ngClass]=\"['button-image', 'flex-button-item']\">\n    <span class=\"\">Take Image</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-camera\"></i></span>\n  </div>\n</div>\n\n<button class=\"btn btn-primary\" (click)=\"takeRegistrationSelfie()\">\n  Take a selfie\n</button>    \n\n<app-home-button></app-home-button>\n"

/***/ }),

/***/ "../../../../../src/app/take-image-feature/take-image-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeImageFeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TakeImageFeatureComponent = (function () {
    function TakeImageFeatureComponent(DomSanitizer) {
        this.DomSanitizer = DomSanitizer;
    }
    TakeImageFeatureComponent.prototype.ngOnInit = function () {
        // this.imgOptions = {
        //   quality: 100,
        //   destinationType: Camera.DestinationType.DATA_URL,
        //   sourceType: Camera.PictureSourceType.CAMERA,
        //   allowEdit: false,
        //   correctOrientation: true,
        //   encodingType: Camera.EncodingType.JPEG,
        //   mediaType: Camera.MediaType.PICTURE,
        //   // targetWidth: 1024,
        //   // targetHeight: 768,
        //   cameraDirection: Camera.Direction.FRONT,
        //   saveToPhotoAlbum: false
        // };
        // this.callCamera();
    };
    TakeImageFeatureComponent.prototype.takeRegistrationSelfie = function () {
        var _this = this;
        alert('taking selfie');
        navigator.camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true,
            cameraDirection: 1
        }).then(function (imageData) {
            _this.selfieImage = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(err);
        });
    };
    TakeImageFeatureComponent.prototype.callCamera = function () {
        navigator.camera.getPicture(this.imgSuccess, this.imgFail, this.imgOptions);
    };
    TakeImageFeatureComponent.prototype.imgSuccess = function (imageData) {
        alert('image taken!');
        this.image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.image);
        alert(this.image);
    };
    TakeImageFeatureComponent.prototype.imgFail = function (msg) {
        alert('Failed to get image');
    };
    TakeImageFeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-take-image-feature',
            template: __webpack_require__("../../../../../src/app/take-image-feature/take-image-feature.component.html"),
            styles: [__webpack_require__("../../../../../src/app/take-image-feature/take-image-feature.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], TakeImageFeatureComponent);
    return TakeImageFeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload-document-button/upload-document-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    background-color: rgb(22, 22, 160);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.flex-button-item {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border: 1px solid white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    height: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.button-upload {\r\n    padding-top: 10px;\r\n    background-color:orangered;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-home {\r\n    padding-top: 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.floatLeft{\r\n    float: left; \r\n}\r\n\r\n.floatRight{\r\n    float: right; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-document-button/upload-document-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div [ngClass]=\"['button-upload', 'flex-button-item']\" [routerLink]=\"['/upload-options']\">\n    <span class=\"\">Upload or Create Document</span>\n    <span class=\"floatRight\"><i class=\"glyphicon glyphicon-upload\"></i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/upload-document-button/upload-document-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDocumentButonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadDocumentButonComponent = (function () {
    function UploadDocumentButonComponent() {
    }
    UploadDocumentButonComponent.prototype.ngOnInit = function () {
    };
    UploadDocumentButonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload-document-button',
            template: __webpack_require__("../../../../../src/app/upload-document-button/upload-document-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload-document-button/upload-document-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadDocumentButonComponent);
    return UploadDocumentButonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-take-image-button></app-take-image-button>\n<app-select-image-button></app-select-image-button>\n<app-home-button></app-home-button>"

/***/ }),

/***/ "../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDocumentOptionsScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadDocumentOptionsScreenComponent = (function () {
    function UploadDocumentOptionsScreenComponent() {
    }
    UploadDocumentOptionsScreenComponent.prototype.ngOnInit = function () {
    };
    UploadDocumentOptionsScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload-document-options-screen',
            template: __webpack_require__("../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload-document-options-screen/upload-document-options-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadDocumentOptionsScreenComponent);
    return UploadDocumentOptionsScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map