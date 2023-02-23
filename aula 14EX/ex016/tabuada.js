function tabuada(){
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('tabuada')


    if (numero.value.length == 0){
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(numero.value)
        let contador = 1
        tab.innerHTML = ''
            for (contador = 1; contador <=10; contador++){
                let item = document.createElement('option')
                item.text = `${n} x ${contador} = ${n*contador}`
                item.value = `tab${contador}`
                tab.appendChild(item)
        }
    }

}

