function iniciarJuego(){

    let botonMascotaJugador= document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionMascotaJugador)
}

function seleccionMascotaJugador(){
    let hipodoge= document.getElementById("hipodoge").checked
    let capipepo= document.getElementById("capipepo").checked
    let ratigueya= document.getElementById("ratigueya").checked
    let langostelvis= document.getElementById("langostelvis").checked
    let tucapalma= document.getElementById("tucapalma").checked
    let pydos= document.getElementById("pydos").checked

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(hipodoge){
        spanMascotaJugador.innerHTML = 'Hipodoge'
         alert("seleccionaste a Hipodoge")
    }else if (capipepo){
        spanMascotaJugador.innerHTML = 'Capipepo'
         alert("seleccionaste a capipepo")
    }else if (ratigueya){
        spanMascotaJugador.innerHTML = 'Ratigueya'
         alert("seleccionaste a ratigueya")
    }else if (langostelvis){
        spanMascotaJugador.innerHTML = 'Langostelvis'
         alert("seleccionaste a langostelvis")
    }else if (tucapalma){
        spanMascotaJugador.innerHTML = 'Tucapalma'
         alert("seleccionaste a tucapalma")
    }else if (pydos){
        spanMascotaJugador.innerHTML = 'Pydos'
         alert("seleccionaste a pyros")
    }else {
        alert("debes seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(1,6)

    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if(mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaEnemigo ==2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if (mascotaEnemigo == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }else if (mascotaEnemigo == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if (mascotaEnemigo==5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else if (mascotaEnemigo ==6 ){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }else {
        alert("Tu enemigo aun no selecciono una mascota")
    }

}

function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

window.addEventListener("load",iniciarJuego)