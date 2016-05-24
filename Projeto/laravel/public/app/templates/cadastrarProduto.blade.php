
<div class="container">
 <div class="centro">

      
      <form class="form-signin" #f="ngForm" (ngSubmit)="cadastrarProduto()">
        <h2 class="form-signin-heading">Cadastrar Produto</h2>
        
         <div >
         <label class="sr-only">Nome: </label>
           <input [(ngModel)]="produto.nome" style="margin-bottom: 10px" class="form-control" placeholder="Nome do produto"  autofocus>
        </div>
         
        <div >
         <label  class="sr-only">Volume: </label>
           <input [(ngModel)]="produto.volume" style="margin-bottom: 10px" class="form-control" placeholder="Volume (Ex.: KG, L)" >
        </div>    

          <div >
         <label  class="sr-only">Preço: </label>
           <input [(ngModel)]="produto.preco_unitario" type="text" style="margin-bottom: 10px" class="money form-control" placeholder="Preço em reais (R$). Ex.: 9,00 " >
        </div>



      <select class = "form-control" style="margin-bottom: 10px"  #p (change)="setCategoria(p.value)" >
        <option value =""> Selecione a categoria</option>
        <option *ngFor="let categoria of categorias" [value]="categoria.cod_categoria">{{categoria.descricao}}</option>
      </select>
        

                
        <button  type="submit" class="btn btn-lg  btn-block" id="btnEntrar" >Cadastrar</button>
      </form>

     

    </div>
    </div>