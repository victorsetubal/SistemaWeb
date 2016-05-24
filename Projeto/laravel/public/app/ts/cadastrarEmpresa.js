System.register(['angular2/core', 'angular2/router', './services/EmpresaUnidadeService', './services/timeOutService'], function(exports_1, context_1) {
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
    var core_1, router_1, EmpresaUnidadeService_1, timeOutService_1;
    var CadastrarEmpresa;
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
            function (timeOutService_1_1) {
                timeOutService_1 = timeOutService_1_1;
            }],
        execute: function() {
            CadastrarEmpresa = (function () {
                function CadastrarEmpresa(empresaUnidadeService, router, timeOutService) {
                    this.empresa = { nome_fantasia: "", nome_real: "", contato: null, senha: null, cnpj: "" };
                    this.redirectRoute = '/Home';
                    this.router = router;
                    this.empresaUnidadeService = empresaUnidadeService;
                    this.timeOutService = timeOutService;
                }
                CadastrarEmpresa.prototype.ngOnInit = function () {
                };
                CadastrarEmpresa.prototype.cadastrarEmpresa = function () {
                    console.log(this.empresa);
                    this.empresaUnidadeService.cadastrarEmpresa(this.empresa);
                    this.router.parent.navigate(['/Login']);
                };
                CadastrarEmpresa.prototype.voltar = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/Login']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                CadastrarEmpresa = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/cadastrarEmpresa.blade.php',
                        'providers': [EmpresaUnidadeService_1.EmpresaUnidadeService, timeOutService_1.TimeOutService]
                    }),
                    __param(0, core_1.Inject(EmpresaUnidadeService_1.EmpresaUnidadeService)),
                    __param(1, core_1.Inject(router_1.Router)),
                    __param(2, core_1.Inject(timeOutService_1.TimeOutService)), 
                    __metadata('design:paramtypes', [EmpresaUnidadeService_1.EmpresaUnidadeService, router_1.Router, timeOutService_1.TimeOutService])
                ], CadastrarEmpresa);
                return CadastrarEmpresa;
            }());
            exports_1("CadastrarEmpresa", CadastrarEmpresa);
        }
    }
});
