		 
		<div class="container">
				<div class="centro">

		<h1>Produtos</h1>
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Volume</th>
							<th>Preço</th>
							<th>Categoria</th>
						</tr>
					</thead>
						<tr *ngFor="let produto of produtos">
						<td>{{ produto.cod_produto }}</td> 
							<td>{{ produto.nome }}</td>
							<td>{{ produto.volume }}</td>
							<td>R$ {{ produto.preco_unitario }}</td>
							<td >{{ produto.descricao }}</td>
		
							
						</tr>
				</table>
	
					    </div>
		    </div>