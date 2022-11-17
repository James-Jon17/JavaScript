function carregar() {
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/bom-dia.png'
        document.body.style.background = '#6f685e'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        document.body.style.background = '#f8fce6'
        img.src = 'imagens/boa-tarde.png'
    } else {
        //boa noite
        img.src = 'imagens/boa-noite.png'
        document.body.style.background = '#02161e'
    }
}
