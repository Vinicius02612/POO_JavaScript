class Leitor{

  ler(caminho){
      return "conteudo do arquivo!"
  }
}

class Escritor{
    Escrever(arquivo, conteudo){
      return "Escrevendo Arquivos..."
    }
}

class Criador{
  Criar(nome){
    return "Arquivo criado..."
  }
}

class Destruidor{
  Deletar(nome){
    return "Deletando Arquivos.."
  }
}

class ManipuladorDeArquivos{
  constructor(nome){
    this.arquivos = nome;
    this.leitor = new Leitor();
    this.Escritor  = new Escritor();
    this.Criador = new Criador();
    this.Destruidor = new Destruidor();
  }
}

var manipulador = new ManipuladorDeArquivos("Arquivos.txt");

console.log(manipulador.leitor.ler());
console.log(manipulador.Escritor.Escrever());
console.log(manipulador.Criador.Criar());
console.log(manipulador.Destruidor.Deletar());