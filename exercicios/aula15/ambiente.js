let num = [5, 6, 7, 0]
num.push(-1)
num.sort()

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(-1)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor -1 está na posição ${pos}`)
}