import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';
  import  { Response}  from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { Produto }     from './objects/Produto';

 import { ProdutoService } from './services/ProdutoService';

 




@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/produtos.blade.php',
    'providers': [ProdutoService],
   })
export class ListarProdutos implements OnInit { 

  private produtoService: ProdutoService;
  public produtos : Produto[];


	constructor(
     @Inject(ProdutoService) produtoService: ProdutoService
    ) {

     this.produtoService = produtoService;

  }

    ngOnInit() : any{

     this.listarProdutos();
  }


   public listarProdutos(){

  


    var a = this.produtoService.listarProdutos();
                   a.subscribe(

            produtos =>  this.produtos = produtos.json(),


            error => alert(error),
        () => {}
                     
      );
    
}

   

}