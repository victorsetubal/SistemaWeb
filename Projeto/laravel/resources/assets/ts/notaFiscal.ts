import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';
  import  { Response}  from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { CompraService } from './services/CompraService';



 




@Component({
    selector: 'my-app',
    template: '<div>Gerando nota fiscal ...</div>',
    'providers': [CompraService],
   })
export class NotaFiscal implements OnInit { 

  private compraService: CompraService;


	constructor(
     @Inject(CompraService) compraService: CompraService
    ) {

     this.compraService = compraService;

  }

    ngOnInit() : any{

     this.gerarNotaFiscal();
  }


   public gerarNotaFiscal(){

     var url = "http://localhost:8000/gerarNotaFiscal";
  
    var a = this.compraService.gerarNotaFiscal(url);

            //  a.subscribe();

           // categorias =>  this.categorias = categorias.json(),


         //   error => alert(error),
      //  () => {}
                     
     // );

    console.log(a);

}

   

}