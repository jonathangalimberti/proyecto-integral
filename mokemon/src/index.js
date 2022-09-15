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
        return alert("seleccionaste a Hipodoge")
    }else if (capipepo){
        spanMascotaJugador.innerHTML = 'Capipepo'
        return alert("seleccionaste a capipepo")
    }else if (ratigueya){
        spanMascotaJugador.innerHTML = 'Ratigueya'
        return alert("seleccionaste a ratigueya")
    }else if (langostelvis){
        spanMascotaJugador.innerHTML = 'Langostelvis'
        return alert("seleccionaste a langostelvis")
    }else if (tucapalma){
        spanMascotaJugador.innerHTML = 'Tucapalma'
        return alert("seleccionaste a tucapalma")
    }else if (pydos){
        spanMascotaJugador.innerHTML = 'Pydos'
        return alert("seleccionaste a pyros")
    }else {
        alert("debes seleccionar una mascota")
    }
    
}

window.addEventListener("load",iniciarJuego)