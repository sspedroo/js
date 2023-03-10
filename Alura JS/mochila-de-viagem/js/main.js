const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [] //criando um array de objetos/sequencia de objetos para poder inserir multiplos valores no localStorage, declarado fora pois queremos usar varias vezes // eu recebo em string no localStorage e agora uso o JSON.parse() para transformar para javascript

itens.forEach((elemento) =>{
  //Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página
  criaElemento(elemento);
});

form.addEventListener('submit', (evento) =>{
  // evento de envio do formulário
  evento.preventDefault(); // aqui estou pegando o evento e prevenindo de acontecer a atividade padrão dele
  //console.log(evento.target.elements["nome"].value); //aqui estou fazendo o seguinte caminho: acessando oq aconteceu no evento, do evento eu busco o target do evento, do target eu estou buscando os elementos e os elementos eu estou selecionando  quais elemento atraves dos names deles
  //console.log(evento.target.elements["quantidade"].value);

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  const existe = itens.find( (elemento) => elemento.nome === nome.value)
  if(existe){
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;

  } else {
    itemAtual.id = itens[itens.lenght-1] ? (itens[itens.lenght-1]).id + 1 : 0;

    criaElemento(itemAtual);

    itens.push(itemAtual); 
  }
   //aqui estou passando como parametro da função, objeto do itemAtual
  //inserindo o obejto "itemAtual" no array itens atraves do metodo push
  localStorage.setItem("itens", JSON.stringify(itens)); //

  nome.value = "";
  quantidade.value = "";
})


function criaElemento(item){//passo como paramentro nome e quantidade

    const novoItem = document.createElement('li');//aqui estou criando um novo elemento HTML, informando o tipo entre ('')
    novoItem.classList.add("item");//aqui estou adicionando uma classe ja existente ao elemento HTML que acabei de criar na linha de cima. EX: criei um elemento LI e nesse elemento adicionei a class="item"

    const numeroItem = document.createElement('strong');//aqui estou criando um novo elemento HTML, informando o tipo entre ('')
    numeroItem.innerHTML = item.quantidade;//aqui estou adicionado um texto HTML dentro do elemento strong que criei na linha de cima, o innerHTML recebe o valor que no caso é "quantidade"
    numeroItem.dataset.id = item.id
    
    novoItem.appendChild(numeroItem);// adicionando junto ao novo item um novo elemento embaixo e passando (numeroItem) como esse elemento a ser adicionado
    novoItem.innerHTML += item.nome;//adicionando um texto no novoItem e passando o parametro nome

    novoItem.appendChild(botaoDeletar(item.id));

    lista.appendChild(novoItem); //adicionando novoItem a lista
}

function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id+"']").innerHTML = item.quantidade;
}

function botaoDeletar(id){
  const elementoBotao = document.createElement("button");//estou criando um botão
  elementoBotao.innerText = "X";// e esse botão recebe o texto X

  elementoBotao.addEventListener("click", function() {
    deletaElemento(this.parentNode, id);//o this aqui se refere ao botoa que acabei de criar, ao chamar a função de deletar e passar como parametro o (this.parentNode) eu estou deletando o elemento Pai de onde o botão está inserido, afinal ele foi adicionado como um novo item atraves do appendChild() dentro do elemento criado anteriormente li
  } )

  return elementoBotao //estou retornando para minha função o botao
}

function deletaElemento(tag, id){
  //passando a tag como parametro
  tag.remove();

  itens.splice(
    itens.findIndex((elemento) => elemento.id === id),
    1
  );

  localStorage.setItem("itens", JSON.stringify(itens)); //
}