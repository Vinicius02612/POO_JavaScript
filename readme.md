# Classes em Programação Orientada a Objetos

Em POO classificação é quando argupamos objetos semelhantes em uma unica classe que abrangte todos os objetos com caracteristicas semelhantes.

Exemplo:

```
  classe jogo(){
    nome = "CS:GO";
    desenvolvedora = "Valve";
    tipo = "Ação";
    faixa_etaria = 16:
  }
```

no código a cima estamos definindo que a classe de objetos de um jogos possuem nome, desenvolvedora, tipo,faixa etaria. dessa forma estamos agrupando objetos que possuem caracteristicas semelhantes, ja que todo jogo tem atributos como um nome, uma desenvolvedora, um tipo e uma faixa etaria.

Em POO todas as classes possuem Atributos e Metodos:

Atributos são dados de uma classe, como por exemplo os atributos da classe jogo do exemplo anterior: 
    nome,desenvolvedora,tipo,faixa_etaria.

Ja os metodos são ações que uma classe pode realizar(executar), no caso da classe jogo, um jogo pode realizar as seguintes ações:
  Abrir, Carregar,Fechar, Atualizar e Excutar

Abstraindo esses metodos para nossa classe de jogos,nosso código fica da seguinte forma:

Exemplo:

```
  classe jogo(){
    nome = "CS:GO";
    desenvolvedora = "Valve";
    tipo = "Ação";
    faixa_etaria = 16:

    Executar(){
      ação a ser executada;
    }

    Abrir(){
      ação a ser executada;
    }

    Carregar(){
      ação a ser executada;
    }

    Fechar(){
      ações a ser executada;
    }

    Atualizar(){
      ações a ser executada;
    }
  }
```
<hr>

# -- Abstract (Abstração) --

<p>Abstração em POO é  observar a realidade e dela abstrair atributos,açoes e caracteristicas considerados essenciais para um aplicação. </p>

<p>Por exemplo se abstrair-mos um filme da vida real para criar uma aplição com a do NETFLIX</p>

Primerio sabe-se que em filme tem-se: 
Os Atrbutos 

```
 classe filme{
   titulo ="";
   ano = "";
   Sinopse = "";
   Genero = "";
   Diretor = "";
   Atores = [ ];
   Duracao = "";
// Que tambem tem metodos
   Reproduzir(){
     console.log("Reproduzir...");
   }

   Pausar(){
     console.log("Pausado");
   }

   Avancar(){
     console.log("Avançar >>>");
   }

   Fechar(){
     console.log("Fechar x")
   }

   
 }
```

# -- OBJETO --

<p>Objetos são instancias de uma classe, falando dos filmes imagine que um vc tem um filme VINGADORES e um filme LIGA DA jUSTIÇA pra assitir. Ambos se derivam da classe filme, porem cada um tem caracteristicas diferentes mas com atributos semelhantes, nesse caso cada da um faz parte da mesma classe Filme.</p>

pode se criar cópias de uma  classe criando instancia dela:
no caso da classe filme temos:

```
var vingadore = new Filmes();
```

dessa forma pode-se acessar todas os atributos e metodos dessa classe;

```
vingadores.titulo = "A era de Ultron"
vingadores.ano = "2016"
vingadores.sinopse = "Ultron mete porrada em todo mundo..."
vingadores.duracao = "26:23:01"
vingadores.atores = [tony, thor, hulk];
```

# -- CONSTRUCTOR() --

<p>O Contructor é uma função especial  que é responsável por gerar a instancia dos objetos na memória que podem ser acessados pelo <strong>this</strong> que podem ser acessados por parametros na função construtora.</p>

exemplo
 ```
constructor(titulo, duracao, ano, sinopse, genero){
  this.titulo = titulo;
  this.duracao = duracao;
  this.ano = ano;
  this.sinopse = sinopse;
  this.genero = genero;s
}

var vingadores = new Filme("era de merda",26:23:00, 2026, "não tem sinospe");
``` 

# -- METODOS ESTÁTICOS --

Os metodos estáticos permite que voce acesse metodos de uma classe sem precisar estanciar ou seja criar manualmente um objeto da classe:

exemplo :

 ```
 //classe sem os metodos static
  class Calculadora{
    //....Atributos da classe

    Somar(a, b){
      console.log(a+b);
    }

    Subtrair(a,b){
      console.log(a + b);
    }
  }
  //acessandos os atributos da classe 
   const Calcular = new Calculadora();
   Calcular.Somar(10,20);
   Calcular.Subtrair(10,20);
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // classe usando os metodos static
    class Calculadora1{
    //....Atributos da classe

    static Somar(a, b){
      console.log(a+b);
    }

    static Subtrair(a,b){
      console.log(a + b);
    }
  }

  acessando os metodos da classe claculadora1 com static
  Calculadora1.Somar(10,20);
  Calculadora1.Subtrair(10,20);

 ```

Note que para acessar os metodos da classe Calculadora1 não foi necessário criar uma nova instancia dela
que pode ser acessada diretamente.