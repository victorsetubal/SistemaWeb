<?php

// ----- rotas angularjs -------	
Route::get('/', 'ControllerRoutes\AngularRoutesController@index' );
Route::get('/cadastraProduto', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/listaProdutos', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/listaUnidades', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/home', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/alteraUnidade', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/geraNotaFiscal', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/cadastraEmpresa', 'ControllerRoutes\AngularRoutesController@index');
Route::get('/cadastraUnidade', 'ControllerRoutes\AngularRoutesController@index');


// ----- rotas database -------

// post
Route::post('/cadastrarProduto', 'ControllerRoutes\DataBaseController@cadastrarProduto');
Route::post('/cadastrarEmpresa', 'ControllerRoutes\DataBaseController@cadastrarEmpresa');
Route::post('/cadastrarUnidade', 'ControllerRoutes\DataBaseController@cadastrarUnidade');


// put
Route::put('/alterarUnidade','ControllerRoutes\DataBaseController@alterarUnidade');


// get
Route::get('/gerarNotaFiscal', 'ControllerRoutes\DataBaseController@gerarNotaFiscal');
Route::get('/listarProdutos', 'ControllerRoutes\DataBaseController@listarProdutos');
Route::get('/listarUnidades', 'ControllerRoutes\DataBaseController@listarUnidades');
Route::get('/buscarCategorias', 'ControllerRoutes\DataBaseController@buscarCategorias');




