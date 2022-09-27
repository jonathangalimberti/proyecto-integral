let sectionAtaques = document.getElementById("seleccionar-ataque")
let sectionReiniciar = document.getElementById("reiniciar")
let reiniciar=document.getElementById("boton-reiniciar")
let botonMascotaJugador= document.getElementById("boton-mascota")
let ataqueFuego = document.getElementById("boton-fuego")
let ataqueAgua= document.getElementById("boton-agua")
let ataqueTierra= document.getElementById("boton-tierra")

let sectionMascotas = document.getElementById("seleccionar-mascota")
let hipodoge= document.getElementById("hipodoge")
let capipepo= document.getElementById("capipepo")
let ratigueya= document.getElementById("ratigueya")
let langostelvis= document.getElementById("langostelvis")
let tucapalma= document.getElementById("tucapalma")
let pydos= document.getElementById("pydos")
let spanMascotaJugador = document.getElementById('mascota-jugador')

let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

let sectionResultado= document.getElementById("resultado")
let sectionAtaqueJugador= document.getElementById("ataques-del-jugador")
let sectionAtaqueEnemigo= document.getElementById("ataques-del-enemigo")

let vidasJugador = document.getElementById("vidas-jugador")
let vidasEnemigo = document.getElementById("vidas-enemigo")

let sectionMensajes = document.getElementById("resultado")

let ataqueJugador;
let ataqueEnemigo;
let resultado;
let contadorJugador =3;
let contadorEnemigo =3;

function iniciarJuego(){
    sectionAtaques.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    reiniciar.addEventListener("click",botonReiniciar)
    botonMascotaJugador.addEventListener("click",seleccionMascotaJugador)
    ataqueFuego.addEventListener("click",ataqueDeFuego)
    ataqueAgua.addEventListener("click",ataqueDeAgua)
    ataqueTierra.addEventListener("click",ataqueDeTierra)
}

function seleccionMascotaJugador(){
    sectionAtaques.style.display = ""
    sectionMascotas.style.display = "none"
    
    if(hipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (capipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (ratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if (langostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }else if (tucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if (pydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    }else {
       alert("debes seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(1,6)
    
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
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionResultado.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    sectionAtaqueJugador.appendChild(nuevoAtaqueJugador)
    sectionAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)

    contadorVidas()
}

function contadorVidas(){
    if (resultado== "GANASTE!! 😁" ){
        contadorEnemigo= contadorEnemigo-1
        vidasJugador.innerHTML = contadorJugador
        vidasEnemigo.innerHTML = contadorEnemigo
    }else if (resultado== "perdiste 😢" ){
        contadorJugador= contadorJugador-1
        vidasJugador.innerHTML = contadorJugador
        vidasEnemigo.innerHTML = contadorEnemigo
    }
    finBatalla()
}

function finBatalla(){
    if (contadorEnemigo == 0){
        sectionMensajes.innerHTML ="Ganaste la partida"
        dehabilitarBotones()
        sectionReiniciar.style.display = ""
        
    }else if(contadorJugador == 0){
       sectionMensajes.innerHTML="Perdiste la partida, vuelve a iniciar"
       dehabilitarBotones()
        sectionReiniciar.style.display = ""
    }
}
function dehabilitarBotones(){
    ataqueFuego.disabled = true
    ataqueAgua.disabled = true
    ataqueTierra.disabled = true   
}

function botonReiniciar(){
   location.reload()
}

window.addEventListener("load",iniciarJuego)