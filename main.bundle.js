webpackJsonp([1,5],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'eggs',
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
        ],
        providers: [],
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/app-routing.module.js.map

/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todos_module__ = __webpack_require__(1022);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_6__todos_todos_module__["a" /* TodosModule */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
    })
], AppModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/app.module.js.map

/***/ }),

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(664);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(1003);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(666);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderRoutingModule = (function () {
    function HeaderRoutingModule() {
    }
    return HeaderRoutingModule;
}());
HeaderRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__index__["a" /* HeaderComponent */],
                    outlet: 'header',
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
        ],
    })
], HeaderRoutingModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/header-routing.module.js.map

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(af, router) {
        this.af = af;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(1058),
        styles: [__webpack_require__(1037)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/header.component.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_routing_module__ = __webpack_require__(1005);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__header_routing_module__["a" /* HeaderRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* HeaderComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* HeaderComponent */],
        ],
    })
], HeaderModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/header.module.js.map

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__(1007);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
        ],
    })
], LayoutModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/layout.module.js.map

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(667);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_2__index__["a" /* LoginComponent */],
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
        ],
    })
], LoginRoutingModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/login-routing.module.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    /**
     * Constructor of the class.
     *
     * @param {AnimationsService} animationsService
     * @param {AngularFire}       angularFire
     * @param {Router}            router
     */
    function LoginComponent(animationsService, angularFire, router) {
        var _this = _super.call(this, animationsService) || this;
        _this.animationsService = animationsService;
        _this.angularFire = angularFire;
        _this.router = router;
        return _this;
    }
    /**
     * ngOnInit lifecycle hook.
     *
     * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFire.auth.subscribe(function (auth) {
            if (auth && auth.uid) {
                _this.router.navigateByUrl('/login');
            }
        });
    };
    /**
     * Method to login with specified provider.
     *
     * @param {string}  provider
     */
    LoginComponent.prototype.login = function (provider) {
        var _this = this;
        this.angularFire.auth
            .login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */][provider],
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Popup,
        })
            .then(function () {
            _this.router.navigate(['/eggs']);
        })
            .catch(function (error) {
            alert(error);
        });
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared___["a" /* Animations */]));
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(1059),
        styles: [__webpack_require__(1038)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/login.component.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__(1009);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* LoginComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* LoginComponent */],
        ],
    })
], LoginModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/login.module.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });
var Animations = (function () {
    /**
     * Constructor of the class.
     *
     * @param {AnimationsService} animationsService
     */
    function Animations(animationsService) {
        this.animationsService = animationsService;
        this.activateAnimation = true;
    }
    /**
     * ngOnDestroy lifecycle hook.
     *
     * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    Animations.prototype.ngOnDestroy = function () {
        this.animationsService.announceMission(true);
    };
    /**
     * ngAfterViewInit lifecycle hook.
     *
     * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    Animations.prototype.ngAfterViewInit = function () {
        this.animationsService.announceMission(false);
    };
    return Animations;
}());

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/animations.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_guard__ = __webpack_require__(670);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var AuthenticationModule = AuthenticationModule_1 = (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule.forRoot = function () {
        return {
            ngModule: AuthenticationModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__authentication_guard__["a" /* AuthenticationGuard */]
            ]
        };
    };
    return AuthenticationModule;
}());
AuthenticationModule = AuthenticationModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].FIREBASE_CONFIG, __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].FIREBASE_AUTH_CONFIG),
        ],
    })
], AuthenticationModule);

var AuthenticationModule_1;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/authentication.module.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_guard__ = __webpack_require__(670);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_guard__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosResolver"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/todo-item.interface.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todos_resolver__ = __webpack_require__(1018);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todos_resolver__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosResolver = (function () {
    /**
     * Constructor of the class.
     *
     * @param {AngularFire} angularFire
     */
    function TodosResolver(angularFire) {
        this.angularFire = angularFire;
    }
    /**
     * Resolve method to get current user to-do items from Firebase.
     *
     * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
     *
     * @param {ActivatedRouteSnapshot}  route
     * @param {RouterStateSnapshot}     state
     * @returns {Promise<FirebaseListObservable<TodoItem[]>>}
     */
    TodosResolver.prototype.resolve = function (route, state) {
        var list = this.angularFire.database.list(localStorage.getItem('uid'));
        return new Promise(function (resolve, reject) {
            list.first().subscribe(function () { return resolve(list); }, reject);
        });
    };
    return TodosResolver;
}());
TodosResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object])
], TodosResolver);

