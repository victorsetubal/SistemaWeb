		 
		<div class="container">
		

		<h1>Unidades</h1>
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th></th>
							<th>ID</th>
							<th>Empresa (Nome fantasia)</th>
							<th>Endereço</th>
							<th>Contato</th>
							<th>Hora de abertura</th>
							<th>Hora de fechamento</th>
						
						
						</tr>
					</thead>
						<tr *ngFor="let unidade of unidades">
							<td><input type='checkbox' [(ngModel)]="unidade.checkUnidade" (change)="verificaSelecaoUnidade(unidade.checkUnidade, unidade)"/> </td>
						<td>{{ unidade.cod_unidade }}</td> 
						<td>{{ unidade.nome_fantasia }}</td> 
							<td>{{ unidade.endereco }}</td>
							<td>{{ unidade.contato }}</td>
							<td>{{ unidade.hora_abertura }}</td>
							<td>{{ unidade.hora_fechamento }}</td>

							

							
						</tr>
				</table>
				<div class="container">
				     <div class="row" style="float: right; margin-right: 15px">				   
				      <button [disabled]="desabilitaBotao" (click)="gerenciarEstoque()" class="btn btn-sm  btn-block col-sm-4" style="width: 180px; margin: 5px" >Gerenciar Estoque(s)</button>
				      <button  (click)="adicionarUnidade()" class="btn btn-sm  btn-block col-sm-4" style="width: 180px; margin: 5px" >Adicionar Unidade(s)</button>
				     <button  [disabled]="desabilitaAlterarUnidade" (click)="alterarUnidade()" class="btn btn-sm  btn-block col-sm-4" style="width: 180px; margin: 5px" >Alterar Unidade</button>
				     <button  [disabled]="desabilitaBotao" (click)="excluirUnidade()" class="btn btn-sm  btn-block col-sm-4" style="width: 180px; margin: 5px" >Excluir Unidade(s)</button>
					 </div>
				 </div>
					
		    </div>