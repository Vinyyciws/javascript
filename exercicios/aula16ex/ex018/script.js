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

            // console.log(`A posição ${key} contém o valor ${val[key]}`)
        }
        sel.appendChild(optArr)



    } else {
        alert('Dados inválidos ou já existentes. Verifique os valores inseridos!')
    }


}
