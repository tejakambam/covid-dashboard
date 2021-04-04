(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
        const alertTypeClass = {
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success]: 'alert alert-success',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error]: 'alert alert-danger',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info]: 'alert alert-info',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'alert', templateUrl: 'alert.component.html' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





class ErrorInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            var _a;
            if ([401, 403].includes(err.status) && this.accountService.userValue) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logout();
            }
            const error = ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// array in local storage for registered users
const usersKey = 'angular-10-registration-login-example-users';
let users = JSON.parse(localStorage.getItem(usersKey)) || [];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        return handleRoute();
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok(Object.assign(Object.assign({}, basicDetails(user)), { token: 'fake-jwt-token' }));
        }
        function register() {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users.map(x => basicDetails(x)));
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            const user = users.find(x => x.id === idFromUrl());
            return ok(basicDetails(user));
        }
        function updateUser() {
            if (!isLoggedIn())
                return unauthorized();
            let params = body;
            let user = users.find(x => x.id === idFromUrl());
            // only update password if entered
            if (!params.password) {
                delete params.password;
            }
            // update and save user
            Object.assign(user, params);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)); // delay observable to simulate server api call
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorized' } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        }
        function basicDetails(user) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_models/alert.ts":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/_models/covid.ts":
/*!**********************************!*\
  !*** ./src/app/_models/covid.ts ***!
  \**********************************/
/*! exports provided: SummaryData, GlobalData, CountryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryData", function() { return SummaryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalData", function() { return GlobalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
class SummaryData {
}
class GlobalData {
}
class CountryData extends GlobalData {
}


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User, SummaryData, GlobalData, CountryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/app/_models/alert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _covid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./covid */ "./src/app/_models/covid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SummaryData", function() { return _covid__WEBPACK_IMPORTED_MODULE_2__["SummaryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalData", function() { return _covid__WEBPACK_IMPORTED_MODULE_2__["GlobalData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return _covid__WEBPACK_IMPORTED_MODULE_2__["CountryData"]; });






/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/_services/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.BannerData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.districtdata = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
        this.url_dailycases = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history';
        this.ulr_districtwise = "https://api.covid19india.org/state_district_wise.json";
        this.url_banner = "https://api.covid19india.org/website_data.json";
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    ngOnInit() {
        this.getDataStateWise();
    }
    getBanners() {
        return this.http.get(this.url_banner);
    }
    getDataStateWise() {
        return this.http.get(this.url_statewise);
    }
    getDailyCaseStatus() {
        return this.http.get(this.url_dailycases);
    }
    getState(state) {
        this.state = state;
    }
    getDataDistrictWise(state) {
        this.http.get(this.ulr_districtwise).subscribe(data => {
            this.data1 = data;
            //  console.log(this.data1)
            //   console.log(this.data1[state])
            this.district = this.data1[state].districtData;
            //  console.log(state)
            this.districtdata.next(this.district);
        });
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/register`, user);
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`);
    }
    update(id, params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // update stored user if the logged in user updated their own record
            if (id == this.userValue.id) {
                // update local storage
                const user = Object.assign(Object.assign({}, this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            // auto logout if the logged in user deleted their own record
            if (id == this.userValue.id) {
                this.logout();
            }
            return x;
        }));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");





class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "./src/app/_services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });





/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");






const accountModule = () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(x => x.AccountModule);
const usersModule = () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(x => x.UsersModule);
const routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'users', loadChildren: usersModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'account', loadChildren: accountModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/alert.component */ "./src/app/_components/alert.component.ts");






function AppComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logout (", ctx_r0.user.username, ")");
} }
function AppComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
const _c1 = function (a0) { return { "bg-light": a0 }; };
class AppComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountService.user.subscribe(x => this.user = x);
    }
    logout() {
        this.accountService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 11, vars: 8, consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm"], [1, "my-0", "mr-md-auto", "font-weight-normal"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", "text-dark", 3, "routerLinkActiveOptions"], [1, "my-2", "my-md-0", "mr-md-3"], ["class", "p-2 text-dark", 3, "click", 4, "ngIf"], ["class", "p-2 text-dark", "routerLink", "/account/login", 4, "ngIf"], ["class", "p-2 text-dark", "routerLink", "/account/register", 4, "ngIf"], [1, "app-container", 3, "ngClass"], [1, "p-2", "text-dark", 3, "click"], ["routerLink", "/account/login", 1, "p-2", "text-dark"], ["routerLink", "/account/register", 1, "p-2", "text-dark"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.user));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _components_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app', templateUrl: 'app.component.html' }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _district_district_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./district/district.component */ "./src/app/district/district.component.ts");






// used to create fake backend









;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
        // provider used to create fake backend
        _helpers__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
        _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _district_district_component__WEBPACK_IMPORTED_MODULE_12__["DistrictComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _district_district_component__WEBPACK_IMPORTED_MODULE_12__["DistrictComponent"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
                    // provider used to create fake backend
                    _helpers__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "./src/app/district/district.component.ts":
/*!************************************************!*\
  !*** ./src/app/district/district.component.ts ***!
  \************************************************/
/*! exports provided: DistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictComponent", function() { return DistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["app-district", ""];
function DistrictComponent_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.value.delta.confirmed, "");
} }
function DistrictComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DistrictComponent_div_16_span_4_Template, 5, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.value.stateName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.value.delta.confirmed !== 0 || data_r1.value.delta.confirmed > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r1.value.confirmed, " ");
} }
const _c1 = function (a0, a1) { return { "downarrow": a0, "up-arrow": a1 }; };
class DistrictComponent {
    constructor(service) {
        this.service = service;
        this.showArrows = {
            uparrow: false,
            downarrow: false,
            downarrowcases: false,
            uparrowowcases: false
        };
        this.isAscendingSort = false;
    }
    ngOnInit() {
        this.service.districtdata.subscribe(data => {
            let districtDataArray = [];
            Object.keys(data).forEach((key, index) => {
                districtDataArray.push(Object.assign({}, { stateName: key }, data[key]));
            });
            this.districtdata = districtDataArray;
            console.log(data);
        });
    }
    sortDistrict(districtdata) {
        this.resetArrow();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrow = !this.showArrows.uparrow;
        const compare = (a, b) => {
            return a.stateName.localeCompare(b.stateName);
        };
        this.districtdata = districtdata.sort(compare);
        if (!this.isAscendingSort) {
            this.resetArrow();
            this.showArrows.downarrow = !this.showArrows.downarrow;
            const compare = (a, b) => {
                return b.stateName.localeCompare(a.stateName);
            };
            this.districtdata = districtdata.sort(compare);
        }
    }
    resetArrow() {
        this.showArrows = {
            uparrow: false,
            downarrow: false,
            downarrowcases: false,
            uparrowowcases: false
        };
    }
    sortDistrictCases(districtdata) {
        this.resetArrow();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrowowcases = !this.showArrows.uparrowowcases;
        const compare = (a, b) => {
            return b.confirmed - a.confirmed;
        };
        this.districtdata = districtdata.sort(compare);
        if (!this.isAscendingSort) {
            this.resetArrow();
            this.showArrows.downarrowcases = !this.showArrows.downarrowcases;
            const compare = (a, b) => {
                return a.confirmed - b.confirmed;
            };
            this.districtdata = districtdata.sort(compare);
        }
    }
}
DistrictComponent.ɵfac = function DistrictComponent_Factory(t) { return new (t || DistrictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
DistrictComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DistrictComponent, selectors: [["", "app-district", ""]], attrs: _c0, decls: 18, vars: 11, consts: [[1, "state-last-update"], ["colspan", "2"], [1, "last-update"], [1, "district-heading"], [3, "click"], [1, "heading-content"], ["title", "District", 1, "dist"], [1, ""], ["title", "Confirmed", 1, "confirmed"], [1, "", 3, "ngClass"], ["class", "district", 4, "ngFor", "ngForOf"], [1, "district"], [1, "col-md-6", "district-name", 2, "font-weight", "600"], [1, "col-md-6", "district-cases"], ["class", "deltas", "style", "color: rgb(255, 7, 58);", 4, "ngIf"], [1, "deltas", 2, "color", "rgb(255, 7, 58)"], ["_ngcontent-boj-c19", "", "xmlns", "http://www.w3.org/2000/svg ", "width", "24 ", "height", "24 ", "viewBox", "0 0 24 24\n                            ", "fill", "none ", "stroke", "currentColor ", "stroke-width", "2 ", "stroke-linecap", "round ", "stroke-linejoin", "round "], ["_ngcontent-boj-c19", "", "x1", "12 ", "y1", "19 ", "x2", "12 ", "y2", "5 "], ["_ngcontent-boj-c19", "", "points", "5 12 12 5 19 12 "]], template: function DistrictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Updated\u00A0 about 1 hours Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DistrictComponent_Template_th_click_6_listener() { return ctx.sortDistrict(ctx.districtdata); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "abbr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DistrictComponent_Template_th_click_11_listener() { return ctx.sortDistrictCases(ctx.districtdata); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "abbr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DistrictComponent_div_16_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "keyvalue");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("up-arrow", ctx.showArrows.uparrow)("downarrow", ctx.showArrows.downarrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.showArrows.downarrowcases, ctx.showArrows.uparrowowcases));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 6, ctx.districtdata));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["table[_ngcontent-%COMP%]   .state-last-update[_ngcontent-%COMP%] {\n  background: transparent;\n  transform: translateX(1rem);\n}\n.district-table[_ngcontent-%COMP%] {\n  margin: 25px;\n  border-collapse: separate;\n  border-spacing: 3px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s ease-in-out;\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  font-size: 0.9rem;\n  border-radius: 5px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .state-last-update[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%] {\n  text-align: left;\n  align-items: baseline;\n  width: 100%;\n  margin-bottom: auto;\n  margin-top: 25px;\n}\n.last-update[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .last-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.last-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: rgba(37, 202, 16, 0.9);\n  font-weight: 900;\n  text-align: right;\n  font-size: 13px !important;\n}\nh6[_ngcontent-%COMP%] {\n  font-family: \"archia\";\n  font-size: 11px!important;\n  font-weight: 600;\n  text-transform: uppercase;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(108, 117, 125, 0.12549);\n}\n.district-heading[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(97, 103, 107, 0.063);\n}\ntr[_ngcontent-%COMP%] {\n  transition: background 0.1s ease-in-out;\n  cursor: pointer;\n}\nth[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: all 0.1s ease-in-out;\n  z-index: 99;\n  font-weight: bold;\n  font-size: 0.75rem;\n  width: 31%;\n  padding: 8px;\n}\nth[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: bolder;\n  font-size: 13px;\n  color: black;\n  padding: 10px;\n}\nth[_ngcontent-%COMP%]   abbr.confirmed[_ngcontent-%COMP%] {\n  color: #ff073a !important;\n}\nabbr[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nabbr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(61, 62, 63, 0.125) !important;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  font-size: 13px;\n  vertical-align: middle;\n  border-radius: 5px;\n  text-align: right;\n  padding: 8px;\n  line-height: 1.4;\n  border-top: none;\n  font-weight: 900;\n}\ntd.col-md-6.district-name[_ngcontent-%COMP%] {\n  width: 150px !important;\n}\n.district[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.district[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: white !important;\n}\n.district[_ngcontent-%COMP%] {\n  width: 300px;\n  display: table;\n  margin-left: 25px;\n}\n.district[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 25px;\n}\n.state-last-update[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  text-align: right;\n}\n.district-heading[_ngcontent-%COMP%], .state-last-update[_ngcontent-%COMP%] {\n  width: 300px;\n  display: table;\n  margin-left: 25px;\n}\ntd.col-md-6.district-cases[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.district[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.district[_ngcontent-%COMP%]:hover {\n  background-color: #cad8da;\n}\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  stroke-width: 3;\n  vertical-align: -0.25px;\n}\nspan.deltas[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: red !important;\n}\n.up-arrow[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n  float: right;\n  margin-top: 5px;\n}\n.downarrow[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n  float: right;\n  margin-top: 5px;\n}\n@media (max-width: 551px) {\n  .downarrow[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 3px solid black;\n    margin-top: 5px;\n    top: 2px;\n    right: 6px;\n  }\n  .up-arrow[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-bottom: 3px solid black;\n    margin-top: 5px;\n    top: 2px;\n    right: 6px;\n  }\n  .last-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  \n  .district-heading[_ngcontent-%COMP%], .district[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  th[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .district[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .state-last-update[_ngcontent-%COMP%] {\n    padding-right: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvY292aWQtZGFzaGJvYXJkL3NyYy9hcHAvZGlzdHJpY3QvZGlzdHJpY3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Rpc3RyaWN0L2Rpc3RyaWN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSx1Q0FBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7O0VBRUksU0FBQTtBQ0pKO0FET0E7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ05KO0FEU0E7RUFDSSx3Q0FBQTtBQ1BKO0FEVUE7RUFDSSxxQ0FBQTtBQ1JKO0FEV0E7RUFDSSx1Q0FBQTtFQUNBLGVBQUE7QUNUSjtBRFlBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEYUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWEo7QURjQTtFQUNJLHlCQUFBO0FDWko7QURlQTtFQUNJLHFCQUFBO0FDYko7QURnQkE7RUFDSSxlQUFBO0FDZEo7QURpQkE7RUFDSSw4Q0FBQTtBQ2ZKO0FEa0JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLHVCQUFBO0FDakJKO0FEb0JBO0VBQ0ksZ0JBQUE7QUNsQko7QURxQkE7RUFDSSxrQ0FBQTtBQ25CSjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNwQko7QUR1QkE7RUFDSSxtQkFBQTtBQ3JCSjtBRHdCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7QUR5QkE7O0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGlCQUFBO0FDeEJKO0FEMkJBO0VBQ0ksbUJBQUE7QUN6Qko7QUQ0QkE7RUFDSSx5QkFBQTtBQzFCSjtBRDZCQTtFQUNJLGtCQUFBO0FDM0JKO0FEOEJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUM1Qko7QUQrQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDN0JKO0FEZ0NBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzlCSjtBRGlDQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMvQko7QURrQ0E7RUFDSTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0Esa0NBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDaENOO0VEa0NFO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxrQ0FBQTtJQUNBLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7RUNoQ047RURrQ0U7SUFDSSwwQkFBQTtFQ2hDTjtFQUNBOzs7O09BSUs7RURrQ0g7O0lBRUksWUFBQTtFQ2hDTjtFRGtDRTtJQUNJLGVBQUE7RUNoQ047RURrQ0U7SUFDSSxlQUFBO0VDaENOO0VEa0NFO0lBQ0ksbUJBQUE7RUNoQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWN0L2Rpc3RyaWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgLnN0YXRlLWxhc3QtdXBkYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbi5kaXN0cmljdC10YWJsZSB7XG4gICAgbWFyZ2luOiAyNXB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbn1cblxudGFibGUgdHIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjFzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGFibGUgdGQge1xuICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGFibGUgdGJvZHkgLnN0YXRlLWxhc3QtdXBkYXRlIHRkIC5sYXN0LXVwZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubGFzdC11cGRhdGUgaDMsXG4ubGFzdC11cGRhdGUgaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmxhc3QtdXBkYXRlIGg2IHtcbiAgICBjb2xvcjogcmdiYSgzNywgMjAyLCAxNiwgMC45KTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gICAgZm9udC1mYW1pbHk6IFwiYXJjaGlhXCI7XG4gICAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIC4xMjU0OSk7XG59XG5cbi5kaXN0cmljdC1oZWFkaW5nIHRoIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCAxMDMsIDEwNywgMC4wNjMpO1xufVxuXG50ciB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50aCB7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIHdpZHRoOiAzMSU7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG50aCAuaGVhZGluZy1jb250ZW50IGFiYnIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG50aCBhYmJyLmNvbmZpcm1lZCB7XG4gICAgY29sb3I6ICNmZjA3M2EgIWltcG9ydGFudDtcbn1cblxuYWJiciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hYmJyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA2MiwgNjMsIDAuMTI1KSAhaW1wb3J0YW50O1xufVxuXG50ZCB7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbnRkLmNvbC1tZC02LmRpc3RyaWN0LW5hbWUge1xuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzdHJpY3QgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kaXN0cmljdCB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmRpc3RyaWN0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5kaXN0cmljdDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uc3RhdGUtbGFzdC11cGRhdGUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kaXN0cmljdC1oZWFkaW5nLFxuLnN0YXRlLWxhc3QtdXBkYXRlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbnRkLmNvbC1tZC02LmRpc3RyaWN0LWNhc2VzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpc3RyaWN0Om50aC1jaGlsZChvZGQpIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDksIDI1MCk7XG59XG5cbi5kaXN0cmljdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjE2LCAyMTgpO1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zdmcge1xuICAgIHdpZHRoOiA5cHg7XG4gICAgaGVpZ2h0OiA5cHg7XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIHZlcnRpY2FsLWFsaWduOiAtLjI1cHg7XG59XG5cbnNwYW4uZGVsdGFzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50XG59XG5cbi51cC1hcnJvdyB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kb3duYXJyb3cge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUxcHgpIHtcbiAgICAuZG93bmFycm93IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgcmlnaHQ6IDZweDtcbiAgICB9XG4gICAgLnVwLWFycm93IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgcmlnaHQ6IDZweDtcbiAgICB9XG4gICAgLmxhc3QtdXBkYXRlIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC8qICBcbiAgICB0ZC5jb2wtbWQtNi5kaXN0cmljdC1uYW1lLFxuICAgIHRkLmNvbC1tZC02LmRpc3RyaWN0LWNhc2VzIHtcbiAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgfSAqL1xuICAgIC5kaXN0cmljdC1oZWFkaW5nLFxuICAgIC5kaXN0cmljdCB7XG4gICAgICAgIHdpZHRoOiAyNTBweFxuICAgIH1cbiAgICB0aCAuaGVhZGluZy1jb250ZW50IGFiYnIge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5kaXN0cmljdCB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgLnN0YXRlLWxhc3QtdXBkYXRlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICB9XG59IiwidGFibGUgLnN0YXRlLWxhc3QtdXBkYXRlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbn1cbi5kaXN0cmljdC10YWJsZSB7XG4gIG1hcmdpbjogMjVweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbn1cbnRhYmxlIHRyIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjFzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG50YWJsZSB0Ym9keSAuc3RhdGUtbGFzdC11cGRhdGUgdGQgLmxhc3QtdXBkYXRlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5sYXN0LXVwZGF0ZSBoMyxcbi5sYXN0LXVwZGF0ZSBoNiB7XG4gIG1hcmdpbjogMDtcbn1cbi5sYXN0LXVwZGF0ZSBoNiB7XG4gIGNvbG9yOiByZ2JhKDM3LCAyMDIsIDE2LCAwLjkpO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcImFyY2hpYVwiO1xuICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxudGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMTI1NDkpO1xufVxuLmRpc3RyaWN0LWhlYWRpbmcgdGgge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCAxMDMsIDEwNywgMC4wNjMpO1xufVxudHIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnRoIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDk5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB3aWR0aDogMzElO1xuICBwYWRkaW5nOiA4cHg7XG59XG50aCAuaGVhZGluZy1jb250ZW50IGFiYnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG50aCBhYmJyLmNvbmZpcm1lZCB7XG4gIGNvbG9yOiAjZmYwNzNhICFpbXBvcnRhbnQ7XG59XG5hYmJyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYWJicjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MSwgNjIsIDYzLCAwLjEyNSkgIWltcG9ydGFudDtcbn1cbnRkIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG50ZC5jb2wtbWQtNi5kaXN0cmljdC1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG4uZGlzdHJpY3QgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpc3RyaWN0IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5kaXN0cmljdCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuLmRpc3RyaWN0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnN0YXRlLWxhc3QtdXBkYXRlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGlzdHJpY3QtaGVhZGluZyxcbi5zdGF0ZS1sYXN0LXVwZGF0ZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxudGQuY29sLW1kLTYuZGlzdHJpY3QtY2FzZXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXN0cmljdDpudGgtY2hpbGQob2RkKSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG4uZGlzdHJpY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FkOGRhO1xufVxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zdmcge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMjVweDtcbn1cbnNwYW4uZGVsdGFzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG4udXAtYXJyb3cge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5kb3duYXJyb3cge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTFweCkge1xuICAuZG93bmFycm93IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIHJpZ2h0OiA2cHg7XG4gIH1cbiAgLnVwLWFycm93IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIHJpZ2h0OiA2cHg7XG4gIH1cbiAgLmxhc3QtdXBkYXRlIGg2IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAvKiAgXG4gICAgdGQuY29sLW1kLTYuZGlzdHJpY3QtbmFtZSxcbiAgICB0ZC5jb2wtbWQtNi5kaXN0cmljdC1jYXNlcyB7XG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgIH0gKi9cbiAgLmRpc3RyaWN0LWhlYWRpbmcsXG4gIC5kaXN0cmljdCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIHRoIC5oZWFkaW5nLWNvbnRlbnQgYWJiciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5kaXN0cmljdCB0ZCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5zdGF0ZS1sYXN0LXVwZGF0ZSB7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DistrictComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-district]',
                templateUrl: './district.component.html',
                styleUrls: ['./district.component.less']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _district_district_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../district/district.component */ "./src/app/district/district.component.ts");







