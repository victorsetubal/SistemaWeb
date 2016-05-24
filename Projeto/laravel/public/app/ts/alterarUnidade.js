System.register(['angular2/core', 'angular2/router', './services/EmpresaUnidadeService', './services/TimeOutService'], function(exports_1, context_1) {
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
    var core_1, router_1, EmpresaUnidadeService_1, TimeOutService_1;
    var AlterarUnidade;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (EmpresaUnidadeService_1_1) {
                EmpresaUnidadeService_1 = EmpresaUnidadeService_1_1;
            },
            function (TimeOutService_1_1) {
                TimeOutService_1 = TimeOutService_1_1;
            }],
        execute: function() {
            AlterarUnidade = (function () {
                function AlterarUnidade(empresaUnidadeService, router, timeOutService, routeParams) {
                    this.unidade = {};
                    this.redirectRoute = '/ListarUnidades';
                    this.visible = false;
                    this.router = router;
                    this.empresaUnidadeService = empresaUnidadeService;
                    this.timeOutService = timeOutService;
                    this.routeParams = routeParams;
                }
                AlterarUnidade.prototype.ngOnInit = function () {
                    this.unidade = this.routeParams.get('unidade');
                    console.log(this.unidade);
                };
                AlterarUnidade.prototype.alterarUnidade = function () {
                    //provisório
                    this.unidade.cod_empresa = 1;
                    delete this.unidade.checkUnidade;
                    delete this.unidade.nome_fantasia;
                    var a = this.empresaUnidadeService.alterarUnidade(this.unidade);
                    this.router.parent.navigate([this.redirectRoute]);
                };
                AlterarUnidade.prototype.voltar = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate([_this.redirectRoute]);
                    }, function (error) {
                        document.write(error);
                    });
                };
                AlterarUnidade = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/alterarUnidade.blade.php',
                        'providers': [EmpresaUnidadeService_1.EmpresaUnidadeService, TimeOutService_1.TimeOutService]
                    }),
                    __param(0, core_1.Inject(EmpresaUnidadeService_1.EmpresaUnidadeService)),
                    __param(1, core_1.Inject(router_1.Router)),
                    __param(2, core_1.Inject(TimeOutService_1.TimeOutService)),
                    __param(3, core_1.Inject(router_1.RouteParams)), 
                    __metadata('design:paramtypes', [EmpresaUnidadeService_1.EmpresaUnidadeService, router_1.Router, TimeOutService_1.TimeOutService, router_1.RouteParams])
                ], AlterarUnidade);
                return AlterarUnidade;
            }());
            exports_1("AlterarUnidade", AlterarUnidade);
        }
    }
});
