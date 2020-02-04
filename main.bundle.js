webpackJsonp([1,5],{

/***/ 1006:
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

//# sourceMappingURL=C:/hachy-web-master/src/app-routing.module.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todos_module__ = __webpack_require__(1026);
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

//# sourceMappingURL=C:/hachy-web-master/src/app.module.js.map

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(664);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(1007);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 1009:
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

//# sourceMappingURL=C:/hachy-web-master/src/header-routing.module.js.map

/***/ }),

/***/ 1010:
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
        template: __webpack_require__(1062),
        styles: [__webpack_require__(1041)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=C:/hachy-web-master/src/header.component.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_routing_module__ = __webpack_require__(1009);
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

//# sourceMappingURL=C:/hachy-web-master/src/header.module.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__(1011);
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

//# sourceMappingURL=C:/hachy-web-master/src/layout.module.js.map

/***/ }),

/***/ 1013:
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

//# sourceMappingURL=C:/hachy-web-master/src/login-routing.module.js.map

/***/ }),

/***/ 1014:
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
        template: __webpack_require__(1063),
        styles: [__webpack_require__(1042)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/hachy-web-master/src/login.component.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__(1013);
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

//# sourceMappingURL=C:/hachy-web-master/src/login.module.js.map

/***/ }),

/***/ 1016:
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

//# sourceMappingURL=C:/hachy-web-master/src/animations.js.map

/***/ }),

/***/ 1017:
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
//# sourceMappingURL=C:/hachy-web-master/src/authentication.module.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_guard__ = __webpack_require__(670);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_guard__["a"]; });

//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosResolver"]; });

//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/hachy-web-master/src/todo-item.interface.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todos_resolver__ = __webpack_require__(1022);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todos_resolver__["a"]; });

//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 1022:
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
//# sourceMappingURL=C:/hachy-web-master/src/todos.resolver.js.map

/***/ }),

/***/ 1023:
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

//# sourceMappingURL=C:/hachy-web-master/src/status.pipeline.js.map

/***/ }),

/***/ 1024:
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

//# sourceMappingURL=C:/hachy-web-master/src/todos-routing.module.js.map

/***/ }),

/***/ 1025:
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
        template: __webpack_require__(1064),
        styles: [__webpack_require__(1043)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TodosComponent);

var _a, _b;
//# sourceMappingURL=C:/hachy-web-master/src/todos.component.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todos_routing_module__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_pipeline__ = __webpack_require__(1023);
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

//# sourceMappingURL=C:/hachy-web-master/src/todos.module.js.map

/***/ }),

