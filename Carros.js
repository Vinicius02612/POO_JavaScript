class Carros{
  constructor(){
    this.marca = "";
    this.modelo = "";
    this.ano_de_fabri = "";
    this.fabricante = "";
    this.peso = "";
    this.preco = "";
  }

    Status(){
      var statsu = true
      if(statsu){
        console.log("Carro disponivel para alugel");
      }else{
        console.log("carro não disponivel para alugel");
      }
    }
}

const carros = new Carros();

carros.marca = "CHEVROLET";
carros.modelo = "cruze";
carros.ano_de_fabri = "26/02/2000";
carros.peso = "600 kg"
carros.preco = "156.000"
carros.Status();

console.log(carros);