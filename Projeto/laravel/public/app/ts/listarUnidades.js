System.register(['angular2/core', 'angular2/router', './services/timeOutService', './services/EmpresaUnidadeService'], function(exports_1, context_1) {
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
    var core_1, router_1, timeOutService_1, EmpresaUnidadeService_1;
    var ListarUnidades;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (timeOutService_1_1) {
                timeOutService_1 = timeOutService_1_1;
            },
            function (EmpresaUnidadeService_1_1) {
                EmpresaUnidadeService_1 = EmpresaUnidadeService_1_1;
            }],
        execute: function() {
            ListarUnidades = (function () {
                function ListarUnidades(empresaUnidadeService, router, timeOutService) {
                    this.checkUnidade = false;
                    this.desabilitaBotao = true;
                    this.desabilitaAlterarUnidade = true;
                    this.a = 0;
                    this.empresaUnidadeService = empresaUnidadeService;
                    this.router = router;
                    this.timeOutService = timeOutService;
                }
                ListarUnidades.prototype.ngOnInit = function () {
                    this.listarUnidades();
                };
                ListarUnidades.prototype.listarUnidades = function () {
                    var _this = this;
                    var a = this.empresaUnidadeService.listarUnidades();
                    a.subscribe(function (unidades) {
                        _this.unidades = unidades.json();
                    }, function (error) { return alert(error); }, function () {
                    });
                };
                ListarUnidades.prototype.adicionarUnidade = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/CadastrarUnidade']);
                    }, function (error) {
                        document.write(error);
                    });
                };
                ListarUnidades.prototype.alterarUnidade = function () {
                    var _this = this;
                    this.timeOutService.timeOut().then(function () {
                        _this.router.parent.navigate(['/AlterarUnidade', {
                                unidade: _this.unidadeAtual
                            }]);
                    }, function (error) {
                        document.write(error);
                    });
                    //  this.alteraUnidade = new AlterarUnidade(  this.empresaUnidadeService, this.router, this.timeOutService);
                    // this.alteraUnidade.setUnidade(this.unidadeAtual);
                };
                ListarUnidades.prototype.verificaSelecaoUnidade = function (checkUnidade, unidade) {
                    if (typeof checkUnidade == "undefined") {
                        checkUnidade = false; // está marcado
                    }
                    if (checkUnidade == false) {
                        this.checkUnidade = true; // está marcado
                        this.a++;
                    }
                    else {
                        this.checkUnidade = false; // não está marcado
                        this.a--;
                    }
                    if (this.a >= 1) {
                        this.desabilitaBotao = false;
                    }
                    else {
                        this.desabilitaBotao = true;
                        this.desabilitaAlterarUnidade = true;
                    }
                    if (this.a == 1) {
                        this.unidadeAtual = unidade;
                        this.desabilitaAlterarUnidade = false;
                    }
                    else {
                        this.desabilitaAlterarUnidade = true;
                    }
                };
                ListarUnidades = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/unidades.blade.php',
                        'providers': [EmpresaUnidadeService_1.EmpresaUnidadeService, timeOutService_1.TimeOutService]
                    }),
                    __param(0, core_1.Inject(EmpresaUnidadeService_1.EmpresaUnidadeService)),
                    __param(1, core_1.Inject(router_1.Router)),
                    __param(2, core_1.Inject(timeOutService_1.TimeOutService)), 
                    __metadata('design:paramtypes', [EmpresaUnidadeService_1.EmpresaUnidadeService, router_1.Router, timeOutService_1.TimeOutService])
                ], ListarUnidades);
                return ListarUnidades;
            }());
            exports_1("ListarUnidades", ListarUnidades);
        }
    }
});
