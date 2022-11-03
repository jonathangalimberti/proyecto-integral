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
const mensajesFinales = document.getElementById("mensajes")
const subtitulos= document.getElementById('subtitulos')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let ataqueFuego
let ataqueAgua
let ataqueTierra
let mokepones=[]
let ataqueJugador =[]
let ataqueEnemigo =[]
let seleccionEnemigo =[]
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
let contadorJugador =0
let contadorEnemigo =0
let opcionesDeAtaques
let personaje
let intervalo
let moverIzqDer=0
let moverArrAb=0
let mokeponesEnemigos =[]
let fondo = new Image()
fondo.src = '/images/mokemap.png'
let anchoFondo 
let altoFondo 


let lienzo= mapa.getContext('2d')




class Mokepon{
    constructor(nombre,foto,vida, x=20, y =30){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x =x
        this.y =y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.movimientoX = 5
        this.movimientoY = 5
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}



let hipodoge = new Mokepon('Hipodoge','/assets/mokepons_mokepon_hipodoge_attack.webp',5)
let capipepo = new Mokepon('Capipepo','/assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratigueya = new Mokepon('Ratigueya','/assets/mokepons_mokepon_ratigueya_attack.webp',5)
let langostelvis = new Mokepon('Langostelvis','/assets/mokepons_mokepon_langostelvis_attack.webp',5)
let tucapalma = new Mokepon('Tucapalma','/assets/mokepons_mokepon_tucapalma_attack.webp',5)
let pydos = new Mokepon('Pydos','/assets/mokepons_mokepon_pydos_attack.webp',5)

let hipodogeEnemigo = new Mokepon('Hipodoge','/assets/mokepons_mokepon_hipodoge_attack.webp',5,aleatorio(100,730),aleatorio(0,520))
let capipepoEnemigo = new Mokepon('Capipepo','/assets/mokepons_mokepon_capipepo_attack.webp',5,aleatorio(100,730),aleatorio(0,520))
let ratigueyaEnemigo = new Mokepon('Ratigueya','/assets/mokepons_mokepon_ratigueya_attack.webp',5,aleatorio(100,730),aleatorio(0,520))
let langostelvisEnemigo = new Mokepon('Langostelvis','/assets/mokepons_mokepon_langostelvis_attack.webp',5,aleatorio(100,730),aleatorio(0,520))
let tucapalmaEnemigo = new Mokepon('Tucapalma','/assets/mokepons_mokepon_tucapalma_attack.webp',5,aleatorio(100,730), aleatorio(0,520)  )
let pydosEnemigo = new Mokepon('Pydos','/assets/mokepons_mokepon_pydos_attack.webp',5,aleatorio(100,730),aleatorio(0,520))

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos) 
mokeponesEnemigos.push(hipodogeEnemigo,capipepoEnemigo,ratigueyaEnemigo,langostelvisEnemigo,tucapalmaEnemigo,pydosEnemigo) 

hipodoge.ataques.push(
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    )
capipepo.ataques.push(
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    )
ratigueya.ataques.push(
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    )
langostelvis.ataques.push(
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    )
tucapalma.ataques.push(
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    )
pydos.ataques.push(
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '🔥 FUEGO', id:'boton-fuego'},
    {nombre: '💧 AGUA', id:'boton-agua'},
    {nombre: '🪴 TIERRA', id:'boton-tierra'},
    )

function iniciarJuego(){
    sectionAtaques.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
    vidasJugador.innerHTML = contadorJugador
    vidasEnemigo.innerHTML = contadorEnemigo

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

    unirseAlJuego()
    
}

function unirseAlJuego(){
    fetch('http://localhost:8080/unirse')
        .then(function (res) {
            if (res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                    })
            }

        })

}

