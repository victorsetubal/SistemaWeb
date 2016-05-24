System.register(['angular2/core', './services/ProdutoService'], function(exports_1, context_1) {
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
    var core_1, ProdutoService_1;
    var ListarProdutos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProdutoService_1_1) {
                ProdutoService_1 = ProdutoService_1_1;
            }],
        execute: function() {
            ListarProdutos = (function () {
                function ListarProdutos(produtoService) {
                    this.produtoService = produtoService;
                }
                ListarProdutos.prototype.ngOnInit = function () {
                    this.listarProdutos();
                };
                ListarProdutos.prototype.listarProdutos = function () {
                    var _this = this;
                    var a = this.produtoService.listarProdutos();
                    a.subscribe(function (produtos) { return _this.produtos = produtos.json(); }, function (error) { return alert(error); }, function () { });
                };
                ListarProdutos = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/produtos.blade.php',
                        'providers': [ProdutoService_1.ProdutoService],
                    }),
                    __param(0, core_1.Inject(ProdutoService_1.ProdutoService)), 
                    __metadata('design:paramtypes', [ProdutoService_1.ProdutoService])
                ], ListarProdutos);
                return ListarProdutos;
            }());
            exports_1("ListarProdutos", ListarProdutos);
        }
    }
});