var _a;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/todos.resolver.js.map

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggStatus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var EggStatus = (function () {
    function EggStatus() {
    }
    EggStatus.prototype.transform = function (value) {
        switch (value) {
            case 0: return "No Egg detected";
            case 1: return "Egg discovered but with no VISIBLE DEVELOPMENT";
            case 2: return "Egg has just initiated development";
            case 3: return "Egg has matured Development";
            case 4: return "Egg has quit";
        }
    };
    return EggStatus;
}());
EggStatus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'eggStatus' })
], EggStatus);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/status.pipeline.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(672);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodosRoutingModule = (function () {
    function TodosRoutingModule() {
    }
    return TodosRoutingModule;
}());
TodosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'eggs',
                    component: __WEBPACK_IMPORTED_MODULE_3__index__["TodosComponent"],
                    canActivate: [
                        __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* AuthenticationGuard */],
                    ],
                    resolve: {
                        todos: __WEBPACK_IMPORTED_MODULE_3__index__["TodosResolver"],
                    },
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
        ],
    })
], TodosRoutingModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/todos-routing.module.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared___ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosComponent = (function (_super) {
    __extends(TodosComponent, _super);
    /**
     * Constructor of the class
     *
     * @param {ActivatedRoute}    activatedRoute
     * @param {AnimationsService} animationsService
     */
    function TodosComponent(animationsService, activatedRoute) {
        var _this = _super.call(this, animationsService) || this;
        _this.animationsService = animationsService;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.todos = data['todos'];
        });
    };
    TodosComponent.prototype.addEgg = function () {
        console.log("looooooooool");
    };
    TodosComponent.prototype.getImgURL = function (str) {
        console.log("YEAH" + str);
        return ("https://firebasestorage.googleapis.com/v0/b/foodiemate-41193.appspot.com/o/image%2F" + str + "?alt=media");
    };
    TodosComponent.prototype.addNewTodo = function () {
        var item = {
            todo: this.todo,
            done: false,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            updatedAt: firebase.database.ServerValue.TIMESTAMP,
        };
        this.todos.push(item);
        this.todo = '';
    };
    TodosComponent.prototype.remove = function (item) {
        this.todos.remove(item.$key);
    };
    return TodosComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared___["a" /* Animations */]));
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-todos',
        template: __webpack_require__(1060),
        styles: [__webpack_require__(1039)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TodosComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/todos.component.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todos_routing_module__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_pipeline__ = __webpack_require__(1019);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TodosModule = (function () {
    function TodosModule() {
    }
    return TodosModule;
}());
TodosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__todos_routing_module__["a" /* TodosRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__index__["TodosComponent"],
            __WEBPACK_IMPORTED_MODULE_4__status_pipeline__["a" /* EggStatus */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__index__["TodosComponent"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__index__["TodosResolver"],
        ],
    })
], TodosModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/todos.module.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/environment.js.map

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "header {\n  -ms-flex-order: 1;\n      order: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\narticle {\n  -ms-flex-order: 2;\n      order: 2;\n  -ms-flex: 1;\n      flex: 1;\n  overflow: auto; }\n\nfooter {\n  -ms-flex-order: 3;\n      order: 3;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "span {\n  margin-left: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, ".login {\n  width: 480px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 16px 8px;\n  background: #fafafa90;\n  box-shadow: rgba(0, 0, 0, 0.14902) 0 1px 1px 0, rgba(0, 0, 0, 0.09804) 0 1px 2px 0;\n  text-align: center; }\n\n.container {\n  background-image: url(\"/assets/background.png\");\n  background-size: 100% 100%; }\n\n.text {\n  margin-bottom: 16px; }\n\nbutton {\n  margin: 0 4px; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #dddddd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "h2 {\n  margin-bottom: 0; }\n\nh3 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  line-height: 14px; }\n\np {\n  margin: 0; }\n\nimg {\n  width: 100%;\n  max-height: 280px; }\n\n.mat-checkbox {\n  margin-right: 8px; }\n\n.done h3 {\n  text-decoration: line-through; }\n\n.content h3, .content p {\n  margin: 0; }\n\n.ad-left {\n  float: left; }\n\n.ad-right {\n  float: right;\n  margin-left: 10px; }\n\n.mat-list-item {\n  height: auto;\n  padding: 8px 0; }\n\n.card {\n  -ms-flex: 1 0 500px;\n      flex: 1 0 500px;\n  box-sizing: border-box;\n  margin: 1rem .25em;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 30%;\n  border-radius: 5px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin: 5px; }\n\n.cards {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n@media screen and (min-width: 40em) {\n  .card {\n    max-width: calc(48% -  1em); } }\n\n@media screen and (min-width: 60em) {\n  .card {\n    max-width: calc(24% - 1em); } }\n\n@media screen and (min-width: 80em) {\n  .card {\n    max-width: calc(19% - 1em); } }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\nimg {\n  border-radius: 5px 5px 0 0; }\n\n.container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 2px 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 682,
	"./af.js": 682,
	"./ar": 689,
	"./ar-dz": 683,
	"./ar-dz.js": 683,
	"./ar-kw": 684,
	"./ar-kw.js": 684,
	"./ar-ly": 685,
	"./ar-ly.js": 685,
	"./ar-ma": 686,
	"./ar-ma.js": 686,
	"./ar-sa": 687,
	"./ar-sa.js": 687,
	"./ar-tn": 688,
	"./ar-tn.js": 688,
	"./ar.js": 689,
	"./az": 690,
	"./az.js": 690,
	"./be": 691,
	"./be.js": 691,
	"./bg": 692,
	"./bg.js": 692,
	"./bm": 693,
	"./bm.js": 693,
	"./bn": 694,
	"./bn.js": 694,
	"./bo": 695,
	"./bo.js": 695,
	"./br": 696,
	"./br.js": 696,
	"./bs": 697,
	"./bs.js": 697,
	"./ca": 698,
	"./ca.js": 698,
	"./cs": 699,
	"./cs.js": 699,
	"./cv": 700,
	"./cv.js": 700,
	"./cy": 701,
	"./cy.js": 701,
	"./da": 702,
	"./da.js": 702,
	"./de": 705,
	"./de-at": 703,
	"./de-at.js": 703,
	"./de-ch": 704,
	"./de-ch.js": 704,
	"./de.js": 705,
	"./dv": 706,
	"./dv.js": 706,
	"./el": 707,
	"./el.js": 707,
	"./en-au": 708,
	"./en-au.js": 708,
	"./en-ca": 709,
	"./en-ca.js": 709,
	"./en-gb": 710,
	"./en-gb.js": 710,
	"./en-ie": 711,
	"./en-ie.js": 711,
	"./en-il": 712,
	"./en-il.js": 712,
	"./en-nz": 713,
	"./en-nz.js": 713,
	"./eo": 714,
	"./eo.js": 714,
	"./es": 717,
	"./es-do": 715,
	"./es-do.js": 715,
	"./es-us": 716,
	"./es-us.js": 716,
	"./es.js": 717,
	"./et": 718,
	"./et.js": 718,
	"./eu": 719,
	"./eu.js": 719,
	"./fa": 720,
	"./fa.js": 720,
	"./fi": 721,
	"./fi.js": 721,
	"./fo": 722,
	"./fo.js": 722,
	"./fr": 725,
	"./fr-ca": 723,
	"./fr-ca.js": 723,
	"./fr-ch": 724,
	"./fr-ch.js": 724,
	"./fr.js": 725,
	"./fy": 726,
	"./fy.js": 726,
	"./gd": 727,
	"./gd.js": 727,
	"./gl": 728,
	"./gl.js": 728,
	"./gom-latn": 729,
	"./gom-latn.js": 729,
	"./gu": 730,
	"./gu.js": 730,
	"./he": 731,
	"./he.js": 731,
	"./hi": 732,
	"./hi.js": 732,
	"./hr": 733,
	"./hr.js": 733,
	"./hu": 734,
	"./hu.js": 734,
	"./hy-am": 735,
	"./hy-am.js": 735,
	"./id": 736,
	"./id.js": 736,
	"./is": 737,
	"./is.js": 737,
	"./it": 738,
	"./it.js": 738,
	"./ja": 739,
	"./ja.js": 739,
	"./jv": 740,
	"./jv.js": 740,
	"./ka": 741,
	"./ka.js": 741,
	"./kk": 742,
	"./kk.js": 742,
	"./km": 743,
	"./km.js": 743,
	"./kn": 744,
	"./kn.js": 744,
	"./ko": 745,
	"./ko.js": 745,
	"./ky": 746,
	"./ky.js": 746,
	"./lb": 747,
	"./lb.js": 747,
	"./lo": 748,
	"./lo.js": 748,
	"./lt": 749,
	"./lt.js": 749,
	"./lv": 750,
	"./lv.js": 750,
	"./me": 751,
	"./me.js": 751,
	"./mi": 752,
	"./mi.js": 752,
	"./mk": 753,
	"./mk.js": 753,
	"./ml": 754,
	"./ml.js": 754,
	"./mn": 755,
	"./mn.js": 755,
	"./mr": 756,
	"./mr.js": 756,
	"./ms": 758,
	"./ms-my": 757,
	"./ms-my.js": 757,
	"./ms.js": 758,
	"./mt": 759,
	"./mt.js": 759,
	"./my": 760,
	"./my.js": 760,
	"./nb": 761,
	"./nb.js": 761,
	"./ne": 762,
	"./ne.js": 762,
	"./nl": 764,
	"./nl-be": 763,
	"./nl-be.js": 763,
	"./nl.js": 764,
	"./nn": 765,
	"./nn.js": 765,
	"./pa-in": 766,
	"./pa-in.js": 766,
	"./pl": 767,
	"./pl.js": 767,
	"./pt": 769,
	"./pt-br": 768,
	"./pt-br.js": 768,
	"./pt.js": 769,
	"./ro": 770,
	"./ro.js": 770,
	"./ru": 771,
	"./ru.js": 771,
	"./sd": 772,
	"./sd.js": 772,
	"./se": 773,
	"./se.js": 773,
	"./si": 774,
	"./si.js": 774,
	"./sk": 775,
	"./sk.js": 775,
	"./sl": 776,
	"./sl.js": 776,
	"./sq": 777,
	"./sq.js": 777,
	"./sr": 779,
	"./sr-cyrl": 778,
	"./sr-cyrl.js": 778,
	"./sr.js": 779,
	"./ss": 780,
	"./ss.js": 780,
	"./sv": 781,
	"./sv.js": 781,
	"./sw": 782,
	"./sw.js": 782,
	"./ta": 783,
	"./ta.js": 783,
	"./te": 784,
	"./te.js": 784,
	"./tet": 785,
	"./tet.js": 785,
	"./tg": 786,
	"./tg.js": 786,
	"./th": 787,
	"./th.js": 787,
	"./tl-ph": 788,
	"./tl-ph.js": 788,
	"./tlh": 789,
	"./tlh.js": 789,
	"./tr": 790,
	"./tr.js": 790,
	"./tzl": 791,
	"./tzl.js": 791,
	"./tzm": 793,
	"./tzm-latn": 792,
	"./tzm-latn.js": 792,
	"./tzm.js": 793,
	"./ug-cn": 794,
	"./ug-cn.js": 794,
	"./uk": 795,
	"./uk.js": 795,
	"./ur": 796,
	"./ur.js": 796,
	"./uz": 798,
	"./uz-latn": 797,
	"./uz-latn.js": 797,
	"./uz.js": 798,
	"./vi": 799,
	"./vi.js": 799,
	"./x-pseudo": 800,
	"./x-pseudo.js": 800,
	"./yo": 801,
	"./yo.js": 801,
	"./zh-cn": 802,
	"./zh-cn.js": 802,
	"./zh-hk": 803,
	"./zh-hk.js": 803,
	"./zh-tw": 804,
	"./zh-tw.js": 804
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1045;


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <router-outlet name=\"header\"></router-outlet>\r\n</header>\r\n\r\n<article fxFlex\r\n  [class.animation-content-out]=\"activateAnimation\"\r\n  [class.animation-content-in]=\"!activateAnimation\"\r\n>\r\n  <router-outlet></router-outlet>\r\n</article>\r\n\r\n<footer>\r\n  <router-outlet name=\"footer\"></router-outlet>\r\n</footer>\r\n"

/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n\r\n  <!--\r\n  <button md-icon-button [md-menu-trigger-for]=\"menu\">\r\n    <md-icon>more_vert</md-icon>\r\n  </button>\r\n-->\r\n  <!--\r\n  <md-menu #menu=\"mdMenu\">\r\n    \r\n\r\n    <div *ngIf=\"(af.auth | async)?.uid\">\r\n      <button md-menu-item [routerLink]=\"['/eggs']\">Eggs</button>\r\n      <button md-menu-item (click)=\"logout()\">Logout</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"!(af.auth | async)?.uid\">\r\n      <button md-menu-item [routerLink]=\"['/login']\">Login</button>\r\n    </div>\r\n  </md-menu>\r\n-->\r\n  <span>Hachy</span>\r\n\r\n  <div class=\"fill\"></div>\r\n\r\n  <div *ngIf=\"(af.auth | async)?.uid\">\r\n    <button\r\n      md-mini-fab\r\n      md-tooltip=\"Logout\"\r\n      tooltip-position=\"below\"\r\n      (click)=\"logout()\"\r\n    >\r\n      <md-icon>power_settings_new</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"!(af.auth | async)?.uid\">\r\n    <button\r\n      md-mini-fab\r\n      md-tooltip=\"Login with Facebook\"\r\n      tooltip-position=\"below\"\r\n      [routerLink]=\"['/login']\"\r\n    >\r\n      <md-icon>person</md-icon>\r\n    </button>\r\n  </div>\r\n</md-toolbar>\r\n"

/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxFill>\n\n\n\n  <div class=\"login\">\n    <div class=\"text\">\n      <h1>Hachy</h1>\n      <p>Candle Eggs with Machine Learning</p>\n    </div>\n\n    <div class=\"buttons\">\n      <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=ms.imagine.foodiemate\">\n        <button md-raised-button color=\"primary\">Download the App</button>\n      </a>\n      <button md-raised-button color=\"\" style=\"color:#3b5998\" (click)=\"login('Facebook')\">Login with Facebook</button>\n    </div>\n    <br>\n    <div>\n      <table>\n        <tr>\n          <th>Test</th>\n          <th>Facebook Account</th>\n        </tr>\n        <tr>\n          <td>Email</td>\n          <td>scqerjhwwi_1523431167@tfbnw.net</td>\n        </tr>\n        <tr>\n          <td>Passowrd</td>\n          <td>hachEgg</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <!--<img style=\"margin:0 auto; height: 388px;\" src=\"/assets/background1.png\"/>-->\n\n</div>\n"

/***/ }),