/***/ 1027:
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
//# sourceMappingURL=C:/hachy-web-master/src/environment.js.map

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "header {\n  -ms-flex-order: 1;\n      order: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\narticle {\n  -ms-flex-order: 2;\n      order: 2;\n  -ms-flex: 1;\n      flex: 1;\n  overflow: auto; }\n\nfooter {\n  -ms-flex-order: 3;\n      order: 3;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "span {\n  margin-left: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, ".login {\n  width: 480px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 16px 8px;\n  background: #fafafa90;\n  box-shadow: rgba(0, 0, 0, 0.14902) 0 1px 1px 0, rgba(0, 0, 0, 0.09804) 0 1px 2px 0;\n  text-align: center; }\n\n.container {\n  background-image: url(\"/assets/background.png\");\n  background-size: 100% 100%; }\n\n.text {\n  margin-bottom: 16px; }\n\nbutton {\n  margin: 0 4px; }\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #dddddd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "h2 {\n  margin-bottom: 0; }\n\nh3 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  line-height: 14px; }\n\np {\n  margin: 0; }\n\nimg {\n  width: 100%;\n  max-height: 280px; }\n\n.mat-checkbox {\n  margin-right: 8px; }\n\n.done h3 {\n  text-decoration: line-through; }\n\n.content h3, .content p {\n  margin: 0; }\n\n.ad-left {\n  float: left; }\n\n.ad-right {\n  float: right;\n  margin-left: 10px; }\n\n.mat-list-item {\n  height: auto;\n  padding: 8px 0; }\n\n.card {\n  -ms-flex: 1 0 500px;\n      flex: 1 0 500px;\n  box-sizing: border-box;\n  margin: 1rem .25em;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 30%;\n  border-radius: 5px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin: 5px; }\n\n.cards {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n@media screen and (min-width: 40em) {\n  .card {\n    max-width: calc(48% -  1em); } }\n\n@media screen and (min-width: 60em) {\n  .card {\n    max-width: calc(24% - 1em); } }\n\n@media screen and (min-width: 80em) {\n  .card {\n    max-width: calc(19% - 1em); } }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\nimg {\n  border-radius: 5px 5px 0 0; }\n\n.container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 2px 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1049:
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
	"./en-SG": 708,
	"./en-SG.js": 708,
	"./en-au": 709,
	"./en-au.js": 709,
	"./en-ca": 710,
	"./en-ca.js": 710,
	"./en-gb": 711,
	"./en-gb.js": 711,
	"./en-ie": 712,
	"./en-ie.js": 712,
	"./en-il": 713,
	"./en-il.js": 713,
	"./en-nz": 714,
	"./en-nz.js": 714,
	"./eo": 715,
	"./eo.js": 715,
	"./es": 718,
	"./es-do": 716,
	"./es-do.js": 716,
	"./es-us": 717,
	"./es-us.js": 717,
	"./es.js": 718,
	"./et": 719,
	"./et.js": 719,
	"./eu": 720,
	"./eu.js": 720,
	"./fa": 721,
	"./fa.js": 721,
	"./fi": 722,
	"./fi.js": 722,
	"./fo": 723,
	"./fo.js": 723,
	"./fr": 726,
	"./fr-ca": 724,
	"./fr-ca.js": 724,
	"./fr-ch": 725,
	"./fr-ch.js": 725,
	"./fr.js": 726,
	"./fy": 727,
	"./fy.js": 727,
	"./ga": 728,
	"./ga.js": 728,
	"./gd": 729,
	"./gd.js": 729,
	"./gl": 730,
	"./gl.js": 730,
	"./gom-latn": 731,
	"./gom-latn.js": 731,
	"./gu": 732,
	"./gu.js": 732,
	"./he": 733,
	"./he.js": 733,
	"./hi": 734,
	"./hi.js": 734,
	"./hr": 735,
	"./hr.js": 735,
	"./hu": 736,
	"./hu.js": 736,
	"./hy-am": 737,
	"./hy-am.js": 737,
	"./id": 738,
	"./id.js": 738,
	"./is": 739,
	"./is.js": 739,
	"./it": 741,
	"./it-ch": 740,
	"./it-ch.js": 740,
	"./it.js": 741,
	"./ja": 742,
	"./ja.js": 742,
	"./jv": 743,
	"./jv.js": 743,
	"./ka": 744,
	"./ka.js": 744,
	"./kk": 745,
	"./kk.js": 745,
	"./km": 746,
	"./km.js": 746,
	"./kn": 747,
	"./kn.js": 747,
	"./ko": 748,
	"./ko.js": 748,
	"./ku": 749,
	"./ku.js": 749,
	"./ky": 750,
	"./ky.js": 750,
	"./lb": 751,
	"./lb.js": 751,
	"./lo": 752,
	"./lo.js": 752,
	"./lt": 753,
	"./lt.js": 753,
	"./lv": 754,
	"./lv.js": 754,
	"./me": 755,
	"./me.js": 755,
	"./mi": 756,
	"./mi.js": 756,
	"./mk": 757,
	"./mk.js": 757,
	"./ml": 758,
	"./ml.js": 758,
	"./mn": 759,
	"./mn.js": 759,
	"./mr": 760,
	"./mr.js": 760,
	"./ms": 762,
	"./ms-my": 761,
	"./ms-my.js": 761,
	"./ms.js": 762,
	"./mt": 763,
	"./mt.js": 763,
	"./my": 764,
	"./my.js": 764,
	"./nb": 765,
	"./nb.js": 765,
	"./ne": 766,
	"./ne.js": 766,
	"./nl": 768,
	"./nl-be": 767,
	"./nl-be.js": 767,
	"./nl.js": 768,
	"./nn": 769,
	"./nn.js": 769,
	"./pa-in": 770,
	"./pa-in.js": 770,
	"./pl": 771,
	"./pl.js": 771,
	"./pt": 773,
	"./pt-br": 772,
	"./pt-br.js": 772,
	"./pt.js": 773,
	"./ro": 774,
	"./ro.js": 774,
	"./ru": 775,
	"./ru.js": 775,
	"./sd": 776,
	"./sd.js": 776,
	"./se": 777,
	"./se.js": 777,
	"./si": 778,
	"./si.js": 778,
	"./sk": 779,
	"./sk.js": 779,
	"./sl": 780,
	"./sl.js": 780,
	"./sq": 781,
	"./sq.js": 781,
	"./sr": 783,
	"./sr-cyrl": 782,
	"./sr-cyrl.js": 782,
	"./sr.js": 783,
	"./ss": 784,
	"./ss.js": 784,
	"./sv": 785,
	"./sv.js": 785,
	"./sw": 786,
	"./sw.js": 786,
	"./ta": 787,
	"./ta.js": 787,
	"./te": 788,
	"./te.js": 788,
	"./tet": 789,
	"./tet.js": 789,
	"./tg": 790,
	"./tg.js": 790,
	"./th": 791,
	"./th.js": 791,
	"./tl-ph": 792,
	"./tl-ph.js": 792,
	"./tlh": 793,
	"./tlh.js": 793,
	"./tr": 794,
	"./tr.js": 794,
	"./tzl": 795,
	"./tzl.js": 795,
	"./tzm": 797,
	"./tzm-latn": 796,
	"./tzm-latn.js": 796,
	"./tzm.js": 797,
	"./ug-cn": 798,
	"./ug-cn.js": 798,
	"./uk": 799,
	"./uk.js": 799,
	"./ur": 800,
	"./ur.js": 800,
	"./uz": 802,
	"./uz-latn": 801,
	"./uz-latn.js": 801,
	"./uz.js": 802,
	"./vi": 803,
	"./vi.js": 803,
	"./x-pseudo": 804,
	"./x-pseudo.js": 804,
	"./yo": 805,
	"./yo.js": 805,
	"./zh-cn": 806,
	"./zh-cn.js": 806,
	"./zh-hk": 807,
	"./zh-hk.js": 807,
	"./zh-tw": 808,
	"./zh-tw.js": 808
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
webpackContext.id = 1049;


/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <router-outlet name=\"header\"></router-outlet>\n</header>\n\n<article fxFlex\n  [class.animation-content-out]=\"activateAnimation\"\n  [class.animation-content-in]=\"!activateAnimation\"\n>\n  <router-outlet></router-outlet>\n</article>\n\n<footer>\n  <router-outlet name=\"footer\"></router-outlet>\n</footer>\n"

/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n  <!--\n  <button md-icon-button [md-menu-trigger-for]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n-->\n  <!--\n  <md-menu #menu=\"mdMenu\">\n    \n\n    <div *ngIf=\"(af.auth | async)?.uid\">\n      <button md-menu-item [routerLink]=\"['/eggs']\">Eggs</button>\n      <button md-menu-item (click)=\"logout()\">Logout</button>\n    </div>\n\n    <div *ngIf=\"!(af.auth | async)?.uid\">\n      <button md-menu-item [routerLink]=\"['/login']\">Login</button>\n    </div>\n  </md-menu>\n-->\n  <span>Hachy</span>\n\n  <div class=\"fill\"></div>\n\n  <div *ngIf=\"(af.auth | async)?.uid\">\n    <button\n      md-mini-fab\n      md-tooltip=\"Logout\"\n      tooltip-position=\"below\"\n      (click)=\"logout()\"\n    >\n      <md-icon>power_settings_new</md-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!(af.auth | async)?.uid\">\n    <button\n      md-mini-fab\n      md-tooltip=\"Login with Facebook\"\n      tooltip-position=\"below\"\n      [routerLink]=\"['/login']\"\n    >\n      <md-icon>person</md-icon>\n    </button>\n  </div>\n</md-toolbar>\n"

/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxFill>\n\n\n\n  <div class=\"login\">\n    <div class=\"text\">\n      <h1>Hachy</h1>\n      <p>Candle Eggs with Machine Learning</p>\n    </div>\n\n    <div class=\"buttons\">\n      <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=ms.imagine.foodiemate\">\n        <button md-raised-button color=\"primary\">Download the App</button>\n      </a>\n      <button md-raised-button color=\"\" style=\"color:#3b5998\" (click)=\"login('Facebook')\">Login with Facebook</button>\n    </div>\n    <br>\n    <div>\n      <table>\n        <tr>\n          <th>Test</th>\n          <th>Facebook Account</th>\n        </tr>\n        <tr>\n          <td>Email</td>\n          <td>scqerjhwwi_1523431167@tfbnw.net</td>\n        </tr>\n        <tr>\n          <td>Passowrd</td>\n          <td>hachEgg</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <!--<img style=\"margin:0 auto; height: 388px;\" src=\"/assets/background1.png\"/>-->\n\n</div>\n"

/***/ }),

