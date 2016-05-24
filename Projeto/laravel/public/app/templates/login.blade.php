 
<div class="container">
 <div class="centro">

      <form class="form-signin">
        <h2 class="form-signin-heading">Faça seu login</h2>
        
         <div >
         <label for="inputEmail" class="sr-only">Email: </label>
           <input type="email" id="inputEmail" class="form-control" placeholder="Por favor, digite seu email"  autofocus>
        </div>
         
        <div >
         <label for="inputPassword" class="sr-only">Password: </label>
           <input type="password" id="inputPassword" class="form-control" placeholder="Por favor, digite sua senha" >
        </div>    
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Lembre-me
          </label>

        </div>
         <div class="checkbox">
          <a href="#/"> Esqueci minha senha</a>

        </div>
       
        <button  (click)="fazerLogin()" class="btn btn-lg  btn-block" id="btnEntrar" >Entrar</button>
          <div style="margin-left: 135px">
          <label>ou</label>
        </div>

        <button  (click)="cadastrarEmpresa()" class="btn btn-lg  btn-block"  >Cadastrar Empresa</button>
      </form>

     

    </div>
    </div>