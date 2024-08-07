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
        // Já está salvando os dados digitados dentro da array

    } else {
        alert('Dados inválidos. Verifique os valores inseridos!')
    }


}
