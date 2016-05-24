import {Component} from 'angular2/core';
import {Login} from './login';
import {Home} from './home';
import {CadastrarProduto} from './cadastrarProduto';
import {CadastrarEmpresa} from './cadastrarEmpresa';
import {CadastrarUnidade} from './cadastrarUnidade';
import {AlterarUnidade} from './alterarUnidade';
import {ListarProdutos} from './listarProdutos';
import {ListarUnidades} from './listarUnidades';
import {NotaFiscal} from './notaFiscal';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@RouteConfig([
  { path: '/', name: 'Login', component: Login, useAsDefault: true},
   { path: '/home', name: 'Home', component: Home},
{ path: '/cadastraProduto', name: 'CadastrarProduto', component: CadastrarProduto},
{ path: '/listaProdutos', name: 'ListarProdutos', component: ListarProdutos},
{ path: '/listaUnidades', name: 'ListarUnidades', component: ListarUnidades},
{ path: '/cadastraEmpresa', name: 'CadastrarEmpresa', component: CadastrarEmpresa},
{ path: '/cadastraUnidade', name: 'CadastrarUnidade', component: CadastrarUnidade},
{ path: '/alteraUnidade', name: 'AlterarUnidade', component: AlterarUnidade},
{ path: '/geraNotaFiscal', name: 'NotaFiscal', component: NotaFiscal}
//:codEmpresa:codUnidade:endereco:contato:hora_abertura:hora_fechamento'
])

@Component({
    'directives': [ROUTER_DIRECTIVES],
    'selector': 'my-app',
    'template': '<router-outlet></router-outlet>'
})
export class Outlet { 
     constructor () {}




}