System.register(['angular2/core', './login', './home', './cadastrarProduto', './cadastrarEmpresa', './cadastrarUnidade', './alterarUnidade', './listarProdutos', './listarUnidades', './notaFiscal', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, login_1, home_1, cadastrarProduto_1, cadastrarEmpresa_1, cadastrarUnidade_1, alterarUnidade_1, listarProdutos_1, listarUnidades_1, notaFiscal_1, router_1;
    var Outlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (cadastrarProduto_1_1) {
                cadastrarProduto_1 = cadastrarProduto_1_1;
            },
            function (cadastrarEmpresa_1_1) {
                cadastrarEmpresa_1 = cadastrarEmpresa_1_1;
            },
            function (cadastrarUnidade_1_1) {
                cadastrarUnidade_1 = cadastrarUnidade_1_1;
            },
            function (alterarUnidade_1_1) {
                alterarUnidade_1 = alterarUnidade_1_1;
            },
            function (listarProdutos_1_1) {
                listarProdutos_1 = listarProdutos_1_1;
            },
            function (listarUnidades_1_1) {
                listarUnidades_1 = listarUnidades_1_1;
            },
            function (notaFiscal_1_1) {
                notaFiscal_1 = notaFiscal_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Outlet = (function () {
                function Outlet() {
                }
                Outlet = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_1.Login, useAsDefault: true },
                        { path: '/home', name: 'Home', component: home_1.Home },
                        { path: '/cadastraProduto', name: 'CadastrarProduto', component: cadastrarProduto_1.CadastrarProduto },
                        { path: '/listaProdutos', name: 'ListarProdutos', component: listarProdutos_1.ListarProdutos },
                        { path: '/listaUnidades', name: 'ListarUnidades', component: listarUnidades_1.ListarUnidades },
                        { path: '/cadastraEmpresa', name: 'CadastrarEmpresa', component: cadastrarEmpresa_1.CadastrarEmpresa },
                        { path: '/cadastraUnidade', name: 'CadastrarUnidade', component: cadastrarUnidade_1.CadastrarUnidade },
                        { path: '/alteraUnidade', name: 'AlterarUnidade', component: alterarUnidade_1.AlterarUnidade },
                        { path: '/geraNotaFiscal', name: 'NotaFiscal', component: notaFiscal_1.NotaFiscal }
                    ]),
                    core_1.Component({
                        'directives': [router_1.ROUTER_DIRECTIVES],
                        'selector': 'my-app',
                        'template': '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Outlet);
                return Outlet;
            }());
            exports_1("Outlet", Outlet);
        }
    }
});
