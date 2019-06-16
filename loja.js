//classes
//produto
//compila usando tsc 
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());
//Imagem
var Imagem = /** @class */ (function () {
    function Imagem() {
    }
    return Imagem;
}());
//categoria
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());
var ObjCategoria = new Categoria();
ObjCategoria.nome = "Fritos";
var ObjProduto = new Produto();
ObjProduto.nome = "Pastel";
ObjProduto.descricao = "Pastel frito de queijo";
ObjProduto.valor = 2.50;
ObjProduto.categoria = ObjCategoria;
//
var getProduto = function (Produto) {
    console.log(Produto.nome);
    console.log(Produto.descricao);
    console.log(Produto.valor);
    console.log(Produto.categoria.nome);
};
getProduto(ObjProduto);
