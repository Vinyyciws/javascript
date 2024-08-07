// Em casos em que faltam parâmetros na chamada, é possível usar um parâmetro opcional dentro dos parâmetros formais!

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(7))