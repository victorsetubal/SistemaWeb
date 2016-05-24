<?php namespace App;

 use Illuminate\Database\Eloquent\Model;

 class Unidade extends Model {
 	protected $table = 'unidade';
 	public $timestamps = false;

 	protected $fillable = ['cod_empresa','endereco', 'contato', 'hora_abertura', 'hora_fechamento'];

 }