function calcular() {
    
    let ini = document.getElementById('itxt')
    let fim = document.querySelector('input#itxt2')
    let step = document.querySelector('input#step')
    
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        alert('Dados inválidos, preencha-os corretamente!')
    } else {
        res.innerHTML = 'Contando: '
        let numIni = Number(ini.value)
        let numFim = Number(fim.value)
        let numStep = Number(step.value)

        if (numStep <= 0) {
            p = 1
            alert('Passo inválido! Considerando-o como 1')
        }
    
// Parte da contagem (ainda assim, dentro do primeiro if criado)

    if (numIni < numFim) {
        for (let c = numIni; c <= numFim; c += numStep) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for (let c = numIni; c >= numFim; c -= numStep){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}

}