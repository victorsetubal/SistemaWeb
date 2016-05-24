import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

 import { Unidade } from './objects/Unidade';
 import { EmpresaUnidadeService } from './services/EmpresaUnidadeService';
 import { TimeOutService } from './services/TimeOutService';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/alterarUnidade.blade.php',
    'providers': [EmpresaUnidadeService, TimeOutService]
})
export class AlterarUnidade implements OnInit { 

  private empresaUnidadeService: EmpresaUnidadeService;
  public unidade: any = {};
    private router: Router;
    private routeParams: RouteParams;
    private redirectRoute: string = '/ListarUnidades';
    private timeOutService: TimeOutService;
    public visible: boolean = false;


	constructor(

    @Inject(EmpresaUnidadeService) empresaUnidadeService: EmpresaUnidadeService,
    @Inject(Router) router: Router,
    @Inject(TimeOutService) timeOutService: TimeOutService, 
    @Inject(RouteParams) routeParams: RouteParams

     

    ){


     this.router = router;
     this.empresaUnidadeService = empresaUnidadeService;
     this.timeOutService = timeOutService;
     this.routeParams = routeParams;



  }
 ngOnInit() {

      this.unidade = this.routeParams.get('unidade') ;
    console.log (this.unidade);

  }

   alterarUnidade(){

   //provisório
      this.unidade.cod_empresa = 1;
     
      delete this.unidade.checkUnidade;
      delete this.unidade.nome_fantasia;

    var a =  this.empresaUnidadeService.alterarUnidade(this.unidade);

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