function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('iano')
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src','imagens/jovem-m.png')
            } else if  (idade < 50) {
                img.setAttribute('src','imagens/adulto-m.png')
            } else {
                img.setAttribute('src','imagens/idoso-m.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src','imagens/jovem-f.png')
            } else if  (idade < 50) {
                img.setAttribute('src','imagens/adulto-f.png')
            } else {
                img.setAttribute('src','imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}