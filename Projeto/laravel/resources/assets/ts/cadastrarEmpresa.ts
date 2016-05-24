import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';

 import { Empresa } from './objects/Empresa';
 import { EmpresaUnidadeService } from './services/EmpresaUnidadeService';
 import { TimeOutService } from './services/timeOutService';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/cadastrarEmpresa.blade.php',
    'providers': [EmpresaUnidadeService, TimeOutService]
})
export class CadastrarEmpresa implements OnInit { 

  private empresaUnidadeService: EmpresaUnidadeService;
  public empresa: Empresa = {nome_fantasia: "", nome_real: "", contato: null, senha: null, cnpj: ""};
    private router: Router;
    private redirectRoute: string = '/Home';
      private timeOutService: TimeOutService;


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



    cadastrarEmpresa(){

      console.log(this.empresa); 
      this.empresaUnidadeService.cadastrarEmpresa(this.empresa);

    this.router.parent.navigate(['/Login']);
           
  }

   

    voltar(){

      this.timeOutService.timeOut().then(
            () => {
                  this.router.parent.navigate(['/Login']);
            },
            (error) => {
                document.write(error);
            }
        );

     
  }




}