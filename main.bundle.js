webpackJsonp([1,5],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutListComponent = (function () {
    function AboutListComponent() {
    }
    return AboutListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AboutListComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AboutListComponent.prototype, "className", void 0);
AboutListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-list',
        template: __webpack_require__(1066),
        styles: [__webpack_require__(1043)]
    }),
    __metadata("design:paramtypes", [])
], AboutListComponent);

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/about-list.component.js.map

/***/ }),

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'about',
                    component: __WEBPACK_IMPORTED_MODULE_2__index__["AboutComponent"],
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
        ],
    })
], AboutRoutingModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/about-routing.module.js.map

/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared___ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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


var AboutComponent = (function (_super) {
    __extends(AboutComponent, _super);
    /**
     * Constructor of the class
     *
     * @param {AnimationsService} animationsService
     */
    function AboutComponent(animationsService) {
        var _this = _super.call(this, animationsService) || this;
        _this.animationsService = animationsService;
        _this.libraries = [
            {
                name: '1. Fast: one click is good',
                logo: '/assets/angular.png',
                url: 'https://github.com/angular/angular',
            },
            {
                name: '2. Convinent: no other tools needed',
                logo: '/assets/angular.png',
                url: 'https://github.com/angular/material2',
            },
            {
                name: '4. Accurate: results based on ML on 10k egg datasets',
                logo: '/assets/firebase.png',
                url: 'https://github.com/angular/angularfire2',
            },
            {
                name: '5. Cheap: production cost <= $20',
                url: 'https://github.com/urish/angular2-moment',
            },
        ];
        return _this;
    }
    return AboutComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared___["a" /* Animations */]));
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(1067),
        styles: [__webpack_require__(1044)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared___["b" /* AnimationsService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/about.component.js.map

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routing_module__ = __webpack_require__(1004);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__about_routing_module__["a" /* AboutRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__index__["AboutComponent"],
            __WEBPACK_IMPORTED_MODULE_2__index__["AboutListComponent"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__index__["AboutComponent"],
            __WEBPACK_IMPORTED_MODULE_2__index__["AboutListComponent"],
        ],
    })
], AboutModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/about.module.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/about-item.interface.js.map

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_item_interface__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_item_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__about_item_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__about_item_interface__, "AboutComponent")) __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__about_item_interface__["AboutComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__about_item_interface__, "AboutListComponent")) __webpack_require__.d(__webpack_exports__, "AboutListComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__about_item_interface__["AboutListComponent"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
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
        redirectTo: 'about',
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/app-routing.module.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_module__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_module__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todos_todos_module__ = __webpack_require__(1029);
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
            __WEBPACK_IMPORTED_MODULE_5__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_7__todos_todos_module__["a" /* TodosModule */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
    })
], AppModule);

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/app.module.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(665);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(1010);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(667);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/header-routing.module.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(68);
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
        this.router.navigateByUrl('/about');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(1069),
        styles: [__webpack_require__(1046)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/header.component.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_routing_module__ = __webpack_require__(1012);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/header.module.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__(1014);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/layout.module.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(668);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/login-routing.module.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__(258);
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
                _this.router.navigateByUrl('/about');
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
        template: __webpack_require__(1070),
        styles: [__webpack_require__(1047)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/login.component.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__(1016);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/login.module.js.map

/***/ }),

/***/ 1019:
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/animations.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_guard__ = __webpack_require__(671);
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/authentication.module.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_guard__ = __webpack_require__(671);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_guard__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_item_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__todo_item_interface__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_item_interface__["TodosResolver"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/todo-item.interface.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todos_resolver__ = __webpack_require__(1025);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todos_resolver__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(109);
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/todos.resolver.js.map

/***/ }),

