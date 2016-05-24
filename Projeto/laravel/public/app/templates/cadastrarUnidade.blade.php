
<div class="container">
 <div class="centro">

      
      <form class="form-signin" #f="ngForm" (ngSubmit)="cadastrarUnidade()">
        <h2 class="form-signin-heading">Cadastrar Unidade</h2>

       <!-- Provisório -->
       <input [hidden]="!visible"  [(ngModel)]="unidade.cod_empresa">
        
         <div >
    
           <input [(ngModel)]="unidade.endereco" value="{{unidade.endereco}}" style="margin-bottom: 10px" class="form-control" placeholder="Endereço"  autofocus>
        </div>

          <div>
       
           <input [(ngModel)]="unidade.contato" type="text" style="margin-bottom: 10px" class="form-control" placeholder="Contato. Ex.: (99) 9999-9999" >
        </div>
         
        <div >

           <input [(ngModel)]="unidade.hora_abertura" style="margin-bottom: 10px" class="form-control" placeholder="Hora de abertura. Ex.: 12:00 hs" >
        </div>   
          <div >
      
           <input [(ngModel)]="unidade.hora_fechamento" style="margin-bottom: 10px" class="form-control" placeholder="Hora de fechamento. Ex.: 12:00 hs" >
        </div>  

                  
        <button  type="submit" class="btn btn-lg  btn-block">Cadastrar</button>

      </form>
            <button (click) ="voltar()" class="btn btn-lg  btn-block"  style="width: 302px; margin-left: 100px">Voltar</button>

     

    </div>
    </div>