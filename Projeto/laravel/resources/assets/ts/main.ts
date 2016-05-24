/// <reference path="../../../public/app/node_modules/typescript/lib/lib.es6.d.ts" />


import {bootstrap}    from 'angular2/platform/browser';
import {Outlet} from './outlet';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router'
import { enableProdMode } from "angular2/core";

bootstrap(Outlet, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

