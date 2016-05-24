import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';
  import  { Response}  from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { Unidade }     from './objects/Unidade';
import { TimeOutService } from './services/timeOutService';
import { AlterarUnidade } from './alterarUnidade';


 import { EmpresaUnidadeService } from './services/EmpresaUnidadeService';

 

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/unidades.blade.php',
    'providers': [EmpresaUnidadeService, TimeOutService]
   })
export class ListarUnidades implements OnInit { 

  private empresaUnidadeService: EmpresaUnidadeService;
  public unidades : Unidade[];
  public unidadeAtual : Unidade;
  public checkUnidade = false;
  public desabilitaBotao : boolean = true;
  public desabilitaAlterarUnidade: boolean = true;
  public a: number = 0;
  private router: Router;
  private timeOutService: TimeOutService;
  public loading: String;
  public alteraUnidade: AlterarUnidade;

	constructor(
     @Inject(EmpresaUnidadeService) empresaUnidadeService: EmpresaUnidadeService,
     @Inject(Router) router: Router,
     @Inject(TimeOutService) timeOutService: TimeOutService
    ) {

     this.empresaUnidadeService = empresaUnidadeService;
     this.router = router;
     this.timeOutService = timeOutService;

  }

    ngOnInit() : any{

     this.listarUnidades();
  }




   public listarUnidades(){

    var a = this.empresaUnidadeService.listarUnidades();
                   a.subscribe(
            unidades =>  {
            this.unidades = unidades.json() },


            error => alert(error),
        () => {


     } );

 
}
  public adicionarUnidade (){

     this.timeOutService.timeOut().then(
            () => {
                   this.router.parent.navigate(['/CadastrarUnidade']);
            },
            (error) => {
                document.write(error);
            }
        );


  }  

    public alterarUnidade (){

  this.timeOutService.timeOut().then(
            () => {
                  this.router.parent.navigate(['/AlterarUnidade', {

        unidade: this.unidadeAtual

      }]);
            },
            (error) => {
                document.write(error);
            }
        );
    //  this.alteraUnidade = new AlterarUnidade(  this.empresaUnidadeService, this.router, this.timeOutService);
     // this.alteraUnidade.setUnidade(this.unidadeAtual);
       
    

  }  

  public verificaSelecaoUnidade (checkUnidade, unidade){



     
      if (typeof checkUnidade == "undefined") {
            checkUnidade = false; // está marcado
       }


       if (checkUnidade == false){
        this.checkUnidade = true; // está marcado
        this.a++;
       }else{
         this.checkUnidade = false; // não está marcado
         this.a--; 
       }



      if (this.a >= 1){
         this.desabilitaBotao = false;
    
     // }else if (this.a == 1){
       // this.desabilitaAlterarUnidade = false;
     
        
      }else{

         this.desabilitaBotao = true;
         this.desabilitaAlterarUnidade = true;


      }

      if (this.a == 1){
    
           this.unidadeAtual = unidade;
        this.desabilitaAlterarUnidade = false;
        
      }else{

           this.desabilitaAlterarUnidade = true;

      }


  }




   

}