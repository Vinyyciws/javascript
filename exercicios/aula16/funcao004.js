// 5! = 5 . 4 . 3 . 2 . 1

function fatorial(n) {
    let fator = 1
    for(let c = n; c > 1; c--) {
        fator *= c 
    }
    return fator
}

console.log(fatorial(5))