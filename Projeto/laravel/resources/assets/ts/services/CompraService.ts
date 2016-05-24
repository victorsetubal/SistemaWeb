import { Component, Injectable } from 'angular2/core';
import  {Http,  Headers, HTTP_PROVIDERS, Response}  from 'angular2/http';
declare var Zone, fetch, Request;
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CompraService {
    constructor (private http: Http) {

    }

    gerarNotaFiscal(url) {
     window.location.href = url;
   // return this.http.get('http://localhost:8000/gerarNotaFiscal');
  }


}