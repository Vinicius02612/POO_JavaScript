class Cardapio{
  constructor(){
    this.comidas =["Arroz", "feijão", "Carne"];
    this.bebidas = ["Suco de Caju", "Coca-Cola", "Cerveja"];
    this.sobre_mesa = ["Pavê", "pa cumê", "musse de manga"];
    this.preco =  1.50 ;
  }

  Pedir(){
    console.log("Pedindo cardapio...",  this.comidas , this.preco);
  }

  ler(){
    console.log("lendo caradio...")
  }


}

const cardapio = new Cardapio();

console.log("Comidas",cardapio.comidas);
console.log("bebidas ",cardapio.bebidas);
console.log("sobre mesa ",cardapio.sobre_mesa);
console.log("preco ", cardapio.preco);

cardapio.Pedir();