import { Component, Injectable } from 'angular2/core';
import  {Http,  Headers, HTTP_PROVIDERS, Response}  from 'angular2/http';
declare var Zone, fetch, Request;
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EmpresaUnidadeService {
    constructor (private http: Http) {}

    /**
     * PLACEHOLDER for files uploading
     *
     * @returns {Promise<T>}
     */
   


      public  cadastrarEmpresa(empresa){

     fetch('http://localhost:8000/cadastrarEmpresa', {
      method: 'POST',
      headers: {
           'Content-Type': 'application/json'
      },
      body: JSON.stringify(empresa)
    })
    .then(status)
    .then((response) => {
       
       if(response.status == 200){


       }
    })
    .catch((error) => {
   //   alert(error.message);
     // console.log(error.message);
    })

    }

        public  cadastrarUnidade(unidade){

     fetch('http://localhost:8000/cadastrarUnidade', {
      method: 'POST',
      headers: {
           'Content-Type': 'application/json'
      },
      body: JSON.stringify(unidade)

    })
    .then(status)
    .then((response) => {
       
       if(response.status == 200){


       }
    })
    .catch((error) => {
   //   alert(error.message);
     // console.log(error.message);
    })

    }


    listarUnidades() {
    return this.http.get('http://localhost:8000/listarUnidades');
  }

    alterarUnidade (unidade){

    unidade = JSON.stringify(unidade);
       fetch('http://localhost:8000/alterarUnidade', {
      method: 'PUT',
      headers: {
           'Content-Type': 'application/json'
      },
      body: unidade

    })
    .then(status)
    .then((response) => {
       
       if(response.status == 200){


       }
    })
    .catch((error) => {
   //   alert(error.message);
     // console.log(error.message);
    })

     

    }
}