function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio)
  
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }  else {
        console.log("Elemento não encontrado");  
    }
} 

const listaDeTeclas = document.querySelectorAll(".tecla");


for (let i = 0; i < listaDeTeclas.length; i++){
    const instrumento = listaDeTeclas[i].classList[1];
    listaDeTeclas[i].onclick = function (){
        tocaSom(`#som_${instrumento}`);
    }

    listaDeTeclas[i].onkeydown = function (event){
        if (event.code == 'Space' || event.code == 'Enter')
        listaDeTeclas[i].classList.add('ativa');
    }
    listaDeTeclas[i].onkeyup = function () {
      listaDeTeclas[i].classList.remove("ativa");
    };

}
