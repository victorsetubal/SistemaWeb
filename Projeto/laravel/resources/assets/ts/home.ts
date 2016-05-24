import {Component, Inject, Injectable} from 'angular2/core';
import { TimeOutService } from './services/timeOutService';
import { CompraService } from './services/CompraService';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-app',
    'providers': [TimeOutService, CompraService],
    templateUrl: 'app/templates/home.blade.php',
})
export class Home { 

	private router: Router;
	private timeOutService: TimeOutService;
  private compraService: CompraService;
	private redirectRoute: string = '';

	constructor (  

	    @Inject(TimeOutService) timeOutService: TimeOutService,
      @Inject(CompraService) compraService: CompraService,
		@Inject(Router) router: Router 

		){


		 this.router = router;
		 this.timeOutService = timeOutService;
     this.compraService = compraService;


	}

  cadastrarUnidade(){

        this.timeOutService.timeOut().then(
            () => {
                   this.router.parent.navigate(['/CadastrarUnidade']);
            },
            (error) => {
                document.write(error);
            }
        );

   
           
  }


	cadastrarProduto(){

		    this.timeOutService.timeOut().then(
            () => {
                   this.router.parent.navigate(['/CadastrarProduto']);
            },
            (error) => {
                document.write(error);
            }
        );

   
           
  }



	listarProdutos(){

      this.timeOutService.timeOut().then(
            () => {
                  this.router.parent.navigate(['/ListarProdutos']);
            },
            (error) => {
                document.write(error);
            }
        );

		 
	}

  listarUnidades(){

      this.timeOutService.timeOut().then(
            () => {
                  this.router.parent.navigate(['/ListarUnidades']);
            },
            (error) => {
                document.write(error);
            }
        );

     
  }


  gerarNotaFiscal(){




  
     this.timeOutService.timeOut().then(
        () => {
                  this.router.parent.navigate(['/NotaFiscal']);
          },
         (error) => {
               document.write(error);
           }
     );

     
  }






}