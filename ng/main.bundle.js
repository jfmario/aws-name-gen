webpackJsonp([2,4],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_language_class__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageService = (function () {
    function LanguageService(http) {
        this.http = http;
        this._url = 'https://s3.amazonaws.com/johnfmarion-configs/name-gen/';
    }
    LanguageService.prototype.getLanguage = function (languageSlug) {
        return this.http.get(this._url + 'languages/' + languageSlug +
            '.json').toPromise().then(function (res) {
            var data = res.json();
            return new __WEBPACK_IMPORTED_MODULE_3__models_language_class__["a" /* Language */](data);
        });
    };
    LanguageService.prototype.getLanguageOptions = function () {
        return this.http.get(this._url + 'languages.json').toPromise()
            .then(function (res) {
            var data = res.json();
            var options = [];
            for (var i = 0; i < data.length; ++i)
                options.push(data[i]);
            return options;
        });
    };
    LanguageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], LanguageService);
    return LanguageService;
    var _a;
}());
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/language.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(519);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_language_service__ = __webpack_require__(226);
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
    function AppComponent(languageService) {
        this.languageService = languageService;
        this.title = "Name Generator";
        this.languageOptions = [];
        this.languageOptionsMenu = [];
        this.languages = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.getLanguageOptions().then(function (options) {
            _this.languageOptions = options;
            for (var i = 0; i < _this.languageOptions.length; ++i)
                _this.languageOptionsMenu.push({
                    label: _this.languageOptions[i].name,
                    routerLink: ['/language', _this.languageOptions[i].slug]
                });
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(745),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_language_service__["a" /* LanguageService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
;
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/app.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_language_language_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_language_service__ = __webpack_require__(226);
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










var appRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_7__components_home_component__["a" /* HomeComponent */], path: '' },
    { component: __WEBPACK_IMPORTED_MODULE_8__components_language_language_component__["a" /* LanguageComponent */], path: 'language/:lang' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_language_language_component__["a" /* LanguageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabMenuModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_language_service__["a" /* LanguageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(746)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
;
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/home.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_language_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageComponent = (function () {
    function LanguageComponent(route, languageService) {
        this.route = route;
        this.languageService = languageService;
        this.amount = 10;
        this.currentNames = [];
        this.isReady = false;
        this.language = null;
        this.options = [];
    }
    LanguageComponent.prototype.generateNames = function () {
        this.currentNames = [];
        for (var i = 0; i < this.amount; ++i)
            this.currentNames.push(this.language.getName(this.selectedOption));
    };
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var langSlug = params['lang'];
            console.log(langSlug);
            return _this.languageService.getLanguage(langSlug)
                .then(function (lang) {
                _this.language = lang;
                _this.options = [{
                        label: "Select Name Type",
                        value: null
                    }];
                for (var i = 0; i < _this.language.conf.options.length; ++i) {
                    _this.options.push({
                        label: _this.language.conf.options[i].name,
                        value: _this.language.conf.options[i].slug
                    });
                }
                _this.isReady = true;
            });
        });
    };
    LanguageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'language',
            template: __webpack_require__(747)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_language_service__["a" /* LanguageService */]) === 'function' && _b) || Object])
    ], LanguageComponent);
    return LanguageComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/language.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = (function () {
    function Language(conf) {
        this.conf = conf;
    }
    Language.prototype._selectRandom = function (coll) {
        return coll[Math.floor(Math.random() * coll.length)];
    };
    Language.prototype.getName = function (typeSlug) {
        console.log(typeSlug);
        var typeOptions = this.conf.types[typeSlug];
        var subtypeString = this._selectRandom(typeOptions);
        var subtypeArray = subtypeString.split(' ');
        var fullName = [];
        for (var i = 0; i < subtypeArray.length; ++i) {
            var subtype = subtypeArray[i];
            var elementString = this._selectRandom(this.conf.subtypes[subtype]);
            var name = '';
            for (var j = 0; j < elementString.length; ++j) {
                var element = elementString[j];
                var character = this._selectRandom(this.conf.elements[element]);
                name += character;
            }
            name = name[0].toUpperCase() + name.slice(1);
            fullName.push(name);
        }
        return fullName.join(' ');
    };
    return Language;
}());
;
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/language.class.js.map

/***/ }),

/***/ 523:
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
//# sourceMappingURL=C:/Users/student/Documents/Projects/webapps/name-gen/ng/src/environment.js.map

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1 class=\"display-1\">{{ title }}</h1>\n\n    <div *ngIf=\"languageOptions.length>0\">\n        <p-tabMenu [model]=\"languageOptionsMenu\"></p-tabMenu>\n    </div>\n\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "\r\nHomeComponent"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isReady\">\r\n\r\n    <h3 class=\"first\">{{ language.conf.languagename }}</h3>\r\n\r\n    <p>{{ language.conf.description }}</p>\r\n\r\n    <h4 class=\"first\">Name Type</h4>\r\n\r\n    <p-dropdown [options]=\"options\" [(ngModel)]=\"selectedOption\"></p-dropdown>\r\n\r\n    <br />\r\n\r\n    <h4 class=\"first\">Amount</h4>\r\n\r\n    <input type=\"number\" [(ngModel)]=\"amount\" pInputText />\r\n\r\n    <br />\r\n    <br />\r\n\r\n    <button label=\"Generate\" type=\"button\" (click)=\"generateNames()\" [disabled]=\"!selectedOption\" pButton></button>\r\n\r\n    <br />\r\n\r\n    <div *ngIf=\"currentNames.length>0\">\r\n        \r\n        <h4 class=\"first\">Names</h4>\r\n\r\n        <p *ngFor=\"let name of currentNames\">{{ name }}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[771]);
//# sourceMappingURL=main.bundle.map