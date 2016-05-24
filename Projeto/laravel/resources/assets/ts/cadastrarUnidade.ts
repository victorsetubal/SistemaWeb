import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';

 import { Unidade } from './objects/Unidade';
 import { EmpresaUnidadeService } from './services/EmpresaUnidadeService';
 import { TimeOutService } from './services/timeOutService';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/cadastrarUnidade.blade.php',
    'providers': [EmpresaUnidadeService, TimeOutService]
})
export class CadastrarUnidade implements OnInit { 

  private empresaUnidadeService: EmpresaUnidadeService;
  public unidade: Unidade = {cod_unidade: null, cod_empresa: null, 
                            endereco: null, contato: null, hora_abertura: null, hora_fechamento: null, checkUnidade: false};
    private router: Router;
    private redirectRoute: string = '/ListarUnidades';
      private timeOutService: TimeOutService;
     public visible: boolean = false;

	constructor(

    @Inject(EmpresaUnidadeService) empresaUnidadeService: EmpresaUnidadeService,
    @Inject(Router) router: Router,
     @Inject(TimeOutService) timeOutService: TimeOutService
     

    ){


     this.router = router;
     this.empresaUnidadeService = empresaUnidadeService;
      this.timeOutService = timeOutService;


  }
 ngOnInit() : any{



  }



    cadastrarUnidade(){
   //provisório
      this.unidade.cod_empresa = 1;
      delete this.unidade.checkUnidade;
      this.empresaUnidadeService.cadastrarUnidade(this.unidade);

     this.router.parent.navigate([this.redirectRoute]);
           
  }

   

    voltar(){

      this.timeOutService.timeOut().then(
            () => {
                  this.router.parent.navigate([this.redirectRoute]);
            },
            (error) => {
                document.write(error);
            }
        );

     
  }




}