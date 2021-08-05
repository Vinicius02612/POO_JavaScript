//sistema de cassino
// criar uma classe que quando for chamado gere numeros aleatórios dependendo da quantidade de faces do dado...

class Dado{
  constructor(face){
      this.face = face;
  }

  rolarDado(){
        console.log("Resultado do dado "+ this.GerarNumero(1, this.face))
  }
//gerando numeros aleatórios... 
  GerarNumero(max ,min){
    min  = Math.ceil(min);
    max  = Math.floor(max);
    return Math.floor(Math.random()  * (max  - min +1) + min);
  }
}

const dado1 = new Dado(12);
dado1.rolarDado();