function seleccionMascotaJugador(){
    sectionMascotas.style.display = "none"
    sectionVerMapa.style.display =""

   iniciarMapa()
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }else {
       alert("debes seleccionar una mascota")
    }
   
    for(let i = 0; i<mokepones.length; i++){
        if(mascotaJugador == mokepones[i].nombre){
            personaje = mokepones[i]
        }
    }
    extraerAtaques(mascotaJugador)
    pintarPersonaje()
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

    subtitulos.innerHTML = `Elige los ataques de ${mascotaJugador}`
    ataqueFuego = document.getElementById("boton-fuego")
    ataqueAgua= document.getElementById("boton-agua")
    ataqueTierra= document.getElementById("boton-tierra")
    botones= document.querySelectorAll('.BAtaque')
    mensajesFinales.style.display='none'
    secuenciaAtaques()
}

function secuenciaAtaques(){
    
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if(e.target.textContent === '🔥 FUEGO'){
                ataqueJugador.push('🔥 FUEGO')
                boton.style.background = 'grey'
                boton.disabled =true
                
            }else if (e.target.textContent === '💧 AGUA') {
                ataqueJugador.push('💧 AGUA')
                boton.style.background = 'grey'
                boton.disabled =true
            }else if (e.target.textContent === '🪴 TIERRA') {
                ataqueJugador.push('🪴 TIERRA')
                boton.style.background = 'grey'}
                boton.disabled =true
                ataqueAleatorioEnemigo()
            })
        })
}

function ataqueAleatorioEnemigo(){
    let eleccionEnemigo = aleatorio(0,ataqueEnemigo.length-1)
    seleccionEnemigo.push(ataqueEnemigo[eleccionEnemigo].nombre)
    ataqueEnemigo.splice(eleccionEnemigo,1)
    resultadoCombate()
}

function resultadoCombate(){
    if (ataqueJugador[ataqueJugador.length-1] == '🔥 FUEGO' && seleccionEnemigo[seleccionEnemigo.length-1] == '🪴 TIERRA' || ataqueJugador[ataqueJugador.length-1] == '💧 AGUA' && seleccionEnemigo[seleccionEnemigo.length-1] =='🔥 FUEGO' || ataqueJugador[ataqueJugador.length-1] == '🪴 TIERRA' && seleccionEnemigo[seleccionEnemigo.length-1] =='💧 AGUA'){
        resultado= 'GANASTE!! 😁'
        contadorJugador= contadorJugador+1;
    }else if (ataqueJugador[ataqueJugador.length-1] == seleccionEnemigo[seleccionEnemigo.length-1]){
        resultado= 'empate';
    }else {
        resultado= 'perdiste 😢'
        contadorEnemigo= contadorEnemigo+1;
    }
    if ( ataqueJugador.length == 5){
      
        
           crearMensaje()
      
    }
}

function crearMensaje(){
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")
    
    setTimeout(()=>{

        for (let i = 0; i < seleccionEnemigo.length; i++) {
        nuevoAtaqueEnemigo.innerHTML += seleccionEnemigo[i];
        nuevoAtaqueJugador.innerHTML += ataqueJugador[i];
        }
    },1000)
    
    
    sectionAtaqueJugador.appendChild(nuevoAtaqueJugador)
    sectionAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)
    contadorVidas()
}

function contadorVidas(){
    mensajesFinales.style.display=''
    contenedorAtaques.style.display='none'
    subtitulos.style.display='none'
    setTimeout(() => {
        
        // sectionResultado.innerHTML = resultado
        vidasJugador.innerHTML = contadorJugador
        vidasEnemigo.innerHTML = contadorEnemigo
        finBatalla()
    }, 1500);
}

function finBatalla(){
    if (contadorEnemigo < contadorJugador){
        sectionMensajes.innerHTML ="Ganaste la partida"
    }else if(contadorJugador < contadorEnemigo){
        sectionMensajes.innerHTML="Perdiste la partida, vuelve a iniciar"
    }else{
        sectionMensajes.innerHTML="Empate"
    }
    sectionReiniciar.style.display = ""
}

function botonReiniciar(){
    location.reload()
}