/***/ 1064:
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--\n  <h2>Add new todo</h2>\n\n  <form #todoForm=\"ngForm\" (submit)=\"addNewTodo()\">\n    <div fxLayout=\"row\" fxFill>\n      <md-input-container fxFlex>\n        <input name=\"todo\" class=\"fill\" placeholder=\"New todo item\" required\n          mdInput\n          [(ngModel)]=\"todo\"\n          #todoControl\n        />\n      </md-input-container>\n\n      <button type=\"submit\" md-icon-button color=\"primary\"\n        [disabled]=\"todoForm.invalid\"\n      >\n        <md-icon>send</md-icon>\n      </button>\n    </div>\n  </form>\n\n-->\n\n  <div class=\"cards\">\n    <!-- To be added adding new Item online\n      <div class=\"card\" >\n      <div>\n        <img src=\"assets/upload.png\" alt=\"Avatar\" (click)=\"addEgg()\">\n        <div class=\"container\">\n          <h3>\n            <b>Upload Image Here</b>\n          </h3>\n        </div>\n      </div>\n    </div>\n    -->\n\n    <div class=\"card\" *ngFor=\"let item of todos | async\" [class.active]=\"item.active\" [class.done]=\"item.done\"\n      (mouseenter)=\"item.active = true\" (mouseleave)=\"item.active = false\">\n      <div>\n        <img [src]=\"getImgURL(item.imgURL)\" alt=\"Avatar\">\n        <div class=\"container\">\n          <h3>\n            <b>{{item.status | eggStatus}}</b>\n          </h3>\n          <p>\n            {{item.eggTag}} @: {{((item.timestamp / 1000) | amFromUnix) | amDateFormat: 'DD.MM.YY HH:mm'}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(834);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_webstorage__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_module__ = __webpack_require__(1017);
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

