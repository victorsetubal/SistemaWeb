var elixir = require('laravel-elixir');
var elixirTypscript = require('elixir-typescript');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
//    mix.sass('app.scss');


     mix.typescript('main.js','public/app','/**/*.ts',{
                 "target": "es5",
   				 "module": "system",
   				 "moduleResolution": "node",
   				 "sourceMap": true,
   				 "emitDecoratorMetadata": true,
  				 "experimentalDecorators": true,
  				 "removeComments": false,
  				 "noImplicitAny": false
    });





});
