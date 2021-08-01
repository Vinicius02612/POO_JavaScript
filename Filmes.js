//construindo classes em javaScript...
class Filmes{
//criando atributos...
  constructor(){
      this.titulo = "Vingadores";
      this.ano = "2016";
      this.sinopse = "asdasd";
      this.gereno = "asdad";
      this.diretor = "asdasd";
      this.atores = ["asdas","dasda", "asadasd"];
      this.duracao = 0;
  }

//criando metodos...
    Reproduzir(){
      console.log("reproduzindo...");
    }

    Pausar(){
      console.log("pausado...");
    }

    Avancar(){
      console.log("avançando >>");
    }

    Fechar(){
      console.log("fechando video...")
    }
}

const Filme = new Filmes();
//Acessando Atributos...
console.log("Titulo : ",Filme.titulo);
console.log("Atores : ", Filme.atores);
console.log("Ano :", Filme.ano);
console.log("Duranção :", Filme.duracao);

//Acessando Metodos...
console.log(Filme.Avancar);
console.log(Filme.Fechar);

Filme.Avancar();
Filme.Fechar();
Filme.Pausar();