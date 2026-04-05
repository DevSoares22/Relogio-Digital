function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.innerHTML = '<img src="tarde.png" alt="Imagem da manhã" id="manha">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.innerHTML = '<img src="tarde.png" alt="Imagem da tarde" id="tarde">'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.innerHTML = '<img src="noite.png" alt="Imagem da noite" id="noite">'
        document.body.style.background = '#515154'
    }
}   