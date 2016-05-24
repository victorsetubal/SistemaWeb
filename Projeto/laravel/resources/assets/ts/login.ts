import {Component, Inject, Injectable} from 'angular2/core';
import { TimeOutService } from './services/timeOutService';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-app',
    'providers': [TimeOutService],
    templateUrl: 'app/templates/login.blade.php',
})
export class Login { 

	private router: Router;
	private timeOutService: TimeOutService;
	private redirectRoute: string = '/Home';

	constructor (  

	    @Inject(TimeOutService) timeOutService: TimeOutService,
		@Inject(Router) router: Router 

		){


		 this.router = router;
		 this.timeOutService = timeOutService;


	}


	fazerLogin(){

      this.timeOutService.timeOut().then(
            () => {
                this.router.parent.navigate([this.redirectRoute]);
            },
            (error) => {
                document.write(error);
            }
        );

		 
	}

		cadastrarEmpresa(){

		    this.timeOutService.timeOut().then(
            () => {
                   this.router.parent.navigate(['/CadastrarEmpresa']);
            },
            (error) => {
                document.write(error);
            }
        );

   
           
  }






}