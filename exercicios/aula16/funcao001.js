function evenOdd(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

// Para aparecer no console é preciso jogar o retorno da função em uma variável e 'printar' ela no console!

// Podendo também somente 'printar' usando a chamada da função, não precisando de uma variável!

let res = evenOdd(6)
console.log(res)