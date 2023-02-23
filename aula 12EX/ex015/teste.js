function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 ||  Number(fAno.value) > ano){
        window.alert('Erro! Verifique os dados inseridos')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'img/homem-criança.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src','img/homem-jovem.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'img/mulher-criança.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
