function carregar() {
    var msg = window.document.querySelector('div#msg')

    var foto = window.document.querySelector('div#img')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#ffa157'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#69504b'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#171e31'
    }


}