/***/ 1060:
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--\n  <h2>Add new todo</h2>\n\n  <form #todoForm=\"ngForm\" (submit)=\"addNewTodo()\">\n    <div fxLayout=\"row\" fxFill>\n      <md-input-container fxFlex>\n        <input name=\"todo\" class=\"fill\" placeholder=\"New todo item\" required\n          mdInput\n          [(ngModel)]=\"todo\"\n          #todoControl\n        />\n      </md-input-container>\n\n      <button type=\"submit\" md-icon-button color=\"primary\"\n        [disabled]=\"todoForm.invalid\"\n      >\n        <md-icon>send</md-icon>\n      </button>\n    </div>\n  </form>\n\n-->\n\n  <div class=\"cards\">\n    <!-- To be added adding new Item online\n      <div class=\"card\" >\n      <div>\n        <img src=\"assets/upload.png\" alt=\"Avatar\" (click)=\"addEgg()\">\n        <div class=\"container\">\n          <h3>\n            <b>Upload Image Here</b>\n          </h3>\n        </div>\n      </div>\n    </div>\n    -->\n\n    <div class=\"card\" *ngFor=\"let item of todos | async\" [class.active]=\"item.active\" [class.done]=\"item.done\"\n      (mouseenter)=\"item.active = true\" (mouseleave)=\"item.active = false\">\n      <div>\n        <img [src]=\"getImgURL(item.imgURL)\" alt=\"Avatar\">\n        <div class=\"container\">\n          <h3>\n            <b>{{item.status | eggStatus}}</b>\n          </h3>\n          <p>\n            {{item.eggTag}} @: {{((item.timestamp / 1000) | amFromUnix) | amDateFormat: 'DD.MM.YY HH:mm'}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(830);


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_webstorage__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_module__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives___ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_config__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__animations_animations_service__ = __webpack_require__(668);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: __WEBPACK_IMPORTED_MODULE_13__directives___["a" /* Directives */].slice(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_module__["a" /* AuthenticationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["d" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__config_config__["a" /* Config */].FIREBASE_CONFIG, __WEBPACK_IMPORTED_MODULE_14__config_config__["a" /* Config */].FIREBASE_AUTH_CONFIG),
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_webstorage__["Ng2Webstorage"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_15__animations_animations_service__["a" /* AnimationsService */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["d" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_webstorage__["Ng2Webstorage"]
        ].concat(__WEBPACK_IMPORTED_MODULE_13__directives___["a" /* Directives */]),
    })
], SharedModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/shared.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before the app.
// You can add your own extra polyfills to this file.
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/polyfills.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication___ = __webpack_require__(1014);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives___ = __webpack_require__(671);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations___ = __webpack_require__(669);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["b"]; });



