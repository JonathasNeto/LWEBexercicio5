import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCarrinho';
  nome = null;
  quantidade = null;
  quantidadeC = null;
  preco = null;
  produtos = [
  ]
  carrinho = [

  ]
  produtoDireto(){
    this.produtos.push(new Produto("batata",15,5.50));
    this.produtos.push(new Produto("bolacha",10,2.50));
    this.produtos.push(new Produto("Suco",12,1.20));

  }

  calcular(){
    var total = 0;
    let i = 0;
    var aux = 0;
    while(i < this.carrinho.length){
      aux = parseFloat(this.carrinho[i].quantidade);
      total += parseFloat(this.carrinho[i].preco)*aux;
      i++
    }
    return total;
  }

  
  addProduto(){
    this.produtos.push(new Produto(this.nome,this.quantidade,this.preco));
    this.nome = null;
    this.quantidade = null;
    this.preco = null;

  }
  
  adicionarCarrinho(id){
      let i = 0;
      while(i < this.carrinho.length){
        if (this.carrinho[i].nome == id.nome){
          let aux = parseInt(this.carrinho[i].quantidade)+1;
          this.carrinho[i].quantidade = aux;
          return true
        }
      }
      this.carrinho.push(id);
     
 
    
  }
  verificaEstoque(produto,quantidadeC){
    let valor = parseInt(quantidadeC);
    let i = 0;
    while(i < this.produtos.length){
      if (this.produtos[i] == produto){
        let aux = parseInt(this.produtos[i].quantidade);
        if(aux >= valor){
          return true;
        }
      }
    }
  }
}

class Produto{
  nome = null;
  quantidade = null;
  preco = null;

  constructor(nome,quantidade,preco){
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
  }
  toString(){
    return this.nome;
  }

}
