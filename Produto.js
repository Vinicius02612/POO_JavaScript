class Produto{
  //Pordutos tem: nome, preco, descricão, peso, marca, modelo
  constructor(){
    this.nome ="Notebook";
    this.preco =1.500;
    this.descricao = "Notebook core i5 de 9° geração";
    this.peso = "1,2 kl";
    this.marca = "Acer";
    this.modelo = "NITRO 5";
  }
  
  Comprar(){
    console.log("produto comprado");
  }

  Vender(){
    console.log("Produto Vendido");
  }

  AdicionarAoCarrinho(){
    console.log("Produto adicionado ao carrinho");
  }

  Status(){
    var status = false;
    if(status == true){
        console.log("vendido...");
    }else{
      console.log("Em Estoque");
    }
  }
}

const Produtos = new Produto();

console.log("Nome :",Produtos.nome);
console.log("Marca :",Produtos.marca);
console.log("Peso :", Produtos.peso);
console.log("Descrição :",Produtos.descricao);
Produtos.AdicionarAoCarrinho();
Produtos.Comprar();
Produtos.Status();