//# sourceMappingURL=C:/hachy-web-master/src/shared.module.js.map

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
//# sourceMappingURL=C:/hachy-web-master/src/polyfills.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication___ = __webpack_require__(1018);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives___ = __webpack_require__(671);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations___ = __webpack_require__(669);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["b"]; });



//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

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
        template: __webpack_require__(1061),
        styles: [__webpack_require__(1040)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=C:/hachy-web-master/src/app.component.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(108);
/* unused harmony export FIREBASE_CONFIG */
/* unused harmony export FIREBASE_AUTH_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });

var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDgUQ1GWMsZcXXEDgwAGn7ylpR3g0R6CQA",
    authDomain: "hachy-e460f.firebaseapp.com",
    databaseURL: "https://hachy-e460f.firebaseio.com",
    projectId: "hachy-e460f",
    storageBucket: "hachy-e460f.appspot.com",
    messagingSenderId: "249523218877"
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
//# sourceMappingURL=C:/hachy-web-master/src/config.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(1010);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(1014);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

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

//# sourceMappingURL=C:/hachy-web-master/src/animations.service.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_service__ = __webpack_require__(668);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__animations_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(1016);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__animations__["a"]; });


//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(1077);
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
//# sourceMappingURL=C:/hachy-web-master/src/authentication.guard.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Directives; });
var Directives = [];
//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(1019);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosResolver"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolves__ = __webpack_require__(1021);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_1__resolves__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_component__ = __webpack_require__(1025);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__todos_component__["a"]; });



//# sourceMappingURL=C:/hachy-web-master/src/index.js.map

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 833;


/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(1008);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/hachy-web-master/src/main.js.map

/***/ })

},[1109]);
//# sourceMappingURL=main.bundle.js.map