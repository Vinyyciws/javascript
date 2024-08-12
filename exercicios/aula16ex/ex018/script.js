let num = document.querySelector('input#inum')
let sel = document.querySelector('select#isel')
let res = document.querySelector('div#res')
let val = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isSel(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !isSel(num.value, val)) {
        val.push(Number(num.value))
        let optArr = document.createElement('option')

        for (let key in val) {
            optArr.innerText = `${val[key]}. Valor adicionado`
        }
        sel.appendChild(optArr)
    } else {
        alert('Dados inválidos ou já existentes. Verifique os valores inseridos!')
    }
}

function finalizar() {
    res.innerHTML = ''
    // Total de números
    let totalNum = document.createElement('p')
    res.appendChild(totalNum)
    totalNum.innerText = `Total de números adicionados: ${val.length}`
    // Maior e menor número
    val.sort()
    let lastNum = Math.max.apply(null, val)
    let largestNum = document.createElement('p')
    res.appendChild(largestNum)
    largestNum.innerText = `Maior valor adicionado: ${lastNum}`
    let firstNum = Math.min.apply(null, val)
    let lowestNum = document.createElement('p')
    res.appendChild(lowestNum)
    lowestNum.innerText = `Menor valor adicionado: ${firstNum}`
    // Soma dos números
    let sum = 0
    for (let i = 0; i < val.length; i++) {
        sum += val[i]
    }
    let sumOfNum = document.createElement('p')
    res.appendChild(sumOfNum)
    sumOfNum.innerText = `A soma de todos os valores adicionados é de: ${sum}`
    // Média dos valores
    let average = sum/val.length
    let avOfNum = document.createElement('p')
    res.appendChild(avOfNum)
    avOfNum.innerText = `A média entre os valores adicionados é de: ${average}`
}