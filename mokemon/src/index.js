function iniciarJuego(){

    let botonMascotaJugador= document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionMascotaJugador)
}


function seleccionMascotaJugador(){
    alert("seleccionaste a tu mascota")
}

window.addEventListener("load",iniciarJuego)