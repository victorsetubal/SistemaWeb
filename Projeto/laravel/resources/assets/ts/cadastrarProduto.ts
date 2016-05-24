import {Component, OnInit, Inject} from 'angular2/core';
import {  
  Router, ROUTER_DIRECTIVES} from 'angular2/router';

 import { Produto } from './objects/Produto';
 import { Categoria } from './objects/Categoria';

 import { ProdutoService } from './services/ProdutoService';
  import { ComboService } from './services/ComboService';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/cadastrarProduto.blade.php',
    'providers': [ProdutoService, ComboService]
})
export class CadastrarProduto implements OnInit { 

  private produtoService: ProdutoService;
  private comboService: ComboService;
  public produto: Produto = {nome: "", volume: "", preco_unitario: null, cod_categoria: null};

    public categorias : Categoria[];
    private router: Router;
    private redirectRoute: string = '/ListarProdutos';


	constructor(
    @Inject(ProdutoService) produtoService: ProdutoService,
    @Inject(ComboService) comboService: ComboService,
    @Inject(Router) router: Router 

    ){


     this.router = router;

     this.produtoService = produtoService;
     this.comboService = comboService;

  }
 ngOnInit() : any{

     this.buscarCategorias();
  }


    buscarCategorias(){

      var a = this.comboService.buscarCategorias();
                   a.subscribe(

            categorias =>  this.categorias = categorias.json(),


            error => alert(error),
        () => {}
                     
      );
    
}



    cadastrarProduto(){

      var preco = this.produto.preco_unitario.length;
      this.produto.preco_unitario = this.produto.preco_unitario.substring(0, preco-1);
      console.log(this.produto); 
      this.produtoService.cadastrarProduto(this.produto);

      this.router.parent.navigate([this.redirectRoute]);
           
  }

  setCategoria(categoria){
    console.log(categoria);
    this.produto.cod_categoria = categoria;

  }

}