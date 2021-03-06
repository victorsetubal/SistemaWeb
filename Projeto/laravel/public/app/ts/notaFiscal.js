System.register(['angular2/core', './services/CompraService'], function(exports_1, context_1) {
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
    var core_1, CompraService_1;
    var NotaFiscal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CompraService_1_1) {
                CompraService_1 = CompraService_1_1;
            }],
        execute: function() {
            NotaFiscal = (function () {
                function NotaFiscal(compraService) {
                    this.compraService = compraService;
                }
                NotaFiscal.prototype.ngOnInit = function () {
                    this.gerarNotaFiscal();
                };
                NotaFiscal.prototype.gerarNotaFiscal = function () {
                    var url = "http://localhost:8000/gerarNotaFiscal";
                    var a = this.compraService.gerarNotaFiscal(url);
                    //  a.subscribe();
                    // categorias =>  this.categorias = categorias.json(),
                    //   error => alert(error),
                    //  () => {}
                    // );
                    console.log(a);
                };
                NotaFiscal = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<div>Gerando nota fiscal ...</div>',
                        'providers': [CompraService_1.CompraService],
                    }),
                    __param(0, core_1.Inject(CompraService_1.CompraService)), 
                    __metadata('design:paramtypes', [CompraService_1.CompraService])
                ], NotaFiscal);
                return NotaFiscal;
            }());
            exports_1("NotaFiscal", NotaFiscal);
        }
    }
});
