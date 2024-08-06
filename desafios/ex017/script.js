function calcular() {
    let num = document.querySelector('input#itxt')
    let tab = document.querySelector('select#itab')

    if (num.value.length == 0) {
        alert('Está faltando dados!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let nMult = 1; nMult <=10; nMult++) {
            let item = document.createElement('option')
            item.text = `${n} x ${nMult} = ${n*nMult}`
            item.value = `tab${nMult}`
            tab.appendChild(item)
            
        }
    }
}