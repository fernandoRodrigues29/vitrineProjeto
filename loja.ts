//classes
//produto
//compila usando tsc 
class Produto{
	nome:string;
	descricao:string;
	valor:number;
	categoria:Categoria;
}
//Imagem
class Imagem{
	nome:string;
	caminho:string;	
}
//categoria
class Categoria{
	nome:string;
}

var ObjCategoria = new Categoria();
ObjCategoria.nome = "Fritos";
var ObjProduto = new Produto();

ObjProduto.nome="Pastel";
ObjProduto.descricao = "Pastel frito de queijo";
ObjProduto.valor = 2.50;
ObjProduto.categoria = ObjCategoria;
//
var getProduto = function(Produto){
	console.log(Produto.nome);
		console.log(Produto.descricao);
			console.log(Produto.valor);
				console.log(Produto.categoria.nome);
};
getProduto(ObjProduto);