function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r0.user.firstName, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "users/edit/", ctx_r0.user.id, "");
} }
function HomeComponent_h4_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lastupdated.minute, " minutes ago");
} }
function HomeComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.lastupdated.hour, " hour ", ctx_r3.lastupdated.minute, " minutes ago");
} }
function HomeComponent_tbody_94_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.DailystateStatus[i_r8].confirmed, "");
} }
function HomeComponent_tbody_94_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 129);
} }
function HomeComponent_tbody_94_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tbody_94_Template_td_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const data_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r12.OngetState(data_r7.state); return ctx_r12.showHideData(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_tbody_94_span_5_Template, 5, 1, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_tbody_94_tr_13_Template, 1, 0, "tr", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.DailystateStatus[i_r8].confirmed !== 0 && ctx_r4.DailystateStatus[i_r8].confirmed > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r7.confirmed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.recovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.deaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r7["show"]);
} }
function HomeComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.SingleStateData.state);
} }
function HomeComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recovered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deceased");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.SingleStateData.confirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.SingleStateData.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.SingleStateData.recovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.SingleStateData.deaths);
} }
const _c0 = function (a0, a1) { return { "downarrow": a0, "up-arrow": a1 }; };
class HomeComponent {
    constructor(service, datePipe) {
        this.service = service;
        this.datePipe = datePipe;
        this.showArrows = {
            uparrowState: false,
            downarrowState: false,
            downarrowConfirmed: false,
            uparrowowConfirmed: false,
            downarrowActive: false,
            uparrowActive: false,
            downarrowRecovered: false,
            uparrowRecovered: false,
            downarrowDeath: false,
            uparrowDeath: false,
        };
        this.showDistrict = false;
        this.isAscendingSort = false;
        this.DailystateStatus = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
        this.DailyStatus = { total: '' };
        this.statewisedata = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
        this.statewisecase = { confirmed: '', active: '', recovered: '', deaths: '' };
        this.startdate = new Date();
        this.lastupdateddate = new Date();
        this.lastupdated = { hour: 0, minute: 0, second: 0 };
        this.user = this.service.userValue;
    }
    ngOnInit() {
        this.getStateWise();
        this.testData();
    }
    testData() {
        this.service.getDailyCaseStatus().subscribe(response => {
            this.sortedDataBasedOnDate = response.data.history;
            this.sortByMaxCases(this.sortedDataBasedOnDate);
            // console.log(this.sortedDataBasedOnDate);
            this.calculateDiff(this.sortedDataBasedOnDate);
            this.statewisedata = this.sortedDataBasedOnDate[this.sortedDataBasedOnDate.length - 1].statewise;
            this.statewisecase = this.sortedDataBasedOnDate[this.sortedDataBasedOnDate.length - 1].total;
            //   console.log(this.statewisecase)
        }, error => {
            console.log(error);
        });
    }
    calculateDiff(data) {
        let x = data;
        let last = x[x.length - 1];
        let last2 = x[x.length - 2];
        function calculate(schema1, schema2) {
            var ret = {};
            for (var key in schema1) {
                if (schema1.hasOwnProperty(key) && schema2.hasOwnProperty(key)) {
                    var obj = schema1[key];
                    var obj2 = schema2[key];
                    if (typeof obj === "number" && !isNaN(obj) && typeof obj2 === "number" && !isNaN(obj2)) {
                        ret[key] = obj - obj2;
                    }
                    else {
                        if (typeof obj === 'object' && typeof obj2 === 'object') {
                            ret[key] = calculate(obj, obj2);
                        }
                        else {
                            ret[key] = obj;
                        }
                    }
                }
            }
            return ret;
        }
        let test = calculate(last, last2);
        this.DailyStatus = test;
        this.DailystateStatus = this.DailyStatus.statewise;
    }
    getStateWise() {
        this.service.getDataStateWise().subscribe(data => {
            this.lastrefreshedtime = data.data.lastRefreshed;
            this.lastupdateddate = data.data.lastRefreshed;
            // console.log(this.lastupdated)
            function getDataDiff(startDate, endDate) {
                var diff = endDate.getTime() - startDate.getTime();
                var days = Math.floor(diff / (60 * 60 * 24 * 1000));
                var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
                var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
                var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
                return { day: days, hour: hours, minute: minutes, second: seconds };
            }
            this.lastupdated = getDataDiff(new Date(this.lastupdateddate), new Date(this.startdate));
        }, err => {
            console.log(err);
        });
    }
    OngetState(state) {
        this.getDataofState(state);
        this.service.getState(state);
        this.service.getDataDistrictWise(state);
    }
    getDataofState(state) {
        // console.log(this.statewisedata)
        const f = this.statewisedata.filter(a => a.state == state);
        this.SingleStateData = f[0];
        console.log();
    }
    showHideData(data) {
        if (data && data['show'] == true) {
            data['show'] = false;
        }
        else {
            data['show'] = true;
        }
    }
    sortAscending(data) {
        this.resetArrows();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrowState = !this.showArrows.uparrowState;
        data.forEach(item => item.statewise.sort(function (a, b) {
            if (a.state < b.state) {
                return -1;
            }
            if (a.state > b.state) {
                return 1;
            }
            return 0;
        }));
        this.calculateDiff(this.sortedDataBasedOnDate);
        if (!this.isAscendingSort) {
            this.resetArrows();
            this.showArrows.downarrowState = !this.showArrows.downarrowState;
            let a = data.forEach(item => item.statewise.sort(function (a, b) {
                if (b.state < a.state) {
                    return -1;
                }
                if (b.state > a.state) {
                    return 1;
                }
                return 0;
            }));
            this.calculateDiff(this.sortedDataBasedOnDate);
        }
    }
    resetArrows() {
        this.showArrows = {
            uparrowState: false,
            downarrowState: false,
            downarrowConfirmed: false,
            uparrowowConfirmed: false,
            downarrowActive: false,
            uparrowActive: false,
            downarrowRecovered: false,
            uparrowRecovered: false,
            downarrowDeath: false,
            uparrowDeath: false,
        };
    }
    sortByMaxCases(sortedDataBasedOnDate) {
        this.resetArrows();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.downarrowConfirmed = !this.showArrows.downarrowConfirmed;
        sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
            if (b.confirmed < a.confirmed) {
                return -1;
            }
            if (b.confirmed > a.confirmed) {
                return 1;
            }
            return 0;
        }));
        this.calculateDiff(this.sortedDataBasedOnDate);
        if (!this.isAscendingSort) {
            this.resetArrows();
            this.showArrows.uparrowowConfirmed = !this.showArrows.uparrowowConfirmed;
            sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
                if (a.confirmed < b.confirmed) {
                    return -1;
                }
                if (a.confirmed > b.confirmed) {
                    return 1;
                }
                return 0;
            }));
            this.calculateDiff(this.sortedDataBasedOnDate);
        }
    }
    sortByMaxActive(sortedDataBasedOnDate) {
        this.resetArrows();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrowActive = !this.showArrows.uparrowActive;
        sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
            if (a.active < b.active) {
                return -1;
            }
            if (a.active > b.active) {
                return 1;
            }
            return 0;
        }));
        this.calculateDiff(this.sortedDataBasedOnDate);
        if (!this.isAscendingSort) {
            this.resetArrows();
            this.showArrows.downarrowActive = !this.showArrows.downarrowActive;
            sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
                if (b.active < a.active) {
                    return -1;
                }
                if (b.active > a.active) {
                    return 1;
                }
                return 0;
            }));
            this.calculateDiff(this.sortedDataBasedOnDate);
        }
    }
    sortByMaxRecovered(sortedDataBasedOnDate) {
        this.resetArrows();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrowRecovered = !this.showArrows.uparrowRecovered;
        sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
            if (b.recovered < a.recovered) {
                return -1;
            }
            if (b.recovered > a.recovered) {
                return 1;
            }
            return 0;
        }));
        this.calculateDiff(this.sortedDataBasedOnDate);
        if (!this.isAscendingSort) {
            this.resetArrows();
            this.showArrows.downarrowRecovered = !this.showArrows.downarrowRecovered;
            sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
                if (a.recovered < b.recovered) {
                    return -1;
                }
                if (a.recovered > b.recovered) {
                    return 1;
                }
                return 0;
            }));
            this.calculateDiff(this.sortedDataBasedOnDate);
        }
    }
    sortByMaxDeath(sortedDataBasedOnDate) {
        this.resetArrows();
        this.isAscendingSort = !this.isAscendingSort;
        this.showArrows.uparrowDeath = !this.showArrows.uparrowDeath;
        sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
            if (a.deaths < b.deaths) {
                return -1;
            }
            if (a.deaths > b.deaths) {
                return 1;
            }
            return 0;
        }));
        this.calculateDiff(this.sortedDataBasedOnDate);
        if (!this.isAscendingSort) {
            this.resetArrows();
            this.showArrows.downarrowDeath = !this.showArrows.downarrowDeath;
            sortedDataBasedOnDate.forEach(item => item.statewise.sort(function (a, b) {
                if (b.deaths < a.deaths) {
                    return -1;
                }
                if (b.deaths > a.deaths) {
                    return 1;
                }
                return 0;
            }));
            this.calculateDiff(this.sortedDataBasedOnDate);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 251, vars: 34, consts: [[1, "row"], ["class", "col-12 mx-4", 4, "ngIf"], [1, "col-12"], [1, "Home", "container-fluid"], [1, "home-left", "col-12", "col-md-7"], [1, "header", "fadeInUp", 2, "animation-delay", "0.5s"], [1, "header-mid", "row"], [1, "titles", "col-md-7"], [1, "last-update", "col-md-5"], ["class", "difference-time", "style", " color: #0bb332fa; font-weight: 600; ", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "refreshed-time", 2, "color", "#0bb332fa", "font-weight", "600"], [1, "Level", "fadeInUp", "row", 2, "animation-delay", "0.8s"], [1, "level-item", "is-cherry", "col-3"], [1, "level-item", "is-blue", "col-3"], [1, "heading"], [1, "title", "has-text-info"], [1, "level-item", "is-green", "col-3"], [1, "title", "has-text-success"], [1, "level-item", "is-gray", "col-3"], [1, "title", "has-text-grey"], [1, "Minigraph", "row"], [1, "svg-parent", "fadeInUp", "col-3", 2, "animation-delay", "0.6s"], ["height", "100 ", "viewBox", "0 0 100 100 ", "preserveAspectRatio", "xMidYMid meet "], ["fill", "none ", "stroke", "#ff073a99 ", "stroke-width", "3 ", "cursor", "pointer ", "d", "M0,38.65384615384615C0,38.65384615384615,3.3333333333333335,37.756410256410255,5,37.69230769230769C6.666666666666666,37.62820512820513,8.333333333333334,38.3974358974359,10,38.269230769230774C11.666666666666666,38.14102564102565,13.333333333333334,36.82692307692308,15,36.92307692307693C16.666666666666668,37.019230769230774,18.333333333333332,38.782051282051285,20,38.84615384615385C21.666666666666668,38.91025641025641,23.333333333333332,37.72435897435897,25,37.30769230769231C26.666666666666668,36.89102564102564,28.333333333333332,36.69871794871795,30,36.34615384615385C31.666666666666668,35.993589743589745,33.333333333333336,35.48076923076923,35,35.19230769230769C36.666666666666664,34.90384615384615,38.333333333333336,35.705128205128204,40,34.61538461538461C41.666666666666664,33.52564102564102,43.333333333333336,30.192307692307693,45,28.653846153846153C46.666666666666664,27.115384615384613,48.333333333333336,25.705128205128204,50,25.384615384615383C51.666666666666664,25.064102564102562,53.333333333333336,27.564102564102566,55,26.730769230769234C56.666666666666664,25.8974358974359,58.333333333333336,20.288461538461537,60,20.384615384615383C61.666666666666664,20.48076923076923,63.333333333333336,26.794871794871792,65,27.307692307692307C66.66666666666667,27.82051282051282,68.33333333333333,23.846153846153847,70,23.461538461538463C71.66666666666667,23.07692307692308,73.33333333333333,27.083333333333332,75,25C76.66666666666667,22.916666666666668,78.33333333333333,13.044871794871796,80,10.961538461538463C81.66666666666667,8.878205128205131,83.33333333333333,11.185897435897436,85,12.5C86.66666666666667,13.814102564102564,88.33333333333333,20.92948717948718,90,18.846153846153847C91.66666666666667,16.762820512820515,95,0,95,0\n                                        ", "stroke-dasharray", "139.56314086914062 139.56314086914062 ", "stroke-dashoffset", "0 "], ["fill", "#ff073a ", "stroke", "#ff073a ", "r", "2 ", "cursor", "pointer ", "cx", "95 ", "cy", "0 ", 2, "opacity", "1"], [1, "svg-parent", "is-blue", "fadeInUp", "col-3", 2, "animation-delay", "0.7s"], ["fill", "none ", "cursor", "pointer ", "stroke", "#007bff99 ", "stroke-width", "3\n                                        ", "d", "M0,38.65384615384615C0,38.65384615384615,3.3333333333333335,37.756410256410255,5,37.88461538461539C6.666666666666666,38.01282051282052,8.333333333333334,39.55128205128206,10,39.42307692307693C11.666666666666666,39.294871794871796,13.333333333333334,37.11538461538461,15,37.11538461538461C16.666666666666668,37.11538461538461,18.333333333333332,39.358974358974365,20,39.42307692307693C21.666666666666668,39.48717948717949,23.333333333333332,37.94871794871795,25,37.5C26.666666666666668,37.05128205128205,28.333333333333332,37.11538461538461,30,36.730769230769226C31.666666666666668,36.34615384615384,33.333333333333336,35.3525641025641,35,35.19230769230769C36.666666666666664,35.032051282051285,38.333333333333336,36.76282051282052,40,35.769230769230774C41.666666666666664,34.77564102564103,43.333333333333336,30.961538461538467,45,29.230769230769234C46.666666666666664,27.5,48.333333333333336,25.705128205128204,50,25.384615384615383C51.666666666666664,25.064102564102562,53.333333333333336,28.01282051282051,55,27.307692307692307C56.666666666666664,26.602564102564102,58.333333333333336,20.641025641025642,60,21.153846153846153C61.666666666666664,21.666666666666664,63.333333333333336,29.87179487179487,65,30.384615384615383C66.66666666666667,30.897435897435898,68.33333333333333,24.743589743589745,70,24.230769230769234C71.66666666666667,23.717948717948723,73.33333333333333,28.621794871794872,75,27.307692307692307C76.66666666666667,25.99358974358974,78.33333333333333,18.333333333333336,80,16.346153846153847C81.66666666666667,14.35897435897436,83.33333333333333,14.326923076923075,85,15.384615384615383C86.66666666666667,16.44230769230769,88.33333333333333,23.621794871794872,90,22.692307692307693C91.66666666666667,21.762820512820515,95,9.807692307692308,95,9.807692307692308\n                                        ", "stroke-dasharray", "137.1319122314453 137.1319122314453 ", "stroke-dashoffset", "0 "], ["fill", "#007bff ", "stroke", "#007bff ", "r", "2 ", "cursor", "pointer ", "cx", "95 ", "cy", "9.807692307692308 ", 2, "opacity", "1"], [1, "svg-parent", "is-green", "fadeInUp", "col-3", 2, "animation-delay", "0.8s"], ["fill", "none ", "stroke", "#28a74599 ", "stroke-width", "3 ", "cursor", "pointer\n                                        ", "d", "M0,40C0,40,3.3333333333333335,40.19230769230769,5,40C6.666666666666666,39.80769230769231,8.333333333333334,38.84615384615385,10,38.84615384615385C11.666666666666666,38.84615384615385,13.333333333333334,39.90384615384615,15,40C16.666666666666668,40.09615384615385,18.333333333333332,39.45512820512821,20,39.42307692307693C21.666666666666668,39.39102564102564,23.333333333333332,39.743589743589745,25,39.80769230769231C26.666666666666668,39.87179487179487,28.333333333333332,39.77564102564102,30,39.80769230769231C31.666666666666668,39.83974358974359,33.333333333333336,40.128205128205124,35,40C36.666666666666664,39.871794871794876,38.333333333333336,39.13461538461539,40,39.03846153846154C41.666666666666664,38.94230769230769,43.333333333333336,39.26282051282052,45,39.42307692307693C46.666666666666664,39.583333333333336,48.333333333333336,39.90384615384615,50,40C51.666666666666664,40.09615384615385,53.333333333333336,40.06410256410256,55,40C56.666666666666664,39.93589743589744,58.333333333333336,40.09615384615385,60,39.61538461538461C61.666666666666664,39.13461538461538,63.333333333333336,37.1474358974359,65,37.11538461538461C66.66666666666667,37.08333333333333,68.33333333333333,39.16666666666667,70,39.42307692307693C71.66666666666667,39.67948717948718,73.33333333333333,39.35897435897436,75,38.65384615384615C76.66666666666667,37.94871794871795,78.33333333333333,35.28846153846154,80,35.19230769230769C81.66666666666667,35.09615384615385,83.33333333333333,37.82051282051282,85,38.07692307692307C86.66666666666667,38.33333333333333,88.33333333333333,37.53205128205128,90,36.730769230769226C91.66666666666667,35.929487179487175,95,33.26923076923077,95,33.26923076923077\n                                        ", "stroke-dasharray", "139.56314086914062 139.56314086914062 ", "stroke-dashoffset", "0 "], ["fill", "#28a745 ", "stroke", "#28a745 ", "r", "2 ", "cursor", "pointer ", "cx", "95 ", "cy", "33.26923076923077 ", 2, "opacity", "1"], [1, "svg-parent", "is-gray", "fadeInUp", "col-3", 2, "animation-delay", "0.9s"], ["fill", "none ", "cursor", "pointer ", "stroke", "#6c757d99 ", "stroke-width", "3\n                                        ", "d", "M0,40C0,40,3.3333333333333335,39.80769230769231,5,39.80769230769231C6.666666666666666,39.80769230769231,8.333333333333334,40,10,40C11.666666666666666,40,13.333333333333334,39.80769230769231,15,39.80769230769231C16.666666666666668,39.80769230769231,18.333333333333332,39.967948717948715,20,40C21.666666666666668,40.032051282051285,23.333333333333332,40.032051282051285,25,40C26.666666666666668,39.967948717948715,28.333333333333332,39.80769230769231,30,39.80769230769231C31.666666666666668,39.80769230769231,33.333333333333336,40,35,40C36.666666666666664,40,38.333333333333336,39.80769230769231,40,39.80769230769231C41.666666666666664,39.80769230769231,43.333333333333336,39.967948717948715,45,40C46.666666666666664,40.032051282051285,48.333333333333336,40.09615384615385,50,40C51.666666666666664,39.90384615384615,53.333333333333336,39.48717948717949,55,39.42307692307693C56.666666666666664,39.358974358974365,58.333333333333336,39.55128205128205,60,39.61538461538461C61.666666666666664,39.679487179487175,63.333333333333336,39.77564102564102,65,39.80769230769231C66.66666666666667,39.83974358974359,68.33333333333333,39.93589743589743,70,39.80769230769231C71.66666666666667,39.67948717948718,73.33333333333333,39.1025641025641,75,39.03846153846154C76.66666666666667,38.97435897435898,78.33333333333333,39.42307692307693,80,39.42307692307693C81.66666666666667,39.42307692307693,83.33333333333333,39.03846153846154,85,39.03846153846154C86.66666666666667,39.03846153846154,88.33333333333333,39.77564102564103,90,39.42307692307693C91.66666666666667,39.070512820512825,95,36.92307692307693,95,36.92307692307693\n                                        ", "stroke-dasharray", "95.83547973632812 95.83547973632812 ", "stroke-dashoffset", "0 "], ["fill", "#6c757d ", "stroke", "#6c757d ", "r", "2 ", "cursor", "pointer ", "cx", "95 ", "cy", "36.92307692307693 ", 2, "opacity", "1"], [1, "col-12", "note"], [1, "state-note", 2, "animation-delay", "1s"], [1, "sorting-note", 2, "animation-delay", "1s"], [1, "affected-count", "fadeInUp", 2, "animation-delay", "1s"], [1, "table", "table-striped", "table-hover", "fadeInUp", "col-md-12", 2, "animation-delay", "1s"], [1, "sticky", "state-heading", 3, "click"], [1, "heading-content"], ["title", "State "], [1, "", 3, "ngClass"], [1, "sticky", 3, "click"], ["title", "Confirmed ", 1, "confirmed"], ["title", "Active ", 1, "active-cases"], ["title", "Recovered ", 1, "recovered"], ["title", "Deaths ", 1, "death"], [4, "ngFor", "ngForOf"], [1, "home-right", "col-12", "col-md-5"], [1, "MapExplorer", "fadeInUp", "hide-xs", 2, "animation-delay", "1.2s"], [1, "header"], ["class", "meta1 ", 4, "ngIf"], ["class", "map-stats hide-xs ", 4, "ngIf"], [1, "svg-parent"], ["id", "chart ", "width", "480 ", "height", "450 ", "viewBox", "0 0 480 450 ", "preserveAspectRatio", "xMidYMid meet "], [1, "states"], ["fill", "rgb(255, 242, 235) ", "d", "M389.9728160184575,443.3947997589372L391.0411071674648,446.2961876105354L389.7896803929136,449.9999999999999L387.347872052326,444.9462040816678ZM388.1414597630169,440.60703341467786L388.7213892439065,441.55559238567855L387.01212340549523,442.99252035968874ZM383.65463693718743,432.6676196445043L383.5935917286729,434.595950780211L382.6779136009525,433.50235171510786ZM385.60808360965757,429.8170682961205L385.3639027755987,432.5236877011943L384.6313602734224,430.62343501690344ZM375.6882372260209,416.0031457808552L376.17659889413835,417.013797910279L374.833604306815,417.5912193525752L374.7115138897859,416.263047839468ZM371.9339569023675,393.1317798146871L373.00224805137464,395.8594855027377L371.6592534640515,398.4694537876027L370.5909623150444,397.97658309652013L370.07207804266955,394.98913576221196ZM374.37576524295514,374.56856144909136L375.169352953646,375.41430902970717L374.89464951533,376.7845917136168L375.38301118344725,377.221809396616L374.61994607701376,378.62056180378505L375.5356242047342,378.7662351467185L374.77255909830046,384.53041595175023L373.6737453450362,384.5013256204846L371.87291169385276,379.9896688453051L373.12433846840395,378.941035706079ZM376.0850310813662,373.6642706628793L376.8480961877999,373.8684849106062L376.695483166513,375.1226939076926L375.26092076641794,376.9886330283695L375.3219659749325,374.6852278641769ZM377.09227702185876,365.1644988263285L378.0384777538361,367.59090839574776L377.7637743155201,371.4463483585178L376.9091413963147,373.3725161865229L375.1388303493886,373.7809659177613L374.4062878472125,373.25580785310046L374.7115138897859,366.39253070202005ZM374.34524263869775,364.11155494808787L374.65046868127115,365.74932981139693L373.9179261790948,365.63237146663073ZM378.86258806878436,356.02817981009264L379.2899045283873,358.92987731774787L377.916387336807,358.9884715507644L379.07624629858606,360.13085556331424L378.92363327729936,362.85345148211377L375.77980503879303,365.36920084194657L376.72600577077037,357.4060679302186Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 245, 240) ", "d", "M408.80526284523853,166.06827322577425L408.2558559686063,160.66855422254315L411.79647806245816,159.25991673975244L412.8647692114653,157.20890837779154L413.5973117136414,157.81805974880234L419.3660839182794,155.60483201328947L417.5652502670962,154.54530774850156L415.8865070329423,150.13952948956455L418.8777222501619,146.49680784443728L413.8414925477002,146.6581591231269L412.62058837740665,147.81942545811427L404.04373658109307,149.94631071332708L398.8548938573447,152.45641629181108L395.98576905715413,152.19914252130883L387.65309809489963,161.69228932525408L378.77102025601243,162.5236240413464L373.88740357483766,160.66855422254315L372.8801576343453,161.82021320256484L366.40936553178835,162.84326098893212L365.34107438278124,160.02840851712887L365.8904812594135,157.01649936219667L365.18846136149455,154.22410843774145L360.2743220760624,153.87071849434977L359.0228953015112,152.29562480576556L360.48798030586363,148.14185544946292L362.6245626038776,148.88320743525566L363.32658250179657,150.20393078275293L368.42385741277303,148.04513301536048L369.125877310692,149.33430369647039L372.5749315917717,148.68984308309183L374.98621732810193,146.1095006792728L374.19262961741083,144.13928619986876L378.8320654645272,141.3252277684211L381.1517833880853,141.03384292657427L383.04418485204064,136.16976075513588L391.22424279300867,135.4876272262274L395.0395683251768,129.17233843983848L397.96973833388165,126.95283200434244L399.67900417229293,126.92016913887505L400.6252049042705,125.08997691992329L402.9449228278286,127.93240667323556L405.72247981524697,127.86712042065511L411.8270006667158,129.9549580099682L413.04790483700936,127.14879512666732L420.31228465025697,123.32314640446697L422.3878217397564,126.72417786909301L424.5549266420278,126.56083336894363L421.25848538223477,129.72673349631003L422.2962539269845,131.61675668420116L425.1348561229174,129.9549580099682L427.4545740464755,133.69972344769928L427.1493480039021,134.87021118976253L425.5926951867775,135.45513751431105L424.219177995197,139.9325876433487L428.217639152909,138.83059005832797L429.68272415726165,140.2565631901619L431.36146739141554,140.09458343905527L432.70446197873844,141.16335369560375L434.4747730256645,140.54808633728027L437.8322594939723,142.58729779968155L437.8627820982297,147.33566317628856L436.21456146833316,147.43242690188447L431.33094478715816,151.87749483588357L431.514080412702,154.32047465512414L435.02417990229674,159.29194414413791L433.5590948979443,159.67622608533327L430.90362832755545,158.33085999104873L430.0489954083496,155.95785921029136L422.32677653124165,156.98442907110706L419.64078735659564,158.33085999104873L418.57249620758876,160.28449557763417L413.01738223275197,163.80181544448118L411.3386389985983,165.9406644539589Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 239, 231) ", "d", "M408.2558559686063,160.66855422254315L406.79077096425385,162.04405702520802L404.07425918535046,162.33181331391853L402.9144002235712,164.24895827201544L397.6034670827935,167.12068708238786L396.4436081210142,169.19176007666317L395.86367864012504,167.9175455227831L392.2009661292436,173.64421015024664L391.7736496696409,177.54673742845608L389.0571378907373,178.75066281767795L389.11818309925206,177.07127937046164L387.8057111161861,177.80026307625815L388.04989195024496,178.65564565293562L382.9831396435259,183.2107881352971L384.6618828776798,184.85286917525826L384.9060637117386,186.84032006742433L381.79275807748945,191.4063935843788L381.06021557531335,194.36041608547464L379.99192442630624,194.42321636739956L379.7782661965048,197.68590994890803L378.46579421343904,200.3796082141605L376.17659889413835,200.41090756642518L375.26092076641794,198.59468270452078L373.1853836769185,202.6005720066459L371.17089179593404,204.31924642543737L370.6214849193018,202.6005720066459L368.9122190808905,202.6005720066459L367.78288272336886,202.6318345460121L368.6069930383171,200.5673965204308L368.05758616168487,198.84530102033034L368.3017669957437,192.7897160346642L371.6592534640515,193.38673924122804L370.86566575336064,190.93456866905404L375.65771462176326,187.18711238446951L373.15486107266133,185.16848306160836L372.8801576343453,183.14760132634018L370.560439710787,180.33353820663962L367.2334758467366,181.44071843047777L367.17243063822207,176.9444690622314L368.39333480851565,175.96138176762634L367.32504365950854,175.1999071227882L363.35710510605395,175.96138176762634L362.47194958259115,174.596840412851L361.12895499526803,177.07127937046164L359.9080508249742,177.22977952505937L359.9385734292314,176.05654307509508L359.1144631142831,175.99310277139665L357.8019911312174,178.56062342394625L357.74094592270285,178.49727245698153L355.87906706300487,178.90901350962116L354.41398205865244,180.55502898558535L353.43725872241725,178.65564565293562L352.277399760638,179.03568394331523L349.77454621153606,177.13468112934902L347.8516221433233,177.67350476944955L344.2804774452143,176.15169927198292L339.3663381597819,177.0078753482568L336.37512294256226,180.4917487015602L337.8402079469149,182.64202705783373L336.25303252553294,183.02122106166075L335.79519346167285,184.2530510719522L336.0088516914741,176.7542366162075L333.9943598104894,173.8665365797737L333.9943598104894,172.4685895178245L335.8562386701876,170.5923215148057L335.8867612744448,170.5605030367339L335.8867612744448,165.71732645804565L340.4041067045316,164.7279112147363L340.9229909769065,163.38650741703998L343.39532192175125,162.71541334649083L346.63071797302973,164.6640585047033L355.9401122715194,164.56827500916052L356.9168356077546,163.73792842245246L361.2510454122971,164.08927772423823L363.54024073159803,162.5236240413464L365.676823029612,163.54625313208197L366.40936553178835,162.84326098893212L372.8801576343453,161.82021320256484L373.88740357483766,160.66855422254315L378.77102025601243,162.5236240413464L387.65309809489963,161.69228932525408L395.98576905715413,152.19914252130883L398.8548938573447,152.45641629181108L404.04373658109307,149.94631071332708L412.62058837740665,147.81942545811427L413.8414925477002,146.6581591231269L418.8777222501619,146.49680784443728L415.8865070329423,150.13952948956455L417.5652502670962,154.54530774850156L419.3660839182794,155.60483201328947L413.5973117136414,157.81805974880234L412.8647692114653,157.20890837779154L411.79647806245816,159.25991673975244Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 235, 226) ", "d", "M312.17069776648896,168.20432513710517L314.42937048153226,170.6877734767849L308.56903046412253,175.7075932830453L308.3248496300637,178.3072060419131L311.37711005579786,181.09282118001113L311.07188401322446,183.1160070911087L307.8059653576886,184.66347442243222L307.74492014917405,186.33577678145218L308.69112088115185,186.9349063465662L307.836487961946,188.10106658852192L304.84527274472634,186.39885235382968L303.563323365918,187.7859617405636L301.5488314849333,188.06955855361417L301.090992421073,190.05350436572428L299.53433960394864,190.4626225442015L297.7335059527654,196.99620126570335L296.268420948413,196.93348783626465L295.1696071951485,198.12468294493794L294.31497427594286,197.15297561665665L292.63623104178896,197.96799012260294L291.72055291406855,197.3724375853808L289.85867405437057,200.6925783184173L287.5694787350699,199.22116567845677L287.5694787350699,197.59187376296381L285.28028341576896,197.18432890630186L284.24251487101947,194.73718586705553L282.93004288795373,195.42773180132082L281.9533195517188,194.39181649246376L280.5798023601383,194.42321636739956L278.99262693875653,196.2748694196507L279.0536721472711,197.65456507942486L268.70650930403144,200.7864592063567L267.5771729465098,198.50069219140562L265.41006804423864,200.4735047093128L264.219686478202,200.1918011653368L263.1513953291951,202.0690297769978L259.9770444864314,198.31269701019625L257.9625526054465,199.15852679982498L256.37537718406475,196.83941373804777L254.66611134565346,198.40669696050116L254.54402092862415,198.34403085144197L253.50625238387465,198.53202288656314L253.04841332001433,198.75132308011172L249.66040424744915,198.50069219140562L249.9351076857654,198.15601993442067L249.9351076857654,198.09334543054013L249.23308778784644,195.3963489203157L249.17204257933167,195.3963489203157L248.16479663883933,194.6430005995059L247.24911851111915,191.2176781502722L247.64591236646447,188.44761906908104L253.50625238387465,185.45248854079193L257.535236145844,181.8833992491612L257.4131457288147,180.99792839950499L260.80115480137965,181.34584405211615L261.6252651163279,180.39682408232358L261.808400741872,180.4917487015602L263.4871439760259,181.2509646572267L264.92170637612094,179.54227580713956L257.13844229049823,174.91426960042713L256.4974676010943,173.54891880635228L258.6035272948509,172.4685895178245L258.81718552465236,170.75140522521156L255.15447301377117,169.6056792595718L255.2155182222857,168.74589103723582L258.5424820863361,166.73806505921902L262.1136267844456,166.92938662103137L259.610773235343,163.25870016587788L257.199487499013,162.9071812434185L255.7038798904032,159.45207214233835L256.2838093712926,158.49107836287521L254.54402092862415,155.95785921029136L254.2693174903079,154.48107278005693L256.7111258308955,154.57742431551947L257.93203000118933,153.26014297170627L260.1296575077181,155.1554180400626L264.8606611676064,156.08621447599256L265.7458166910692,157.81805974880234L265.1353646059224,160.50854027353654L269.4085292019504,161.7882331281471L270.38525253818534,163.13088341765L272.58288004471433,163.22674686933328L272.7660156702584,164.85560954834585L274.50580411292685,165.14289627143268L278.19903922806543,163.38650741703998L279.9083050664765,164.34475950152063L279.99987287924864,166.6105056219953L288.1799308202169,167.02503948839717L293.4603413567372,169.95584190616438L297.27566688890533,168.29990783565063L301.70144450622,171.1013384975273L302.3424191956242,170.05132862564153L307.47021671085804,170.21046156226186L307.86701056620336,169.28728860641837L310.76665797065084,171.00590908683927Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 239, 232) ", "d", "M159.2524504371977,102.92591996961045L159.19140522868292,103.48972542345854L159.2524504371977,103.85442939810906L159.099837415911,104.08646826192819L159.13036002016815,104.18590266781064L158.12311407967582,104.08646826192819L157.93997845413173,103.98702736407648L157.90945584987458,103.98702736407648L157.84841064135958,103.88757997220381L157.84841064135958,103.78812608425841L157.6957976200731,103.75497334435033L157.6957976200731,103.72181988235207L157.72632022433027,103.62235516305742L157.3905715774995,102.99226087566188L157.75684282858788,102.85957616758691L157.90945584987458,102.66052737958711L158.0315462669039,102.59417198757717L158.06206887116127,102.52781369654616L158.12311407967582,102.46145250588336L158.51990793502137,102.56099320447777L158.55043053927875,102.62735004592173L158.48938533076398,102.62735004592173L158.70304356056545,102.66052737958711L158.82513397759476,102.59417198757717L158.76408876908,102.8927484306331L159.038792207396,102.8927484306331Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 242, 236) ", "d", "M255.64283468188864,211.92532614117442L255.76492509891796,211.89421488080376L256.4669449968369,211.76976484877554L256.5585128096088,211.76976484877554L256.0091059329766,215.56191483515386L257.4131457288147,216.21392001969832L256.8637388521822,218.8197807598699L259.39711500554176,221.4531716434497L261.4726520950412,221.4531716434497L261.56421990781337,222.93872418577814L256.4974676010943,228.12951405384905L256.4669449968369,230.35006858008524L251.64437352417667,232.47583659301011L250.45399195814025,234.2917792861951L250.14876591556663,236.29054816515082L251.03392143902965,237.05879318600432L248.04270622181025,241.41707624064185L247.98166101329525,245.3991733835826L246.5470986132002,244.8788613002298L245.50933006845048,248.3044744181447L237.97024681688663,248.15166175250624L236.84091045936498,251.17534329877094L233.84969524214512,252.63985615548177L234.704328161351,264.10873035483957L238.97749275737897,265.0491879488828L238.7943571318349,267.29258247465907L235.77261931035787,266.2317922694642L233.94126305491727,267.23197913650927L232.90349451016755,265.2008382089091L229.54600804185975,264.50316322709546L228.4166716843381,263.35001258641796L227.43994834810314,264.47282467117066L227.40942574384576,266.26210739354576L230.03436970997723,267.80764617245734L229.97332450146268,271.44011753943414L231.65206773561658,273.01242255276526L232.567745863337,280.43641990785056L231.65206773561658,280.70759047588075L231.31631908878558,282.3941870507803L228.7218977269115,283.74863427226677L228.63032991413934,285.4932521491711L225.88329553097856,288.52832584511634L222.9226029180163,289.7593191226495L220.9996788498038,296.2046077118945L217.09278550486374,296.0848457500621L217.0012176920916,296.14472743678016L216.5433786282315,296.5638597406601L216.3907656069448,296.5339240099695L215.41404227070961,291.19970619899294L215.41404227070961,291.0797057813392L212.17864621943136,291.0197034058127L212.85014351309292,289.9994416181835L211.99551059388727,288.3180949799141L212.02603319814466,288.227990553586L210.77460642359347,286.06449354268136L208.82115975112356,284.5308590263338L206.83719047439627,285.10232576913126L205.82994453390393,283.2370432763951L206.8982356829108,281.91242283813045L205.82994453390393,279.381575778605L207.44764255954306,275.7312247817458L209.76736048310136,273.4959956308863L210.37781256824815,274.73469610736834L212.3617818449752,275.0971189874584L213.58268601526902,274.1003215059027L212.8806661173503,273.0728746584032L214.2847059131882,272.52874935785417L211.17140027893902,270.4417568409292L211.2324454874538,269.2613207201013L209.5231796490425,268.0802801542756L208.82115975112356,266.35305035113015L209.27899881498365,263.0464542238053L207.3865973510285,261.3457720344148L210.560948193792,260.13021073284955L209.46213444052773,251.35846126308388L208.424365895778,251.4194971593605L207.93600422766053,250.2289878795035L208.39384329152085,247.87657162909966L210.86617423636562,246.6841075685894L211.11035507042425,245.5521822208658L212.0870784066592,243.5009509492748L211.78185236408603,240.58908499979282L213.4605955982397,238.65583645684558L213.4911182024971,236.59788022008678L214.62045456001897,234.0456434843377L215.74979091754062,234.90699056718813L217.30644373466498,231.49024742608037L217.24539852615044,229.36345443993605L218.28316707089994,228.65403024721513L218.37473488367186,228.8699681512008L220.14504593059792,228.0986559396449L222.22058302009737,228.59232948942912L222.28162822861213,228.56147840795938L226.15799896929457,225.87563493700668L226.21904417780934,222.9696614481913L228.53876210136764,221.7627530097846L228.50823949711003,219.96651001340405L231.37736429730035,219.03678050088274L231.86572596541782,216.36912741472906L228.9966011652275,215.0028805063056L228.96607856097035,214.94075572234055L228.20301345453663,213.2937284680691L225.6696373011771,212.79623907360303L223.99089406702342,213.60459479287005L224.08246187979535,211.36524706079206L225.08970782028746,210.49369082378394L223.89932625425126,208.50008350738796L224.7539591734569,207.4713219228605L226.76845105444158,209.1856187119584L228.66085251839672,208.53124949973773L228.81346553968365,208.46891700971184L236.71882004233566,209.40369235969644L240.2899647404447,206.87875419894385L242.27393401717222,208.21956682956824L244.62417454498745,207.9701842749647L247.2796411153763,204.81893251934042L249.81301726873585,205.94274714588983L253.4146845711025,212.23641131278447L255.58178947337387,212.79623907360303Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M109.92792195733034,263.1071691582642L109.95844456158773,263.3196585844525L109.89739935307296,263.5624791949943L109.3785150806981,264.0176976411252L109.22590205941151,263.80527375310174L108.95119862109527,263.7445775545422L108.73754039129415,263.7445775545422L108.58492737000722,263.71422884515005L108.40179174446325,263.59282993895704L108.18813351466167,263.5017764858091L107.69977184654431,263.89631500115394L107.51663622100011,263.7445775545422L107.2419327826841,263.35001258641796L107.18088757416922,263.0464542238053L107.21141017842683,262.8946597476413L107.11984236565479,262.8642996279911L107.0587971571399,263.1071691582642L107.02827455288275,263.1375260136996L106.60095809327981,262.98573765754963L106.7840937188239,262.5910401732264L106.7840937188239,262.31774761162967L106.66200330179458,262.25701143148336L106.57043548902254,261.77106301673064L106.63148069753743,261.74068775693536L106.63148069753743,261.5888053042372L106.14311902941984,260.70768452744556L106.26520944644926,260.6165143504821L106.41782246773585,260.70768452744556L106.72304851030947,260.9507868775345L107.27245538694137,260.4949483448563L107.21141017842683,260.31258696606363L107.2419327826841,260.2821919590555L107.36402319971364,260.46455581280395L107.577681429515,260.6469048215028L107.63872663802942,260.46455581280395L107.63872663802942,260.2821919590555L107.94395268060305,260.13021073284955L108.12708830614702,260.0998132490108L108.21865611891906,260.13021073284955L108.31022393169121,260.0086183193616L108.37126914020598,259.70460835828516L108.52388216149257,260.46455581280395L108.73754039129415,260.4341628683892L108.89015341258062,260.3733757422637L109.19537945515435,260.2821919590555L109.28694726792605,260.31258696606363L109.40903768495548,260.3733757422637L109.3785150806981,260.5253404645983L109.31746987218344,260.768462585604L109.28694726792605,260.768462585604L109.25642466366878,260.70768452744556L109.10381164238208,260.73807376247174L109.07328903812459,260.85962658415633L108.98172122535277,260.7988509968941L108.92067601683789,260.9811728188645L108.85963080832346,261.1027124699253L108.73754039129415,261.13309635438554L108.52388216149257,261.31539102738896L108.37126914020598,261.5584275825898L108.09656570188963,261.4976709077714L108.0355204933752,261.5280494504519L107.852384867831,261.92293316484046L107.94395268060305,262.0140503348823L108.00499788911759,262.0747930662651L107.97447528486032,262.31774761162967L108.09656570188963,262.5910401732264L108.37126914020598,262.4999463330973L108.40179174446325,262.5606759686454L108.52388216149257,262.5606759686454L108.67649518277926,262.5910401732264L109.01224382960993,261.8925599551609L109.22590205941151,261.9533059646527L109.34799247644082,261.9533059646527L109.56165070624218,261.9533059646527L109.6532185190141,262.0140503348823L110.11105758287431,262.19627361415064L110.08053497861704,262.31774761162967L109.6532185190141,262.5910401732264L109.6532185190141,262.83393910008095Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M104.43385319100855,259.46137060804926L105.01378267189807,258.0013866447003L105.50214434001543,259.52218252905794Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 243, 237) ", "d", "M122.3200992858118,326.83456485261445L124.05988772848036,326.7753602409001L124.97556585620066,333.3987979975973L123.8767521029364,336.73445594117334L121.8927828262091,337.4719328002478L116.27662364285777,325.76869534181577L118.74895458770254,324.7616769211693L120.61083344740064,327.4265441164714Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(253, 207, 188) ", "d", "M44.15170978275489,209.21677360187493L44.94529749344599,210.49369082378394L43.99909676146842,212.26751708800776L42.32035352731441,212.42303849073664ZM44.15170978275489,206.69158944106186L43.8464837401815,208.71823484525316L42.137217901770214,209.12330741993293ZM102.48040651853853,243.5315808811676L101.86995443339185,240.46639194503092L100.58800505458339,240.09826983782466L101.86995443339185,237.82675494105968L100.55748245032578,237.55032128766362L100.37434682478181,236.47495284972769L102.20570308022229,231.61347197303445L98.48194536082656,232.8453106200608L96.55902129261403,236.44421987161292L97.71888025439284,241.23310629093993L94.20878076479846,248.05996894959395L82.03026166611846,253.67662544998808L81.9692164576037,253.92049984859403L80.16838280642037,254.16434713485285L79.86315676384686,254.2862606192927L77.57396144454617,254.86525730301554L69.912787775953,250.74800805390583L56.055525443118995,236.69007098018392L51.99601907689225,231.3670154681932L53.09483283015675,229.2400940849319L54.86514387708269,229.88765263013278L56.02500283886161,232.01390061168348L68.75292881417386,227.63572787995332L71.10316934198943,222.1341871876611L69.48547131635007,221.70084058479443L64.60185463517519,223.00059823199894L62.282136711617,224.88683923908502L55.53664117074402,223.4645925948122L47.32606062551872,217.9515433626902L48.08912573195221,216.61743373283576L46.01358864245287,213.63567869738017L45.92202082968083,211.7386510928427L48.4248743787831,208.3754144841443L47.05135718720271,208.09487960094083L46.776653748886474,206.78517410842693L49.523688132047596,206.78517410842693L49.737346361848836,202.25664997692627L50.83616011511333,203.03820059048303L52.087586889664294,201.81884053242715L52.911697204612665,203.00694475919374L60.84757431152184,202.00648557158746L62.77049837973459,203.75694252604188L66.64686912041714,203.78818599939592L67.89829589496833,201.94393929600471L74.21647497623826,200.0352809648292L74.21647497623826,202.53804537859577L76.20044425296567,203.10071070634257L78.36754915523727,202.66309656901785L78.27598134246512,201.88139094977566L81.48085478948622,199.8161307886847L79.98524718087617,199.6908906405871L79.86315676384686,197.30973679839218L81.32824176819952,196.1180211826931L83.92266313007372,197.18432890630186L86.51708449194803,196.21213171062738L96.58954389687119,196.87077229807448L99.79441734389229,200.2544055982429L100.83218588864202,198.78264958382664L103.42660725051633,200.94291695662338L106.75357111456674,200.97420694776577L106.81461632308117,199.59695504941027L108.37126914020598,198.97059761130225L108.21865611891906,200.44220639812283L109.62269591475683,201.34964633755442L108.18813351466167,203.5694708849033L110.50785143821997,206.16118979811034L112.70547894474862,205.5682158629216L111.9729364425724,208.50008350738796L116.03244280879903,211.92532614117442L115.66617155771087,214.44368636990544L118.29111552384234,214.53689650460376L119.20679365156263,216.15183362511266L120.70240126017268,216.18287706793234L120.97710469848869,216.21392001969832L122.50323491135578,217.2380623215809L122.38114449432646,218.50973979805667L124.05988772848036,218.50973979805667L125.03661106471554,220.21436423755597L125.83019877540642,222.47460777856537L126.95953513292807,222.41271744345255L126.95953513292807,223.8666340937225L125.86072137966357,226.40073539686108L124.42615897956841,226.33896596301167L121.80121501343706,228.37636207955484L122.04539584749568,229.4559698023724L124.36511377105398,230.07263158342022L123.23577741353199,231.12052930544695L121.61807938789309,230.53500563983624L122.62532532838532,236.47495284972769L118.29111552384234,238.56373252196136L119.1457484430482,240.03690988621923L118.2300703153278,241.69300109785797L118.71843198344527,243.16399252643015L124.57877200085534,242.27539080541197L124.79243023065658,243.4090585024573L121.7096472006649,243.7459780379723L120.09194917502577,244.66457825395725L119.90881354948169,246.07233036160216L118.32163812809995,246.50059274767625L118.19954771107064,247.9071389342301L115.66617155771087,248.45727624888207L117.86379906423974,249.40440617135863L119.81724573670954,253.7375965928996L117.1617791663208,256.6622249738715L113.22436321712348,254.5300672876673L112.79704675752066,261.9533059646527L111.2098713361388,261.8621863355621L109.92792195733034,263.1071691582642L109.6532185190141,262.83393910008095L109.6532185190141,262.5910401732264L110.08053497861704,262.31774761162967L110.11105758287431,262.19627361415064L109.6532185190141,262.0140503348823L109.56165070624218,261.9533059646527L109.34799247644082,261.9533059646527L109.22590205941151,261.9533059646527L109.01224382960993,261.8925599551609L108.67649518277926,262.5910401732264L108.52388216149257,262.5606759686454L108.40179174446325,262.5606759686454L108.37126914020598,262.4999463330973L108.09656570188963,262.5910401732264L107.97447528486032,262.31774761162967L108.00499788911759,262.0747930662651L107.94395268060305,262.0140503348823L107.852384867831,261.92293316484046L108.0355204933752,261.5280494504519L108.09656570188963,261.4976709077714L108.37126914020598,261.5584275825898L108.52388216149257,261.31539102738896L108.73754039129415,261.13309635438554L108.85963080832346,261.1027124699253L108.92067601683789,260.9811728188645L108.98172122535277,260.7988509968941L109.07328903812459,260.85962658415633L109.10381164238208,260.73807376247174L109.25642466366878,260.70768452744556L109.28694726792605,260.768462585604L109.31746987218344,260.768462585604L109.3785150806981,260.5253404645983L109.40903768495548,260.3733757422637L109.28694726792605,260.31258696606363L109.19537945515435,260.2821919590555L108.89015341258062,260.3733757422637L108.73754039129415,260.4341628683892L108.52388216149257,260.46455581280395L108.37126914020598,259.70460835828516L108.31022393169121,260.0086183193616L108.21865611891906,260.13021073284955L108.12708830614702,260.0998132490108L107.94395268060305,260.13021073284955L107.63872663802942,260.2821919590555L107.63872663802942,260.46455581280395L107.577681429515,260.6469048215028L107.36402319971364,260.46455581280395L107.2419327826841,260.2821919590555L107.21141017842683,260.31258696606363L107.27245538694137,260.4949483448563L106.72304851030947,260.9507868775345L106.41782246773585,260.70768452744556L106.26520944644926,260.6165143504821L106.14311902941984,260.70768452744556L106.63148069753743,261.5888053042372L106.63148069753743,261.74068775693536L106.57043548902254,261.77106301673064L103.4571298547736,262.8946597476413L104.43385319100855,259.46137060804926L105.50214434001543,259.52218252905794L105.01378267189807,258.0013866447003L105.53266694427293,256.0227940093134L101.62577359933289,245.82757052494827Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(254, 225, 212) ", "d", "M163.09829857362274,106.04082253066264L164.28868013965916,107.00052166140813L164.28868013965916,107.13284674550573L169.38595505063563,108.91811864105654L167.18832754410687,113.24047204152828L165.23488087163696,114.22862609791827L162.70150471827742,121.22656360321878L164.07502190985792,132.62603015527168L160.7480580458075,133.34190512237853L160.80910325432205,135.45513751431105L159.2524504371977,137.01390984300872L162.97620815659343,138.40904130005902L163.7697958672843,139.73817149748356L166.12003639509976,138.1820083402821L168.80602556974623,143.07245134985874L167.95139265054058,144.4301213798534L168.77550296548884,146.1095006792728L165.26540347589435,148.9798811968089L162.03000742461586,148.78652806462395L161.11432929689568,151.26619419935912L159.98499293937357,150.30052806917325L160.99223887986636,143.78375132229007L159.2524504371977,142.55494914031675L156.7495968880953,144.59167433597054L156.902209909382,145.72210293068736L155.13189886245618,146.33544085982714L154.36883375602247,143.68677395550492L152.8121809388981,143.78375132229007L152.50695489632471,145.52837005091936L150.33984999405334,145.0762384008887L150.27880478553857,148.94765723274332L147.59281561089233,148.07737445162383L148.6611067598992,142.55494914031675L148.05065467475242,142.10200103948233L148.20326769603912,141.64892798515973L146.4329566491133,139.9325876433487L141.91561121902646,136.49448542835358L141.30515913387944,130.3787172860898L140.29791319338722,130.28093662972321L139.29066725289476,128.3240680964879L139.53484808695362,126.43014569126575L135.4448191164696,126.92016913887505L132.33151348222043,124.23952686055418L131.3547901459856,124.92646426724059L128.5467105543098,124.17408871077345L129.0350722224273,118.76607047225497L127.23423857124419,118.93022344129878L128.33305232450846,117.02498945071477L127.87521326064848,115.77547125033203L131.69053879281626,115.01869673016188L134.25443755043318,117.18932525582312L135.2922060951829,116.82776364543975L135.78056776330027,118.01074507545542L136.87938151656476,117.45222657918873L137.39826578893963,121.06265054559276L140.42000361041676,118.27350829968668L145.51727852139288,117.84649564179858L147.07393133851747,119.12718430663284L150.73664384939866,117.35364376832615L150.82821166217082,117.4193663334504L151.40814114306022,113.07571845480868L153.7583816708759,112.64727709869248L155.22346667522834,113.66874942595484L156.5054160540367,112.51542513265974L156.0170543859192,110.96532169232694L160.4428320032339,107.13284674550573L160.47335460749127,107.00052166140813L159.13036002016815,104.18590266781064L159.099837415911,104.08646826192819L159.2524504371977,103.85442939810906L159.19140522868292,103.48972542345854L159.2524504371977,102.92591996961045L158.4588627265066,100.66860206412264L160.25969637769003,100.83469587606953L161.75530398629962,103.29075913158442L163.647705450255,104.11961378511785Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 243, 237) ", "d", "M187.4553367709832,95.11053640160657L188.70676354553393,97.37617831386257L187.1195881241522,97.57592396532709L185.95972916237315,95.97721510483848L181.53395154505847,96.01053890137837L180.19095695773535,94.64365555402424L173.8422552722077,96.71016780921144L170.91208526350283,102.8927484306331L172.40769287211265,106.9343548316312L169.20281942509155,108.62071748249667L169.38595505063563,108.91811864105654L164.28868013965916,107.13284674550573L164.28868013965916,107.00052166140813L163.09829857362274,106.04082253066264L163.647705450255,104.11961378511785L161.75530398629962,103.29075913158442L160.25969637769003,100.83469587606953L158.4588627265066,100.66860206412264L157.84841064135958,100.1702112112427L157.84841064135958,100.10374668736165L156.29175782423522,99.13968242230482L156.65802907532338,95.84391251716596L153.81942687939022,94.04316611082334L150.7976890579132,94.343440959916L146.5855696704,84.06632583290911L142.73972153397472,81.6456617618872L142.9228571595188,79.49059287518395L147.0434087342603,76.65721816626228L146.31086623208398,73.98743662530097L147.0128861300027,72.904600859362L146.860273108716,71.0754676491186L145.4562333128781,68.29343161925806L147.16549915128962,69.00641900700487L148.29483550881105,68.49717856177188L149.332604053561,67.07033958464456L151.2860507260309,66.62840981911057L153.27002000275797,64.17831308982551L158.88617918610953,64.34859513881435L160.50387721174866,66.62840981911057L163.4950924289683,67.51213253312966L165.99794597807045,70.05827577200853L171.30887911884838,67.64804132828715L174.88002381695742,73.78446681947258L179.21423362150017,71.85482723046636L180.4656603960516,73.31075954913109L179.24475622575756,74.02126215187911L179.39736924704448,75.677743803937L180.4046151875366,74.79903071040843L182.23597144297742,76.58968945630585L181.4729063365437,78.85019337419669L185.65450311979976,83.29349245472571L184.55568936653526,86.61715151830077L186.38704562197609,89.26400214092769L184.9830058261382,90.63582228493675Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 244, 239) ", "d", "M307.836487961946,188.10106658852192L307.62282973214474,189.89612690892983L310.2477736982762,193.1668057723465L308.5385078598649,195.30219709629188L309.3626181748134,195.5532580252655L309.1794825492691,197.9366499827334L307.92805577471813,197.9366499827334L307.92805577471813,200.6299884597268L306.37140295759355,202.6318345460121L306.49349337462286,204.0693541286966L303.8685494084914,204.5691058789423L303.0749616978005,206.62919711934467L301.64039929770524,205.84912121573285L301.1215150253304,207.9390091778222L298.9849327273164,208.2507373719519L299.1375457486031,209.34138812225905L295.71901407178075,208.0637065287192L294.31497427594286,210.92951801988988L289.61449322031194,211.7386510928427L288.33254384150337,214.22617875356246L286.6232780030923,214.63010219244688L285.4634190413133,212.6718468413776L284.08990184973277,212.45414127700917L284.15094705824754,213.85325215078456L281.67861611340254,214.44368636990544L281.34286746657176,218.2616719839694L282.44168121983625,219.16076966401602L284.08990184973277,218.9747830047379L286.4401423775482,221.20547189416004L288.912473322393,221.4531716434497L289.2176993649666,224.36134375580036L292.208914582186,226.1536463201527L292.4225728119875,227.29618008462108L293.8266126078254,227.3270504186288L295.0169941738618,229.94931414490316L294.6812455270308,231.92150094083127L293.3687735439653,232.5990019799372L290.3470357224883,230.75074439072176L289.33978978199593,231.24377609583013L284.5172183093357,227.79004897717965L282.9605654922111,229.0550395342894L283.87624361993153,230.1651147719117L283.1742237220126,232.16789081898418L283.93728882844584,233.0300227470495L282.13645517726286,236.07538868164835L275.57409526193373,233.46095327177034L272.85758348303034,235.09151828064324L270.35472993392796,233.4917305743819L271.45354368719245,231.49024742608037L270.7210011850161,228.71572913183434L260.37383834177695,230.81237985238442L256.4974676010943,228.12951405384905L261.56421990781337,222.93872418577814L261.4726520950412,221.4531716434497L259.39711500554176,221.4531716434497L256.8637388521822,218.8197807598699L257.4131457288147,216.21392001969832L256.0091059329766,215.56191483515386L256.5585128096088,211.76976484877554L256.4669449968369,211.76976484877554L255.76492509891796,211.89421488080376L255.64283468188864,211.92532614117442L255.58178947337387,212.79623907360303L253.4146845711025,212.23641131278447L249.81301726873585,205.94274714588983L247.2796411153763,204.81893251934042L248.80577132824374,201.16193598722776L248.22584184735388,198.87662595323837L249.66040424744915,198.50069219140562L253.04841332001433,198.75132308011172L253.50625238387465,198.53202288656314L254.54402092862415,198.34403085144197L254.66611134565346,198.40669696050116L256.37537718406475,196.83941373804777L257.9625526054465,199.15852679982498L259.9770444864314,198.31269701019625L263.1513953291951,202.0690297769978L264.219686478202,200.1918011653368L265.41006804423864,200.4735047093128L267.5771729465098,198.50069219140562L268.70650930403144,200.7864592063567L279.0536721472711,197.65456507942486L278.99262693875653,196.2748694196507L280.5798023601383,194.42321636739956L281.9533195517188,194.39181649246376L282.93004288795373,195.42773180132082L284.24251487101947,194.73718586705553L285.28028341576896,197.18432890630186L287.5694787350699,197.59187376296381L287.5694787350699,199.22116567845677L289.85867405437057,200.6925783184173L291.72055291406855,197.3724375853808L292.63623104178896,197.96799012260294L294.31497427594286,197.15297561665665L295.1696071951485,198.12468294493794L296.268420948413,196.93348783626465L297.7335059527654,196.99620126570335L299.53433960394864,190.4626225442015L301.090992421073,190.05350436572428L301.5488314849333,188.06955855361417L303.563323365918,187.7859617405636L304.84527274472634,186.39885235382968Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M122.07591845175307,388.8915271795659L120.21403959205509,387.49649512922423L120.85501428145926,386.9150871315246ZM91.46174638163734,380.16441275164635L90.60711346243181,380.16441275164635L89.96613877302775,378.41660962835584L90.6681586709467,377.8629692016767Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(252, 188, 164) ", "d", "M240.2899647404447,206.87875419894385L236.71882004233566,209.40369235969644L228.81346553968365,208.46891700971184L228.66085251839672,208.53124949973773L226.76845105444158,209.1856187119584L224.7539591734569,207.4713219228605L223.89932625425126,208.50008350738796L225.08970782028746,210.49369082378394L224.08246187979535,211.36524706079206L223.99089406702342,213.60459479287005L225.6696373011771,212.79623907360303L228.20301345453663,213.2937284680691L228.96607856097035,214.94075572234055L228.9966011652275,215.0028805063056L231.86572596541782,216.36912741472906L231.37736429730035,219.03678050088274L228.50823949711003,219.96651001340405L228.53876210136764,221.7627530097846L226.21904417780934,222.9696614481913L226.15799896929457,225.87563493700668L222.28162822861213,228.56147840795938L222.22058302009737,228.59232948942912L220.14504593059792,228.0986559396449L218.37473488367186,228.8699681512008L218.28316707089994,228.65403024721513L217.24539852615044,229.36345443993605L217.30644373466498,231.49024742608037L215.74979091754062,234.90699056718813L214.62045456001897,234.0456434843377L213.4911182024971,236.59788022008678L213.4605955982397,238.65583645684558L211.78185236408603,240.58908499979282L212.0870784066592,243.5009509492748L211.11035507042425,245.5521822208658L208.2717528744913,244.51150574305888L205.7078541168744,241.3557547066373L200.24430795480998,242.64313327997309L198.56556472065608,241.6316875793721L196.4289824226421,242.45927002850647L195.23860085660567,240.58908499979282L191.78954657552572,239.97554814286326L191.54536574146687,240.92645403661663L188.24892448167384,241.41707624064185L187.66899500078443,243.3171620777984L180.98454466842622,243.07208548707302L180.7403638343676,241.6316875793721L177.47444517883173,242.27539080541197L177.3218321575448,243.13335728913034L173.62859704240645,244.90947140596433L170.5458140124149,244.97069029945737L167.37146316965095,243.5315808811676L167.18832754410687,242.48991501257632L169.14177421657678,242.70441748322895L168.1955734845992,239.48458964081811L165.20435826737935,239.3618320673579L158.64199835205068,241.72365718956053L158.61147574779352,243.28652905202887L156.3222804284926,245.6133826878991L156.29175782423522,247.60144634004416L154.490924173052,247.54030260741945L152.9647939601848,249.28221919207556L150.33984999405334,249.09892577140278L149.1799910322743,244.97069029945737L137.21513016339566,244.41965695643842L135.01750265686678,242.18344520085515L128.66880097133912,240.74244126204758L127.56998721807497,239.82213594271184L127.8141680521336,237.15096353620265L125.92176658817846,235.52201902332877L124.57877200085534,236.78225765534677L122.62532532838532,236.47495284972769L121.61807938789309,230.53500563983624L123.23577741353199,231.12052930544695L124.36511377105398,230.07263158342022L122.04539584749568,229.4559698023724L121.80121501343706,228.37636207955484L124.42615897956841,226.33896596301167L125.86072137966357,226.40073539686108L126.95953513292807,223.8666340937225L126.95953513292807,222.41271744345255L125.83019877540642,222.47460777856537L125.03661106471554,220.21436423755597L127.93625846916314,219.65664866120954L129.76761472460385,218.19965015933798L127.90573586490575,216.40016742137624L129.00454961817002,214.35047178679957L132.2399456694485,212.9206233486916L133.21666900568357,211.27188480712363L132.97248817162472,208.34424596458103L134.16286973766114,205.91153901270292L132.57569431627917,202.22538123662463L131.11060931192674,202.28791820015834L130.92747368638265,202.1941119791938L132.33151348222043,199.65957929887537L130.4085894140078,198.81397556387952L130.37806680975052,198.78264958382664L131.8126292098458,194.9569328954554L132.545171712022,196.4003384968189L134.28496015469057,195.80428504528447L134.43757317597715,194.54881054780998L132.36203608647804,194.26621167158163L132.48412650350735,192.41254923789603L134.86488963558008,193.57523281695995L135.90265818032958,193.13538456821874L136.3910198484474,191.02894334232036L138.49707954220378,190.7772667719545L138.37498912517447,194.2348091357748L137.5814014144837,193.54381855541118L137.39826578893963,195.42773180132082L142.61763111694518,196.1180211826931L144.35741955961385,195.05110222758947L145.6698915426798,195.52187726417066L146.860273108716,198.37536416819034L146.5550470661426,199.75351175826694L144.2658517468417,200.3796082141605L144.63212299792986,206.4108079620724L141.27463652962228,205.66185557583293L140.48104881893119,207.53368681349622L143.10599278506288,209.34138812225905L147.53177040237756,207.37777078237042L147.31811217257632,206.00516188196127L149.69887530464894,204.97505752006396L149.54626228336224,203.31947987750527L150.67559864088412,202.9444315496018L154.15517552622123,202.97568841225302L154.97928584116949,203.97563604386954L156.23071261572045,202.47551668439485L158.61147574779352,204.50664409297156L160.1070833564031,204.44418025571093L160.68701283729274,203.4444794998073L159.2524504371977,201.00549641940967L159.43558606274178,199.40906976839727L160.35126419046173,198.40669696050116L160.90067106709398,199.5343287114929L162.1215752373878,198.5633530575816L162.27418825867449,196.83941373804777L158.76408876908,194.07778847020984L160.77858065006467,193.38673924122804L159.6797668968004,191.3120382882364L163.7697958672843,189.77021521096702L165.57062951846774,190.24233948095866L166.6999658759894,189.64429485764646L167.0051919185628,188.10106658852192L165.63167472698228,184.94755911881896L163.55613763748283,186.7772598148705L160.90067106709398,187.02948770755472L156.07809959443375,185.64180080341322L154.94876323691233,183.52668896606122L155.07085365394164,179.510618025383L158.67252095630806,177.29317562785184L159.31349564571224,175.86621534787594L159.40506345848416,175.83449207160265L162.97620815659343,173.0723847201396L163.00673076085081,172.9452871688407L172.52978328914196,168.07687336903246L174.97159162972957,165.81304627216963L176.2840636127953,166.06827322577425L176.37563142556724,164.5044163910474L177.93228424269182,163.80181544448118L180.00782133219127,163.25870016587788L182.75485571535205,164.98329843680057L184.7998702005941,164.34475950152063L188.43206010721792,166.06827322577425L190.23289375840136,171.1013384975273L185.37979968148352,180.6499452196701L185.83763874534384,182.23114338770483L181.594996753573,182.76843393137193L179.61102747684572,185.04224410936376L181.045589876941,189.1405268127719L177.35235476180242,193.19822644206738L178.66482674486792,196.4317044454445L178.66482674486792,199.72220146036454L180.28252477050728,202.3191859063794L181.83917758763164,200.50480250005467L185.68502572405714,203.63196348967858L188.1878792731593,201.06807380443928L186.99749770712287,196.87077229807448L185.2577092644542,197.40378718932084L185.44084488999852,193.54381855541118L183.51792082178576,192.03530527747847L183.76210165584462,190.55702147577819L182.1138810259481,187.18711238446951L183.24321738346953,185.2315992380614L185.44084488999852,186.11499502463192L184.89143801336627,184.53720023690437L187.85213062632852,183.52668896606122L185.80711614108645,187.0925392167241L186.84488468583618,188.6366199699891L188.98146698385017,187.9750311831071L190.4465519882026,189.8331721416243L192.39999866067274,189.67577575762942L193.25463157987838,188.0065408509675L192.1558178266141,186.84032006742433L193.16306376710622,186.49346160626192L194.53658095868673,187.84898706665354L193.89560626928255,189.67577575762942L195.26912346086306,190.24233948095866L196.0932337758113,188.95157802553268L199.84751409946466,189.99055500466773L200.09169493352329,187.94352097080645L204.76165338489682,185.38938005911166L206.40987401479333,185.61025013245296L206.4403966190505,187.25015843300923L207.66130078934452,188.1640810258138L206.92875828716842,189.3609423963207L208.66854672983686,191.56364165612854L212.39230444923282,189.3609423963207L214.01000247487195,190.39968722514823L213.82686684932787,192.41254923789603L217.97794102832654,192.09818463390826L219.41250342842181,188.98307084608007L221.7322213519799,189.77021521096702L223.47200979464856,188.54212196456206L224.54030094365567,190.33674974712545L227.9893552247354,191.72087629050833L228.01987782899255,193.19822644206738L232.17095200799145,194.48601452135074L233.39185617828525,196.99620126570335L234.88746378689484,197.4351362669704L235.04007680818177,195.86703650561947L239.7100352595553,196.77669503583218L238.94697015312136,205.13116972227806Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 244, 239) ", "d", "M401.2661795936747,184.60033843169492L400.1673658404104,188.57362184296238L402.1208125128803,189.48688223845681L402.0597673043658,191.1547687009184L395.5584525975514,203.91315475163321L394.1849354059709,208.59357996869227L392.23148873350124,207.37777078237042L389.3928865375681,207.40895500321665L388.7824344524213,206.31720497150746L384.84501850322386,206.81636798039324L384.08195339679037,205.19361102122667L383.01366224778326,205.59942961130486L378.2521359836378,204.44418025571093L378.46579421343904,200.3796082141605L379.7782661965048,197.68590994890803L379.99192442630624,194.42321636739956L381.06021557531335,194.36041608547464L381.79275807748945,191.4063935843788L384.9060637117386,186.84032006742433L386.70689736292184,188.44761906908104L389.8202029971708,183.02122106166075L396.10785947418367,184.06359347194774L398.42757739774174,182.167922183994Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M370.86566575336064,190.93456866905404L365.95152646792803,188.6366199699891L360.0911864505183,189.54984891023128L354.96338893528446,188.3216075988376L343.82263838135395,189.26648182653315L336.5582585681061,186.80879021450096L335.276309189298,185.86264013213383L335.79519346167285,184.2530510719522L336.25303252553294,183.02122106166075L337.8402079469149,182.64202705783373L336.37512294256226,180.4917487015602L339.3663381597819,177.0078753482568L344.2804774452143,176.15169927198292L347.8516221433233,177.67350476944955L349.77454621153606,177.13468112934902L352.277399760638,179.03568394331523L353.43725872241725,178.65564565293562L354.41398205865244,180.55502898558535L355.87906706300487,178.90901350962116L357.74094592270285,178.49727245698153L357.8019911312174,178.56062342394625L359.1144631142831,175.99310277139665L359.9385734292314,176.05654307509508L359.9080508249742,177.22977952505937L361.12895499526803,177.07127937046164L362.47194958259115,174.596840412851L363.35710510605395,175.96138176762634L367.32504365950854,175.1999071227882L368.39333480851565,175.96138176762634L367.17243063822207,176.9444690622314L367.2334758467366,181.44071843047777L370.560439710787,180.33353820663962L372.8801576343453,183.14760132634018L373.15486107266133,185.16848306160836L375.65771462176326,187.18711238446951Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 245, 240) ", "d", "M378.46579421343904,200.3796082141605L378.2521359836378,204.44418025571093L383.01366224778326,205.59942961130486L384.2956116265916,212.57854744311487L383.776727354217,217.85849526689418L382.5253005796658,221.0506438933146L380.23610526036487,220.46218750866336L380.6328991157104,222.44366285079133L379.7782661965048,223.9594014493499L381.1517833880853,231.73668911259784L380.6328991157104,233.18393685747583L379.167814111358,232.87609712611527L378.43527160918165,235.0300108703404L377.0007092090866,235.64500281423773L374.46733305572707,233.584059724878L374.2231522216682,235.21452762089888L373.032770655632,235.64500281423773L371.9644795066249,225.5048934474043L369.9805102298974,222.07228629528493L370.22469106395624,217.2380623215809L368.54594782980234,210.40028649628948L369.3700581447506,207.65841050961166L368.9122190808905,202.6005720066459L370.6214849193018,202.6005720066459L371.17089179593404,204.31924642543737L373.1853836769185,202.6005720066459L375.26092076641794,198.59468270452078L376.17659889413835,200.41090756642518Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M408.80526284523853,166.06827322577425L406.5160675259376,169.41465184053885L407.431745653658,170.62413941412916L407.3096552366287,174.97774859456604L408.1032429473196,175.1999071227882L405.7835250237615,178.4022417838246L406.271886691879,180.08037232355673L403.0364906406005,184.0951711184116L401.2661795936747,184.60033843169492L398.42757739774174,182.167922183994L396.10785947418367,184.06359347194774L389.8202029971708,183.02122106166075L386.70689736292184,188.44761906908104L384.9060637117386,186.84032006742433L384.6618828776798,184.85286917525826L382.9831396435259,183.2107881352971L388.04989195024496,178.65564565293562L387.8057111161861,177.80026307625815L389.11818309925206,177.07127937046164L389.0571378907373,178.75066281767795L391.7736496696409,177.54673742845608L392.2009661292436,173.64421015024664L395.86367864012504,167.9175455227831L396.4436081210142,169.19176007666317L397.6034670827935,167.12068708238786L402.9144002235712,164.24895827201544L404.07425918535046,162.33181331391853L406.79077096425385,162.04405702520802L408.2558559686063,160.66855422254315Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(210, 33, 32) ", "d", "M164.07502190985792,132.62603015527168L165.9674233738133,135.45513751431105L165.9369007695559,135.4876272262274L166.12003639509976,138.1820083402821L163.7697958672843,139.73817149748356L162.97620815659343,138.40904130005902L159.2524504371977,137.01390984300872L160.80910325432205,135.45513751431105L160.7480580458075,133.34190512237853Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 243, 238) ", "d", "M199.26758461857503,391.8253244407217L199.26758461857503,391.9124344537286L199.2981072228324,391.9414707112639L199.96960451649397,391.7091748608749L199.9390819122366,391.7962873561123L200.09169493352329,391.8253244407217L199.87803670372182,394.11860398488716L198.84026815897232,393.1608074284842L198.84026815897232,393.0156673096451L198.84026815897232,392.9866386707117L198.87079076322948,392.95760982662534L198.84026815897232,392.8995515228255L198.62660992917063,392.92858077734394L198.65713253342824,392.87052206302843L198.59608732491347,392.84149239791054L198.62660992917063,392.8124625274298L198.59608732491347,392.78343245154457L198.56556472065608,392.8124625274298L198.50451951214131,392.8124625274298L198.5350421163987,392.75440217021264L198.382429095112,392.7253716833923L198.4129516993694,392.6382789895801L198.32138388659746,392.6382789895801L198.382429095112,392.52215251844615L198.44347430362677,392.52215251844615L198.56556472065608,392.40602275412573L198.50451951214131,392.34795663618127L198.382429095112,392.40602275412573L198.32138388659746,392.40602275412573L198.29086128234007,392.1737533351827L198.4129516993694,392.1737533351827L198.8097455547147,392.2898896939331L198.87079076322948,392.2898896939331L198.87079076322948,392.2027877342572L198.8097455547147,392.1156839180091L198.77922295045755,392.0866488998256L198.8097455547147,391.97050676213547L198.77922295045755,391.9414707112639L198.65713253342824,391.9124344537286L198.65713253342824,391.7672500646292L198.65713253342824,391.7091748608749L198.74870034620017,391.68013694851936L198.84026815897232,391.7091748608749ZM141.82404340625453,381.6785234483058L141.8545660105117,381.76585765103425L141.79352080199692,381.79496860898723L141.701952989225,381.8240793455328L141.6714303849676,381.8240793455328L141.57986257219568,381.8531898607134L141.48829475942352,381.79496860898723L141.42724955090875,381.76585765103425L141.45777215516637,381.64941160429805L141.45777215516637,381.62029953867034L141.5493399679383,381.38739503022566L141.48829475942352,381.32916668393744L141.48829475942352,381.2709374492982L141.5188173636809,381.2418224987406L141.64090778071045,381.2127073259676L141.6714303849676,381.2709374492982L141.6714303849676,381.47473588474315ZM197.68040919719306,380.57211721833L197.71093180145022,380.45563469684555L197.86354482273714,380.4847556621571L197.89406742699452,380.5429969228567ZM198.74870034620017,380.13528932698125L198.90131336748686,380.22265892964754L199.32862982708957,380.2809042128275L199.2981072228324,380.19353595252096L199.35915243134696,380.13528932698125L199.32862982708957,380.86330790439877L199.14549420154572,380.892425747076L199.11497159728833,380.9215433670271L198.87079076322948,380.7759530395856L198.87079076322948,380.8050715506961L198.8097455547147,380.95066076429464L198.19929346956815,380.7468343055785L198.35190649085462,380.6303571397358L198.382429095112,380.57211721833L198.382429095112,380.5429969228567L198.44347430362677,380.31002651896586L198.44347430362677,380.13528932698125ZM197.61936398867851,380.45563469684555L197.28361534184774,380.42651350816925L197.22257013333297,380.33914860152663L197.4972735716492,380.1061656784826L197.4972735716492,380.2809042128275L197.6498865929359,380.33914860152663ZM197.1615249248182,379.5236456379265L197.1615249248182,379.4362598870547L197.25309273759035,379.4653886954778L197.34466055036228,379.5236456379265L197.34466055036228,379.6110293662448L197.4362283631342,379.6692840620511L197.52779617590636,379.8149168733L197.03943450778888,379.9314190846095L196.94786669501696,379.78579075982447L196.7036858609581,379.8731684273881L196.67316325670072,379.6110293662448L196.67316325670072,379.5527737720371L197.10047971630365,379.4362598870547ZM197.89406742699452,378.27092271341877L197.80249961422237,378.5331550857587L197.40570575887705,378.47488280958567L197.4972735716492,378.38747269823824L197.52779617590636,378.3291981587836ZM197.03943450778888,377.45497116637387L197.40570575887705,377.5424030708284L197.22257013333297,378.00867198947645L197.22257013333297,378.24178465091325L197.34466055036228,378.41660962835584L197.3141379461049,378.5331550857587L197.25309273759035,378.64969692430236L197.4667509673916,378.5914264572174L197.4667509673916,378.64969692430236L197.4972735716492,378.7079664873557L197.4972735716492,378.73710092997703L197.6498865929359,378.79536913762274L197.6498865929359,378.97016834285597L197.6498865929359,379.0575649001263L197.52779617590636,379.0575649001263L197.03943450778888,379.23235192973385L197.03943450778888,379.2032213212681L196.94786669501696,378.941035706079L196.94786669501696,378.7079664873557L196.94786669501696,378.64969692430236L197.06995711204627,378.64969692430236L197.06995711204627,378.5331550857587L196.91734409075957,378.3000605493613L196.94786669501696,378.0669515156656L197.00891190353173,378.03781186602333L196.94786669501696,377.8629692016767L196.94786669501696,377.7464028827952L196.9783892992741,377.68811835953386ZM198.107725656796,377.71726073485183L198.26033867808246,377.8629692016767L198.26033867808246,377.95039155549784L198.93183597174425,378.00867198947645L198.4129516993694,378.3000605493613L198.71817774194278,378.6788318188116L198.71817774194278,378.97016834285597L198.77922295045755,378.97016834285597L198.77922295045755,378.941035706079L198.87079076322948,378.64969692430236L199.4812428483765,378.38747269823824L199.4812428483765,378.27092271341877L199.81699149520705,378.504019060783L199.11497159728833,379.9896688453051L199.0234037845164,380.13528932698125L198.93183597174425,380.1061656784826L198.87079076322948,380.0187933895621L198.90131336748686,379.9605440770017L198.96235857600163,379.8731684273881L198.93183597174425,379.64015682642673L198.84026815897232,379.64015682642673L198.8097455547147,379.6984110731603L198.74870034620017,379.9605440770017L198.62660992917063,380.0187933895621L198.32138388659746,379.8149168733L198.29086128234007,379.9314190846095L198.19929346956815,379.7275378597974L198.13824826105315,379.6984110731603L198.107725656796,379.4362598870547L197.9245900312519,379.4945172790875L197.83302221847998,379.5236456379265L197.68040919719306,379.4653886954778L197.9551126355093,379.3488721124781L197.9551126355093,379.2614823130452L197.9551126355093,379.1740904876048L198.26033867808246,379.028432939837L198.26033867808246,379.40713085377524L198.44347430362677,379.40713085377524L198.44347430362677,379.2614823130452L198.47399690788416,379.2032213212681L198.29086128234007,378.8827697557389L198.16877086531053,378.79536913762274L198.19929346956815,378.8245029027325L197.9245900312519,378.5331550857587L198.26033867808246,378.35833554172837L198.16877086531053,378.21264636180183L197.4362283631342,378.03781186602333L197.4667509673916,377.8629692016767L197.4667509673916,377.7755448034066L197.4972735716492,377.71726073485183L198.13824826105315,377.5132593303648ZM199.0234037845164,379.4362598870547L199.11497159728833,379.5819016814622L199.11497159728833,379.6984110731603L199.23706201431764,379.6110293662448L199.35915243134696,379.2906124712445L199.26758461857503,379.3488721124781L199.14549420154572,379.2906124712445L199.05392638877356,379.23235192973385ZM199.9390819122366,377.68811835953386L200.00012712075113,377.4258267427607L200.06117232926613,377.1926631493891L200.39692097609668,377.2801012068086Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(254, 227, 214) ", "d", "M157.84841064135958,100.10374668736165L157.84841064135958,100.1702112112427L158.4588627265066,100.66860206412264L159.2524504371977,102.92591996961045L159.038792207396,102.8927484306331L158.76408876908,102.8927484306331L158.82513397759476,102.59417198757717L158.70304356056545,102.66052737958711L158.48938533076398,102.62735004592173L158.55043053927875,102.62735004592173L158.51990793502137,102.56099320447777L158.12311407967582,102.46145250588336L158.06206887116127,102.52781369654616L158.0315462669039,102.59417198757717L157.90945584987458,102.66052737958711L157.75684282858788,102.85957616758691L157.3905715774995,102.99226087566188L157.72632022433027,103.62235516305742L157.6957976200731,103.72181988235207L157.6957976200731,103.75497334435033L157.84841064135958,103.78812608425841L157.84841064135958,103.88757997220381L157.90945584987458,103.98702736407648L157.93997845413173,103.98702736407648L158.12311407967582,104.08646826192819L159.13036002016815,104.18590266781064L160.47335460749127,107.00052166140813L160.4428320032339,107.13284674550573L156.0170543859192,110.96532169232694L156.5054160540367,112.51542513265974L155.22346667522834,113.66874942595484L153.7583816708759,112.64727709869248L151.40814114306022,113.07571845480868L150.82821166217082,117.4193663334504L150.73664384939866,117.35364376832615L147.07393133851747,119.12718430663284L145.51727852139288,117.84649564179858L140.42000361041676,118.27350829968668L137.39826578893963,121.06265054559276L136.87938151656476,117.45222657918873L135.78056776330027,118.01074507545542L135.2922060951829,116.82776364543975L134.25443755043318,117.18932525582312L131.69053879281626,115.01869673016188L127.87521326064848,115.77547125033203L125.18922408600224,115.61098635003185L124.7619076263993,115.5780872845749L124.60929460511261,115.5780872845749L119.35940667284945,115.34777435373405L120.36665261334178,111.82301787824656L119.42045188136422,109.3806283253727L120.30560740482713,107.26516039968106L121.61807938789309,106.73583718415449L126.92901252867091,99.63841317024463L129.76761472460385,98.27482509890729L130.07284076717713,97.1098095139173L127.72260023936155,96.97660741794385L128.21096190747903,93.34229015156188L129.58447909905954,91.80588709902014L127.9667810734204,88.32641955460775L128.4246201372805,85.94630981392629L133.4608498397423,82.18393279902796L138.10028568685846,81.3091417656479L139.41275766992408,79.38949587921508L138.86335079329217,77.73725036369655L140.81679746576197,78.14205546994259L144.11323872555522,76.55592392205733L146.31086623208398,73.98743662530097L147.0434087342603,76.65721816626228L142.9228571595188,79.49059287518395L142.73972153397472,81.6456617618872L146.5855696704,84.06632583290911L150.7976890579132,94.343440959916L153.81942687939022,94.04316611082334L156.65802907532338,95.84391251716596L156.29175782423522,99.13968242230482Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(252, 165, 136) ", "d", "M124.60929460511261,115.5780872845749L124.7619076263993,115.5780872845749L125.18922408600224,115.61098635003185L127.87521326064848,115.77547125033203L128.33305232450846,117.02498945071477L127.23423857124419,118.93022344129878L129.0350722224273,118.76607047225497L128.5467105543098,124.17408871077345L131.3547901459856,124.92646426724059L132.33151348222043,124.23952686055418L135.4448191164696,126.92016913887505L139.53484808695362,126.43014569126575L139.29066725289476,128.3240680964879L140.29791319338722,130.28093662972321L141.30515913387944,130.3787172860898L141.91561121902646,136.49448542835358L146.4329566491133,139.9325876433487L148.20326769603912,141.64892798515973L148.05065467475242,142.10200103948233L148.6611067598992,142.55494914031675L147.59281561089233,148.07737445162383L150.27880478553857,148.94765723274332L150.33984999405334,145.0762384008887L152.50695489632471,145.52837005091936L152.8121809388981,143.78375132229007L154.36883375602247,143.68677395550492L155.13189886245618,146.33544085982714L156.902209909382,145.72210293068736L156.7495968880953,144.59167433597054L159.2524504371977,142.55494914031675L160.99223887986636,143.78375132229007L159.98499293937357,150.30052806917325L161.11432929689568,151.26619419935912L162.03000742461586,148.78652806462395L165.26540347589435,148.9798811968089L166.12003639509976,153.29228404852512L170.24058796984127,157.65777793925122L169.08072900806224,160.54054426143142L170.88156265924545,161.62832380630647L168.0429604633125,162.7793383567967L167.1578049398497,163.67403903005618L167.79877962925366,164.79176156244455L171.88880859973779,162.26787164183634L176.95556090645687,161.94812753591214L178.23751028526522,162.33181331391853L177.93228424269182,163.80181544448118L176.37563142556724,164.5044163910474L176.2840636127953,166.06827322577425L174.97159162972957,165.81304627216963L172.52978328914196,168.07687336903246L163.00673076085081,172.9452871688407L162.97620815659343,173.0723847201396L159.40506345848416,175.83449207160265L159.31349564571224,175.86621534787594L158.67252095630806,177.29317562785184L155.07085365394164,179.510618025383L154.94876323691233,183.52668896606122L156.07809959443375,185.64180080341322L160.90067106709398,187.02948770755472L163.55613763748283,186.7772598148705L165.63167472698228,184.94755911881896L167.0051919185628,188.10106658852192L166.6999658759894,189.64429485764646L165.57062951846774,190.24233948095866L163.7697958672843,189.77021521096702L159.6797668968004,191.3120382882364L160.77858065006467,193.38673924122804L158.76408876908,194.07778847020984L162.27418825867449,196.83941373804777L162.1215752373878,198.5633530575816L160.90067106709398,199.5343287114929L160.35126419046173,198.40669696050116L159.43558606274178,199.40906976839727L159.2524504371977,201.00549641940967L160.68701283729274,203.4444794998073L160.1070833564031,204.44418025571093L158.61147574779352,204.50664409297156L156.23071261572045,202.47551668439485L154.97928584116949,203.97563604386954L154.15517552622123,202.97568841225302L150.67559864088412,202.9444315496018L149.54626228336224,203.31947987750527L149.69887530464894,204.97505752006396L147.31811217257632,206.00516188196127L147.53177040237756,207.37777078237042L143.10599278506288,209.34138812225905L140.48104881893119,207.53368681349622L141.27463652962228,205.66185557583293L144.63212299792986,206.4108079620724L144.2658517468417,200.3796082141605L146.5550470661426,199.75351175826694L146.860273108716,198.37536416819034L145.6698915426798,195.52187726417066L144.35741955961385,195.05110222758947L142.61763111694518,196.1180211826931L137.39826578893963,195.42773180132082L137.5814014144837,193.54381855541118L138.37498912517447,194.2348091357748L138.49707954220378,190.7772667719545L136.3910198484474,191.02894334232036L135.90265818032958,193.13538456821874L134.86488963558008,193.57523281695995L132.48412650350735,192.41254923789603L132.36203608647804,194.26621167158163L134.43757317597715,194.54881054780998L134.28496015469057,195.80428504528447L132.545171712022,196.4003384968189L131.8126292098458,194.9569328954554L130.37806680975052,198.78264958382664L130.4085894140078,198.81397556387952L132.33151348222043,199.65957929887537L130.92747368638265,202.1941119791938L131.11060931192674,202.28791820015834L132.57569431627917,202.22538123662463L134.16286973766114,205.91153901270292L132.97248817162472,208.34424596458103L133.21666900568357,211.27188480712363L132.2399456694485,212.9206233486916L129.00454961817002,214.35047178679957L127.90573586490575,216.40016742137624L129.76761472460385,218.19965015933798L127.93625846916314,219.65664866120954L125.03661106471554,220.21436423755597L124.05988772848036,218.50973979805667L122.38114449432646,218.50973979805667L122.50323491135578,217.2380623215809L120.97710469848869,216.21392001969832L120.70240126017268,216.18287706793234L119.20679365156263,216.15183362511266L118.29111552384234,214.53689650460376L115.66617155771087,214.44368636990544L116.03244280879903,211.92532614117442L111.9729364425724,208.50008350738796L112.70547894474862,205.5682158629216L110.50785143821997,206.16118979811034L108.18813351466167,203.5694708849033L109.62269591475683,201.34964633755442L108.21865611891906,200.44220639812283L108.37126914020598,198.97059761130225L106.81461632308117,199.59695504941027L106.75357111456674,200.97420694776577L103.42660725051633,200.94291695662338L100.83218588864202,198.78264958382664L99.79441734389229,200.2544055982429L96.58954389687119,196.87077229807448L86.51708449194803,196.21213171062738L83.92266313007372,197.18432890630186L81.32824176819952,196.1180211826931L78.4285943637517,189.1405268127719L75.43737914653218,185.45248854079193L75.55946956356149,181.34584405211615L70.15696861001163,180.776492376087L67.77620547793879,177.35656946908568L68.78345141843124,168.04500896765512L63.71669911171227,167.31196645720127L59.840328371029614,165.14289627143268L60.878096915779224,158.4269928245435L66.76895953744645,152.649345755078L68.26456714605638,148.88320743525566L71.49996319733486,145.72210293068736L74.46065581029723,145.7543895390508L76.84141894236996,150.13952948956455L78.70329780206771,150.3649231586627L82.82384937680922,148.49645628004276L88.92837022827803,147.85167127070133L92.19428888381378,146.49680784443728L92.65212794767399,143.94536758871072L96.34536306281257,139.90018655809632L97.77992546290761,135.35766446802495L106.44834507199323,129.98755885696323L110.81307748079325,121.98034396735517L112.46129811068988,116.00572092858584L120.36665261334178,111.82301787824656L119.35940667284945,115.34777435373405Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M320.9306851883464,158.97164301432684L318.7330576818176,158.26676841728613L316.59647538380364,159.96438075171102L312.81167245589313,159.51611913177163L310.858225783423,157.91422157765504L311.28554224302593,153.67792909399498L313.36107933252515,148.20633394816736L312.44540120480497,147.8839164578966L312.62853683034905,146.49680784443728L316.01654590291423,146.2708896664248L319.4045549754794,144.3008676287286L320.9306851883464,144.78551701980734L322.67047363101506,147.5291849910377L321.14434341814786,152.61719238337002L322.94517706933107,157.04856904694105L321.60218248200795,157.46541980122146Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(251, 127, 96) ", "d", "M216.42128821120218,296.5339240099695L216.45181081545934,297.0727133121758L216.23815258565787,297.2822117225193L215.2919518536803,296.7733999960225L214.13209289190127,297.52161741475516L214.19313810041604,298.17986742219495L215.9024039388271,300.36285122769544L217.36748894317975,300.3329598415919L220.08400072208337,302.2453128666533L218.37473488367186,303.0218042068859L217.97794102832654,304.3651859901304L214.49836414298943,304.8128268639134L213.39955038972494,307.1393337714157L209.7978830873585,305.7078799995528L208.9432501681531,306.24476600280224L208.21070766597654,308.4508211532677L210.13363173418952,308.71900035747365L209.85892829587328,311.0420950467033L206.53196443182264,309.4935890337507L205.76889932538916,307.52688604040657L204.85322119766874,307.43745592394384L202.83872931668407,308.1826149673499L202.10618681450796,309.6127366147748L203.17447796351507,310.32751090500693L201.4346895208464,312.8872286067764L199.14549420154572,311.518379159578L192.24738563938604,313.8985432022649L191.6979787627538,318.2963904532811L188.92042177533563,318.3854635765582L185.07457363891035,321.53088972067985L183.70105644732985,320.55203220415694L180.5572282088233,320.70036588570076L178.69534934912554,321.35294098294366L176.40615402982462,324.28766305684803L168.3787091101433,322.9837176362416L168.0734830675699,318.35577285290105L169.47752286340778,317.46490333297834L165.2959260801515,316.18748964449435L164.8686096205488,315.26619571293224L167.0967597313347,314.55272325543325L167.6156440037098,313.30369780585465L167.0967597313347,312.53020414790774L168.2260960888566,307.646121511768L166.5473528547027,305.7973685860947L166.60839806321746,304.63377967437043L170.36267838687058,300.3329598415919L167.40198577390834,299.49586032740257L167.64616660796696,297.82084297273605L168.74498036123146,297.43184291151766L168.56184473568737,295.9950205723777L170.30163317835604,293.95812817829443L168.89759338251815,289.36907046446794L169.53856807192233,285.7337911155479L171.5835825571644,285.1323992535206L171.4004469316203,283.89908167546065L173.62859704240645,281.1293504773662L171.85828599548063,279.50215294003885L173.10971277003136,274.91591452941475L174.3306169403254,274.3420082365823L177.5049677830891,275.76141604028567L177.56601299160366,273.5564352365427L179.21423362150017,272.6799079985637L178.909007578927,269.3521449195498L180.43513779179398,267.2016768662109L186.5091360390054,268.32259431133747L186.69227166454925,269.8062123161975L188.1878792731593,269.8970150850681L188.85937656682086,271.47036419137083L191.17909449037893,272.64967705390455L192.06425001384196,270.4417568409292L194.99442002254705,272.07521462624817L199.17601680580287,270.6233089422055L201.83148337619173,273.46577524267923L201.40416691658925,276.69715361423243L200.27483055906714,277.72302116688763L201.19050868678755,278.59767571566164L201.25155389530232,282.30386358808977L203.75440744440448,283.83890383337604L205.82994453390393,283.2370432763951L206.83719047439627,285.10232576913126L208.82115975112356,284.5308590263338L210.77460642359347,286.06449354268136L212.02603319814466,288.227990553586L211.99551059388727,288.3180949799141L212.85014351309292,289.9994416181835L212.17864621943136,291.0197034058127L215.41404227070961,291.0797057813392L215.41404227070961,291.19970619899294L216.3907656069448,296.5339240099695Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "d", "M368.05758616168487,198.84530102033034L368.6069930383171,200.5673965204308L367.78288272336886,202.6318345460121L368.9122190808905,202.6005720066459L369.3700581447506,207.65841050961166L368.54594782980234,210.40028649628948L364.0896476082303,211.30300605842376L364.60853188060514,214.0086468983813L362.01411051873106,216.58639715955564L362.47194958259115,219.65664866120954L359.7554378036875,221.94847874716538L357.5272876929014,217.30011441252452L356.5505643566664,218.23066131529464L355.7569766459753,217.5793246231559L353.5288265351894,212.23641131278447L354.50554987142436,208.00135886578937L357.13049383755583,204.69402329889738L359.358643948342,205.19361102122667L360.33536728457693,203.5694708849033L361.7394070804148,204.10059246293378L362.6245626038776,203.13196499103128L363.7538989613995,204.13183028358338L363.9065119826862,201.25579349773267L366.1651846977297,200.7551660969773L367.2334758467366,200.0352809648292L366.989295012678,198.81397556387952Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(252, 162, 133) ", "d", "M203.05238754648576,133.14669802701462L207.14241651696966,136.16976075513588L209.6757926703292,135.26018555446535L214.43731893447466,138.89543404245217L218.55787050921617,140.41852690529026L220.14504593059792,143.81607584321438L221.48804051792104,143.29880739535497L222.1595378115826,144.62398303017113L227.74517439067654,148.10961526296887L230.2480279397787,147.1098592201309L235.46739326778425,150.8799946203187L238.58069890203342,150.26832959405834L239.34376400846713,153.58152611592106L245.295671838649,154.32047465512414L247.03546028131768,156.18247453827212L248.2563644516115,153.93497672433472L251.03392143902965,154.06348583230073L254.54402092862415,155.95785921029136L256.2838093712926,158.49107836287521L255.7038798904032,159.45207214233835L257.199487499013,162.9071812434185L259.610773235343,163.25870016587788L262.1136267844456,166.92938662103137L258.5424820863361,166.73806505921902L255.2155182222857,168.74589103723582L255.15447301377117,169.6056792595718L258.81718552465236,170.75140522521156L258.6035272948509,172.4685895178245L256.4974676010943,173.54891880635228L257.13844229049823,174.91426960042713L264.92170637612094,179.54227580713956L263.4871439760259,181.2509646572267L261.808400741872,180.4917487015602L261.6252651163279,180.39682408232358L260.80115480137965,181.34584405211615L257.4131457288147,180.99792839950499L257.535236145844,181.8833992491612L253.50625238387465,185.45248854079193L247.64591236646447,188.44761906908104L247.24911851111915,191.2176781502722L248.16479663883933,194.6430005995059L249.17204257933167,195.3963489203157L249.23308778784644,195.3963489203157L249.9351076857654,198.09334543054013L249.9351076857654,198.15601993442067L249.66040424744915,198.50069219140562L248.22584184735388,198.87662595323837L248.80577132824374,201.16193598722776L247.2796411153763,204.81893251934042L244.62417454498745,207.9701842749647L242.27393401717222,208.21956682956824L240.2899647404447,206.87875419894385L238.94697015312136,205.13116972227806L239.7100352595553,196.77669503583218L235.04007680818177,195.86703650561947L234.88746378689484,197.4351362669704L233.39185617828525,196.99620126570335L232.17095200799145,194.48601452135074L228.01987782899255,193.19822644206738L227.9893552247354,191.72087629050833L224.54030094365567,190.33674974712545L223.47200979464856,188.54212196456206L221.7322213519799,189.77021521096702L219.41250342842181,188.98307084608007L217.97794102832654,192.09818463390826L213.82686684932787,192.41254923789603L214.01000247487195,190.39968722514823L212.39230444923282,189.3609423963207L208.66854672983686,191.56364165612854L206.92875828716842,189.3609423963207L207.66130078934452,188.1640810258138L206.4403966190505,187.25015843300923L206.40987401479333,185.61025013245296L204.76165338489682,185.38938005911166L200.09169493352329,187.94352097080645L199.84751409946466,189.99055500466773L196.0932337758113,188.95157802553268L195.26912346086306,190.24233948095866L193.89560626928255,189.67577575762942L194.53658095868673,187.84898706665354L193.16306376710622,186.49346160626192L192.1558178266141,186.84032006742433L193.25463157987838,188.0065408509675L192.39999866067274,189.67577575762942L190.4465519882026,189.8331721416243L188.98146698385017,187.9750311831071L186.84488468583618,188.6366199699891L185.80711614108645,187.0925392167241L187.85213062632852,183.52668896606122L184.89143801336627,184.53720023690437L185.44084488999852,186.11499502463192L183.24321738346953,185.2315992380614L182.1138810259481,187.18711238446951L183.76210165584462,190.55702147577819L183.51792082178576,192.03530527747847L185.44084488999852,193.54381855541118L185.2577092644542,197.40378718932084L186.99749770712287,196.87077229807448L188.1878792731593,201.06807380443928L185.68502572405714,203.63196348967858L181.83917758763164,200.50480250005467L180.28252477050728,202.3191859063794L178.66482674486792,199.72220146036454L178.66482674486792,196.4317044454445L177.35235476180242,193.19822644206738L181.045589876941,189.1405268127719L179.61102747684572,185.04224410936376L181.594996753573,182.76843393137193L185.83763874534384,182.23114338770483L185.37979968148352,180.6499452196701L190.23289375840136,171.1013384975273L188.43206010721792,166.06827322577425L184.7998702005941,164.34475950152063L182.75485571535205,164.98329843680057L180.00782133219127,163.25870016587788L177.93228424269182,163.80181544448118L178.23751028526522,162.33181331391853L176.95556090645687,161.94812753591214L171.88880859973779,162.26787164183634L167.79877962925366,164.79176156244455L167.1578049398497,163.67403903005618L168.0429604633125,162.7793383567967L170.88156265924545,161.62832380630647L169.08072900806224,160.54054426143142L170.24058796984127,157.65777793925122L166.12003639509976,153.29228404852512L165.26540347589435,148.9798811968089L168.77550296548884,146.1095006792728L167.95139265054058,144.4301213798534L168.80602556974623,143.07245134985874L166.12003639509976,138.1820083402821L165.9369007695559,135.4876272262274L165.9674233738133,135.45513751431105L164.07502190985792,132.62603015527168L162.70150471827742,121.22656360321878L165.23488087163696,114.22862609791827L167.18832754410687,113.24047204152828L169.38595505063563,108.91811864105654L169.20281942509155,108.62071748249667L174.02539089775178,110.96532169232694L171.0952208890467,117.05785799558498L171.85828599548063,119.42257921071393L172.86553193597274,120.11161775741431L174.3306169403254,119.4553974320811L174.84950121270003,121.94757840618342L179.6415500811031,118.17497726227435L181.7476097748597,119.0287069682065L184.5251667622781,122.66826353625942L187.33324635395365,123.48682471723822L185.01352843039558,125.71117135364824L187.3942915624682,128.06297116294195L189.6834868817691,128.22616175197282L194.13978710334118,131.61675668420116L194.26187752037072,132.8213003259392L199.20653941006026,132.2679733263771L202.10618681450796,134.96771359128206Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 242, 235) ", "d", "M203.05238754648576,133.14669802701462L202.10618681450796,134.96771359128206L199.20653941006026,132.2679733263771L194.26187752037072,132.8213003259392L194.13978710334118,131.61675668420116L189.6834868817691,128.22616175197282L187.3942915624682,128.06297116294195L185.01352843039558,125.71117135364824L187.33324635395365,123.48682471723822L184.5251667622781,122.66826353625942L181.7476097748597,119.0287069682065L179.6415500811031,118.17497726227435L174.84950121270003,121.94757840618342L174.3306169403254,119.4553974320811L172.86553193597274,120.11161775741431L171.85828599548063,119.42257921071393L171.0952208890467,117.05785799558498L174.02539089775178,110.96532169232694L169.20281942509155,108.62071748249667L172.40769287211265,106.9343548316312L170.91208526350283,102.8927484306331L173.8422552722077,96.71016780921144L180.19095695773535,94.64365555402424L181.53395154505847,96.01053890137837L185.95972916237315,95.97721510483848L187.1195881241522,97.57592396532709L188.70676354553393,97.37617831386257L187.4553367709832,95.11053640160657L189.50035125622503,91.73905102923783L190.50759719671737,92.27365564059153L194.32292272888526,98.64078681097607L195.54382689917907,98.60752123537691L196.7342084652155,100.13697931451173L198.74870034620017,99.13968242230482L200.30535316332475,99.53868019725633L205.5247184913303,103.32392198767354L205.15844724024237,105.84218888031165L210.34728996399076,107.39746262875519L216.23815258565787,111.79003836853269L213.85738945358526,112.21871712431476L208.7295919383514,118.14213220421902L207.66130078934452,118.20782163082231L207.6918233936019,121.1937823574554L205.86046713816108,124.37039504759855L205.79942192964654,128.25879786741103L203.93754306994856,129.36802922022986Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(254, 227, 214) ", "d", "M313.6357827708414,239.26975917154766L314.8566869411352,240.58908499979282L314.58198350281896,242.18344520085515L313.5747375623266,241.3557547066373ZM321.90740852458134,239.20837499461243L322.3042023799269,241.01845439726253L321.60218248200795,241.0491202916707ZM315.1313903794512,237.82675494105968L315.741842464598,239.1776822320631L314.8261643368778,240.03690988621923L314.70407391984827,239.1776822320631L314.45989308578964,238.87072987726202L314.215712251731,238.80933400798517L314.154667043216,238.62513559567657L314.7345965241059,238.31810220074544ZM312.47592380906235,237.61175415347066L312.44540120480497,241.2024430725976L311.1939744302538,240.92645403661663ZM321.9684537330961,236.99734401983756L323.7082421757648,237.79604189884685L322.7009962352722,238.5330303093064ZM321.6632276905225,235.52201902332877L322.82308665230175,235.61425755026426L322.94517706933107,236.84371317011062L320.83911737557423,236.44421987161292ZM320.0455296648836,232.7529483371676L321.32747904369216,233.30705986288467L320.015007060626,234.44559927031622L319.22141934993533,234.26101391510616L319.49612278825134,233.43017550951032ZM323.9829456140808,230.195941570201L324.7460107205145,232.5374202090805L323.7692873842793,232.66058190602195ZM323.097790090618,227.51226254013307L323.58615175873547,227.72832194823815L324.1660812396249,229.51764437634682L323.1893579033899,229.85682117367526L322.762041443787,228.9625059475522L322.79256404804437,227.57399615053043ZM320.9306851883464,158.97164301432684L322.51786060972836,159.54814172464114L326.02796009932285,164.12121501728967L328.62238146119716,163.45040748252154L335.8867612744448,165.71732645804565L335.8867612744448,170.5605030367339L335.8562386701876,170.5923215148057L333.9943598104894,172.4685895178245L333.9943598104894,173.8665365797737L332.8955460572254,173.13593005282792L331.6441192826742,176.4054241582175L329.0496979207999,176.21513389820308L326.394231350411,174.27935415079338L325.41750801417584,170.33775747990103L324.0134682183384,170.01950029906925L324.257649052397,171.92817577090779L320.9306851883464,171.67380583130364L315.9860232986566,167.05692260557186L315.49766163053914,168.68218614491968L317.7258117413253,170.5923215148057L312.8421950601505,174.7873047702896L312.2012203707461,179.4473007787892L315.741842464598,180.71321991515117L318.1531282009282,183.65303380772946L321.9684537330961,184.1899007460447L322.12106675438304,185.92573214532666L324.257649052397,186.90337813339573L323.097790090618,188.92008466244016L316.626997988061,188.38461442124913L316.0470685071714,192.2553736379195L314.7956417326204,193.19822644206738L312.9948080814372,192.2239369096822L310.82770317916584,196.3376050148882L315.28400340073813,200.6925783184173L320.5033687287437,201.88139094977566L320.625459145773,207.56486849808186L318.488876847759,208.3754144841443L318.3362638264723,210.52482459633057L321.0527756053757,214.53689650460376L320.4423235202289,217.3621645474911L323.7082421757648,218.2616719839694L322.487338005471,219.65664866120954L322.4568154012136,221.54605110520356L323.7998099885365,223.40273289406628L323.3419709246766,227.41965859673337L322.79256404804437,227.54312958048155L322.4262927969562,227.79004897717965L322.1515893586404,229.48680732275432L323.3419709246766,231.49024742608037L322.8841318608163,233.21471829890692L321.29695643943455,233.15315495590022L320.71702695854515,232.87609712611527L320.0455296648836,232.7221599877762L319.7708262265671,232.78373622564192L319.03828372439125,234.1994817982236L318.7941028903324,237.15096353620265L314.42937048153226,237.88817966996305L314.88720954539235,238.04173358755304L314.154667043216,238.56373252196136L314.12414443895887,238.71723682807908L314.3378026687601,239.42321175213834L313.5747375623266,239.23906730775576L312.7201046431212,236.38275255236988L313.6663053750988,234.66092801839045L311.3465874515405,235.5835118304916L308.4164174428356,239.94486659914298L303.7159363872047,241.60103015248086L303.13600690631506,239.20837499461243L300.9383793997863,238.65583645684558L300.29740471038235,236.41348643917866L297.09253126336125,237.08951708922262L297.6114155357359,235.89094852383107L296.543124386729,234.5071240583738L293.27720573119313,233.64561019464406L293.3687735439653,232.5990019799372L294.6812455270308,231.92150094083127L295.0169941738618,229.94931414490316L293.8266126078254,227.3270504186288L292.4225728119875,227.29618008462108L292.208914582186,226.1536463201527L289.2176993649666,224.36134375580036L288.912473322393,221.4531716434497L286.4401423775482,221.20547189416004L284.08990184973277,218.9747830047379L282.44168121983625,219.16076966401602L281.34286746657176,218.2616719839694L281.67861611340254,214.44368636990544L284.15094705824754,213.85325215078456L284.08990184973277,212.45414127700917L285.4634190413133,212.6718468413776L286.6232780030923,214.63010219244688L288.33254384150337,214.22617875356246L289.61449322031194,211.7386510928427L294.31497427594286,210.92951801988988L295.71901407178075,208.0637065287192L299.1375457486031,209.34138812225905L298.9849327273164,208.2507373719519L301.1215150253304,207.9390091778222L301.64039929770524,205.84912121573285L303.0749616978005,206.62919711934467L303.8685494084914,204.5691058789423L306.49349337462286,204.0693541286966L306.37140295759355,202.6318345460121L307.92805577471813,200.6299884597268L307.92805577471813,197.9366499827334L309.1794825492691,197.9366499827334L309.3626181748134,195.5532580252655L308.5385078598649,195.30219709629188L310.2477736982762,193.1668057723465L307.62282973214474,189.89612690892983L307.836487961946,188.10106658852192L308.69112088115185,186.9349063465662L307.74492014917405,186.33577678145218L307.8059653576886,184.66347442243222L311.07188401322446,183.1160070911087L311.37711005579786,181.09282118001113L308.3248496300637,178.3072060419131L308.56903046412253,175.7075932830453L314.42937048153226,170.6877734767849L312.17069776648896,168.20432513710517L312.9642854771798,163.22674686933328L310.5529997408496,159.58016371636643L310.858225783423,157.91422157765504L312.81167245589313,159.51611913177163L316.59647538380364,159.96438075171102L318.7330576818176,158.26676841728613Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 242, 236) ", "d", "M293.3687735439653,232.5990019799372L293.27720573119313,233.64561019464406L296.543124386729,234.5071240583738L297.6114155357359,235.89094852383107L297.09253126336125,237.08951708922262L300.29740471038235,236.41348643917866L300.9383793997863,238.65583645684558L303.13600690631506,239.20837499461243L303.7159363872047,241.60103015248086L299.10702314434593,242.9801744645319L296.35998876118515,245.2461535842138L294.92542636108965,248.09053365098356L297.27566688890533,254.98713191774704L294.19288385891355,257.2101616071401L293.4603413567372,258.94440236307213L294.1318386503988,260.16060780375307L290.65226176506144,262.4392150620216L288.4851568627903,265.62540518825807L274.68893973847094,270.8653562868201L268.4623284699728,275.76141604028567L266.7835852358189,278.1151474681792L265.4405906484958,277.39117141111234L264.5554351250328,278.8389031794164L263.36505355899635,278.59767571566164L260.9842904269235,282.12320652052233L257.71837177138787,282.78554969425693L254.69663394991085,281.7317364378476L253.59782019664635,279.0198077595762L252.74318727744094,279.4720092201595L251.09496664754442,277.81351759575307L249.32465560061837,279.1404031915832L247.46277674092062,279.0499571890098L248.16479663883933,280.9787304070275L243.25065735340695,285.37297377993764L243.8000642300392,287.83749997710675L242.5791600597454,288.37816276902265L240.1678743234154,287.1765286261476L239.74055786381246,288.70850948116924L237.32927212748245,289.78933570565874L237.51240775302654,288.227990553586L235.8641871231298,286.0945551824418L234.24648909749067,287.59716730804536L233.91074045066011,292.7591872219612L229.69862106314645,292.60927934569577L224.05193927553773,296.0848457500621L220.9996788498038,296.2046077118945L222.9226029180163,289.7593191226495L225.88329553097856,288.52832584511634L228.63032991413934,285.4932521491711L228.7218977269115,283.74863427226677L231.31631908878558,282.3941870507803L231.65206773561658,280.70759047588075L232.567745863337,280.43641990785056L231.65206773561658,273.01242255276526L229.97332450146268,271.44011753943414L230.03436970997723,267.80764617245734L227.40942574384576,266.26210739354576L227.43994834810314,264.47282467117066L228.4166716843381,263.35001258641796L229.54600804185975,264.50316322709546L232.90349451016755,265.2008382089091L233.94126305491727,267.23197913650927L235.77261931035787,266.2317922694642L238.7943571318349,267.29258247465907L238.97749275737897,265.0491879488828L234.704328161351,264.10873035483957L233.84969524214512,252.63985615548177L236.84091045936498,251.17534329877094L237.97024681688663,248.15166175250624L245.50933006845048,248.3044744181447L246.5470986132002,244.8788613002298L247.98166101329525,245.3991733835826L248.04270622181025,241.41707624064185L251.03392143902965,237.05879318600432L250.14876591556663,236.29054816515082L250.45399195814025,234.2917792861951L251.64437352417667,232.47583659301011L256.4669449968369,230.35006858008524L256.4974676010943,228.12951405384905L260.37383834177695,230.81237985238442L270.7210011850161,228.71572913183434L271.45354368719245,231.49024742608037L270.35472993392796,233.4917305743819L272.85758348303034,235.09151828064324L275.57409526193373,233.46095327177034L282.13645517726286,236.07538868164835L283.93728882844584,233.0300227470495L283.1742237220126,232.16789081898418L283.87624361993153,230.1651147719117L282.9605654922111,229.0550395342894L284.5172183093357,227.79004897717965L289.33978978199593,231.24377609583013L290.3470357224883,230.75074439072176Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(252, 169, 141) ", "d", "M217.09278550486374,296.0848457500621L220.9996788498038,296.2046077118945L224.05193927553773,296.0848457500621L229.69862106314645,292.60927934569577L233.91074045066011,292.7591872219612L234.24648909749067,287.59716730804536L235.8641871231298,286.0945551824418L237.51240775302654,288.227990553586L237.32927212748245,289.78933570565874L239.74055786381246,288.70850948116924L240.1678743234154,287.1765286261476L242.5791600597454,288.37816276902265L243.8000642300392,287.83749997710675L243.25065735340695,285.37297377993764L248.16479663883933,280.9787304070275L247.46277674092062,279.0499571890098L249.32465560061837,279.1404031915832L251.09496664754442,277.81351759575307L252.74318727744094,279.4720092201595L253.59782019664635,279.0198077595762L254.69663394991085,281.7317364378476L257.71837177138787,282.78554969425693L260.9842904269235,282.12320652052233L263.36505355899635,278.59767571566164L264.5554351250328,278.8389031794164L265.4405906484958,277.39117141111234L266.7835852358189,278.1151474681792L257.9625526054465,289.2489815850148L252.3463934220954,292.09952546188765L245.72298829825195,299.40615495477607L236.84091045936498,304.15626077316904L233.3002883655131,307.43745592394384L232.59826846759415,309.25527795926075L234.18544388897612,310.26795365246903L233.2697657612557,313.8688040178798L225.5170242798904,317.58370248682473L220.84706582851686,316.8708309865425L219.16832259436296,317.4352027475785L217.7337601942677,322.2722218400223L215.1393388323936,325.67985502212247L213.4605955982397,326.0648098698616L211.99551059388727,323.5468584091875L209.03481798092503,323.93210090414357L206.7761452658815,325.4429340376371L203.87649786143402,330.6802717989237L202.71663889965475,335.31799369815957L204.73113078063943,342.12865598971723L203.84597525717663,347.4546586828104L205.76889932538916,356.1454691411702L205.15844724024237,357.23019908513936L202.35036764856682,356.99569285621556L201.25155389530232,359.13495266958387L197.80249961422237,360.5115644548847L194.35344533314264,359.34001553159027L194.41449054165741,361.24357692439133L191.75902397126856,361.9461608612975L190.7823006350336,363.7019902704528L185.99025176663054,362.7656596571312L183.51792082178576,364.19931249303204L182.60224269406558,368.05845732868727L180.12991174922058,369.2562695691013L178.1154198682359,367.2986588245261L178.3901233065519,365.9832347420145L181.320293315257,364.34557012173445L182.78537831960944,360.0429935870316L179.91625351941934,358.9005798184596L180.2520021662499,355.7349383076887L176.161973195766,354.7963905689239L176.52824444685393,351.9497762926493L175.64308892339113,351.50935604630865L173.8727778764653,351.33317117592173L168.65341254845953,354.0042827666192L167.24937275262164,352.36078125151624L164.74651920351948,351.42126481030095L163.73927326302692,353.35872009646346L161.05328408838068,352.5956178941996L161.9689622161011,350.98077263075123L160.68701283729274,348.3659442568975L161.75530398629962,347.51345918839525L161.78582659055724,349.18881693426687L163.3119568034242,349.95272352936126L165.72324253975444,349.5707929861326L166.21160420787191,351.39190053205255L167.1578049398497,351.39190053205255L166.0895137908426,349.18881693426687L166.79153368876155,347.6016579039008L168.40923171440068,347.51345918839525L168.25661869311398,346.3078305308318L166.8525788972761,345.33711180311076L166.3642172291586,346.1607711712413L163.55613763748283,345.21942855704935L162.1215752373878,346.6019286885554L160.6259676287782,346.6019286885554L159.89342512660187,344.4838081487328L161.11432929689568,343.2475757662546L159.61872168828563,343.3064551039471L158.21468189244774,341.598500092588L159.61872168828563,336.4394146885385L158.24520449670536,336.38040296782873L158.67252095630806,334.66855804845784L159.77133470957233,335.55411716747335L162.94568555233604,335.5246027516107L163.6782280545126,333.5760063684099L163.4645698247109,331.92164905893696L161.9689622161011,330.88720444523574L162.48784648847595,323.13192341915345L164.8380870162914,322.4797599395413L168.3787091101433,322.9837176362416L176.40615402982462,324.28766305684803L178.69534934912554,321.35294098294366L180.5572282088233,320.70036588570076L183.70105644732985,320.55203220415694L185.07457363891035,321.53088972067985L188.92042177533563,318.3854635765582L191.6979787627538,318.2963904532811L192.24738563938604,313.8985432022649L199.14549420154572,311.518379159578L201.4346895208464,312.8872286067764L203.17447796351507,310.32751090500693L202.10618681450796,309.6127366147748L202.83872931668407,308.1826149673499L204.85322119766874,307.43745592394384L205.76889932538916,307.52688604040657L206.53196443182264,309.4935890337507L209.85892829587328,311.0420950467033L210.13363173418952,308.71900035747365L208.21070766597654,308.4508211532677L208.9432501681531,306.24476600280224L209.7978830873585,305.7078799995528L213.39955038972494,307.1393337714157L214.49836414298943,304.8128268639134L217.97794102832654,304.3651859901304L218.37473488367186,303.0218042068859L220.08400072208337,302.2453128666533L217.36748894317975,300.3329598415919L215.9024039388271,300.36285122769544L214.19313810041604,298.17986742219495L214.13209289190127,297.52161741475516L215.2919518536803,296.7733999960225L216.23815258565787,297.2822117225193L216.45181081545934,297.0727133121758L216.42128821120218,296.5339240099695L216.5433786282315,296.5638597406601L217.0012176920916,296.14472743678016Z\n                                ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "#ffffff ", "pointer-events", "all ", 1, "path-region", 2, "cursor", "pointer"], ["fill", "rgb(255, 241, 234) ", "d", "M158.61147574779352,63.0198530991845L153.20897479424366,56.323092671183986L151.22500551751614,57.28172505413653L148.60006155138467,51.10759527997857L147.0434087342603,51.07321812298369L144.3268969553567,47.631195548623964L140.1453001721003,45.14762674187028L139.7179837124977,41.93304029607788L138.98544121032148,41.725388933406236L137.33722058042497,40.20164941905426L136.45206505696183,36.69753149098585L133.27771421419823,37.49629155318104L129.30977566074364,35.41158413635662L127.75312284361917,32.6618250129211L122.04539584749568,32.0693733616157L117.65014083443839,30.49986262482497L116.45975926840197,29.34772517210172L117.40596000037954,25.675245240945628L113.9569057192997,25.570169213113672L111.0572583148521,24.06317104028983L108.98172122535277,22.519362822794506L108.27970132743394,19.81338164473152L104.31176277397901,20.481603673063432L100.55748245032578,19.355983072585218L101.53420578656096,17.52480773166178L101.22897974398745,13.890160508977488L106.84513892733878,9.82015319243294L108.40179174446325,7.585119332205068L108.18813351466167,5.950766679895764L118.01641208552633,5.4885121646086645L118.93209021324662,4.527919381135575L116.88707572800467,3.3885177261250874L121.98435063898114,3.7446882826612864L122.25905407729715,2.7471639345588983L129.88970514163316,-1.1368683772161603e-13L132.78935254608064,2.2124596975028226L135.62795474201357,0.9639562676318292L139.01596381457875,2.3194182173787112L139.840074129527,5.168393487180538L142.0071790317984,4.848195917285352L144.99839424901825,6.164059514088649L147.56229300663495,10.280875187326501L156.902209909382,14.561383862454022L159.2219278329403,20.094779302493635L162.6099369055055,22.098013563543418L166.12003639509976,22.44914720663178L168.43975431865806,26.30552818682179L173.689642250921,26.62055841876304L174.51375256586925,24.869451263683573L176.83347048942755,25.465084929810473L178.66482674486792,22.41403800992623L180.70984123011021,21.360331143503572L187.7300402092992,19.77820273996963L190.11080334137205,20.481603673063432L191.8200691797831,17.982839151522057L193.773515852253,17.91238310325059L194.2924001246281,19.531924274146945L198.65713253342824,21.114346028682917L202.07566421025058,20.481603673063432L203.66283963163255,23.151136854230117L206.07412536796255,24.41378748023726L206.56248703608026,26.550558103962203L203.02186494222838,39.12708525288622L199.0234037845164,40.652021787941464L199.2981072228324,42.936245535020646L196.3984598183847,42.86708250914717L196.45950502689948,46.97624310385066L193.62090283096654,50.31670548122213L188.73728614979154,50.041507800156694L187.2416785411815,51.27946831913704L189.95819032008512,57.17904575390446L187.42481416672558,56.870962788590475L188.43206010721792,61.792215565567346L194.68919397997342,62.95167891899308L193.74299324799586,67.58008854731867L197.03943450778888,71.38048476578052L194.59762616720127,74.69760637596141L193.13254116284907,73.75063574333666L190.08028073711444,77.09607817105416L188.00474364761521,77.36607991668075L186.17338739217462,76.18445113217246L185.1356188474249,72.29514807751991L183.36530780049884,73.68297121160884L180.98454466842622,74.08891082772845L179.39736924704448,75.677743803937L179.24475622575756,74.02126215187911L180.4656603960516,73.31075954913109L179.21423362150017,71.85482723046636L174.88002381695742,73.78446681947258L171.30887911884838,67.64804132828715L165.99794597807045,70.05827577200853L163.4950924289683,67.51213253312966L160.50387721174866,66.62840981911057Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["fill", "rgb(254, 217, 201) ", "d", "M122.04539584749568,32.0693733616157L127.75312284361917,32.6618250129211L129.30977566074364,35.41158413635662L133.27771421419823,37.49629155318104L136.45206505696183,36.69753149098585L137.33722058042497,40.20164941905426L138.98544121032148,41.725388933406236L139.7179837124977,41.93304029607788L140.1453001721003,45.14762674187028L144.3268969553567,47.631195548623964L147.0434087342603,51.07321812298369L148.60006155138467,51.10759527997857L151.22500551751614,57.28172505413653L153.20897479424366,56.323092671183986L158.61147574779352,63.0198530991845L157.97050105838912,64.24642835910902L153.27002000275797,64.17831308982551L151.2860507260309,66.62840981911057L149.332604053561,67.10432851265563L148.29483550881105,68.49717856177188L147.16549915128962,69.00641900700487L145.4562333128781,68.29343161925806L147.0128861300027,72.904600859362L144.11323872555522,76.55592392205733L140.81679746576197,78.14205546994259L136.02474859735923,76.72474373204557L134.71227661429316,75.33984038247365L133.52189504825685,76.11690039462343L129.9507503501476,75.44121969226615L129.0655948266849,71.10936163747255L125.89124398392107,71.0754676491186L115.69669416196837,65.74413909562918L116.06296541305642,63.83768772415539L114.7199708257333,61.177997201464734L115.54408114068156,57.7607959022165L115.08624207682146,52.51632801770637L112.55286592346192,44.97499051283046L113.1938406128661,41.448471492804515L115.51355853642417,41.24074666916789L117.61961823018089,37.774011305028694L121.099195115518,36.454337474763804Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["fill", "rgb(187, 21, 26) ", "d", "M211.11035507042425,245.5521822208658L210.86617423636562,246.6841075685894L208.39384329152085,247.87657162909966L207.93600422766053,250.2289878795035L208.424365895778,251.4194971593605L209.46213444052773,251.35846126308388L210.560948193792,260.13021073284955L207.3865973510285,261.3457720344148L209.27899881498365,263.0464542238053L208.82115975112356,266.35305035113015L209.5231796490425,268.0802801542756L211.2324454874538,269.2613207201013L211.17140027893902,270.4417568409292L214.2847059131882,272.52874935785417L212.8806661173503,273.0728746584032L213.58268601526902,274.1003215059027L212.3617818449752,275.0971189874584L210.37781256824815,274.73469610736834L209.76736048310136,273.4959956308863L207.44764255954306,275.7312247817458L205.82994453390393,279.381575778605L206.8982356829108,281.91242283813045L205.82994453390393,283.2370432763951L203.75440744440448,283.83890383337604L201.25155389530232,282.30386358808977L201.19050868678755,278.59767571566164L200.27483055906714,277.72302116688763L201.40416691658925,276.69715361423243L201.83148337619173,273.46577524267923L199.17601680580287,270.6233089422055L194.99442002254705,272.07521462624817L192.06425001384196,270.4417568409292L191.17909449037893,272.64967705390455L188.85937656682086,271.47036419137083L188.1878792731593,269.8970150850681L186.69227166454925,269.8062123161975L186.5091360390054,268.32259431133747L180.43513779179398,267.2016768662109L178.909007578927,269.3521449195498L179.21423362150017,272.6799079985637L177.56601299160366,273.5564352365427L177.5049677830891,275.76141604028567L174.3306169403254,274.3420082365823L173.10971277003136,274.91591452941475L171.85828599548063,279.50215294003885L173.62859704240645,281.1293504773662L171.4004469316203,283.89908167546065L171.5835825571644,285.1323992535206L169.53856807192233,285.7337911155479L168.89759338251815,289.36907046446794L167.76825702499627,289.81935192540726L165.69271993549728,287.26667154646765L162.21314305015994,291.37969599785947L160.80910325432205,290.89969431939915L160.22917377343242,294.43754469434106L157.23795855621302,297.7310789844847L154.94876323691233,296.9829230091977L153.48367823255967,299.1669253288826L152.32381927078063,299.3164464535559L153.02583916869935,303.350250169306L149.4546944705903,302.5439907796739L146.8907957129736,303.17110294929057L146.37191144059852,302.0063458392557L145.24257508307687,302.5141245307083L142.86181195100403,300.9904904661687L143.31965101486412,308.00379583645497L138.10028568685846,308.42102179900735L137.33722058042497,310.0297114299841L134.25443755043318,308.5402172175938L133.06405598439676,310.803921420013L131.2021771246989,311.3100152107429L128.39409753302334,314.10670841090877L128.11939409470722,312.97647738207604L127.32580638401623,313.0359749359636L124.33459116679649,314.55272325543325L125.34183710728882,317.79158874040894L127.5089420095602,318.77141412015635L127.26476117550135,320.67069977705154L125.37235971154621,325.23561209511894L122.86950616244394,325.4429340376371L122.3200992858118,326.83456485261445L120.61083344740064,327.4265441164714L118.74895458770254,324.7616769211693L116.27662364285777,325.76869534181577L113.74324748949834,322.2722218400223L111.39300696168277,314.3148577374909L111.91189123405775,313.18471311967267L110.41628362544793,303.23082005501396L105.65475736130236,286.9962328603956L104.6475114208099,277.48168049216366L102.29727089299445,267.1713741950282L103.51817506328825,266.1711608136624L103.4571298547736,262.8946597476413L106.57043548902254,261.77106301673064L106.66200330179458,262.25701143148336L106.7840937188239,262.31774761162967L106.7840937188239,262.5910401732264L106.60095809327981,262.98573765754963L107.02827455288275,263.1375260136996L107.0587971571399,263.1071691582642L107.11984236565479,262.8642996279911L107.21141017842683,262.8946597476413L107.18088757416922,263.0464542238053L107.2419327826841,263.35001258641796L107.51663622100011,263.7445775545422L107.69977184654431,263.89631500115394L108.18813351466167,263.5017764858091L108.40179174446325,263.59282993895704L108.58492737000722,263.71422884515005L108.73754039129415,263.7445775545422L108.95119862109527,263.7445775545422L109.22590205941151,263.80527375310174L109.3785150806981,264.0176976411252L109.89739935307296,263.5624791949943L109.95844456158773,263.3196585844525L109.92792195733034,263.1071691582642L111.2098713361388,261.8621863355621L112.79704675752066,261.9533059646527L113.22436321712348,254.5300672876673L117.1617791663208,256.6622249738715L119.81724573670954,253.7375965928996L117.86379906423974,249.40440617135863L115.66617155771087,248.45727624888207L118.19954771107064,247.9071389342301L118.32163812809995,246.50059274767625L119.90881354948169,246.07233036160216L120.09194917502577,244.66457825395725L121.7096472006649,243.7459780379723L124.79243023065658,243.4090585024573L124.57877200085534,242.27539080541197L118.71843198344527,243.16399252643015L118.2300703153278,241.69300109785797L119.1457484430482,240.03690988621923L118.29111552384234,238.56373252196136L122.62532532838532,236.47495284972769L124.57877200085534,236.78225765534677L125.92176658817846,235.52201902332877L127.8141680521336,237.15096353620265L127.56998721807497,239.82213594271184L128.66880097133912,240.74244126204758L135.01750265686678,242.18344520085515L137.21513016339566,244.41965695643842L149.1799910322743,244.97069029945737L150.33984999405334,249.09892577140278L152.9647939601848,249.28221919207556L154.490924173052,247.54030260741945L156.29175782423522,247.60144634004416L156.3222804284926,245.6133826878991L158.61147574779352,243.28652905202887L158.64199835205068,241.72365718956053L165.20435826737935,239.3618320673579L168.1955734845992,239.48458964081811L169.14177421657678,242.70441748322895L167.18832754410687,242.48991501257632L167.37146316965095,243.5315808811676L170.5458140124149,244.97069029945737L173.62859704240645,244.90947140596433L177.3218321575448,243.13335728913034L177.47444517883173,242.27539080541197L180.7403638343676,241.6316875793721L180.98454466842622,243.07208548707302L187.66899500078443,243.3171620777984L188.24892448167384,241.41707624064185L191.54536574146687,240.92645403661663L191.78954657552572,239.97554814286326L195.23860085660567,240.58908499979282L196.4289824226421,242.45927002850647L198.56556472065608,241.6316875793721L200.24430795480998,242.64313327997309L205.7078541168744,241.3557547066373L208.2717528744913,244.51150574305888Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["fill", "rgb(245, 84, 61) ", "d", "M153.6973364623609,382.4935652753906L150.98082468345729,383.83218789650766L151.4386637473176,385.0830909846482L155.2539892794855,386.74064805955254L153.97203990067715,388.8624689884163L158.0315462669039,390.11178112230385L156.7495968880953,392.6092476803861L160.16812856491788,394.78602800455457L159.099837415911,401.33857466122106L161.32798752669692,402.3814199041055L163.8003184715419,400.6142294268115L164.9907000375781,401.8889962743811L165.0212226418355,403.8583593038814L164.13606711837247,404.0899912041013L165.14331305886503,405.8847294939965L163.86136368005646,410.2528040388928L166.8525788972761,412.18963039733654L165.05174524609288,417.1870315023024L163.43404722045375,419.00561517203175L164.9907000375781,421.4870518439776L164.04449930560054,422.8138308628762L165.23488087163696,425.4951848864017L162.7625499267922,428.981776470735L155.34555709225765,420.79468138504916L152.41538708355256,413.46114146943376L149.27155884504623,400.4983229441277L144.2963743510993,386.7987952732366L141.5493399679383,382.1442828468015L141.45777215516637,381.96962970863706L137.00147193359408,377.6298329266029L132.3925586907352,367.3571106792739L134.3460053632051,366.9186980863868L134.89541223983736,368.64280653594506L135.78056776330027,368.4382952850098L139.29066725289476,371.09602565988087L140.1453001721003,373.7517924538861L142.1292694488277,375.70590107614396L145.12048466604756,376.7845917136168L146.21929841931205,378.62056180378505L149.36312665781816,378.1835078460424L149.39364926207554,379.8440427624738L153.60576864958898,381.64941160429805ZM141.45777215516637,381.62029953867034L141.45777215516637,381.64941160429805L141.42724955090875,381.76585765103425L141.48829475942352,381.79496860898723L141.57986257219568,381.8531898607134L141.6714303849676,381.8240793455328L141.701952989225,381.8240793455328L141.79352080199692,381.79496860898723L141.8545660105117,381.76585765103425L141.82404340625453,381.6785234483058L141.6714303849676,381.47473588474315L141.6714303849676,381.2709374492982L141.64090778071045,381.2127073259676L141.5188173636809,381.2418224987406L141.48829475942352,381.2709374492982L141.48829475942352,381.32916668393744L141.5493399679383,381.38739503022566Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["fill", "rgb(194, 24, 28) ", "d", "M199.14549420154572,379.2906124712445L199.26758461857503,379.3488721124781L199.35915243134696,379.2906124712445L199.23706201431764,379.6110293662448L199.11497159728833,379.6984110731603L199.11497159728833,379.5819016814622L199.0234037845164,379.4362598870547L199.05392638877356,379.23235192973385ZM197.9551126355093,379.4653886954778L198.107725656796,379.4362598870547L198.13824826105315,379.6984110731603L198.19929346956815,379.7275378597974L198.29086128234007,379.9314190846095L198.32138388659746,379.8149168733L198.62660992917063,380.0187933895621L198.74870034620017,379.9605440770017L198.8097455547147,379.6984110731603L198.84026815897232,379.64015682642673L198.93183597174425,379.64015682642673L198.96235857600163,379.8731684273881L198.90131336748686,379.9605440770017L198.87079076322948,380.0187933895621L198.93183597174425,380.1061656784826L199.0234037845164,380.13528932698125L199.05392638877356,380.13528932698125L199.11497159728833,379.9896688453051L199.35915243134696,380.13528932698125L199.2981072228324,380.19353595252096L199.32862982708957,380.2809042128275L198.90131336748686,380.22265892964754L198.74870034620017,380.13528932698125L198.44347430362677,380.13528932698125L198.44347430362677,380.31002651896586L198.382429095112,380.5429969228567L198.382429095112,380.57211721833L198.35190649085462,380.6303571397358L198.19929346956815,380.7468343055785L198.8097455547147,380.95066076429464L198.87079076322948,380.8050715506961L198.87079076322948,380.7759530395856L199.11497159728833,380.9215433670271L199.14549420154572,380.892425747076L200.09169493352329,391.8253244407217L199.9390819122366,391.7962873561123L199.96960451649397,391.7091748608749L199.2981072228324,391.9414707112639L199.26758461857503,391.9124344537286L199.26758461857503,391.8253244407217L198.84026815897232,391.7091748608749L198.74870034620017,391.68013694851936L198.65713253342824,391.7091748608749L198.65713253342824,391.7672500646292L198.65713253342824,391.9124344537286L198.77922295045755,391.9414707112639L198.8097455547147,391.97050676213547L198.77922295045755,392.0866488998256L198.8097455547147,392.1156839180091L198.87079076322948,392.2027877342572L198.87079076322948,392.2898896939331L198.8097455547147,392.2898896939331L198.4129516993694,392.1737533351827L198.29086128234007,392.1737533351827L198.32138388659746,392.40602275412573L198.382429095112,392.40602275412573L198.50451951214131,392.34795663618127L198.56556472065608,392.40602275412573L198.44347430362677,392.52215251844615L198.382429095112,392.52215251844615L198.32138388659746,392.6382789895801L198.4129516993694,392.6382789895801L198.382429095112,392.7253716833923L198.5350421163987,392.75440217021264L198.50451951214131,392.8124625274298L198.56556472065608,392.8124625274298L198.59608732491347,392.78343245154457L198.62660992917063,392.8124625274298L198.59608732491347,392.84149239791054L198.65713253342824,392.87052206302843L198.62660992917063,392.92858077734394L198.84026815897232,392.8995515228255L198.87079076322948,392.95760982662534L198.84026815897232,392.9866386707117L198.84026815897232,393.0156673096451L198.84026815897232,393.1608074284842L199.87803670372182,394.11860398488716L200.45796618461145,401.51239953149746L193.80403845651063,401.07782431641965L192.27790824364342,402.2365951831107L192.0947726180991,405.0163979320775L187.5163819794975,411.23577157710855L187.18063333266696,412.9988133803739L188.37101489870338,415.48329977837756L180.6793186258526,417.7066954706971L177.84071642991967,419.813659944133L176.77242528091256,426.1581022761611L175.52099850636182,428.08873510296394L168.92811598677554,431.9191328028418L165.69271993549728,431.34330480056L162.7625499267922,428.981776470735L165.23488087163696,425.4951848864017L164.04449930560054,422.8138308628762L164.9907000375781,421.4870518439776L163.43404722045375,419.00561517203175L165.05174524609288,417.1870315023024L166.8525788972761,412.18963039733654L163.86136368005646,410.2528040388928L165.14331305886503,405.8847294939965L164.13606711837247,404.0899912041013L165.0212226418355,403.8583593038814L164.9907000375781,401.8889962743811L163.8003184715419,400.6142294268115L161.32798752669692,402.3814199041055L159.099837415911,401.33857466122106L160.16812856491788,394.78602800455457L156.7495968880953,392.6092476803861L158.0315462669039,390.11178112230385L153.97203990067715,388.8624689884163L155.2539892794855,386.74064805955254L151.4386637473176,385.0830909846482L150.98082468345729,383.83218789650766L153.6973364623609,382.4935652753906L154.7961502156254,381.96962970863706L155.43712490502958,383.1338340224561L159.49663127125632,383.30843431854476L160.16812856491788,380.7759530395856L167.40198577390834,380.9215433670271L168.1955734845992,378.73710092997703L170.5458140124149,378.38747269823824L171.94985380825233,376.2307087460573L171.4004469316203,375.44346927204447L167.85982483776843,374.94771374037293L169.72170369746664,372.84729919261497L169.63013588469448,369.1394276342495L171.7056729741937,368.20455367736025L172.71291891468604,365.80780751339444L178.1154198682359,367.2986588245261L180.12991174922058,369.2562695691013L182.60224269406558,368.05845732868727L183.51792082178576,364.19931249303204L185.99025176663054,362.7656596571312L190.7823006350336,363.7019902704528L191.75902397126856,361.9461608612975L194.41449054165741,361.24357692439133L194.35344533314264,359.34001553159027L197.80249961422237,360.5115644548847L201.25155389530232,359.13495266958387L202.35036764856682,356.99569285621556L205.15844724024237,357.23019908513936L205.76889932538916,356.1454691411702L206.71510005736673,360.2187152589487L205.55524109558792,367.210979221774L203.96806567420572,371.8842038289423L200.39692097609668,377.2801012068086L200.06117232926613,377.1926631493891L200.00012712075113,377.4258267427607L199.9390819122366,377.68811835953386L199.81699149520705,378.504019060783L199.4812428483765,378.27092271341877L199.4812428483765,378.38747269823824L198.87079076322948,378.64969692430236L198.77922295045755,378.941035706079L198.77922295045755,378.97016834285597L198.71817774194278,378.97016834285597L198.71817774194278,378.6788318188116L198.4129516993694,378.3000605493613L198.93183597174425,378.00867198947645L198.26033867808246,377.95039155549784L198.26033867808246,377.8629692016767L198.107725656796,377.71726073485183L198.13824826105315,377.5132593303648L197.4972735716492,377.71726073485183L197.4667509673916,377.7755448034066L197.4667509673916,377.8629692016767L197.4362283631342,378.03781186602333L198.16877086531053,378.21264636180183L198.26033867808246,378.35833554172837L197.9245900312519,378.5331550857587L198.19929346956815,378.8245029027325L198.16877086531053,378.79536913762274L198.29086128234007,378.8827697557389L198.47399690788416,379.2032213212681L198.44347430362677,379.2614823130452L198.44347430362677,379.40713085377524L198.26033867808246,379.40713085377524L198.26033867808246,379.028432939837L197.9551126355093,379.1740904876048L197.9551126355093,379.2614823130452L197.9551126355093,379.3488721124781L197.68040919719306,379.4653886954778L197.83302221847998,379.5236456379265L197.9245900312519,379.4945172790875ZM197.25309273759035,379.4653886954778L197.1615249248182,379.4362598870547L197.1615249248182,379.5236456379265L197.10047971630365,379.4362598870547L196.67316325670072,379.5527737720371L196.67316325670072,379.6110293662448L196.7036858609581,379.8731684273881L196.94786669501696,379.78579075982447L197.03943450778888,379.9314190846095L197.52779617590636,379.8149168733L197.4362283631342,379.6692840620511L197.34466055036228,379.6110293662448L197.34466055036228,379.5236456379265ZM197.52779617590636,379.0575649001263L197.6498865929359,379.0575649001263L197.6498865929359,378.97016834285597L197.6498865929359,378.79536913762274L197.4972735716492,378.73710092997703L197.4972735716492,378.7079664873557L197.4667509673916,378.64969692430236L197.4667509673916,378.5914264572174L197.25309273759035,378.64969692430236L197.3141379461049,378.5331550857587L197.34466055036228,378.41660962835584L197.22257013333297,378.24178465091325L197.22257013333297,378.00867198947645L197.40570575887705,377.5424030708284L197.03943450778888,377.45497116637387L196.9783892992741,377.68811835953386L196.94786669501696,377.7464028827952L196.94786669501696,377.8629692016767L197.00891190353173,378.03781186602333L196.94786669501696,378.0669515156656L196.91734409075957,378.3000605493613L197.06995711204627,378.5331550857587L197.06995711204627,378.64969692430236L196.94786669501696,378.64969692430236L196.94786669501696,378.7079664873557L196.94786669501696,378.941035706079L197.03943450778888,379.2032213212681L197.03943450778888,379.23235192973385ZM197.52779617590636,378.3291981587836L197.4972735716492,378.38747269823824L197.40570575887705,378.47488280958567L197.80249961422237,378.5331550857587L197.89406742699452,378.27092271341877ZM197.61936398867851,380.45563469684555L197.6498865929359,380.33914860152663L197.4972735716492,380.2809042128275L197.4972735716492,380.1061656784826L197.22257013333297,380.33914860152663L197.28361534184774,380.42651350816925ZM197.71093180145022,380.45563469684555L197.68040919719306,380.57211721833L197.89406742699452,380.5429969228567L197.86354482273714,380.4847556621571Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["fill", "rgb(252, 189, 164) ", "d", "M168.89759338251815,289.36907046446794L170.30163317835604,293.95812817829443L168.56184473568737,295.9950205723777L168.74498036123146,297.43184291151766L167.64616660796696,297.82084297273605L167.40198577390834,299.49586032740257L170.36267838687058,300.3329598415919L166.60839806321746,304.63377967437043L166.5473528547027,305.7973685860947L168.2260960888566,307.646121511768L167.0967597313347,312.53020414790774L167.6156440037098,313.30369780585465L167.0967597313347,314.55272325543325L164.8686096205488,315.26619571293224L165.2959260801515,316.18748964449435L169.47752286340778,317.46490333297834L168.0734830675699,318.35577285290105L168.3787091101433,322.9837176362416L164.8380870162914,322.4797599395413L162.48784648847595,323.13192341915345L161.9689622161011,330.88720444523574L163.4645698247109,331.92164905893696L163.6782280545126,333.5760063684099L162.94568555233604,335.5246027516107L159.77133470957233,335.55411716747335L158.67252095630806,334.66855804845784L158.24520449670536,336.38040296782873L159.61872168828563,336.4394146885385L158.21468189244774,341.598500092588L159.61872168828563,343.3064551039471L161.11432929689568,343.2475757662546L159.89342512660187,344.4838081487328L160.6259676287782,346.6019286885554L162.1215752373878,346.6019286885554L163.55613763748283,345.21942855704935L166.3642172291586,346.1607711712413L166.8525788972761,345.33711180311076L168.25661869311398,346.3078305308318L168.40923171440068,347.51345918839525L166.79153368876155,347.6016579039008L166.0895137908426,349.18881693426687L167.1578049398497,351.39190053205255L166.21160420787191,351.39190053205255L165.72324253975444,349.5707929861326L163.3119568034242,349.95272352936126L161.78582659055724,349.18881693426687L161.75530398629962,347.51345918839525L160.68701283729274,348.3659442568975L161.9689622161011,350.98077263075123L161.05328408838068,352.5956178941996L163.73927326302692,353.35872009646346L164.74651920351948,351.42126481030095L167.24937275262164,352.36078125151624L168.65341254845953,354.0042827666192L173.8727778764653,351.33317117592173L175.64308892339113,351.50935604630865L176.52824444685393,351.9497762926493L176.161973195766,354.7963905689239L180.2520021662499,355.7349383076887L179.91625351941934,358.9005798184596L182.78537831960944,360.0429935870316L181.320293315257,364.34557012173445L178.3901233065519,365.9832347420145L178.1154198682359,367.2986588245261L172.71291891468604,365.80780751339444L171.7056729741937,368.20455367736025L169.63013588469448,369.1394276342495L169.72170369746664,372.84729919261497L167.85982483776843,374.94771374037293L171.4004469316203,375.44346927204447L171.94985380825233,376.2307087460573L170.5458140124149,378.38747269823824L168.1955734845992,378.73710092997703L167.40198577390834,380.9215433670271L160.16812856491788,380.7759530395856L159.49663127125632,383.30843431854476L155.43712490502958,383.1338340224561L154.7961502156254,381.96962970863706L153.6973364623609,382.4935652753906L153.60576864958898,381.64941160429805L149.39364926207554,379.8440427624738L149.36312665781816,378.1835078460424L146.21929841931205,378.62056180378505L145.12048466604756,376.7845917136168L142.1292694488277,375.70590107614396L140.1453001721003,373.7517924538861L139.29066725289476,371.09602565988087L135.78056776330027,368.4382952850098L134.89541223983736,368.64280653594506L134.3460053632051,366.9186980863868L132.3925586907352,367.3571106792739L129.0350722224273,352.33142547883745L124.24302335402444,339.9190703440895L122.16748626452511,339.0347899033129L121.8927828262091,337.4719328002478L123.8767521029364,336.73445594117334L124.97556585620066,333.3987979975973L124.05988772848036,326.7753602409001L122.3200992858118,326.83456485261445L122.86950616244394,325.4429340376371L125.37235971154621,325.23561209511894L127.26476117550135,320.67069977705154L127.5089420095602,318.77141412015635L125.34183710728882,317.79158874040894L124.33459116679649,314.55272325543325L127.32580638401623,313.0359749359636L128.11939409470722,312.97647738207604L128.39409753302334,314.10670841090877L131.2021771246989,311.3100152107429L133.06405598439676,310.803921420013L134.25443755043318,308.5402172175938L137.33722058042497,310.0297114299841L138.10028568685846,308.42102179900735L143.31965101486412,308.00379583645497L142.86181195100403,300.9904904661687L145.24257508307687,302.5141245307083L146.37191144059852,302.0063458392557L146.8907957129736,303.17110294929057L149.4546944705903,302.5439907796739L153.02583916869935,303.350250169306L152.32381927078063,299.3164464535559L153.48367823255967,299.1669253288826L154.94876323691233,296.9829230091977L157.23795855621302,297.7310789844847L160.22917377343242,294.43754469434106L160.80910325432205,290.89969431939915L162.21314305015994,291.37969599785947L165.69271993549728,287.26667154646765L167.76825702499627,289.81935192540726Z\n                                ", "pointer-events", "all ", 1, "path-region", "map-default", 2, "cursor", "pointer"], ["stroke", "#ff073a20 ", "fill", "none ", "stroke-width", "2 ", "d", "M389.9728160184575,443.3947997589372L391.0411071674648,446.2961876105354L389.7896803929136,449.9999999999999L387.347872052326,444.9462040816678L389.9728160184575,443.3947997589372M388.1414597630169,440.60703341467786L388.7213892439065,441.55559238567855L387.01212340549523,442.99252035968874L388.1414597630169,440.60703341467786M383.65463693718743,432.6676196445043L383.5935917286729,434.595950780211L382.6779136009525,433.50235171510786L383.65463693718743,432.6676196445043M385.60808360965757,429.8170682961205L385.3639027755987,432.5236877011943L384.6313602734224,430.62343501690344L385.60808360965757,429.8170682961205M375.6882372260209,416.0031457808552L376.17659889413835,417.013797910279L374.833604306815,417.5912193525752L374.7115138897859,416.263047839468L375.6882372260209,416.0031457808552M371.9339569023675,393.1317798146871L373.00224805137464,395.8594855027377L371.6592534640515,398.4694537876027L370.5909623150444,397.97658309652013L370.07207804266955,394.98913576221196L371.9339569023675,393.1317798146871M374.37576524295514,374.56856144909136L375.169352953646,375.41430902970717L374.89464951533,376.7845917136168L375.38301118344725,377.221809396616L374.61994607701376,378.62056180378505L375.5356242047342,378.7662351467185L374.77255909830046,384.53041595175023L373.6737453450362,384.5013256204846L371.87291169385276,379.9896688453051L373.12433846840395,378.941035706079L374.37576524295514,374.56856144909136M376.0850310813662,373.6642706628793L376.8480961877999,373.8684849106062L376.695483166513,375.1226939076926L375.26092076641794,376.9886330283695L375.3219659749325,374.6852278641769L376.0850310813662,373.6642706628793M377.09227702185876,365.1644988263285L378.0384777538361,367.59090839574776L377.7637743155201,371.4463483585178L376.9091413963147,373.3725161865229L375.1388303493886,373.7809659177613L374.4062878472125,373.25580785310046L374.7115138897859,366.39253070202005L377.09227702185876,365.1644988263285M374.34524263869775,364.11155494808787L374.65046868127115,365.74932981139693L373.9179261790948,365.63237146663073L374.34524263869775,364.11155494808787M378.86258806878436,356.02817981009264L379.2899045283873,358.92987731774787L377.916387336807,358.9884715507644L379.07624629858606,360.13085556331424L378.92363327729936,362.85345148211377L375.77980503879303,365.36920084194657L376.72600577077037,357.4060679302186L378.86258806878436,356.02817981009264M408.2558559686063,160.66855422254315L406.79077096425385,162.04405702520802L404.07425918535046,162.33181331391853L402.9144002235712,164.24895827201544L397.6034670827935,167.12068708238786L396.4436081210142,169.19176007666317L395.86367864012504,167.9175455227831L392.2009661292436,173.64421015024664L391.7736496696409,177.54673742845608L389.0571378907373,178.75066281767795L389.11818309925206,177.07127937046164L387.8057111161861,177.80026307625815L388.04989195024496,178.65564565293562L382.9831396435259,183.2107881352971L384.6618828776798,184.85286917525826L384.9060637117386,186.84032006742433L381.79275807748945,191.4063935843788L381.06021557531335,194.36041608547464L379.99192442630624,194.42321636739956L379.7782661965048,197.68590994890803L378.46579421343904,200.3796082141605L376.17659889413835,200.41090756642518L375.26092076641794,198.59468270452078L373.1853836769185,202.6005720066459L371.17089179593404,204.31924642543737L370.6214849193018,202.6005720066459L368.9122190808905,202.6005720066459L367.78288272336886,202.6318345460121L368.6069930383171,200.5673965204308L368.05758616168487,198.84530102033034L368.3017669957437,192.7897160346642L371.6592534640515,193.38673924122804L370.86566575336064,190.93456866905404L375.65771462176326,187.18711238446951L373.15486107266133,185.16848306160836L372.8801576343453,183.14760132634018L370.560439710787,180.33353820663962L367.2334758467366,181.44071843047777L367.17243063822207,176.9444690622314L368.39333480851565,175.96138176762634L367.32504365950854,175.1999071227882L363.35710510605395,175.96138176762634L362.47194958259115,174.596840412851L361.12895499526803,177.07127937046164L359.9080508249742,177.22977952505937L359.9385734292314,176.05654307509508L359.1144631142831,175.99310277139665L357.8019911312174,178.56062342394625L357.74094592270285,178.49727245698153L355.87906706300487,178.90901350962116L354.41398205865244,180.55502898558535L353.43725872241725,178.65564565293562L352.277399760638,179.03568394331523L349.77454621153606,177.13468112934902L347.8516221433233,177.67350476944955L344.2804774452143,176.15169927198292L339.3663381597819,177.0078753482568L336.37512294256226,180.4917487015602L337.8402079469149,182.64202705783373L336.25303252553294,183.02122106166075L335.79519346167285,184.2530510719522L336.0088516914741,176.7542366162075L333.9943598104894,173.8665365797737L333.9943598104894,172.4685895178245L335.8562386701876,170.5923215148057L335.8867612744448,170.5605030367339L335.8867612744448,165.71732645804565L340.4041067045316,164.7279112147363L340.9229909769065,163.38650741703998L343.39532192175125,162.71541334649083L346.63071797302973,164.6640585047033L355.9401122715194,164.56827500916052L356.9168356077546,163.73792842245246L361.2510454122971,164.08927772423823L363.54024073159803,162.5236240413464L365.676823029612,163.54625313208197L366.40936553178835,162.84326098893212M255.76492509891796,211.89421488080376L255.64283468188864,211.92532614117442L255.76492509891796,211.89421488080376L256.4669449968369,211.76976484877554L256.5585128096088,211.76976484877554L256.0091059329766,215.56191483515386L257.4131457288147,216.21392001969832L256.8637388521822,218.8197807598699L259.39711500554176,221.4531716434497L261.4726520950412,221.4531716434497L261.56421990781337,222.93872418577814L256.4974676010943,228.12951405384905L256.4669449968369,230.35006858008524L251.64437352417667,232.47583659301011L250.45399195814025,234.2917792861951L250.14876591556663,236.29054816515082L251.03392143902965,237.05879318600432L248.04270622181025,241.41707624064185L247.98166101329525,245.3991733835826L246.5470986132002,244.8788613002298L245.50933006845048,248.3044744181447L237.97024681688663,248.15166175250624L236.84091045936498,251.17534329877094L233.84969524214512,252.63985615548177L234.704328161351,264.10873035483957L238.97749275737897,265.0491879488828L238.7943571318349,267.29258247465907L235.77261931035787,266.2317922694642L233.94126305491727,267.23197913650927L232.90349451016755,265.2008382089091L229.54600804185975,264.50316322709546L228.4166716843381,263.35001258641796L227.43994834810314,264.47282467117066L227.40942574384576,266.26210739354576L230.03436970997723,267.80764617245734L229.97332450146268,271.44011753943414L231.65206773561658,273.01242255276526L232.567745863337,280.43641990785056L231.65206773561658,280.70759047588075L231.31631908878558,282.3941870507803L228.7218977269115,283.74863427226677L228.63032991413934,285.4932521491711L225.88329553097856,288.52832584511634L222.9226029180163,289.7593191226495L220.9996788498038,296.2046077118945L217.09278550486374,296.0848457500621L217.0012176920916,296.14472743678016L216.5433786282315,296.5638597406601L216.3907656069448,296.5339240099695L215.41404227070961,291.19970619899294L215.41404227070961,291.0797057813392L212.17864621943136,291.0197034058127L212.85014351309292,289.9994416181835L211.99551059388727,288.3180949799141L212.02603319814466,288.227990553586L210.77460642359347,286.06449354268136L208.82115975112356,284.5308590263338L206.83719047439627,285.10232576913126L205.82994453390393,283.2370432763951L206.8982356829108,281.91242283813045L205.82994453390393,279.381575778605L207.44764255954306,275.7312247817458L209.76736048310136,273.4959956308863L210.37781256824815,274.73469610736834L212.3617818449752,275.0971189874584L213.58268601526902,274.1003215059027L212.8806661173503,273.0728746584032L214.2847059131882,272.52874935785417L211.17140027893902,270.4417568409292L211.2324454874538,269.2613207201013L209.5231796490425,268.0802801542756L208.82115975112356,266.35305035113015L209.27899881498365,263.0464542238053L207.3865973510285,261.3457720344148L210.560948193792,260.13021073284955L209.46213444052773,251.35846126308388L208.424365895778,251.4194971593605L207.93600422766053,250.2289878795035L208.39384329152085,247.87657162909966L210.86617423636562,246.6841075685894L211.11035507042425,245.5521822208658L212.0870784066592,243.5009509492748L211.78185236408603,240.58908499979282L213.4605955982397,238.65583645684558L213.4911182024971,236.59788022008678L214.62045456001897,234.0456434843377L215.74979091754062,234.90699056718813L217.30644373466498,231.49024742608037L217.24539852615044,229.36345443993605L218.28316707089994,228.65403024721513L218.37473488367186,228.8699681512008L220.14504593059792,228.0986559396449L222.22058302009737,228.59232948942912L222.28162822861213,228.56147840795938L226.15799896929457,225.87563493700668L226.21904417780934,222.9696614481913L228.53876210136764,221.7627530097846L228.50823949711003,219.96651001340405L231.37736429730035,219.03678050088274L231.86572596541782,216.36912741472906L228.9966011652275,215.0028805063056L228.96607856097035,214.94075572234055L228.20301345453663,213.2937284680691L225.6696373011771,212.79623907360303L223.99089406702342,213.60459479287005L224.08246187979535,211.36524706079206L225.08970782028746,210.49369082378394L223.89932625425126,208.50008350738796L224.7539591734569,207.4713219228605L226.76845105444158,209.1856187119584L228.66085251839672,208.53124949973773L228.81346553968365,208.46891700971184L236.71882004233566,209.40369235969644L240.2899647404447,206.87875419894385L242.27393401717222,208.21956682956824L244.62417454498745,207.9701842749647L247.2796411153763,204.81893251934042L249.81301726873585,205.94274714588983L253.4146845711025,212.23641131278447L255.58178947337387,212.79623907360303L255.64283468188864,211.92532614117442M105.01378267189807,258.0013866447003L105.53266694427293,256.0227940093134L101.62577359933289,245.82757052494827L102.48040651853853,243.5315808811676L101.86995443339185,240.46639194503092L100.58800505458339,240.09826983782466L101.86995443339185,237.82675494105968L100.55748245032578,237.55032128766362L100.37434682478181,236.47495284972769L102.20570308022229,231.61347197303445L98.48194536082656,232.8453106200608L96.55902129261403,236.44421987161292L97.71888025439284,241.23310629093993L94.20878076479846,248.05996894959395L82.03026166611846,253.67662544998808L81.9692164576037,253.92049984859403L80.16838280642037,254.16434713485285L79.86315676384686,254.2862606192927L77.57396144454617,254.86525730301554L69.912787775953,250.74800805390583L56.055525443118995,236.69007098018392L51.99601907689225,231.3670154681932L53.09483283015675,229.2400940849319L54.86514387708269,229.88765263013278L56.02500283886161,232.01390061168348L68.75292881417386,227.63572787995332L71.10316934198943,222.1341871876611L69.48547131635007,221.70084058479443L64.60185463517519,223.00059823199894L62.282136711617,224.88683923908502L55.53664117074402,223.4645925948122L47.32606062551872,217.9515433626902L48.08912573195221,216.61743373283576L46.01358864245287,213.63567869738017L45.92202082968083,211.7386510928427L48.4248743787831,208.3754144841443L47.05135718720271,208.09487960094083L46.776653748886474,206.78517410842693L49.523688132047596,206.78517410842693L49.737346361848836,202.25664997692627L50.83616011511333,203.03820059048303L52.087586889664294,201.81884053242715L52.911697204612665,203.00694475919374L60.84757431152184,202.00648557158746L62.77049837973459,203.75694252604188L66.64686912041714,203.78818599939592L67.89829589496833,201.94393929600471L74.21647497623826,200.0352809648292L74.21647497623826,202.53804537859577L76.20044425296567,203.10071070634257L78.36754915523727,202.66309656901785L78.27598134246512,201.88139094977566L81.48085478948622,199.8161307886847L79.98524718087617,199.6908906405871L79.86315676384686,197.30973679839218L81.32824176819952,196.1180211826931L83.92266313007372,197.18432890630186L86.51708449194803,196.21213171062738L96.58954389687119,196.87077229807448L99.79441734389229,200.2544055982429L100.83218588864202,198.78264958382664L103.42660725051633,200.94291695662338L106.75357111456674,200.97420694776577L106.81461632308117,199.59695504941027L108.37126914020598,198.97059761130225L108.21865611891906,200.44220639812283L109.62269591475683,201.34964633755442L108.18813351466167,203.5694708849033L110.50785143821997,206.16118979811034L112.70547894474862,205.5682158629216L111.9729364425724,208.50008350738796L116.03244280879903,211.92532614117442L115.66617155771087,214.44368636990544L118.29111552384234,214.53689650460376L119.20679365156263,216.15183362511266L120.70240126017268,216.18287706793234L120.97710469848869,216.21392001969832L122.50323491135578,217.2380623215809L122.38114449432646,218.50973979805667L124.05988772848036,218.50973979805667L125.03661106471554,220.21436423755597L125.83019877540642,222.47460777856537L126.95953513292807,222.41271744345255L126.95953513292807,223.8666340937225L125.86072137966357,226.40073539686108L124.42615897956841,226.33896596301167L121.80121501343706,228.37636207955484L122.04539584749568,229.4559698023724L124.36511377105398,230.07263158342022L123.23577741353199,231.12052930544695L121.61807938789309,230.53500563983624L122.62532532838532,236.47495284972769L118.29111552384234,238.56373252196136L119.1457484430482,240.03690988621923L118.2300703153278,241.69300109785797L118.71843198344527,243.16399252643015L124.57877200085534,242.27539080541197L124.79243023065658,243.4090585024573L121.7096472006649,243.7459780379723L120.09194917502577,244.66457825395725L119.90881354948169,246.07233036160216L118.32163812809995,246.50059274767625L118.19954771107064,247.9071389342301L115.66617155771087,248.45727624888207L117.86379906423974,249.40440617135863L119.81724573670954,253.7375965928996L117.1617791663208,256.6622249738715L113.22436321712348,254.5300672876673L112.79704675752066,261.9533059646527L111.2098713361388,261.8621863355621L109.92792195733034,263.1071691582642L109.95844456158773,263.3196585844525L109.89739935307296,263.5624791949943L109.3785150806981,264.0176976411252L109.22590205941151,263.80527375310174L108.95119862109527,263.7445775545422L108.73754039129415,263.7445775545422L108.58492737000722,263.71422884515005L108.40179174446325,263.59282993895704L108.18813351466167,263.5017764858091L107.69977184654431,263.89631500115394L107.51663622100011,263.7445775545422L107.2419327826841,263.35001258641796L107.18088757416922,263.0464542238053L107.21141017842683,262.8946597476413L107.11984236565479,262.8642996279911L107.0587971571399,263.1071691582642L107.02827455288275,263.1375260136996L106.60095809327981,262.98573765754963L106.7840937188239,262.5910401732264L106.7840937188239,262.31774761162967L106.66200330179458,262.25701143148336L106.57043548902254,261.77106301673064L106.63148069753743,261.74068775693536L106.63148069753743,261.5888053042372L106.14311902941984,260.70768452744556L106.26520944644926,260.6165143504821L106.41782246773585,260.70768452744556L106.72304851030947,260.9507868775345L107.27245538694137,260.4949483448563L107.21141017842683,260.31258696606363L107.2419327826841,260.2821919590555L107.36402319971364,260.46455581280395L107.577681429515,260.6469048215028L107.63872663802942,260.46455581280395L107.63872663802942,260.2821919590555L107.94395268060305,260.13021073284955L108.12708830614702,260.0998132490108L108.21865611891906,260.13021073284955L108.31022393169121,260.0086183193616L108.37126914020598,259.70460835828516L108.52388216149257,260.46455581280395L108.73754039129415,260.4341628683892L108.89015341258062,260.3733757422637L109.19537945515435,260.2821919590555L109.28694726792605,260.31258696606363L109.40903768495548,260.3733757422637L109.3785150806981,260.5253404645983L109.31746987218344,260.768462585604L109.28694726792605,260.768462585604L109.25642466366878,260.70768452744556L109.10381164238208,260.73807376247174L109.07328903812459,260.85962658415633L108.98172122535277,260.7988509968941L108.92067601683789,260.9811728188645L108.85963080832346,261.1027124699253L108.73754039129415,261.13309635438554L108.52388216149257,261.31539102738896L108.37126914020598,261.5584275825898L108.09656570188963,261.4976709077714L108.0355204933752,261.5280494504519L107.852384867831,261.92293316484046L107.94395268060305,262.0140503348823L108.00499788911759,262.0747930662651L107.97447528486032,262.31774761162967L108.09656570188963,262.5910401732264L108.37126914020598,262.4999463330973L108.40179174446325,262.5606759686454L108.52388216149257,262.5606759686454L108.67649518277926,262.5910401732264L109.01224382960993,261.8925599551609L109.22590205941151,261.9533059646527L109.34799247644082,261.9533059646527L109.56165070624218,261.9533059646527L109.6532185190141,262.0140503348823L110.11105758287431,262.19627361415064L110.08053497861704,262.31774761162967L109.6532185190141,262.5910401732264L109.6532185190141,262.83393910008095L109.92792195733034,263.1071691582642M106.57043548902254,261.77106301673064L103.4571298547736,262.8946597476413L104.43385319100855,259.46137060804926L105.01378267189807,258.0013866447003L105.50214434001543,259.52218252905794L104.43385319100855,259.46137060804926M44.15170978275489,209.21677360187493L44.94529749344599,210.49369082378394L43.99909676146842,212.26751708800776L42.32035352731441,212.42303849073664L44.15170978275489,209.21677360187493M44.15170978275489,206.69158944106186L43.8464837401815,208.71823484525316L42.137217901770214,209.12330741993293L44.15170978275489,206.69158944106186M109.6532185190141,262.83393910008095L109.6532185190141,262.5910401732264M110.08053497861704,262.31774761162967L110.11105758287431,262.19627361415064M109.6532185190141,262.0140503348823L109.56165070624218,261.9533059646527M109.34799247644082,261.9533059646527L109.22590205941151,261.9533059646527L109.01224382960993,261.8925599551609M108.67649518277926,262.5910401732264L108.52388216149257,262.5606759686454M108.40179174446325,262.5606759686454L108.37126914020598,262.4999463330973M108.09656570188963,262.5910401732264L107.97447528486032,262.31774761162967M108.00499788911759,262.0747930662651L107.94395268060305,262.0140503348823M107.852384867831,261.92293316484046L108.0355204933752,261.5280494504519M108.09656570188963,261.4976709077714L108.37126914020598,261.5584275825898M108.52388216149257,261.31539102738896L108.73754039129415,261.13309635438554M108.85963080832346,261.1027124699253L108.92067601683789,260.9811728188645M108.98172122535277,260.7988509968941L109.07328903812459,260.85962658415633L109.10381164238208,260.73807376247174M109.25642466366878,260.70768452744556L109.28694726792605,260.768462585604M109.31746987218344,260.768462585604L109.3785150806981,260.5253404645983L109.40903768495548,260.3733757422637M109.28694726792605,260.31258696606363L109.19537945515435,260.2821919590555M108.89015341258062,260.3733757422637L108.73754039129415,260.4341628683892L108.52388216149257,260.46455581280395M108.37126914020598,259.70460835828516L108.31022393169121,260.0086183193616M108.21865611891906,260.13021073284955L108.12708830614702,260.0998132490108M107.94395268060305,260.13021073284955L107.63872663802942,260.2821919590555M107.63872663802942,260.46455581280395L107.577681429515,260.6469048215028M107.36402319971364,260.46455581280395L107.2419327826841,260.2821919590555M107.21141017842683,260.31258696606363L107.27245538694137,260.4949483448563M106.72304851030947,260.9507868775345L106.41782246773585,260.70768452744556L106.26520944644926,260.6165143504821L106.14311902941984,260.70768452744556M106.63148069753743,261.5888053042372L106.63148069753743,261.74068775693536M159.19140522868292,103.48972542345854L159.2524504371977,102.92591996961045L159.19140522868292,103.48972542345854L159.2524504371977,103.85442939810906L159.099837415911,104.08646826192819L159.13036002016815,104.18590266781064L158.12311407967582,104.08646826192819L157.93997845413173,103.98702736407648L157.90945584987458,103.98702736407648L157.84841064135958,103.88757997220381L157.84841064135958,103.78812608425841L157.6957976200731,103.75497334435033L157.6957976200731,103.72181988235207L157.72632022433027,103.62235516305742L157.3905715774995,102.99226087566188L157.75684282858788,102.85957616758691L157.90945584987458,102.66052737958711L158.0315462669039,102.59417198757717L158.06206887116127,102.52781369654616L158.12311407967582,102.46145250588336L158.51990793502137,102.56099320447777L158.55043053927875,102.62735004592173L158.48938533076398,102.62735004592173L158.70304356056545,102.66052737958711L158.82513397759476,102.59417198757717L158.76408876908,102.8927484306331L159.038792207396,102.8927484306331L159.2524504371977,102.92591996961045L158.4588627265066,100.66860206412264L160.25969637769003,100.83469587606953L161.75530398629962,103.29075913158442L163.647705450255,104.11961378511785L163.09829857362274,106.04082253066264L164.28868013965916,107.00052166140813L164.28868013965916,107.13284674550573L169.38595505063563,108.91811864105654L167.18832754410687,113.24047204152828L165.23488087163696,114.22862609791827L162.70150471827742,121.22656360321878L164.07502190985792,132.62603015527168L160.7480580458075,133.34190512237853L160.80910325432205,135.45513751431105L159.2524504371977,137.01390984300872L162.97620815659343,138.40904130005902L163.7697958672843,139.73817149748356L166.12003639509976,138.1820083402821L168.80602556974623,143.07245134985874L167.95139265054058,144.4301213798534L168.77550296548884,146.1095006792728L165.26540347589435,148.9798811968089L162.03000742461586,148.78652806462395L161.11432929689568,151.26619419935912L159.98499293937357,150.30052806917325L160.99223887986636,143.78375132229007L159.2524504371977,142.55494914031675L156.7495968880953,144.59167433597054L156.902209909382,145.72210293068736L155.13189886245618,146.33544085982714L154.36883375602247,143.68677395550492L152.8121809388981,143.78375132229007L152.50695489632471,145.52837005091936L150.33984999405334,145.0762384008887L150.27880478553857,148.94765723274332L147.59281561089233,148.07737445162383L148.6611067598992,142.55494914031675L148.05065467475242,142.10200103948233L148.20326769603912,141.64892798515973L146.4329566491133,139.9325876433487L141.91561121902646,136.49448542835358L141.30515913387944,130.3787172860898L140.29791319338722,130.28093662972321L139.29066725289476,128.3240680964879L139.53484808695362,126.43014569126575L135.4448191164696,126.92016913887505L132.33151348222043,124.23952686055418L131.3547901459856,124.92646426724059L128.5467105543098,124.17408871077345L129.0350722224273,118.76607047225497L127.23423857124419,118.93022344129878L128.33305232450846,117.02498945071477L127.87521326064848,115.77547125033203L131.69053879281626,115.01869673016188L134.25443755043318,117.18932525582312L135.2922060951829,116.82776364543975L135.78056776330027,118.01074507545542L136.87938151656476,117.45222657918873L137.39826578893963,121.06265054559276L140.42000361041676,118.27350829968668L145.51727852139288,117.84649564179858L147.07393133851747,119.12718430663284L150.73664384939866,117.35364376832615L150.82821166217082,117.4193663334504L151.40814114306022,113.07571845480868L153.7583816708759,112.64727709869248L155.22346667522834,113.66874942595484L156.5054160540367,112.51542513265974L156.0170543859192,110.96532169232694L160.4428320032339,107.13284674550573L160.47335460749127,107.00052166140813L159.13036002016815,104.18590266781064M159.099837415911,104.08646826192819L159.2524504371977,103.85442939810906M158.4588627265066,100.66860206412264L157.84841064135958,100.1702112112427L157.84841064135958,100.10374668736165L156.29175782423522,99.13968242230482L156.65802907532338,95.84391251716596L153.81942687939022,94.04316611082334L150.7976890579132,94.343440959916L146.5855696704,84.06632583290911L142.73972153397472,81.6456617618872L142.9228571595188,79.49059287518395L147.0434087342603,76.65721816626228L146.31086623208398,73.98743662530097L147.0128861300027,72.904600859362L146.860273108716,71.0754676491186L145.4562333128781,68.29343161925806L147.16549915128962,69.00641900700487L148.29483550881105,68.49717856177188L149.332604053561,67.07033958464456L151.2860507260309,66.62840981911057L153.27002000275797,64.17831308982551L158.88617918610953,64.34859513881435L160.50387721174866,66.62840981911057L163.4950924289683,67.51213253312966L165.99794597807045,70.05827577200853L171.30887911884838,67.64804132828715L174.88002381695742,73.78446681947258L179.21423362150017,71.85482723046636L180.4656603960516,73.31075954913109L179.24475622575756,74.02126215187911L179.39736924704448,75.677743803937L180.4046151875366,74.79903071040843L182.23597144297742,76.58968945630585L181.4729063365437,78.85019337419669L185.65450311979976,83.29349245472571L184.55568936653526,86.61715151830077L186.38704562197609,89.26400214092769L184.9830058261382,90.63582228493675L187.4553367709832,95.11053640160657L188.70676354553393,97.37617831386257L187.1195881241522,97.57592396532709L185.95972916237315,95.97721510483848L181.53395154505847,96.01053890137837L180.19095695773535,94.64365555402424L173.8422552722077,96.71016780921144L170.91208526350283,102.8927484306331L172.40769287211265,106.9343548316312L169.20281942509155,108.62071748249667L169.38595505063563,108.91811864105654M164.28868013965916,107.13284674550573L164.28868013965916,107.00052166140813M307.836487961946,188.10106658852192L307.62282973214474,189.89612690892983L310.2477736982762,193.1668057723465L308.5385078598649,195.30219709629188L309.3626181748134,195.5532580252655L309.1794825492691,197.9366499827334L307.92805577471813,197.9366499827334L307.92805577471813,200.6299884597268L306.37140295759355,202.6318345460121L306.49349337462286,204.0693541286966L303.8685494084914,204.5691058789423L303.0749616978005,206.62919711934467L301.64039929770524,205.84912121573285L301.1215150253304,207.9390091778222L298.9849327273164,208.2507373719519L299.1375457486031,209.34138812225905L295.71901407178075,208.0637065287192L294.31497427594286,210.92951801988988L289.61449322031194,211.7386510928427L288.33254384150337,214.22617875356246L286.6232780030923,214.63010219244688L285.4634190413133,212.6718468413776L284.08990184973277,212.45414127700917L284.15094705824754,213.85325215078456L281.67861611340254,214.44368636990544L281.34286746657176,218.2616719839694L282.44168121983625,219.16076966401602L284.08990184973277,218.9747830047379L286.4401423775482,221.20547189416004L288.912473322393,221.4531716434497L289.2176993649666,224.36134375580036L292.208914582186,226.1536463201527L292.4225728119875,227.29618008462108L293.8266126078254,227.3270504186288L295.0169941738618,229.94931414490316L294.6812455270308,231.92150094083127L293.3687735439653,232.5990019799372L290.3470357224883,230.75074439072176L289.33978978199593,231.24377609583013L284.5172183093357,227.79004897717965L282.9605654922111,229.0550395342894L283.87624361993153,230.1651147719117L283.1742237220126,232.16789081898418L283.93728882844584,233.0300227470495L282.13645517726286,236.07538868164835L275.57409526193373,233.46095327177034L272.85758348303034,235.09151828064324L270.35472993392796,233.4917305743819L271.45354368719245,231.49024742608037L270.7210011850161,228.71572913183434L260.37383834177695,230.81237985238442L256.4974676010943,228.12951405384905M256.5585128096088,211.76976484877554L256.4669449968369,211.76976484877554M247.2796411153763,204.81893251934042L248.80577132824374,201.16193598722776L248.22584184735388,198.87662595323837L249.66040424744915,198.50069219140562M253.04841332001433,198.75132308011172L253.50625238387465,198.53202288656314M254.54402092862415,198.34403085144197L254.66611134565346,198.40669696050116M122.3200992858118,326.83456485261445L124.05988772848036,326.7753602409001L124.97556585620066,333.3987979975973L123.8767521029364,336.73445594117334L121.8927828262091,337.4719328002478L116.27662364285777,325.76869534181577L118.74895458770254,324.7616769211693L120.61083344740064,327.4265441164714L122.3200992858118,326.83456485261445L122.86950616244394,325.4429340376371L125.37235971154621,325.23561209511894L127.26476117550135,320.67069977705154L127.5089420095602,318.77141412015635L125.34183710728882,317.79158874040894L124.33459116679649,314.55272325543325L127.32580638401623,313.0359749359636L128.11939409470722,312.97647738207604L128.39409753302334,314.10670841090877L131.2021771246989,311.3100152107429L133.06405598439676,310.803921420013L134.25443755043318,308.5402172175938L137.33722058042497,310.0297114299841L138.10028568685846,308.42102179900735L143.31965101486412,308.00379583645497L142.86181195100403,300.9904904661687L145.24257508307687,302.5141245307083L146.37191144059852,302.0063458392557L146.8907957129736,303.17110294929057L149.4546944705903,302.5439907796739L153.02583916869935,303.350250169306L152.32381927078063,299.3164464535559L153.48367823255967,299.1669253288826L154.94876323691233,296.9829230091977L157.23795855621302,297.7310789844847L160.22917377343242,294.43754469434106L160.80910325432205,290.89969431939915L162.21314305015994,291.37969599785947L165.69271993549728,287.26667154646765L167.76825702499627,289.81935192540726L168.89759338251815,289.36907046446794L170.30163317835604,293.95812817829443L168.56184473568737,295.9950205723777L168.74498036123146,297.43184291151766L167.64616660796696,297.82084297273605L167.40198577390834,299.49586032740257L170.36267838687058,300.3329598415919L166.60839806321746,304.63377967437043L166.5473528547027,305.7973685860947L168.2260960888566,307.646121511768L167.0967597313347,312.53020414790774L167.6156440037098,313.30369780585465L167.0967597313347,314.55272325543325L164.8686096205488,315.26619571293224L165.2959260801515,316.18748964449435L169.47752286340778,317.46490333297834L168.0734830675699,318.35577285290105L168.3787091101433,322.9837176362416L164.8380870162914,322.4797599395413L162.48784648847595,323.13192341915345L161.9689622161011,330.88720444523574L163.4645698247109,331.92164905893696L163.6782280545126,333.5760063684099L162.94568555233604,335.5246027516107L159.77133470957233,335.55411716747335L158.67252095630806,334.66855804845784L158.24520449670536,336.38040296782873L159.61872168828563,336.4394146885385L158.21468189244774,341.598500092588L159.61872168828563,343.3064551039471L161.11432929689568,343.2475757662546L159.89342512660187,344.4838081487328L160.6259676287782,346.6019286885554L162.1215752373878,346.6019286885554L163.55613763748283,345.21942855704935L166.3642172291586,346.1607711712413L166.8525788972761,345.33711180311076L168.25661869311398,346.3078305308318L168.40923171440068,347.51345918839525L166.79153368876155,347.6016579039008L166.0895137908426,349.18881693426687L167.1578049398497,351.39190053205255L166.21160420787191,351.39190053205255L165.72324253975444,349.5707929861326L163.3119568034242,349.95272352936126L161.78582659055724,349.18881693426687L161.75530398629962,347.51345918839525L160.68701283729274,348.3659442568975L161.9689622161011,350.98077263075123L161.05328408838068,352.5956178941996L163.73927326302692,353.35872009646346L164.74651920351948,351.42126481030095L167.24937275262164,352.36078125151624L168.65341254845953,354.0042827666192L173.8727778764653,351.33317117592173L175.64308892339113,351.50935604630865L176.52824444685393,351.9497762926493L176.161973195766,354.7963905689239L180.2520021662499,355.7349383076887L179.91625351941934,358.9005798184596L182.78537831960944,360.0429935870316L181.320293315257,364.34557012173445L178.3901233065519,365.9832347420145L178.1154198682359,367.2986588245261L172.71291891468604,365.80780751339444L171.7056729741937,368.20455367736025L169.63013588469448,369.1394276342495L169.72170369746664,372.84729919261497L167.85982483776843,374.94771374037293L171.4004469316203,375.44346927204447L171.94985380825233,376.2307087460573L170.5458140124149,378.38747269823824L168.1955734845992,378.73710092997703L167.40198577390834,380.9215433670271L160.16812856491788,380.7759530395856L159.49663127125632,383.30843431854476L155.43712490502958,383.1338340224561L154.7961502156254,381.96962970863706L153.6973364623609,382.4935652753906L153.60576864958898,381.64941160429805L149.39364926207554,379.8440427624738L149.36312665781816,378.1835078460424L146.21929841931205,378.62056180378505L145.12048466604756,376.7845917136168L142.1292694488277,375.70590107614396L140.1453001721003,373.7517924538861L139.29066725289476,371.09602565988087L135.78056776330027,368.4382952850098L134.89541223983736,368.64280653594506L134.3460053632051,366.9186980863868L132.3925586907352,367.3571106792739L129.0350722224273,352.33142547883745L124.24302335402444,339.9190703440895L122.16748626452511,339.0347899033129L121.8927828262091,337.4719328002478M153.6973364623609,382.4935652753906L150.98082468345729,383.83218789650766L151.4386637473176,385.0830909846482L155.2539892794855,386.74064805955254L153.97203990067715,388.8624689884163L158.0315462669039,390.11178112230385L156.7495968880953,392.6092476803861L160.16812856491788,394.78602800455457L159.099837415911,401.33857466122106L161.32798752669692,402.3814199041055L163.8003184715419,400.6142294268115L164.9907000375781,401.8889962743811L165.0212226418355,403.8583593038814L164.13606711837247,404.0899912041013L165.14331305886503,405.8847294939965L163.86136368005646,410.2528040388928L166.8525788972761,412.18963039733654L165.05174524609288,417.1870315023024L163.43404722045375,419.00561517203175L164.9907000375781,421.4870518439776L164.04449930560054,422.8138308628762L165.23488087163696,425.4951848864017L162.7625499267922,428.981776470735L155.34555709225765,420.79468138504916L152.41538708355256,413.46114146943376L149.27155884504623,400.4983229441277L144.2963743510993,386.7987952732366L141.5493399679383,382.1442828468015L141.45777215516637,381.96962970863706L137.00147193359408,377.6298329266029L132.3925586907352,367.3571106792739M141.42724955090875,381.76585765103425L141.45777215516637,381.64941160429805L141.45777215516637,381.62029953867034L141.45777215516637,381.64941160429805L141.42724955090875,381.76585765103425L141.48829475942352,381.79496860898723L141.57986257219568,381.8531898607134L141.6714303849676,381.8240793455328L141.701952989225,381.8240793455328L141.79352080199692,381.79496860898723L141.8545660105117,381.76585765103425L141.82404340625453,381.6785234483058L141.6714303849676,381.47473588474315L141.6714303849676,381.2709374492982L141.64090778071045,381.2127073259676L141.5188173636809,381.2418224987406L141.48829475942352,381.2709374492982L141.48829475942352,381.32916668393744L141.5493399679383,381.38739503022566L141.45777215516637,381.62029953867034M122.07591845175307,388.8915271795659L120.21403959205509,387.49649512922423L120.85501428145926,386.9150871315246L122.07591845175307,388.8915271795659M91.46174638163734,380.16441275164635L90.60711346243181,380.16441275164635L89.96613877302775,378.41660962835584L90.6681586709467,377.8629692016767L91.46174638163734,380.16441275164635M228.81346553968365,208.46891700971184L228.66085251839672,208.53124949973773M228.96607856097035,214.94075572234055L228.9966011652275,215.0028805063056M222.28162822861213,228.56147840795938L222.22058302009737,228.59232948942912M218.37473488367186,228.8699681512008L218.28316707089994,228.65403024721513M211.11035507042425,245.5521822208658L208.2717528744913,244.51150574305888L205.7078541168744,241.3557547066373L200.24430795480998,242.64313327997309L198.56556472065608,241.6316875793721L196.4289824226421,242.45927002850647L195.23860085660567,240.58908499979282L191.78954657552572,239.97554814286326L191.54536574146687,240.92645403661663L188.24892448167384,241.41707624064185L187.66899500078443,243.3171620777984L180.98454466842622,243.07208548707302L180.7403638343676,241.6316875793721L177.47444517883173,242.27539080541197L177.3218321575448,243.13335728913034L173.62859704240645,244.90947140596433L170.5458140124149,244.97069029945737L167.37146316965095,243.5315808811676L167.18832754410687,242.48991501257632L169.14177421657678,242.70441748322895L168.1955734845992,239.48458964081811L165.20435826737935,239.3618320673579L158.64199835205068,241.72365718956053L158.61147574779352,243.28652905202887L156.3222804284926,245.6133826878991L156.29175782423522,247.60144634004416L154.490924173052,247.54030260741945L152.9647939601848,249.28221919207556L150.33984999405334,249.09892577140278L149.1799910322743,244.97069029945737L137.21513016339566,244.41965695643842L135.01750265686678,242.18344520085515L128.66880097133912,240.74244126204758L127.56998721807497,239.82213594271184L127.8141680521336,237.15096353620265L125.92176658817846,235.52201902332877L124.57877200085534,236.78225765534677L122.62532532838532,236.47495284972769M125.03661106471554,220.21436423755597L127.93625846916314,219.65664866120954L129.76761472460385,218.19965015933798L127.90573586490575,216.40016742137624L129.00454961817002,214.35047178679957L132.2399456694485,212.9206233486916L133.21666900568357,211.27188480712363L132.97248817162472,208.34424596458103L134.16286973766114,205.91153901270292L132.57569431627917,202.22538123662463L131.11060931192674,202.28791820015834L130.92747368638265,202.1941119791938L132.33151348222043,199.65957929887537L130.4085894140078,198.81397556387952L130.37806680975052,198.78264958382664L131.8126292098458,194.9569328954554L132.545171712022,196.4003384968189L134.28496015469057,195.80428504528447L134.43757317597715,194.54881054780998L132.36203608647804,194.26621167158163L132.48412650350735,192.41254923789603L134.86488963558008,193.57523281695995L135.90265818032958,193.13538456821874L136.3910198484474,191.02894334232036L138.49707954220378,190.7772667719545L138.37498912517447,194.2348091357748L137.5814014144837,193.54381855541118L137.39826578893963,195.42773180132082L142.61763111694518,196.1180211826931L144.35741955961385,195.05110222758947L145.6698915426798,195.52187726417066L146.860273108716,198.37536416819034L146.5550470661426,199.75351175826694L144.2658517468417,200.3796082141605L144.63212299792986,206.4108079620724L141.27463652962228,205.66185557583293L140.48104881893119,207.53368681349622L143.10599278506288,209.34138812225905L147.53177040237756,207.37777078237042L147.31811217257632,206.00516188196127L149.69887530464894,204.97505752006396L149.54626228336224,203.31947987750527L150.67559864088412,202.9444315496018L154.15517552622123,202.97568841225302L154.97928584116949,203.97563604386954L156.23071261572045,202.47551668439485L158.61147574779352,204.50664409297156L160.1070833564031,204.44418025571093L160.68701283729274,203.4444794998073L159.2524504371977,201.00549641940967L159.43558606274178,199.40906976839727L160.35126419046173,198.40669696050116L160.90067106709398,199.5343287114929L162.1215752373878,198.5633530575816L162.27418825867449,196.83941373804777L158.76408876908,194.07778847020984L160.77858065006467,193.38673924122804L159.6797668968004,191.3120382882364L163.7697958672843,189.77021521096702L165.57062951846774,190.24233948095866L166.6999658759894,189.64429485764646L167.0051919185628,188.10106658852192L165.63167472698228,184.94755911881896L163.55613763748283,186.7772598148705L160.90067106709398,187.02948770755472L156.07809959443375,185.64180080341322L154.94876323691233,183.52668896606122L155.07085365394164,179.510618025383L158.67252095630806,177.29317562785184L159.31349564571224,175.86621534787594L159.40506345848416,175.83449207160265L162.97620815659343,173.0723847201396L163.00673076085081,172.9452871688407L172.52978328914196,168.07687336903246L174.97159162972957,165.81304627216963L176.2840636127953,166.06827322577425L176.37563142556724,164.5044163910474L177.93228424269182,163.80181544448118L180.00782133219127,163.25870016587788L182.75485571535205,164.98329843680057L184.7998702005941,164.34475950152063L188.43206010721792,166.06827322577425L190.23289375840136,171.1013384975273L185.37979968148352,180.6499452196701L185.83763874534384,182.23114338770483L181.594996753573,182.76843393137193L179.61102747684572,185.04224410936376L181.045589876941,189.1405268127719L177.35235476180242,193.19822644206738L178.66482674486792,196.4317044454445L178.66482674486792,199.72220146036454L180.28252477050728,202.3191859063794L181.83917758763164,200.50480250005467L185.68502572405714,203.63196348967858L188.1878792731593,201.06807380443928L186.99749770712287,196.87077229807448L185.2577092644542,197.40378718932084L185.44084488999852,193.54381855541118L183.51792082178576,192.03530527747847L183.76210165584462,190.55702147577819L182.1138810259481,187.18711238446951L183.24321738346953,185.2315992380614L185.44084488999852,186.11499502463192L184.89143801336627,184.53720023690437L187.85213062632852,183.52668896606122L185.80711614108645,187.0925392167241L186.84488468583618,188.6366199699891L188.98146698385017,187.9750311831071L190.4465519882026,189.8331721416243L192.39999866067274,189.67577575762942L193.25463157987838,188.0065408509675L192.1558178266141,186.84032006742433L193.16306376710622,186.49346160626192L194.53658095868673,187.84898706665354L193.89560626928255,189.67577575762942L195.26912346086306,190.24233948095866L196.0932337758113,188.95157802553268L199.84751409946466,189.99055500466773L200.09169493352329,187.94352097080645L204.76165338489682,185.38938005911166L206.40987401479333,185.61025013245296L206.4403966190505,187.25015843300923L207.66130078934452,188.1640810258138L206.92875828716842,189.3609423963207L208.66854672983686,191.56364165612854L212.39230444923282,189.3609423963207L214.01000247487195,190.39968722514823L213.82686684932787,192.41254923789603L217.97794102832654,192.09818463390826L219.41250342842181,188.98307084608007L221.7322213519799,189.77021521096702L223.47200979464856,188.54212196456206L224.54030094365567,190.33674974712545L227.9893552247354,191.72087629050833L228.01987782899255,193.19822644206738L232.17095200799145,194.48601452135074L233.39185617828525,196.99620126570335L234.88746378689484,197.4351362669704L235.04007680818177,195.86703650561947L239.7100352595553,196.77669503583218L238.94697015312136,205.13116972227806L240.2899647404447,206.87875419894385M205.82994453390393,283.2370432763951L203.75440744440448,283.83890383337604L201.25155389530232,282.30386358808977L201.19050868678755,278.59767571566164L200.27483055906714,277.72302116688763L201.40416691658925,276.69715361423243L201.83148337619173,273.46577524267923L199.17601680580287,270.6233089422055L194.99442002254705,272.07521462624817L192.06425001384196,270.4417568409292L191.17909449037893,272.64967705390455L188.85937656682086,271.47036419137083L188.1878792731593,269.8970150850681L186.69227166454925,269.8062123161975L186.5091360390054,268.32259431133747L180.43513779179398,267.2016768662109L178.909007578927,269.3521449195498L179.21423362150017,272.6799079985637L177.56601299160366,273.5564352365427L177.5049677830891,275.76141604028567L174.3306169403254,274.3420082365823L173.10971277003136,274.91591452941475L171.85828599548063,279.50215294003885L173.62859704240645,281.1293504773662L171.4004469316203,283.89908167546065L171.5835825571644,285.1323992535206L169.53856807192233,285.7337911155479L168.89759338251815,289.36907046446794M116.27662364285777,325.76869534181577L113.74324748949834,322.2722218400223L111.39300696168277,314.3148577374909L111.91189123405775,313.18471311967267L110.41628362544793,303.23082005501396L105.65475736130236,286.9962328603956L104.6475114208099,277.48168049216366L102.29727089299445,267.1713741950282L103.51817506328825,266.1711608136624L103.4571298547736,262.8946597476413M106.57043548902254,261.77106301673064L106.66200330179458,262.25701143148336M106.7840937188239,262.31774761162967L106.7840937188239,262.5910401732264M106.60095809327981,262.98573765754963L107.02827455288275,263.1375260136996M107.0587971571399,263.1071691582642L107.11984236565479,262.8642996279911M107.21141017842683,262.8946597476413L107.18088757416922,263.0464542238053M107.2419327826841,263.35001258641796L107.51663622100011,263.7445775545422L107.69977184654431,263.89631500115394M108.18813351466167,263.5017764858091L108.40179174446325,263.59282993895704M108.58492737000722,263.71422884515005L108.73754039129415,263.7445775545422M108.95119862109527,263.7445775545422L109.22590205941151,263.80527375310174L109.3785150806981,264.0176976411252M109.89739935307296,263.5624791949943L109.95844456158773,263.3196585844525M384.9060637117386,186.84032006742433L386.70689736292184,188.44761906908104L389.8202029971708,183.02122106166075L396.10785947418367,184.06359347194774L398.42757739774174,182.167922183994L401.2661795936747,184.60033843169492L400.1673658404104,188.57362184296238L402.1208125128803,189.48688223845681L402.0597673043658,191.1547687009184L395.5584525975514,203.91315475163321L394.1849354059709,208.59357996869227L392.23148873350124,207.37777078237042L389.3928865375681,207.40895500321665L388.7824344524213,206.31720497150746L384.84501850322386,206.81636798039324L384.08195339679037,205.19361102122667L383.01366224778326,205.59942961130486L378.2521359836378,204.44418025571093L378.46579421343904,200.3796082141605M370.86566575336064,190.93456866905404L365.95152646792803,188.6366199699891L360.0911864505183,189.54984891023128L354.96338893528446,188.3216075988376L343.82263838135395,189.26648182653315L336.5582585681061,186.80879021450096L335.276309189298,185.86264013213383L335.79519346167285,184.2530510719522M357.74094592270285,178.49727245698153L357.8019911312174,178.56062342394625M383.01366224778326,205.59942961130486L384.2956116265916,212.57854744311487L383.776727354217,217.85849526689418L382.5253005796658,221.0506438933146L380.23610526036487,220.46218750866336L380.6328991157104,222.44366285079133L379.7782661965048,223.9594014493499L381.1517833880853,231.73668911259784L380.6328991157104,233.18393685747583L379.167814111358,232.87609712611527L378.43527160918165,235.0300108703404L377.0007092090866,235.64500281423773L374.46733305572707,233.584059724878L374.2231522216682,235.21452762089888L373.032770655632,235.64500281423773L371.9644795066249,225.5048934474043L369.9805102298974,222.07228629528493L370.22469106395624,217.2380623215809L368.54594782980234,210.40028649628948L369.3700581447506,207.65841050961166L368.9122190808905,202.6005720066459M408.80526284523853,166.06827322577425L408.2558559686063,160.66855422254315L411.79647806245816,159.25991673975244L412.8647692114653,157.20890837779154L413.5973117136414,157.81805974880234L419.3660839182794,155.60483201328947L417.5652502670962,154.54530774850156L415.8865070329423,150.13952948956455L418.8777222501619,146.49680784443728L413.8414925477002,146.6581591231269L412.62058837740665,147.81942545811427L404.04373658109307,149.94631071332708L398.8548938573447,152.45641629181108L395.98576905715413,152.19914252130883L387.65309809489963,161.69228932525408L378.77102025601243,162.5236240413464L373.88740357483766,160.66855422254315L372.8801576343453,161.82021320256484L366.40936553178835,162.84326098893212L365.34107438278124,160.02840851712887L365.8904812594135,157.01649936219667L365.18846136149455,154.22410843774145L360.2743220760624,153.87071849434977L359.0228953015112,152.29562480576556L360.48798030586363,148.14185544946292L362.6245626038776,148.88320743525566L363.32658250179657,150.20393078275293L368.42385741277303,148.04513301536048L369.125877310692,149.33430369647039L372.5749315917717,148.68984308309183L374.98621732810193,146.1095006792728L374.19262961741083,144.13928619986876L378.8320654645272,141.3252277684211L381.1517833880853,141.03384292657427L383.04418485204064,136.16976075513588L391.22424279300867,135.4876272262274L395.0395683251768,129.17233843983848L397.96973833388165,126.95283200434244L399.67900417229293,126.92016913887505L400.6252049042705,125.08997691992329L402.9449228278286,127.93240667323556L405.72247981524697,127.86712042065511L411.8270006667158,129.9549580099682L413.04790483700936,127.14879512666732L420.31228465025697,123.32314640446697L422.3878217397564,126.72417786909301L424.5549266420278,126.56083336894363L421.25848538223477,129.72673349631003L422.2962539269845,131.61675668420116L425.1348561229174,129.9549580099682L427.4545740464755,133.69972344769928L427.1493480039021,134.87021118976253L425.5926951867775,135.45513751431105L424.219177995197,139.9325876433487L428.217639152909,138.83059005832797L429.68272415726165,140.2565631901619L431.36146739141554,140.09458343905527L432.70446197873844,141.16335369560375L434.4747730256645,140.54808633728027L437.8322594939723,142.58729779968155L437.8627820982297,147.33566317628856L436.21456146833316,147.43242690188447L431.33094478715816,151.87749483588357L431.514080412702,154.32047465512414L435.02417990229674,159.29194414413791L433.5590948979443,159.67622608533327L430.90362832755545,158.33085999104873L430.0489954083496,155.95785921029136L422.32677653124165,156.98442907110706L419.64078735659564,158.33085999104873L418.57249620758876,160.28449557763417L413.01738223275197,163.80181544448118L411.3386389985983,165.9406644539589L408.80526284523853,166.06827322577425L406.5160675259376,169.41465184053885L407.431745653658,170.62413941412916L407.3096552366287,174.97774859456604L408.1032429473196,175.1999071227882L405.7835250237615,178.4022417838246L406.271886691879,180.08037232355673L403.0364906406005,184.0951711184116L401.2661795936747,184.60033843169492M164.07502190985792,132.62603015527168L165.9674233738133,135.45513751431105L165.9369007695559,135.4876272262274L166.12003639509976,138.1820083402821M199.2981072228324,391.9414707112639L199.26758461857503,391.9124344537286L199.26758461857503,391.8253244407217L199.26758461857503,391.9124344537286L199.2981072228324,391.9414707112639L199.96960451649397,391.7091748608749L199.9390819122366,391.7962873561123L200.09169493352329,391.8253244407217L199.87803670372182,394.11860398488716L198.84026815897232,393.1608074284842L198.84026815897232,393.0156673096451L198.84026815897232,392.9866386707117L198.87079076322948,392.95760982662534L198.84026815897232,392.8995515228255L198.62660992917063,392.92858077734394L198.65713253342824,392.87052206302843L198.59608732491347,392.84149239791054L198.62660992917063,392.8124625274298L198.59608732491347,392.78343245154457L198.56556472065608,392.8124625274298L198.50451951214131,392.8124625274298L198.5350421163987,392.75440217021264L198.382429095112,392.7253716833923L198.4129516993694,392.6382789895801L198.32138388659746,392.6382789895801L198.382429095112,392.52215251844615L198.44347430362677,392.52215251844615L198.56556472065608,392.40602275412573L198.50451951214131,392.34795663618127L198.382429095112,392.40602275412573L198.32138388659746,392.40602275412573L198.29086128234007,392.1737533351827L198.4129516993694,392.1737533351827L198.8097455547147,392.2898896939331L198.87079076322948,392.2898896939331L198.87079076322948,392.2027877342572L198.8097455547147,392.1156839180091L198.77922295045755,392.0866488998256L198.8097455547147,391.97050676213547L198.77922295045755,391.9414707112639L198.65713253342824,391.9124344537286L198.65713253342824,391.7672500646292L198.65713253342824,391.7091748608749L198.74870034620017,391.68013694851936L198.84026815897232,391.7091748608749L199.26758461857503,391.8253244407217M141.82404340625453,381.6785234483058L141.8545660105117,381.76585765103425M141.79352080199692,381.79496860898723L141.701952989225,381.8240793455328L141.6714303849676,381.8240793455328M141.57986257219568,381.8531898607134L141.48829475942352,381.79496860898723M141.5493399679383,381.38739503022566L141.48829475942352,381.32916668393744L141.48829475942352,381.2709374492982M141.5188173636809,381.2418224987406L141.64090778071045,381.2127073259676M141.6714303849676,381.2709374492982L141.6714303849676,381.47473588474315M197.52779617590636,378.3291981587836L197.4972735716492,378.38747269823824L197.40570575887705,378.47488280958567L197.80249961422237,378.5331550857587L197.89406742699452,378.27092271341877L197.80249961422237,378.5331550857587L197.40570575887705,378.47488280958567L197.4972735716492,378.38747269823824L197.52779617590636,378.3291981587836L197.89406742699452,378.27092271341877M199.23706201431764,379.6110293662448L199.11497159728833,379.6984110731603L199.11497159728833,379.5819016814622L199.0234037845164,379.4362598870547L199.11497159728833,379.5819016814622L199.11497159728833,379.6984110731603L199.23706201431764,379.6110293662448L199.35915243134696,379.2906124712445L199.26758461857503,379.3488721124781L199.14549420154572,379.2906124712445L199.05392638877356,379.23235192973385L199.0234037845164,379.4362598870547M157.84841064135958,100.10374668736165L157.84841064135958,100.1702112112427M159.038792207396,102.8927484306331L158.76408876908,102.8927484306331M158.82513397759476,102.59417198757717L158.70304356056545,102.66052737958711L158.48938533076398,102.62735004592173M158.55043053927875,102.62735004592173L158.51990793502137,102.56099320447777M158.12311407967582,102.46145250588336L158.06206887116127,102.52781369654616L158.0315462669039,102.59417198757717L157.90945584987458,102.66052737958711M157.75684282858788,102.85957616758691L157.3905715774995,102.99226087566188M157.72632022433027,103.62235516305742L157.6957976200731,103.72181988235207M157.6957976200731,103.75497334435033L157.84841064135958,103.78812608425841L157.84841064135958,103.88757997220381L157.90945584987458,103.98702736407648M157.93997845413173,103.98702736407648L158.12311407967582,104.08646826192819M160.47335460749127,107.00052166140813L160.4428320032339,107.13284674550573M150.82821166217082,117.4193663334504L150.73664384939866,117.35364376832615M127.87521326064848,115.77547125033203L125.18922408600224,115.61098635003185L124.7619076263993,115.5780872845749L124.60929460511261,115.5780872845749L119.35940667284945,115.34777435373405L120.36665261334178,111.82301787824656L119.42045188136422,109.3806283253727L120.30560740482713,107.26516039968106L121.61807938789309,106.73583718415449L126.92901252867091,99.63841317024463L129.76761472460385,98.27482509890729L130.07284076717713,97.1098095139173L127.72260023936155,96.97660741794385L128.21096190747903,93.34229015156188L129.58447909905954,91.80588709902014L127.9667810734204,88.32641955460775L128.4246201372805,85.94630981392629L133.4608498397423,82.18393279902796L138.10028568685846,81.3091417656479L139.41275766992408,79.38949587921508L138.86335079329217,77.73725036369655L140.81679746576197,78.14205546994259L144.11323872555522,76.55592392205733L146.31086623208398,73.98743662530097M124.60929460511261,115.5780872845749L124.7619076263993,115.5780872845749L125.18922408600224,115.61098635003185M148.20326769603912,141.64892798515973L148.05065467475242,142.10200103948233M165.26540347589435,148.9798811968089L166.12003639509976,153.29228404852512L170.24058796984127,157.65777793925122L169.08072900806224,160.54054426143142L170.88156265924545,161.62832380630647L168.0429604633125,162.7793383567967L167.1578049398497,163.67403903005618L167.79877962925366,164.79176156244455L171.88880859973779,162.26787164183634L176.95556090645687,161.94812753591214L178.23751028526522,162.33181331391853L177.93228424269182,163.80181544448118M163.00673076085081,172.9452871688407L162.97620815659343,173.0723847201396M159.40506345848416,175.83449207160265L159.31349564571224,175.86621534787594M130.37806680975052,198.78264958382664L130.4085894140078,198.81397556387952M130.92747368638265,202.1941119791938L131.11060931192674,202.28791820015834M120.97710469848869,216.21392001969832L120.70240126017268,216.18287706793234M81.32824176819952,196.1180211826931L78.4285943637517,189.1405268127719L75.43737914653218,185.45248854079193L75.55946956356149,181.34584405211615L70.15696861001163,180.776492376087L67.77620547793879,177.35656946908568L68.78345141843124,168.04500896765512L63.71669911171227,167.31196645720127L59.840328371029614,165.14289627143268L60.878096915779224,158.4269928245435L66.76895953744645,152.649345755078L68.26456714605638,148.88320743525566L71.49996319733486,145.72210293068736L74.46065581029723,145.7543895390508L76.84141894236996,150.13952948956455L78.70329780206771,150.3649231586627L82.82384937680922,148.49645628004276L88.92837022827803,147.85167127070133L92.19428888381378,146.49680784443728L92.65212794767399,143.94536758871072L96.34536306281257,139.90018655809632L97.77992546290761,135.35766446802495L106.44834507199323,129.98755885696323L110.81307748079325,121.98034396735517L112.46129811068988,116.00572092858584L120.36665261334178,111.82301787824656M199.26758461857503,379.3488721124781L199.35915243134696,379.2906124712445M199.05392638877356,379.23235192973385L199.14549420154572,379.2906124712445M197.68040919719306,379.4653886954778L197.83302221847998,379.5236456379265L197.9245900312519,379.4945172790875L197.9551126355093,379.4653886954778L198.107725656796,379.4362598870547L198.13824826105315,379.6984110731603L198.19929346956815,379.7275378597974M198.29086128234007,379.9314190846095L198.32138388659746,379.8149168733L198.62660992917063,380.0187933895621M198.74870034620017,379.9605440770017L198.8097455547147,379.6984110731603L198.84026815897232,379.64015682642673M198.93183597174425,379.64015682642673L198.96235857600163,379.8731684273881L198.90131336748686,379.9605440770017M198.87079076322948,380.0187933895621L198.93183597174425,380.1061656784826M199.0234037845164,380.13528932698125L199.05392638877356,380.13528932698125L199.11497159728833,379.9896688453051L199.35915243134696,380.13528932698125L199.2981072228324,380.19353595252096L199.32862982708957,380.2809042128275L198.90131336748686,380.22265892964754L198.74870034620017,380.13528932698125L198.90131336748686,380.22265892964754L199.32862982708957,380.2809042128275L199.2981072228324,380.19353595252096L199.35915243134696,380.13528932698125L199.32862982708957,380.86330790439877L199.14549420154572,380.892425747076L199.11497159728833,380.9215433670271L198.87079076322948,380.7759530395856L198.87079076322948,380.8050715506961L198.8097455547147,380.95066076429464L198.19929346956815,380.7468343055785L198.35190649085462,380.6303571397358L198.382429095112,380.57211721833L198.382429095112,380.5429969228567L198.44347430362677,380.31002651896586L198.44347430362677,380.13528932698125L198.74870034620017,380.13528932698125L198.44347430362677,380.13528932698125L198.44347430362677,380.31002651896586L198.382429095112,380.5429969228567L198.382429095112,380.57211721833L198.35190649085462,380.6303571397358L198.19929346956815,380.7468343055785L198.8097455547147,380.95066076429464L198.87079076322948,380.8050715506961M198.87079076322948,380.7759530395856L199.11497159728833,380.9215433670271L199.14549420154572,380.892425747076L200.09169493352329,391.8253244407217L199.9390819122366,391.7962873561123L199.96960451649397,391.7091748608749M198.84026815897232,391.7091748608749L198.74870034620017,391.68013694851936M198.65713253342824,391.7091748608749L198.65713253342824,391.7672500646292M198.65713253342824,391.9124344537286L198.77922295045755,391.9414707112639L198.8097455547147,391.97050676213547M198.77922295045755,392.0866488998256L198.8097455547147,392.1156839180091M198.87079076322948,392.2027877342572L198.87079076322948,392.2898896939331L198.8097455547147,392.2898896939331M198.4129516993694,392.1737533351827L198.29086128234007,392.1737533351827M198.32138388659746,392.40602275412573L198.382429095112,392.40602275412573M198.50451951214131,392.34795663618127L198.56556472065608,392.40602275412573M198.44347430362677,392.52215251844615L198.382429095112,392.52215251844615M198.32138388659746,392.6382789895801L198.4129516993694,392.6382789895801M198.382429095112,392.7253716833923L198.5350421163987,392.75440217021264L198.50451951214131,392.8124625274298L198.56556472065608,392.8124625274298M198.59608732491347,392.78343245154457L198.62660992917063,392.8124625274298M198.59608732491347,392.84149239791054L198.65713253342824,392.87052206302843L198.62660992917063,392.92858077734394L198.84026815897232,392.8995515228255M198.87079076322948,392.95760982662534L198.84026815897232,392.9866386707117L198.84026815897232,393.0156673096451L198.84026815897232,393.1608074284842M199.87803670372182,394.11860398488716L200.45796618461145,401.51239953149746L193.80403845651063,401.07782431641965L192.27790824364342,402.2365951831107L192.0947726180991,405.0163979320775L187.5163819794975,411.23577157710855L187.18063333266696,412.9988133803739L188.37101489870338,415.48329977837756L180.6793186258526,417.7066954706971L177.84071642991967,419.813659944133L176.77242528091256,426.1581022761611L175.52099850636182,428.08873510296394L168.92811598677554,431.9191328028418L165.69271993549728,431.34330480056L162.7625499267922,428.981776470735M178.1154198682359,367.2986588245261L180.12991174922058,369.2562695691013L182.60224269406558,368.05845732868727L183.51792082178576,364.19931249303204L185.99025176663054,362.7656596571312L190.7823006350336,363.7019902704528L191.75902397126856,361.9461608612975L194.41449054165741,361.24357692439133L194.35344533314264,359.34001553159027L197.80249961422237,360.5115644548847L201.25155389530232,359.13495266958387L202.35036764856682,356.99569285621556L205.15844724024237,357.23019908513936L205.76889932538916,356.1454691411702L206.71510005736673,360.2187152589487L205.55524109558792,367.210979221774L203.96806567420572,371.8842038289423L200.39692097609668,377.2801012068086M200.06117232926613,377.1926631493891L200.00012712075113,377.4258267427607L199.9390819122366,377.68811835953386L200.00012712075113,377.4258267427607L200.06117232926613,377.1926631493891L200.39692097609668,377.2801012068086L199.9390819122366,377.68811835953386L199.81699149520705,378.504019060783M199.4812428483765,378.27092271341877L199.4812428483765,378.38747269823824M198.87079076322948,378.64969692430236L198.77922295045755,378.941035706079L198.77922295045755,378.97016834285597M198.71817774194278,378.97016834285597L198.71817774194278,378.6788318188116M198.4129516993694,378.3000605493613L198.93183597174425,378.00867198947645M198.26033867808246,377.95039155549784L198.26033867808246,377.8629692016767M198.107725656796,377.71726073485183L198.26033867808246,377.8629692016767L198.26033867808246,377.95039155549784L198.93183597174425,378.00867198947645L198.4129516993694,378.3000605493613L198.71817774194278,378.6788318188116L198.71817774194278,378.97016834285597L198.77922295045755,378.97016834285597L198.77922295045755,378.941035706079L198.87079076322948,378.64969692430236L199.4812428483765,378.38747269823824L199.4812428483765,378.27092271341877L199.81699149520705,378.504019060783L199.11497159728833,379.9896688453051L199.0234037845164,380.13528932698125L198.93183597174425,380.1061656784826L198.87079076322948,380.0187933895621L198.90131336748686,379.9605440770017L198.96235857600163,379.8731684273881L198.93183597174425,379.64015682642673L198.84026815897232,379.64015682642673L198.8097455547147,379.6984110731603L198.74870034620017,379.9605440770017L198.62660992917063,380.0187933895621L198.32138388659746,379.8149168733L198.29086128234007,379.9314190846095L198.19929346956815,379.7275378597974L198.13824826105315,379.6984110731603L198.107725656796,379.4362598870547L197.9245900312519,379.4945172790875L197.83302221847998,379.5236456379265L197.68040919719306,379.4653886954778L197.9551126355093,379.3488721124781L197.9551126355093,379.2614823130452L197.9551126355093,379.1740904876048L198.26033867808246,379.028432939837L198.26033867808246,379.40713085377524L198.44347430362677,379.40713085377524L198.44347430362677,379.2614823130452L198.47399690788416,379.2032213212681L198.29086128234007,378.8827697557389L198.16877086531053,378.79536913762274L198.19929346956815,378.8245029027325L197.9245900312519,378.5331550857587L198.26033867808246,378.35833554172837L198.16877086531053,378.21264636180183L197.4362283631342,378.03781186602333L197.4667509673916,377.8629692016767L197.4667509673916,377.7755448034066L197.4972735716492,377.71726073485183L198.13824826105315,377.5132593303648L198.107725656796,377.71726073485183L198.13824826105315,377.5132593303648M197.4972735716492,377.71726073485183L197.4667509673916,377.7755448034066L197.4667509673916,377.8629692016767M197.4362283631342,378.03781186602333L198.16877086531053,378.21264636180183L198.26033867808246,378.35833554172837M197.9245900312519,378.5331550857587L198.19929346956815,378.8245029027325M198.16877086531053,378.79536913762274L198.29086128234007,378.8827697557389L198.47399690788416,379.2032213212681M198.44347430362677,379.2614823130452L198.44347430362677,379.40713085377524M198.26033867808246,379.40713085377524L198.26033867808246,379.028432939837M197.9551126355093,379.1740904876048L197.9551126355093,379.2614823130452L197.9551126355093,379.3488721124781M197.1615249248182,379.4362598870547L197.1615249248182,379.5236456379265L197.1615249248182,379.4362598870547L197.25309273759035,379.4653886954778L197.34466055036228,379.5236456379265L197.34466055036228,379.6110293662448L197.4362283631342,379.6692840620511L197.52779617590636,379.8149168733L197.03943450778888,379.9314190846095L196.94786669501696,379.78579075982447L196.7036858609581,379.8731684273881L196.67316325670072,379.6110293662448L196.67316325670072,379.5527737720371L197.10047971630365,379.4362598870547L197.1615249248182,379.5236456379265L197.10047971630365,379.4362598870547M196.67316325670072,379.5527737720371L196.67316325670072,379.6110293662448L196.7036858609581,379.8731684273881L196.94786669501696,379.78579075982447L197.03943450778888,379.9314190846095L197.52779617590636,379.8149168733M197.4362283631342,379.6692840620511L197.34466055036228,379.6110293662448L197.34466055036228,379.5236456379265L197.25309273759035,379.4653886954778M197.03943450778888,379.23235192973385L197.52779617590636,379.0575649001263L197.6498865929359,379.0575649001263M197.6498865929359,378.97016834285597L197.6498865929359,378.79536913762274M197.4972735716492,378.73710092997703L197.4972735716492,378.7079664873557L197.4667509673916,378.64969692430236L197.4667509673916,378.5914264572174M197.25309273759035,378.64969692430236L197.3141379461049,378.5331550857587L197.34466055036228,378.41660962835584M197.22257013333297,378.24178465091325L197.22257013333297,378.00867198947645L197.40570575887705,377.5424030708284M197.03943450778888,377.45497116637387L197.40570575887705,377.5424030708284L197.22257013333297,378.00867198947645L197.22257013333297,378.24178465091325L197.34466055036228,378.41660962835584L197.3141379461049,378.5331550857587L197.25309273759035,378.64969692430236L197.4667509673916,378.5914264572174L197.4667509673916,378.64969692430236L197.4972735716492,378.7079664873557L197.4972735716492,378.73710092997703L197.6498865929359,378.79536913762274L197.6498865929359,378.97016834285597L197.6498865929359,379.0575649001263L197.52779617590636,379.0575649001263L197.03943450778888,379.23235192973385L197.03943450778888,379.2032213212681L196.94786669501696,378.941035706079L196.94786669501696,378.7079664873557L196.94786669501696,378.64969692430236L197.06995711204627,378.64969692430236L197.06995711204627,378.5331550857587L196.91734409075957,378.3000605493613L196.94786669501696,378.0669515156656L197.00891190353173,378.03781186602333L196.94786669501696,377.8629692016767L196.94786669501696,377.7464028827952L196.9783892992741,377.68811835953386L197.03943450778888,377.45497116637387L196.9783892992741,377.68811835953386M196.94786669501696,377.7464028827952L196.94786669501696,377.8629692016767L197.00891190353173,378.03781186602333M196.94786669501696,378.0669515156656L196.91734409075957,378.3000605493613L197.06995711204627,378.5331550857587L197.06995711204627,378.64969692430236M196.94786669501696,378.64969692430236L196.94786669501696,378.7079664873557L196.94786669501696,378.941035706079L197.03943450778888,379.2032213212681M197.22257013333297,380.33914860152663L197.28361534184774,380.42651350816925L197.61936398867851,380.45563469684555L197.28361534184774,380.42651350816925L197.22257013333297,380.33914860152663L197.4972735716492,380.1061656784826L197.4972735716492,380.2809042128275L197.6498865929359,380.33914860152663L197.61936398867851,380.45563469684555L197.6498865929359,380.33914860152663M197.4972735716492,380.2809042128275L197.4972735716492,380.1061656784826M197.68040919719306,380.57211721833L197.71093180145022,380.45563469684555L197.86354482273714,380.4847556621571L197.89406742699452,380.5429969228567L197.68040919719306,380.57211721833L197.89406742699452,380.5429969228567M197.86354482273714,380.4847556621571L197.71093180145022,380.45563469684555M216.3907656069448,296.5339240099695L216.42128821120218,296.5339240099695L216.45181081545934,297.0727133121758L216.23815258565787,297.2822117225193L215.2919518536803,296.7733999960225L214.13209289190127,297.52161741475516L214.19313810041604,298.17986742219495L215.9024039388271,300.36285122769544L217.36748894317975,300.3329598415919L220.08400072208337,302.2453128666533L218.37473488367186,303.0218042068859L217.97794102832654,304.3651859901304L214.49836414298943,304.8128268639134L213.39955038972494,307.1393337714157L209.7978830873585,305.7078799995528L208.9432501681531,306.24476600280224L208.21070766597654,308.4508211532677L210.13363173418952,308.71900035747365L209.85892829587328,311.0420950467033L206.53196443182264,309.4935890337507L205.76889932538916,307.52688604040657L204.85322119766874,307.43745592394384L202.83872931668407,308.1826149673499L202.10618681450796,309.6127366147748L203.17447796351507,310.32751090500693L201.4346895208464,312.8872286067764L199.14549420154572,311.518379159578L192.24738563938604,313.8985432022649L191.6979787627538,318.2963904532811L188.92042177533563,318.3854635765582L185.07457363891035,321.53088972067985L183.70105644732985,320.55203220415694L180.5572282088233,320.70036588570076L178.69534934912554,321.35294098294366L176.40615402982462,324.28766305684803L168.3787091101433,322.9837176362416M212.02603319814466,288.227990553586L211.99551059388727,288.3180949799141M215.41404227070961,291.0797057813392L215.41404227070961,291.19970619899294M368.54594782980234,210.40028649628948L364.0896476082303,211.30300605842376L364.60853188060514,214.0086468983813L362.01411051873106,216.58639715955564L362.47194958259115,219.65664866120954L359.7554378036875,221.94847874716538L357.5272876929014,217.30011441252452L356.5505643566664,218.23066131529464L355.7569766459753,217.5793246231559L353.5288265351894,212.23641131278447L354.50554987142436,208.00135886578937L357.13049383755583,204.69402329889738L359.358643948342,205.19361102122667L360.33536728457693,203.5694708849033L361.7394070804148,204.10059246293378L362.6245626038776,203.13196499103128L363.7538989613995,204.13183028358338L363.9065119826862,201.25579349773267L366.1651846977297,200.7551660969773L367.2334758467366,200.0352809648292L366.989295012678,198.81397556387952L368.05758616168487,198.84530102033034M169.20281942509155,108.62071748249667L174.02539089775178,110.96532169232694L171.0952208890467,117.05785799558498L171.85828599548063,119.42257921071393L172.86553193597274,120.11161775741431L174.3306169403254,119.4553974320811L174.84950121270003,121.94757840618342L179.6415500811031,118.17497726227435L181.7476097748597,119.0287069682065L184.5251667622781,122.66826353625942L187.33324635395365,123.48682471723822L185.01352843039558,125.71117135364824L187.3942915624682,128.06297116294195L189.6834868817691,128.22616175197282L194.13978710334118,131.61675668420116L194.26187752037072,132.8213003259392L199.20653941006026,132.2679733263771L202.10618681450796,134.96771359128206L203.05238754648576,133.14669802701462L207.14241651696966,136.16976075513588L209.6757926703292,135.26018555446535L214.43731893447466,138.89543404245217L218.55787050921617,140.41852690529026L220.14504593059792,143.81607584321438L221.48804051792104,143.29880739535497L222.1595378115826,144.62398303017113L227.74517439067654,148.10961526296887L230.2480279397787,147.1098592201309L235.46739326778425,150.8799946203187L238.58069890203342,150.26832959405834L239.34376400846713,153.58152611592106L245.295671838649,154.32047465512414L247.03546028131768,156.18247453827212L248.2563644516115,153.93497672433472L251.03392143902965,154.06348583230073L254.54402092862415,155.95785921029136M261.808400741872,180.4917487015602L261.6252651163279,180.39682408232358M249.17204257933167,195.3963489203157L249.23308778784644,195.3963489203157M249.9351076857654,198.09334543054013L249.9351076857654,198.15601993442067M165.9369007695559,135.4876272262274L165.9674233738133,135.45513751431105M187.4553367709832,95.11053640160657L189.50035125622503,91.73905102923783L190.50759719671737,92.27365564059153L194.32292272888526,98.64078681097607L195.54382689917907,98.60752123537691L196.7342084652155,100.13697931451173L198.74870034620017,99.13968242230482L200.30535316332475,99.53868019725633L205.5247184913303,103.32392198767354L205.15844724024237,105.84218888031165L210.34728996399076,107.39746262875519L216.23815258565787,111.79003836853269L213.85738945358526,112.21871712431476L208.7295919383514,118.14213220421902L207.66130078934452,118.20782163082231L207.6918233936019,121.1937823574554L205.86046713816108,124.37039504759855L205.79942192964654,128.25879786741103L203.93754306994856,129.36802922022986L203.05238754648576,133.14669802701462M313.6357827708414,239.26975917154766L314.8566869411352,240.58908499979282L314.58198350281896,242.18344520085515L313.5747375623266,241.3557547066373L313.6357827708414,239.26975917154766M321.90740852458134,239.20837499461243L322.3042023799269,241.01845439726253L321.60218248200795,241.0491202916707L321.90740852458134,239.20837499461243M315.1313903794512,237.82675494105968L315.741842464598,239.1776822320631L314.8261643368778,240.03690988621923L314.70407391984827,239.1776822320631L314.45989308578964,238.87072987726202L314.215712251731,238.80933400798517L314.154667043216,238.62513559567657L314.7345965241059,238.31810220074544L315.1313903794512,237.82675494105968M312.47592380906235,237.61175415347066L312.44540120480497,241.2024430725976L311.1939744302538,240.92645403661663L312.47592380906235,237.61175415347066M321.9684537330961,236.99734401983756L323.7082421757648,237.79604189884685L322.7009962352722,238.5330303093064L321.9684537330961,236.99734401983756M321.6632276905225,235.52201902332877L322.82308665230175,235.61425755026426L322.94517706933107,236.84371317011062L320.83911737557423,236.44421987161292L321.6632276905225,235.52201902332877M320.0455296648836,232.7529483371676L321.32747904369216,233.30705986288467L320.015007060626,234.44559927031622L319.22141934993533,234.26101391510616L319.49612278825134,233.43017550951032L320.0455296648836,232.7529483371676M323.9829456140808,230.195941570201L324.7460107205145,232.5374202090805L323.7692873842793,232.66058190602195L323.9829456140808,230.195941570201M323.097790090618,227.51226254013307L323.58615175873547,227.72832194823815L324.1660812396249,229.51764437634682L323.1893579033899,229.85682117367526L322.762041443787,228.9625059475522L322.79256404804437,227.57399615053043L323.097790090618,227.51226254013307M320.9306851883464,158.97164301432684L318.7330576818176,158.26676841728613L316.59647538380364,159.96438075171102L312.81167245589313,159.51611913177163L310.858225783423,157.91422157765504L311.28554224302593,153.67792909399498L313.36107933252515,148.20633394816736L312.44540120480497,147.8839164578966L312.62853683034905,146.49680784443728L316.01654590291423,146.2708896664248L319.4045549754794,144.3008676287286L320.9306851883464,144.78551701980734L322.67047363101506,147.5291849910377L321.14434341814786,152.61719238337002L322.94517706933107,157.04856904694105L321.60218248200795,157.46541980122146L320.9306851883464,158.97164301432684L322.51786060972836,159.54814172464114L326.02796009932285,164.12121501728967L328.62238146119716,163.45040748252154L335.8867612744448,165.71732645804565M335.8867612744448,170.5605030367339L335.8562386701876,170.5923215148057M333.9943598104894,173.8665365797737L332.8955460572254,173.13593005282792L331.6441192826742,176.4054241582175L329.0496979207999,176.21513389820308L326.394231350411,174.27935415079338L325.41750801417584,170.33775747990103L324.0134682183384,170.01950029906925L324.257649052397,171.92817577090779L320.9306851883464,171.67380583130364L315.9860232986566,167.05692260557186L315.49766163053914,168.68218614491968L317.7258117413253,170.5923215148057L312.8421950601505,174.7873047702896L312.2012203707461,179.4473007787892L315.741842464598,180.71321991515117L318.1531282009282,183.65303380772946L321.9684537330961,184.1899007460447L322.12106675438304,185.92573214532666L324.257649052397,186.90337813339573L323.097790090618,188.92008466244016L316.626997988061,188.38461442124913L316.0470685071714,192.2553736379195L314.7956417326204,193.19822644206738L312.9948080814372,192.2239369096822L310.82770317916584,196.3376050148882L315.28400340073813,200.6925783184173L320.5033687287437,201.88139094977566L320.625459145773,207.56486849808186L318.488876847759,208.3754144841443L318.3362638264723,210.52482459633057L321.0527756053757,214.53689650460376L320.4423235202289,217.3621645474911L323.7082421757648,218.2616719839694L322.487338005471,219.65664866120954L322.4568154012136,221.54605110520356L323.7998099885365,223.40273289406628L323.3419709246766,227.41965859673337L322.79256404804437,227.54312958048155L322.4262927969562,227.79004897717965L322.1515893586404,229.48680732275432L323.3419709246766,231.49024742608037L322.8841318608163,233.21471829890692L321.29695643943455,233.15315495590022L320.71702695854515,232.87609712611527L320.0455296648836,232.7221599877762L319.7708262265671,232.78373622564192L319.03828372439125,234.1994817982236L318.7941028903324,237.15096353620265L314.42937048153226,237.88817966996305L314.88720954539235,238.04173358755304L314.154667043216,238.56373252196136L314.12414443895887,238.71723682807908L314.3378026687601,239.42321175213834L313.5747375623266,239.23906730775576L312.7201046431212,236.38275255236988L313.6663053750988,234.66092801839045L311.3465874515405,235.5835118304916L308.4164174428356,239.94486659914298L303.7159363872047,241.60103015248086L303.13600690631506,239.20837499461243L300.9383793997863,238.65583645684558L300.29740471038235,236.41348643917866L297.09253126336125,237.08951708922262L297.6114155357359,235.89094852383107L296.543124386729,234.5071240583738L293.27720573119313,233.64561019464406L293.3687735439653,232.5990019799372M312.17069776648896,168.20432513710517L314.42937048153226,170.6877734767849L308.56903046412253,175.7075932830453L308.3248496300637,178.3072060419131L311.37711005579786,181.09282118001113L311.07188401322446,183.1160070911087L307.8059653576886,184.66347442243222L307.74492014917405,186.33577678145218L308.69112088115185,186.9349063465662L307.836487961946,188.10106658852192L304.84527274472634,186.39885235382968L303.563323365918,187.7859617405636L301.5488314849333,188.06955855361417L301.090992421073,190.05350436572428L299.53433960394864,190.4626225442015L297.7335059527654,196.99620126570335L296.268420948413,196.93348783626465L295.1696071951485,198.12468294493794L294.31497427594286,197.15297561665665L292.63623104178896,197.96799012260294L291.72055291406855,197.3724375853808L289.85867405437057,200.6925783184173L287.5694787350699,199.22116567845677L287.5694787350699,197.59187376296381L285.28028341576896,197.18432890630186L284.24251487101947,194.73718586705553L282.93004288795373,195.42773180132082L281.9533195517188,194.39181649246376L280.5798023601383,194.42321636739956L278.99262693875653,196.2748694196507L279.0536721472711,197.65456507942486L268.70650930403144,200.7864592063567L267.5771729465098,198.50069219140562L265.41006804423864,200.4735047093128L264.219686478202,200.1918011653368L263.1513953291951,202.0690297769978L259.9770444864314,198.31269701019625L257.9625526054465,199.15852679982498L256.37537718406475,196.83941373804777L254.66611134565346,198.40669696050116L254.54402092862415,198.34403085144197L253.50625238387465,198.53202288656314L253.04841332001433,198.75132308011172L249.66040424744915,198.50069219140562L249.9351076857654,198.15601993442067L249.9351076857654,198.09334543054013L249.23308778784644,195.3963489203157L249.17204257933167,195.3963489203157L248.16479663883933,194.6430005995059L247.24911851111915,191.2176781502722L247.64591236646447,188.44761906908104L253.50625238387465,185.45248854079193L257.535236145844,181.8833992491612L257.4131457288147,180.99792839950499L260.80115480137965,181.34584405211615L261.6252651163279,180.39682408232358L261.808400741872,180.4917487015602L263.4871439760259,181.2509646572267L264.92170637612094,179.54227580713956L257.13844229049823,174.91426960042713L256.4974676010943,173.54891880635228L258.6035272948509,172.4685895178245L258.81718552465236,170.75140522521156L255.15447301377117,169.6056792595718L255.2155182222857,168.74589103723582L258.5424820863361,166.73806505921902L262.1136267844456,166.92938662103137L259.610773235343,163.25870016587788L257.199487499013,162.9071812434185L255.7038798904032,159.45207214233835L256.2838093712926,158.49107836287521L254.54402092862415,155.95785921029136L254.2693174903079,154.48107278005693L256.7111258308955,154.57742431551947L257.93203000118933,153.26014297170627L260.1296575077181,155.1554180400626L264.8606611676064,156.08621447599256L265.7458166910692,157.81805974880234L265.1353646059224,160.50854027353654L269.4085292019504,161.7882331281471L270.38525253818534,163.13088341765L272.58288004471433,163.22674686933328L272.7660156702584,164.85560954834585L274.50580411292685,165.14289627143268L278.19903922806543,163.38650741703998L279.9083050664765,164.34475950152063L279.99987287924864,166.6105056219953L288.1799308202169,167.02503948839717L293.4603413567372,169.95584190616438L297.27566688890533,168.29990783565063L301.70144450622,171.1013384975273L302.3424191956242,170.05132862564153L307.47021671085804,170.21046156226186L307.86701056620336,169.28728860641837L310.76665797065084,171.00590908683927L312.17069776648896,168.20432513710517L312.9642854771798,163.22674686933328L310.5529997408496,159.58016371636643L310.858225783423,157.91422157765504M303.7159363872047,241.60103015248086L299.10702314434593,242.9801744645319L296.35998876118515,245.2461535842138L294.92542636108965,248.09053365098356L297.27566688890533,254.98713191774704L294.19288385891355,257.2101616071401L293.4603413567372,258.94440236307213L294.1318386503988,260.16060780375307L290.65226176506144,262.4392150620216L288.4851568627903,265.62540518825807L274.68893973847094,270.8653562868201L268.4623284699728,275.76141604028567L266.7835852358189,278.1151474681792L265.4405906484958,277.39117141111234L264.5554351250328,278.8389031794164L263.36505355899635,278.59767571566164L260.9842904269235,282.12320652052233L257.71837177138787,282.78554969425693L254.69663394991085,281.7317364378476L253.59782019664635,279.0198077595762L252.74318727744094,279.4720092201595L251.09496664754442,277.81351759575307L249.32465560061837,279.1404031915832L247.46277674092062,279.0499571890098L248.16479663883933,280.9787304070275L243.25065735340695,285.37297377993764L243.8000642300392,287.83749997710675L242.5791600597454,288.37816276902265L240.1678743234154,287.1765286261476L239.74055786381246,288.70850948116924L237.32927212748245,289.78933570565874L237.51240775302654,288.227990553586L235.8641871231298,286.0945551824418L234.24648909749067,287.59716730804536L233.91074045066011,292.7591872219612L229.69862106314645,292.60927934569577L224.05193927553773,296.0848457500621L220.9996788498038,296.2046077118945M266.7835852358189,278.1151474681792L257.9625526054465,289.2489815850148L252.3463934220954,292.09952546188765L245.72298829825195,299.40615495477607L236.84091045936498,304.15626077316904L233.3002883655131,307.43745592394384L232.59826846759415,309.25527795926075L234.18544388897612,310.26795365246903L233.2697657612557,313.8688040178798L225.5170242798904,317.58370248682473L220.84706582851686,316.8708309865425L219.16832259436296,317.4352027475785L217.7337601942677,322.2722218400223L215.1393388323936,325.67985502212247L213.4605955982397,326.0648098698616L211.99551059388727,323.5468584091875L209.03481798092503,323.93210090414357L206.7761452658815,325.4429340376371L203.87649786143402,330.6802717989237L202.71663889965475,335.31799369815957L204.73113078063943,342.12865598971723L203.84597525717663,347.4546586828104L205.76889932538916,356.1454691411702M216.42128821120218,296.5339240099695L216.5433786282315,296.5638597406601M217.0012176920916,296.14472743678016L217.09278550486374,296.0848457500621M139.7179837124977,41.93304029607788L138.98544121032148,41.725388933406236M122.04539584749568,32.0693733616157L127.75312284361917,32.6618250129211L129.30977566074364,35.41158413635662L133.27771421419823,37.49629155318104L136.45206505696183,36.69753149098585L137.33722058042497,40.20164941905426L138.98544121032148,41.725388933406236L139.7179837124977,41.93304029607788L140.1453001721003,45.14762674187028L144.3268969553567,47.631195548623964L147.0434087342603,51.07321812298369L148.60006155138467,51.10759527997857L151.22500551751614,57.28172505413653L153.20897479424366,56.323092671183986L158.61147574779352,63.0198530991845L157.97050105838912,64.24642835910902L153.27002000275797,64.17831308982551L151.2860507260309,66.62840981911057L149.332604053561,67.10432851265563L148.29483550881105,68.49717856177188L147.16549915128962,69.00641900700487L145.4562333128781,68.29343161925806L147.0128861300027,72.904600859362L144.11323872555522,76.55592392205733L140.81679746576197,78.14205546994259L136.02474859735923,76.72474373204557L134.71227661429316,75.33984038247365L133.52189504825685,76.11690039462343L129.9507503501476,75.44121969226615L129.0655948266849,71.10936163747255L125.89124398392107,71.0754676491186L115.69669416196837,65.74413909562918L116.06296541305642,63.83768772415539L114.7199708257333,61.177997201464734L115.54408114068156,57.7607959022165L115.08624207682146,52.51632801770637L112.55286592346192,44.97499051283046L113.1938406128661,41.448471492804515L115.51355853642417,41.24074666916789L117.61961823018089,37.774011305028694L121.099195115518,36.454337474763804L122.04539584749568,32.0693733616157L117.65014083443839,30.49986262482497L116.45975926840197,29.34772517210172L117.40596000037954,25.675245240945628L113.9569057192997,25.570169213113672L111.0572583148521,24.06317104028983L108.98172122535277,22.519362822794506L108.27970132743394,19.81338164473152L104.31176277397901,20.481603673063432L100.55748245032578,19.355983072585218L101.53420578656096,17.52480773166178L101.22897974398745,13.890160508977488L106.84513892733878,9.82015319243294L108.40179174446325,7.585119332205068L108.18813351466167,5.950766679895764L118.01641208552633,5.4885121646086645L118.93209021324662,4.527919381135575L116.88707572800467,3.3885177261250874L121.98435063898114,3.7446882826612864L122.25905407729715,2.7471639345588983L129.88970514163316,-1.1368683772161603e-13L132.78935254608064,2.2124596975028226L135.62795474201357,0.9639562676318292L139.01596381457875,2.3194182173787112L139.840074129527,5.168393487180538L142.0071790317984,4.848195917285352L144.99839424901825,6.164059514088649L147.56229300663495,10.280875187326501L156.902209909382,14.561383862454022L159.2219278329403,20.094779302493635L162.6099369055055,22.098013563543418L166.12003639509976,22.44914720663178L168.43975431865806,26.30552818682179L173.689642250921,26.62055841876304L174.51375256586925,24.869451263683573L176.83347048942755,25.465084929810473L178.66482674486792,22.41403800992623L180.70984123011021,21.360331143503572L187.7300402092992,19.77820273996963L190.11080334137205,20.481603673063432L191.8200691797831,17.982839151522057L193.773515852253,17.91238310325059L194.2924001246281,19.531924274146945L198.65713253342824,21.114346028682917L202.07566421025058,20.481603673063432L203.66283963163255,23.151136854230117L206.07412536796255,24.41378748023726L206.56248703608026,26.550558103962203L203.02186494222838,39.12708525288622L199.0234037845164,40.652021787941464L199.2981072228324,42.936245535020646L196.3984598183847,42.86708250914717L196.45950502689948,46.97624310385066L193.62090283096654,50.31670548122213L188.73728614979154,50.041507800156694L187.2416785411815,51.27946831913704L189.95819032008512,57.17904575390446L187.42481416672558,56.870962788590475L188.43206010721792,61.792215565567346L194.68919397997342,62.95167891899308L193.74299324799586,67.58008854731867L197.03943450778888,71.38048476578052L194.59762616720127,74.69760637596141L193.13254116284907,73.75063574333666L190.08028073711444,77.09607817105416L188.00474364761521,77.36607991668075L186.17338739217462,76.18445113217246L185.1356188474249,72.29514807751991L183.36530780049884,73.68297121160884L180.98454466842622,74.08891082772845L179.39736924704448,75.677743803937L179.24475622575756,74.02126215187911L180.4656603960516,73.31075954913109L179.21423362150017,71.85482723046636L174.88002381695742,73.78446681947258L171.30887911884838,67.64804132828715L165.99794597807045,70.05827577200853L163.4950924289683,67.51213253312966L160.50387721174866,66.62840981911057L158.61147574779352,63.0198530991845\n                                "], ["transform", "translate(1, 335) ", 1, "legendLinear"], ["transform", "translate(0,25) ", 1, "legendCells"], ["transform", "translate(0, 0) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(255, 245, 240)"], ["transform", "translate( 46, 10) ", 1, "label", 2, "font-size", "10px"], ["transform", "translate(0, 15) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(253, 213, 196)"], ["transform", "translate(0, 30) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(252, 165, 136)"], ["transform", "translate(\n                                46, 10) ", 1, "label", 2, "font-size", "10px"], ["transform", "translate(0, 45) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(250, 113, 82)"], ["transform", "translate( 46, 10)\n                                ", 1, "label", 2, "font-size", "10px"], ["transform", "translate(0, 60) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(233, 58, 45)"], ["transform", "translate(0, 75) ", 1, "cell"], ["height", "10 ", "width", "36 ", 1, "swatch", 2, "fill", "rgb(189, 22, 26)"], [1, "legendTitle", 2, "font-size", "10px"], ["x", "0 ", "dy", "0em "], ["x", "0 ", "dy", "1.2em "], [1, "col-12", "mx-4"], [3, "routerLink"], [1, "difference-time", 2, "color", "#0bb332fa", "font-weight", "600"], [1, "state"], [2, "font-weight", "600", 3, "click"], [2, "color", "inherit"], ["class", "deltas ", "style", "color: rgb(255, 7, 58); ", 4, "ngIf"], ["class", "nohover", "app-district", "", 4, "ngIf"], [1, "deltas", 2, "color", "rgb(255, 7, 58)"], ["xmlns", "http://www.w3.org/2000/svg ", "width", "24 ", "height", "24 ", "viewBox", "0 0 24 24\n                                        ", "fill", "none ", "stroke", "currentColor ", "stroke-width", "2 ", "stroke-linecap", "round ", "stroke-linejoin", "round "], ["x1", "12 ", "y1", "19 ", "x2", "12 ", "y2", "5 "], ["points", "5 12 12 5 19 12 "], ["app-district", "", 1, "nohover"], [1, "meta1"], [1, "map-stats", "hide-xs"], [1, "stats", "no-padd", "col-3"], [1, "stats-bottom"], [1, "stats", "is-blue", "no-padd", "col-3"], [1, "stats", "is-green", "no-padd", "col-3"], [1, "stats", "is-gray", "no-padd", "col-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "COVID-19 Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_h4_15_Template, 2, 1, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_template_16_Template, 1, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Deceased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Click on States to View District Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Click on table heading to sort data in Ascending/Descending order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "28 States/UTS Affected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_th_click_69_listener() { return ctx.sortAscending(ctx.sortedDataBasedOnDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "abbr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "State/UT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_th_click_74_listener() { return ctx.sortByMaxCases(ctx.sortedDataBasedOnDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "abbr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_th_click_79_listener() { return ctx.sortByMaxActive(ctx.sortedDataBasedOnDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "abbr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_th_click_84_listener() { return ctx.sortByMaxRecovered(ctx.sortedDataBasedOnDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "abbr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Recover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_th_click_89_listener() { return ctx.sortByMaxDeath(ctx.sortedDataBasedOnDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "abbr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Death");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, HomeComponent_tbody_94_Template, 14, 7, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "INDIA MAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, HomeComponent_div_100_Template, 3, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, HomeComponent_div_101_Template, 29, 4, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "g", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "0.34% from Andaman And Nicobar Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "0.03% from Arunachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "0.67% from Assam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "1.01% from Bihar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "0.60% from Chandigarh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "0.30% from Chhattisgarh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "0.00% from Dadra And Nagar Haveli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "0.00% from Daman And Diu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "0.20% from Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "3.19% from Gujarat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "1.95% from Haryana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "0.20% from Himachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "0.07% from Jharkhand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "0.00% from Lakshadweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "4.33% from Madhya Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "0.07% from Manipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "0.00% from Meghalaya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "0.03% from Mizoram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "0.00% from Nagaland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "12.90% from Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "0.17% from Puducherry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "1.78% from Punjab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "5.65% from Rajasthan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "0.00% from Sikkim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "7.69% from Telangana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "0.00% from Tripura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "5.78% from Uttar Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "0.34% from Uttarakhand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "1.78% from West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "0.30% from Odisha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "5.41% from Andhra Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "0.00% from Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "0.44% from Ladakh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "2.52% from Jammu And Kashmir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "14.21% from Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "9.91% from Kerala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "13.81% from Tamil Nadu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "4.30% from Karnataka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "g", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "g", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "g", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "rect", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "text", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "1 - 84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "rect", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "text", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "85 - 168");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "rect", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "text", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "169 - 252");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "rect", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "text", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "253 - 336");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "g", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "rect", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "text", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "337 - 420");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "rect", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "text", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "420+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "text", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tspan", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "tspan", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastupdated.hour == 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 16, ctx.lastrefreshedtime, "dd MMM, hh:mm"), " IST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.statewisecase.confirmed, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statewisecase.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.statewisecase.recovered, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statewisecase.deaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.showArrows.downarrowState, ctx.showArrows.uparrowState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx.showArrows.downarrowConfirmed, ctx.showArrows.uparrowowConfirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.showArrows.downarrowActive, ctx.showArrows.uparrowActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.showArrows.downarrowRecovered, ctx.showArrows.uparrowRecovered));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.showArrows.downarrowDeath, ctx.showArrows.uparrowDeath));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statewisedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SingleStateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SingleStateData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _district_district_component__WEBPACK_IMPORTED_MODULE_4__["DistrictComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'home.component.html', providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]] }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");













































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/covid-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map