//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__ = __webpack_require__(669);
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
    /**
     * Constructor of the class
     *
     * @param {AnimationsService} animationService
     */
    function AppComponent(animationService) {
        var _this = this;
        this.animationService = animationService;
        this.activateAnimation = false;
        this.animationService.activateAnimation$.subscribe(function (value) { return _this.activateAnimation = value; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(1057),
        styles: [__webpack_require__(1036)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/app.component.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(108);
/* unused harmony export FIREBASE_CONFIG */
/* unused harmony export FIREBASE_AUTH_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });

var FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDklze7ifoRjb8JVkICWNk4hhf6u5Z9tMQ',
    authDomain: 'foodiemate-41193.firebaseapp.com',
    databaseURL: 'https://foodiemate-41193.firebaseio.com',
    projectId: 'foodiemate-41193',
    storageBucket: 'foodiemate-41193.appspot.com',
    messagingSenderId: '842812802622'
};
var FIREBASE_AUTH_CONFIG = {
    provider: __WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_0_angularfire2__["c" /* AuthMethods */].Redirect,
};
var Config = (function () {
    function Config() {
    }
    return Config;
}());

Config.FIREBASE_CONFIG = FIREBASE_CONFIG;
Config.FIREBASE_AUTH_CONFIG = FIREBASE_AUTH_CONFIG;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/config.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(1006);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(1010);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AnimationsService = (function () {
    function AnimationsService() {
        // Observable source
        this.activateAnimation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable stream
        this.activateAnimation$ = this.activateAnimation.asObservable();
    }
    // Service message commands
    AnimationsService.prototype.announceMission = function (value) {
        var _this = this;
        if (!value) {
            setTimeout(function () {
                _this.activateAnimation.next(value);
            }, 0);
        }
        else {
            this.activateAnimation.next(value);
        }
    };
    return AnimationsService;
}());
AnimationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AnimationsService);

//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/animations.service.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_service__ = __webpack_require__(668);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__animations_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(1012);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__animations__["a"]; });


//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
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
 * This class implements a guard for routes that require successful authentication.
 */
var AuthenticationGuard = (function () {
    /**
     * Constructor of the class
     *
     * @param {AngularFire} angularFire
     * @param {Router}      router
     */
    function AuthenticationGuard(angularFire, router) {
        this.angularFire = angularFire;
        this.router = router;
    }
    /**
     * To protect routes from being accessible without authentication, the `canActivate()` method checks that current
     * user has been authenticated via FireBaseAuth service and current auth state is valid. Only then navigation will
     * pass on the requested route. Otherwise user will be redirected to login page.
     *
     * @returns {Observable<boolean>}
     */
    AuthenticationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFire.auth
            .take(1)
            .map(function (authState) {
            !!authState ? localStorage.setItem('uid', authState.uid) : localStorage.removeItem('uid');
            return !!authState;
        })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/authentication.guard.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Directives; });
var Directives = [];
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(1015);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosResolver"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolves__ = __webpack_require__(1017);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_1__resolves__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_component__ = __webpack_require__(1021);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__todos_component__["a"]; });



//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/index.js.map

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 829;


/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(1004);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/eugene/Desktop/hachy/hachy-web/src/main.js.map

/***/ })

},[1105]);
//# sourceMappingURL=main.bundle.js.map