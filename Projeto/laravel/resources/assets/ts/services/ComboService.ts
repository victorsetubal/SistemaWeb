import { Component, Injectable } from 'angular2/core';
import  {Http,  Headers, HTTP_PROVIDERS, Response}  from 'angular2/http';
declare var Zone, fetch, Request;
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ComboService {
    constructor (private http: Http) {}

   

  buscarCategorias () {
    return this.http.get('http://localhost:8000/buscarCategorias');
  }

   
 
}