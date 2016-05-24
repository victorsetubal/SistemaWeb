import { Component, Injectable } from 'angular2/core';
import  {Http,  Headers, HTTP_PROVIDERS, Response}  from 'angular2/http';
declare var Zone, fetch, Request;
import { Observable }     from 'rxjs/Observable';
 import { Produto } from '../objects/Produto';

@Injectable()
export class ProdutoService {
    constructor (private http: Http) {}

    /**
     * PLACEHOLDER for files uploading
     *
     * @returns {Promise<T>}
     */
   


      public  cadastrarProduto(produto){

     fetch('http://localhost:8000/cadastrarProduto', {
      method: 'POST',
      headers: {
           'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
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

  listarProdutos () {
    return this.http.get('http://localhost:8000/listarProdutos');
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
     
    let body = res.json();
     
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}