const musicas = [
    {titulo: 'As You Fade Away',
    artista: 'NEFFEX',
    src:'songs/As You Fade Away - NEFFEX.mp3',
    img:'/imgs/aditya-chinchure-TE50158gdvs-unsplash.jpg'},

    {titulo: 'El Secreto',
    artista: 'Yung Logos',
    src:'songs/El Secreto - Yung Logos.mp3',
    img:'/imgs/shubham-dhage-ykFTt5Dq1RU-unsplash.jpg'},

    {titulo: 'Retribution',
    artista: 'NEFFEX',
    src:'songs/Retribution - NEFFEX.mp3',
    img:'/imgs/arthur-ogleznev-OT-tVcdZUMw-unsplash.jpg'},

    {titulo: 'Bad Guy',
    artista: 'Billie Eilish',
    src:'songs/Billie_Eilish_-_bad_guy_(BornMP3.com).mp3',
    img:'/imgs/billie.jpg'},

    {titulo: "Sweet Child O'mine",
    artista: "Guns N' Roses",
    src:"songs/Sweet Child O' Mine.mp3",
    img:'/imgs/guns-and-roses-banda.jpg'}
]

const musica = document.querySelector('audio')
let indexMusica = 0
let tempofinal = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

tempofinal.textContent = segudosparaminutos(Math.floor(musica.duration))
//eventos
document.querySelector('.botao-play').addEventListener('click', tocarmusica)

document.querySelector('.botao-pause').addEventListener('click', pausarmusica)

musica.addEventListener('timeupdate', atualizarbarra)

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--
    renderizarmusica(indexMusica)
})
document.querySelector('.proxima').addEventListener('click', () =>{
    indexMusica++
    renderizarmusica(indexMusica)
})

//funções
function renderizarmusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        tempofinal.textContent = segudosparaminutos(Math.floor(musica.duration))
    })
}

function tocarmusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}
function pausarmusica(){
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}
function atualizarbarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) +'%'
    let tempodecorrido = document.querySelector('.inicio')
    tempodecorrido.textContent = segudosparaminutos(Math.floor(musica.currentTime))
}//a propriedade math.floor arredonda um numero decimal para baixo ou seja: 2.2.3.4 = 2

function segudosparaminutos(segundos){
    let campominutos = Math.floor(segundos / 60)
    let camposegudos = (segundos % 60)
    if (camposegudos < 10){
        camposegudos = '0' + camposegudos
    }
    return campominutos+':'+camposegudos
}
