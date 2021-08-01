# Classes em Programação Orientada a Objetos

Em POO classificação é quando argupamos objetos semelhantes em uma unica classe que abrangte todos os objetos com caracteristicas semelhantes.

Exemplo:

```
  classe jogo(){
    nome: "CS:GO";
    desenvolvedora: "Valve";
    tipo: "Ação";
    faixa_etaria: 16:
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
    nome: "CS:GO";
    desenvolvedora: "Valve";
    tipo: "Ação";
    faixa_etaria: 16:

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

Abstração em POO é  observar a realidade e dela abstrair atributos,açoes e caracteristicas considerados essenciais para um aplicação. 

Por exemplo se abstrair-mos um filme da vida real para criar uma aplição com a do NETFLIX

Primerio sabe-se que em filme tem-se: 
Os Atrbutos 

```
 classe filme{
   titulo ="vindores";
   ano = "2016";
   Sinopse = "bllalasdd";
   Genero = "Ação";
   Diretor = "keving fight"
   Atores = [
     "Tony Sterco",
     "Viuva Negra",
     "Thor",
     "hulk"
     etc ]
   Duracao = 2:56:02
 }
```