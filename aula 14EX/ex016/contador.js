function contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0 ){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f){
            //contagem crescente
             for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}  \u{1F449}`
        }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //contagem regressiva
            for(let c = i; c >=f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } 
        
    }
}