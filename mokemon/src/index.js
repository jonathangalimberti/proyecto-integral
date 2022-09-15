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
    
    if(hipodoge){
        return alert("seleccionaste a Hipodoge")
    }else if (capipepo){
        return alert("seleccionaste a capipepo")
    }else if (ratigueya){
        return alert("seleccionaste a ratigueya")
    }else if (langostelvis){
        return alert("seleccionaste a langostelvis")
    }else if (tucapalma){
        return alert("seleccionaste a tucapalma")
    }else if (pydos){
        return alert("seleccionaste a pyros")
    }
    
}

window.addEventListener("load",iniciarJuego)