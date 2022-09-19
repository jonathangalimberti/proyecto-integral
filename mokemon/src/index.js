let ataqueJugador;
let ataqueEnemigo;
let resultado;

function iniciarJuego(){

    let botonMascotaJugador= document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionMascotaJugador)
    let ataqueFuego = document.getElementById("boton-fuego")
    ataqueFuego.addEventListener("click",ataqueDeFuego)
    let ataqueAgua= document.getElementById("boton-agua")
    ataqueAgua.addEventListener("click",ataqueDeAgua)
    let ataqueTierra= document.getElementById("boton-tierra")
    ataqueTierra.addEventListener("click",ataqueDeTierra)
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
function ataqueDeFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueDeAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueDeTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

function ataqueAleatorioEnemigo(){
    let eleccionEnemigo= aleatorio(1,3)

    if(eleccionEnemigo == 1){
        ataqueEnemigo = "FUEGO"
    }else if (eleccionEnemigo == 2){
        ataqueEnemigo = "AGUA"
    }else {
        ataqueEnemigo ="TIERRA"
    }
    resultadoCombate()
    crearMensaje()
}
function resultadoCombate(){
    if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || ataqueJugador == "AGUA" && ataqueEnemigo=="FUEGO" || ataqueJugador == "TIERRA" && ataqueEnemigo=="AGUA"){
        resultado= "GANASTE!! 😁";
    }else if (ataqueJugador == ataqueEnemigo){
        resultado= "empate";
    }else {
        resultado= "perdiste 😢";

    }
}

function crearMensaje(){
    let sectionMensajes= document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = 'atacaste con '+ataqueJugador + ", tu enemigo atacon con "+  ataqueEnemigo + " "+resultado

    sectionMensajes.appendChild(parrafo)
}

window.addEventListener("load",iniciarJuego)