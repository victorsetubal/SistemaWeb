System.register(['angular2/core', './services/timeOutService', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, timeOutService_1, router_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timeOutService_1_1) {
                timeOutService_1 = timeOutService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(timeOutService, router) {
                    this.redirectRoute = '/Home';
                    this.router = router;
                    this.timeOutService = timeOutService;
                }
                Login.prototype.fazerLogin = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate([_this.redirectRoute]);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Login.prototype.cadastrarEmpresa = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/CadastrarEmpresa']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        'providers': [timeOutService_1.TimeOutService],
                        templateUrl: 'app/templates/login.blade.php',
                    }),
                    __param(0, core_1.Inject(timeOutService_1.TimeOutService)),
                    __param(1, core_1.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [timeOutService_1.TimeOutService, router_1.Router])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
