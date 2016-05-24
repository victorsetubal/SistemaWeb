
<div class="container">
 <div class="centro">

      
      <form class="form-signin" #f="ngForm" (ngSubmit)="alterarUnidade()">
        <h2 class="form-signin-heading">Alterar Unidade</h2>

       <!-- Provisório -->
       <input [hidden]="!visible"  [(ngModel)]="unidade.cod_empresa">
        
         <div >
         <label class="sr-only">Endereço: </label>
           <input [(ngModel)]="unidade.endereco" style="margin-bottom: 10px" class="form-control" placeholder="Endereço"  autofocus>
        </div>

          <div>
         <label  class="sr-only">Contato: </label>
           <input [(ngModel)]="unidade.contato" type="text" style="margin-bottom: 10px" class="form-control" placeholder="Contato. Ex.: (99) 9999-9999" >
        </div>
         
        <div >
         <label  class="sr-only">Hora de abertura </label>
           <input [(ngModel)]="unidade.hora_abertura" style="margin-bottom: 10px" class="form-control" placeholder="Hora de abertura. Ex.: 12:00 hs" >
        </div>   
          <div >
         <label  class="sr-only">Hora de fechamento </label>
           <input [(ngModel)]="unidade.hora_fechamento" style="margin-bottom: 10px" class="form-control" placeholder="Hora de fechamento. Ex.: 12:00 hs" >
        </div>  

                  
        <button  type="submit" class="btn btn-lg  btn-block">Salvar</button>

      </form>
            <button (click) ="voltar()" class="btn btn-lg  btn-block"  style="width: 302px; margin-left: 100px">Voltar</button>

     

    </div>
    </div>