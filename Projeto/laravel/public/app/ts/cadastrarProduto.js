System.register(['angular2/core', 'angular2/router', './services/ProdutoService', './services/ComboService'], function(exports_1, context_1) {
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
    var core_1, router_1, ProdutoService_1, ComboService_1;
    var CadastrarProduto;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ProdutoService_1_1) {
                ProdutoService_1 = ProdutoService_1_1;
            },
            function (ComboService_1_1) {
                ComboService_1 = ComboService_1_1;
            }],
        execute: function() {
            CadastrarProduto = (function () {
                function CadastrarProduto(produtoService, comboService, router) {
                    this.produto = { nome: "", volume: "", preco_unitario: null, cod_categoria: null };
                    this.redirectRoute = '/ListarProdutos';
                    this.router = router;
                    this.produtoService = produtoService;
                    this.comboService = comboService;
                }
                CadastrarProduto.prototype.ngOnInit = function () {
                    this.buscarCategorias();
                };
                CadastrarProduto.prototype.buscarCategorias = function () {
                    var _this = this;
                    var a = this.comboService.buscarCategorias();
                    a.subscribe(function (categorias) { return _this.categorias = categorias.json(); }, function (error) { return alert(error); }, function () { });
                };
                CadastrarProduto.prototype.cadastrarProduto = function () {
                    var preco = this.produto.preco_unitario.length;
                    this.produto.preco_unitario = this.produto.preco_unitario.substring(0, preco - 1);
                    console.log(this.produto);
                    this.produtoService.cadastrarProduto(this.produto);
                    this.router.parent.navigate([this.redirectRoute]);
                };
                CadastrarProduto.prototype.setCategoria = function (categoria) {
                    console.log(categoria);
                    this.produto.cod_categoria = categoria;
                };
                CadastrarProduto = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/cadastrarProduto.blade.php',
                        'providers': [ProdutoService_1.ProdutoService, ComboService_1.ComboService]
                    }),
                    __param(0, core_1.Inject(ProdutoService_1.ProdutoService)),
                    __param(1, core_1.Inject(ComboService_1.ComboService)),
                    __param(2, core_1.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [ProdutoService_1.ProdutoService, ComboService_1.ComboService, router_1.Router])
                ], CadastrarProduto);
                return CadastrarProduto;
            }());
            exports_1("CadastrarProduto", CadastrarProduto);
        }
    }
});
