System.register(['angular2/core', './services/timeOutService', './services/CompraService', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, timeOutService_1, CompraService_1, router_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timeOutService_1_1) {
                timeOutService_1 = timeOutService_1_1;
            },
            function (CompraService_1_1) {
                CompraService_1 = CompraService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(timeOutService, compraService, router) {
                    this.redirectRoute = '';
                    this.router = router;
                    this.timeOutService = timeOutService;
                    this.compraService = compraService;
                }
                Home.prototype.cadastrarUnidade = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/CadastrarUnidade']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Home.prototype.cadastrarProduto = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/CadastrarProduto']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Home.prototype.listarProdutos = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/ListarProdutos']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Home.prototype.listarUnidades = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/ListarUnidades']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Home.prototype.gerarNotaFiscal = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/NotaFiscal']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        'providers': [timeOutService_1.TimeOutService, CompraService_1.CompraService],
                        templateUrl: 'app/templates/home.blade.php',
                    }),
                    __param(0, core_1.Inject(timeOutService_1.TimeOutService)),
                    __param(1, core_1.Inject(CompraService_1.CompraService)),
                    __param(2, core_1.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [timeOutService_1.TimeOutService, CompraService_1.CompraService, router_1.Router])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
