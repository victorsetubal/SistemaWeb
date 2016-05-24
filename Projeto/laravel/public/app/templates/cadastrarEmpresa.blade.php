
<div class="container">
 <div class="centro">

      
      <form class="form-signin" #f="ngForm" (ngSubmit)="cadastrarEmpresa()">
        <h2 class="form-signin-heading">Cadastrar Empresa</h2>
        
         <div >
         <label class="sr-only">Nome fantasia: </label>
           <input [(ngModel)]="empresa.nome_fantasia" style="margin-bottom: 10px" class="form-control" placeholder="Nome fantasia"  autofocus>
        </div>
         
        <div >
         <label  class="sr-only">CNPJ: </label>
           <input [(ngModel)]="empresa.cnpj" style="margin-bottom: 10px" class="form-control" placeholder="CNPJ" >
        </div>   
          <div >
         <label  class="sr-only">Razão Social: </label>
           <input [(ngModel)]="empresa.nome_real" style="margin-bottom: 10px" class="form-control" placeholder="Razão Social" >
        </div>  

          <div>
         <label  class="sr-only">Contato: </label>
           <input [(ngModel)]="empresa.contato" type="text" style="margin-bottom: 10px" class="form-control" placeholder="Contato" >
        </div>
         <div>
          <label  class="sr-only">Senha: </label>
           <input [(ngModel)]="empresa.senha" type="password" style="margin-bottom: 10px" class="form-control" placeholder="Senha" >
        </div>



                
        <button  type="submit" class="btn btn-lg  btn-block">Cadastrar</button>

      </form>
            <button (click) ="voltar()"class="btn btn-lg  btn-block"  style="width: 302px; margin-left: 100px">Voltar</button>

     

    </div>
    </div>