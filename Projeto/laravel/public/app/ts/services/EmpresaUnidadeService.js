System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var EmpresaUnidadeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            EmpresaUnidadeService = (function () {
                function EmpresaUnidadeService(http) {
                    this.http = http;
                }
                /**
                 * PLACEHOLDER for files uploading
                 *
                 * @returns {Promise<T>}
                 */
                EmpresaUnidadeService.prototype.cadastrarEmpresa = function (empresa) {
                    fetch('http://localhost:8000/cadastrarEmpresa', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(empresa)
                    })
                        .then(status)
                        .then(function (response) {
                        if (response.status == 200) {
                        }
                    })
                        .catch(function (error) {
                        //   alert(error.message);
                        // console.log(error.message);
                    });
                };
                EmpresaUnidadeService.prototype.cadastrarUnidade = function (unidade) {
                    fetch('http://localhost:8000/cadastrarUnidade', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(unidade)
                    })
                        .then(status)
                        .then(function (response) {
                        if (response.status == 200) {
                        }
                    })
                        .catch(function (error) {
                        //   alert(error.message);
                        // console.log(error.message);
                    });
                };
                EmpresaUnidadeService.prototype.listarUnidades = function () {
                    return this.http.get('http://localhost:8000/listarUnidades');
                };
                EmpresaUnidadeService.prototype.alterarUnidade = function (unidade) {
                    unidade = JSON.stringify(unidade);
                    fetch('http://localhost:8000/alterarUnidade', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: unidade
                    })
                        .then(status)
                        .then(function (response) {
                        if (response.status == 200) {
                        }
                    })
                        .catch(function (error) {
                        //   alert(error.message);
                        // console.log(error.message);
                    });
                };
                EmpresaUnidadeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmpresaUnidadeService);
                return EmpresaUnidadeService;
            }());
            exports_1("EmpresaUnidadeService", EmpresaUnidadeService);
        }
    }
});
