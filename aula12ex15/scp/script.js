function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade < 16) {
                //adolescente
                img.setAttribute('src', 'imagens/criancaM.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else if (idade < 90) {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            } else {
                
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src' , 'imagens/bebeF.png')
            } else if (idade < 16) {
                //adolescente
                img.setAttribute('src' , 'imagens/criancaF.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src' , 'imagens/jovemF.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src' , 'imagens/mulher.png')
            } else if (idade < 90) {
                //idoso
                img.setAttribute('src' , 'imagens/idosa.png')
            } else {
                // morto
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}