function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function pintarPersonaje(){
    
    // if (fondo.width > window.innerWidth){
    //  fondo.width = (window.innerWidth)*100/800
    //  fondo.height = (window.innerWidth)*600/800
    // }
   personaje.x = personaje.x + moverIzqDer
   personaje.y = personaje.y + moverArrAb


    lienzo.drawImage(
        fondo,
        0,0,
        fondo.width,
        fondo.height
    )
    for(let i =0 ; i <mokeponesEnemigos.length; i++){
     mokeponesEnemigos[i].pintarMokepon()
    }
     colisionEntreEnemigos(mokeponesEnemigos)
    lienzo.drawImage(
        personaje.mapaFoto,
        personaje.x, 
        personaje.y, 
        personaje.alto, 
        personaje.ancho)

       colisionBordes(mapa)
       colisionMokepones()
}

function detenerPersonaje(){
    moverArrAb = 0
    moverIzqDer = 0
}

function moverPersonajeIzquierda(){
    moverIzqDer = -personaje.movimientoX
}
function moverPersonajeDerecha(){
    moverIzqDer = personaje.movimientoX
}
function moverPersonajeArriba(){
    moverArrAb = -personaje.movimientoY
}
function moverPersonajeAbajo(){
    moverArrAb = personaje.movimientoY
}

function sePresionoUnBoton(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArrAb = -personaje.movimientoY
            break;
        case 'ArrowDown':
            moverArrAb = personaje.movimientoY
            break;
        case 'ArrowLeft':
            moverIzqDer = -personaje.movimientoX
            break;
        case 'ArrowRight':
            moverIzqDer = personaje.movimientoX
            break;
        default:
            break;
    }
}

function touchPanel(event){
    console.log(event)
}

function iniciarMapa(){
    mapa.width = fondo.width
    mapa.height = fondo.height

    intervalo = setInterval(pintarPersonaje,50)

    window.addEventListener('keydown',sePresionoUnBoton)
    window.addEventListener('keyup',detenerPersonaje)
    window.addEventListener('touchmove',touchPanel)
}

function colisionBordes(mapa){
    if(personaje.x<= 0 ){
        detenerPersonaje()
        personaje.x = 1
        alert('no puedes pasar de aqui')
    }else if(personaje.y<=0){
        detenerPersonaje()
        personaje.y = 1
        alert('no puedes pasar de aqui')
    }else if(personaje.y + personaje.alto >= mapa.height){
        detenerPersonaje()
        personaje.y = mapa.height - personaje.alto -1
        alert('no puedes pasar de aqui')
    }else if(personaje.x + personaje.ancho >= mapa.width){
        detenerPersonaje()
        personaje.x = mapa.width - personaje.ancho -1
        alert('no puedes pasar de aqui')
    }
}

function colisionEntreEnemigos(mokeponesEnemigos){
    for (i = 1; i <mokeponesEnemigos.length;i++){
        if(mokeponesEnemigos[i].x + mokeponesEnemigos[i].ancho < mokeponesEnemigos[i-1].x ||
            mokeponesEnemigos[i].y + mokeponesEnemigos[i].alto < mokeponesEnemigos[i-1].y ||
            mokeponesEnemigos[i].y > mokeponesEnemigos[i-1].y + mokeponesEnemigos[i-1].alto||
            mokeponesEnemigos[i].x > mokeponesEnemigos[i-1].x + mokeponesEnemigos[i-1].ancho){
            }else{
                mokeponesEnemigos[i].x=aleatorio(100,730)
                mokeponesEnemigos[i].y =aleatorio(0,520)
            }
    }
}

function colisionMokepones(){
    for(i=0; i<mokeponesEnemigos.length;i++){
        if(personaje.x + personaje.ancho < mokeponesEnemigos[i].x ||
            personaje.y + personaje.alto < mokeponesEnemigos[i].y ||
            personaje.y > mokeponesEnemigos[i].y + mokeponesEnemigos[i].alto||
            personaje.x > mokeponesEnemigos[i].x + mokeponesEnemigos[i].ancho){
            }else{
                detenerPersonaje()
                sectionAtaques.style.display = ""
                sectionVerMapa.style.display ="none"
                spanMascotaEnemigo.innerHTML = mokepones[i].nombre
                ataqueEnemigo = mokepones[i].ataques
            }
    }
}

window.addEventListener("load",iniciarJuego)