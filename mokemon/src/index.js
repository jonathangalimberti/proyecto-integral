const sectionAtaques = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const reiniciar=document.getElementById("boton-reiniciar")
const botonMascotaJugador= document.getElementById("boton-mascota")

const sectionMascotas = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const sectionResultado= document.getElementById("resultado")
const sectionAtaqueJugador= document.getElementById("ataques-del-jugador")
const sectionAtaqueEnemigo= document.getElementById("ataques-del-enemigo")

const vidasJugador = document.getElementById("vidas-jugador")
const vidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("ataques-jugador")

let ataqueFuego
let ataqueAgua
let ataqueTierra
let mokepones=[]
let ataqueJugador =[]
let ataqueEnemigo
let opcionDeMokepon
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let resultado
let botones = []
let contadorJugador =3
let contadorEnemigo =3
let opcionesDeAtaques

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto=foto
        this.vida=vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','/assets/mokepons_mokepon_hipodoge_attack.webp',5)
let capipepo = new Mokepon('Capipepo','/assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratigueya = new Mokepon('Ratigueya','/assets/mokepons_mokepon_ratigueya_attack.webp',5)

mokepones.push(hipodoge,capipepo,ratigueya) 

hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🪴', id:'boton-tierra'},
    )
capipepo.ataques.push(
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    )
ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🪴', id:'boton-tierra'},
    )

function iniciarJuego(){
    sectionAtaques.style.display = "none"
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon)=>{
        opcionDeMokepon = `
        <div class="contenedor-tarjetas">
                <input type="radio" name="mascota" id=${mokepon.nombre}>
                <label class="tarjeta-de-mokepon"for="${mokepon.nombre}">
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt="${mokepon.nombre}">
                </label>
        </div>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepon

             inputHipodoge= document.getElementById("Hipodoge")
             inputCapipepo= document.getElementById("Capipepo")
             inputRatigueya= document.getElementById("Ratigueya")
             inputLangostelvis= document.getElementById("Langostelvis")
             inputTucapalma= document.getElementById("Tucapalma")
             inputPydos= document.getElementById("Pydos")
    })
    
    reiniciar.addEventListener("click",botonReiniciar)
    botonMascotaJugador.addEventListener("click",seleccionMascotaJugador)
   
}

function seleccionMascotaJugador(){
    sectionAtaques.style.display = ""
    sectionMascotas.style.display = "none"
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
 /*    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id */
    }else {
       alert("debes seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
    extraerAtaques(mascotaJugador)
    
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    
    ataques.forEach(mokepon =>{
        opcionesDeAtaques = ` <button id=${mokepon.id} class="boton-de-ataque BAtaque">${mokepon.nombre}</button>`

        contenedorAtaques.innerHTML += opcionesDeAtaques

        
    })
    ataqueFuego = document.getElementById("boton-fuego")
    ataqueAgua= document.getElementById("boton-agua")
    ataqueTierra= document.getElementById("boton-tierra")
    botones= document.querySelectorAll('.BAtaque')
    

    secuenciaAtaques()
}




function secuenciaAtaques(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = 'grey'
            }else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = 'grey'
            }else if (e.target.textContent === '🪴') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = 'grey'}
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(0, (mokepones.length-1))

        spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo].nombre

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
function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1))
}

window.addEventListener("load",iniciarJuego)