/***/ 1026:
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/status.pipeline.js.map

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(673);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/todos-routing.module.js.map

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared___ = __webpack_require__(258);
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
    TodosComponent.prototype.getImgURL = function (str) {
        console.log("YEAH" + str);
        //return "https://www.thesun.co.uk/wp-content/uploads/2016/04/1365039.main_image.jpg"
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
        template: __webpack_require__(1071),
        styles: [__webpack_require__(1048)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared___["b" /* AnimationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TodosComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/todos.component.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todos_routing_module__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_pipeline__ = __webpack_require__(1026);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/todos.module.js.map

/***/ }),

/***/ 1030:
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/environment.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "md-list {\n  padding: 0;\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.material-icons {\n  font-size: 40px;\n  color: lightgrey; }\n\n:host /deep/ .md-list-item:hover {\n  background-color: rgba(0, 0, 0, 0.06); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "h4 {\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "header {\n  -ms-flex-order: 1;\n      order: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\narticle {\n  -ms-flex-order: 2;\n      order: 2;\n  -ms-flex: 1;\n      flex: 1;\n  overflow: auto; }\n\nfooter {\n  -ms-flex-order: 3;\n      order: 3;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "span {\n  margin-left: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, ".login {\n  width: 440px;\n  margin: 0 auto;\n  padding: 16px 8px;\n  background: #fafafa;\n  border: 1px solid #ebebeb;\n  box-shadow: rgba(0, 0, 0, 0.14902) 0 1px 1px 0, rgba(0, 0, 0, 0.09804) 0 1px 2px 0;\n  text-align: center; }\n  .login .text {\n    margin-bottom: 16px; }\n  .login button {\n    margin: 0 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "h2 {\n  margin-bottom: 0; }\n\nh3 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  line-height: 14px; }\n\np {\n  margin: 0; }\n\n.mat-checkbox {\n  margin-right: 8px; }\n\n.done h3 {\n  text-decoration: line-through; }\n\n.content h3, .content p {\n  margin: 0; }\n\n.ad-left {\n  float: left; }\n\n.ad-right {\n  float: right;\n  margin-left: 10px; }\n\n.mat-list-item {\n  height: auto;\n  padding: 8px 0; }\n\n.card {\n  -ms-flex: 1 0 500px;\n      flex: 1 0 500px;\n  box-sizing: border-box;\n  margin: 1rem .25em;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 30%;\n  border-radius: 5px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.cards {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n@media screen and (min-width: 40em) {\n  .card {\n    max-width: calc(48% -  1em); } }\n\n@media screen and (min-width: 60em) {\n  .card {\n    max-width: calc(24% - 1em); } }\n\n@media screen and (min-width: 80em) {\n  .card {\n    max-width: calc(19% - 1em); } }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\nimg {\n  border-radius: 5px 5px 0 0; }\n\n.container {\n  padding: 2px 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 683,
	"./af.js": 683,
	"./ar": 690,
	"./ar-dz": 684,
	"./ar-dz.js": 684,
	"./ar-kw": 685,
	"./ar-kw.js": 685,
	"./ar-ly": 686,
	"./ar-ly.js": 686,
	"./ar-ma": 687,
	"./ar-ma.js": 687,
	"./ar-sa": 688,
	"./ar-sa.js": 688,
	"./ar-tn": 689,
	"./ar-tn.js": 689,
	"./ar.js": 690,
	"./az": 691,
	"./az.js": 691,
	"./be": 692,
	"./be.js": 692,
	"./bg": 693,
	"./bg.js": 693,
	"./bm": 694,
	"./bm.js": 694,
	"./bn": 695,
	"./bn.js": 695,
	"./bo": 696,
	"./bo.js": 696,
	"./br": 697,
	"./br.js": 697,
	"./bs": 698,
	"./bs.js": 698,
	"./ca": 699,
	"./ca.js": 699,
	"./cs": 700,
	"./cs.js": 700,
	"./cv": 701,
	"./cv.js": 701,
	"./cy": 702,
	"./cy.js": 702,
	"./da": 703,
	"./da.js": 703,
	"./de": 706,
	"./de-at": 704,
	"./de-at.js": 704,
	"./de-ch": 705,
	"./de-ch.js": 705,
	"./de.js": 706,
	"./dv": 707,
	"./dv.js": 707,
	"./el": 708,
	"./el.js": 708,
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
	"./gd": 728,
	"./gd.js": 728,
	"./gl": 729,
	"./gl.js": 729,
	"./gom-latn": 730,
	"./gom-latn.js": 730,
	"./gu": 731,
	"./gu.js": 731,
	"./he": 732,
	"./he.js": 732,
	"./hi": 733,
	"./hi.js": 733,
	"./hr": 734,
	"./hr.js": 734,
	"./hu": 735,
	"./hu.js": 735,
	"./hy-am": 736,
	"./hy-am.js": 736,
	"./id": 737,
	"./id.js": 737,
	"./is": 738,
	"./is.js": 738,
	"./it": 739,
	"./it.js": 739,
	"./ja": 740,
	"./ja.js": 740,
	"./jv": 741,
	"./jv.js": 741,
	"./ka": 742,
	"./ka.js": 742,
	"./kk": 743,
	"./kk.js": 743,
	"./km": 744,
	"./km.js": 744,
	"./kn": 745,
	"./kn.js": 745,
	"./ko": 746,
	"./ko.js": 746,
	"./ky": 747,
	"./ky.js": 747,
	"./lb": 748,
	"./lb.js": 748,
	"./lo": 749,
	"./lo.js": 749,
	"./lt": 750,
	"./lt.js": 750,
	"./lv": 751,
	"./lv.js": 751,
	"./me": 752,
	"./me.js": 752,
	"./mi": 753,
	"./mi.js": 753,
	"./mk": 754,
	"./mk.js": 754,
	"./ml": 755,
	"./ml.js": 755,
	"./mn": 756,
	"./mn.js": 756,
	"./mr": 757,
	"./mr.js": 757,
	"./ms": 759,
	"./ms-my": 758,
	"./ms-my.js": 758,
	"./ms.js": 759,
	"./mt": 760,
	"./mt.js": 760,
	"./my": 761,
	"./my.js": 761,
	"./nb": 762,
	"./nb.js": 762,
	"./ne": 763,
	"./ne.js": 763,
	"./nl": 765,
	"./nl-be": 764,
	"./nl-be.js": 764,
	"./nl.js": 765,
	"./nn": 766,
	"./nn.js": 766,
	"./pa-in": 767,
	"./pa-in.js": 767,
	"./pl": 768,
	"./pl.js": 768,
	"./pt": 770,
	"./pt-br": 769,
	"./pt-br.js": 769,
	"./pt.js": 770,
	"./ro": 771,
	"./ro.js": 771,
	"./ru": 772,
	"./ru.js": 772,
	"./sd": 773,
	"./sd.js": 773,
	"./se": 774,
	"./se.js": 774,
	"./si": 775,
	"./si.js": 775,
	"./sk": 776,
	"./sk.js": 776,
	"./sl": 777,
	"./sl.js": 777,
	"./sq": 778,
	"./sq.js": 778,
	"./sr": 780,
	"./sr-cyrl": 779,
	"./sr-cyrl.js": 779,
	"./sr.js": 780,
	"./ss": 781,
	"./ss.js": 781,
	"./sv": 782,
	"./sv.js": 782,
	"./sw": 783,
	"./sw.js": 783,
	"./ta": 784,
	"./ta.js": 784,
	"./te": 785,
	"./te.js": 785,
	"./tet": 786,
	"./tet.js": 786,
	"./tg": 787,
	"./tg.js": 787,
	"./th": 788,
	"./th.js": 788,
	"./tl-ph": 789,
	"./tl-ph.js": 789,
	"./tlh": 790,
	"./tlh.js": 790,
	"./tr": 791,
	"./tr.js": 791,
	"./tzl": 792,
	"./tzl.js": 792,
	"./tzm": 794,
	"./tzm-latn": 793,
	"./tzm-latn.js": 793,
	"./tzm.js": 794,
	"./ug-cn": 795,
	"./ug-cn.js": 795,
	"./uk": 796,
	"./uk.js": 796,
	"./ur": 797,
	"./ur.js": 797,
	"./uz": 799,
	"./uz-latn": 798,
	"./uz-latn.js": 798,
	"./uz.js": 799,
	"./vi": 800,
	"./vi.js": 800,
	"./x-pseudo": 801,
	"./x-pseudo.js": 801,
	"./yo": 802,
	"./yo.js": 802,
	"./zh-cn": 803,
	"./zh-cn.js": 803,
	"./zh-hk": 804,
	"./zh-hk.js": 804,
	"./zh-tw": 805,
	"./zh-tw.js": 805
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
webpackContext.id = 1054;


/***/ }),

/***/ 1066:
/***/ (function(module, exports) {

module.exports = "<md-list class=\"{{className}}\">\r\n  <md-list-item *ngFor=\"let item of items\">\r\n    <img *ngIf=\"item.logo\" md-list-avatar src=\"{{item.logo}}\" alt=\"{{item.name}}\" />\r\n\r\n    <md-icon *ngIf=\"!item.logo\" md-list-avatar>filter_none</md-icon>\r\n    \r\n    <h2 md-line> {{item.name}}</h2>\r\n\r\n    <!--\r\n    <p md-line>\r\n      <a href=\"{{item.url}}\" target=\"_blank\">{{item.url}}</a>\r\n    </p>\r\n  -->\r\n  </md-list-item>\r\n</md-list>\r\n"

/***/ }),

/***/ 1067:
/***/ (function(module, exports) {

module.exports = "<div class=\"normal-content\" fxLayout=\"column\" fxFill>\r\n<p></p>\r\n\r\n  \r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" fxFill>\r\n    <div fxLayout=\"column\"  fxLayoutAlign=\"start center\" fxFlex>\r\n      <h2>Why Hachy?</h2>\r\n\r\n      <app-about-list\r\n        [className]=\"'used-libraries'\"\r\n        [items]=\"libraries\"\r\n      ></app-about-list>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1068:
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <router-outlet name=\"header\"></router-outlet>\r\n</header>\r\n\r\n<article fxFlex\r\n  [class.animation-content-out]=\"activateAnimation\"\r\n  [class.animation-content-in]=\"!activateAnimation\"\r\n>\r\n  <router-outlet></router-outlet>\r\n</article>\r\n\r\n<footer>\r\n  <router-outlet name=\"footer\"></router-outlet>\r\n</footer>\r\n"

/***/ }),

/***/ 1069:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <button md-icon-button [md-menu-trigger-for]=\"menu\">\r\n    <md-icon>more_vert</md-icon>\r\n  </button>\r\n\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item [routerLink]=\"['/about']\">About</button>\r\n\r\n    <div *ngIf=\"(af.auth | async)?.uid\">\r\n      <button md-menu-item [routerLink]=\"['/eggs']\">Eggs</button>\r\n      <button md-menu-item (click)=\"logout()\">Logout</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"!(af.auth | async)?.uid\">\r\n      <button md-menu-item [routerLink]=\"['/login']\">Login</button>\r\n    </div>\r\n  </md-menu>\r\n\r\n  <span>Hachy-web</span>\r\n\r\n  <div class=\"fill\"></div>\r\n\r\n  <div *ngIf=\"(af.auth | async)?.uid\">\r\n    <button\r\n      md-mini-fab\r\n      md-tooltip=\"Logout\"\r\n      tooltip-position=\"below\"\r\n      (click)=\"logout()\"\r\n    >\r\n      <md-icon>power_settings_new</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"!(af.auth | async)?.uid\">\r\n    <button\r\n      md-mini-fab\r\n      md-tooltip=\"Login with Facebook, Google, Twitter or GitHub\"\r\n      tooltip-position=\"below\"\r\n      [routerLink]=\"['/login']\"\r\n    >\r\n      <md-icon>person</md-icon>\r\n    </button>\r\n  </div>\r\n</md-toolbar>\r\n"

/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFill>\r\n  <div class=\"login\">\r\n    <div class=\"text\">\r\n      Please login with facebook\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n      <button md-raised-button color=\"primary\" (click)=\"login('Facebook')\">Facebook</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

module.exports = "<div >\r\n<!--\r\n  <h2>Add new todo</h2>\r\n\r\n  <form #todoForm=\"ngForm\" (submit)=\"addNewTodo()\">\r\n    <div fxLayout=\"row\" fxFill>\r\n      <md-input-container fxFlex>\r\n        <input name=\"todo\" class=\"fill\" placeholder=\"New todo item\" required\r\n          mdInput\r\n          [(ngModel)]=\"todo\"\r\n          #todoControl\r\n        />\r\n      </md-input-container>\r\n\r\n      <button type=\"submit\" md-icon-button color=\"primary\"\r\n        [disabled]=\"todoForm.invalid\"\r\n      >\r\n        <md-icon>send</md-icon>\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n-->\r\n\r\n  <div class=\"cards\" >\r\n    <div class=\"card\" style=\"margin: 10px\"\r\n      *ngFor=\"let item of todos | async\"\r\n      [class.active]=\"item.active\"\r\n      [class.done]=\"item.done\"\r\n      (mouseenter)=\"item.active = true\"\r\n      (mouseleave)=\"item.active = false\"\r\n    >\r\n      \r\n\r\n        \r\n          \r\n          \r\n          <!--\r\n          <img  [src]= \"getImgURL('ds')\"/>\r\n          <h3>{{item.status | eggStatus}}</h3>\r\n          <p>\r\n            {{item.eggTag}} @: {{((item.timestamp / 1000) | amFromUnix) | amDateFormat: 'DD.MM.YY HH:mm'}}\r\n          </p>\r\n        -->\r\n\r\n          <div class=\"\" style=\"margin:10px;\">\r\n            <img [src]= \"getImgURL(item.imgURL)\" alt=\"Avatar\" style=\"width:100%; max-height:280px\">\r\n            <div class=\"container\" style=\"margin-top:20px; margin-bottom:20px\">\r\n              <h3><b>{{item.status | eggStatus}}</b></h3> \r\n              <p >\r\n                  {{item.eggTag}} @: {{((item.timestamp / 1000) | amFromUnix) | amDateFormat: 'DD.MM.YY HH:mm'}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n        \r\n\r\n      \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(831);


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_webstorage__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_module__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives___ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_config__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__animations_animations_service__ = __webpack_require__(669);
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/shared.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication___ = __webpack_require__(1021);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives___ = __webpack_require__(672);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations___ = __webpack_require__(670);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__animations___["b"]; });



//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 266:
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/polyfills.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(1008);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "AboutComponent")) __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["AboutComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "AboutListComponent")) __webpack_require__.d(__webpack_exports__, "AboutListComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["AboutListComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__(1005);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_list_component__ = __webpack_require__(1003);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AboutListComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__about_list_component__["a"]; });



//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__ = __webpack_require__(670);
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
        template: __webpack_require__(1068),
        styles: [__webpack_require__(1045)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_animations_index__["b" /* AnimationsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/app.component.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(109);
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/config.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(1013);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(1017);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 669:
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

//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/animations.service.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_service__ = __webpack_require__(669);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__animations_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(1019);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__animations__["a"]; });


//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(1084);
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
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/authentication.guard.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Directives; });
var Directives = [];
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(1022);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosComponent")) __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "TodosResolver")) __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["TodosResolver"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolves__ = __webpack_require__(1024);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosResolver", function() { return __WEBPACK_IMPORTED_MODULE_1__resolves__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_component__ = __webpack_require__(1028);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__todos_component__["a"]; });



//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/index.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 830;


/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(1011);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/eugene/Desktop/fake/foodiemate-web/src/main.js.map

/***/ })

},[1116]);
//# sourceMappingURL=main.bundle.js.map