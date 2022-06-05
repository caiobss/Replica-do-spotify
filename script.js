//Array
const musicas =[
    {titulo: 'As You Fade Away',
    artista: 'NEFFEX',
    musicasrc:'songs/As You Fade Away - NEFFEX.mp3',
    img:'/imgs/aditya-chinchure-TE50158gdvs-unsplash.jpg'},

    {titulo: 'El Secreto',
    artista: 'Yung Logos',
    musicasrc:'songs/El Secreto - Yung Logos.mp3',
    img:'/imgs/shubham-dhage-ykFTt5Dq1RU-unsplash.jpg'},

    {titulo: 'Retribution',
    artista: 'NEFFEX',
    musicasrc:'songs/Retribution - NEFFEX.mp3',
    img:'/imgs/arthur-ogleznev-OT-tVcdZUMw-unsplash.jpg'},

    {titulo: 'Bad Guy',
    artista: 'Billie Eilish',
    musicasrc:'songs/Billie_Eilish_-_bad_guy_(BornMP3.com).mp3',
    img:'/imgs/billie.jpg'},

    {titulo: "Sweet Child O'mine",
    artista: "Guns N' Roses",
    musicasrc:"songs/Sweet Child O' Mine.mp3",
    img:'/imgs/guns-and-roses-banda.jpg'},

    {titulo: 'Killing Strangers',
    artista: 'Marilyn Manson',
    musicasrc:'songs/Marilyn Manson - Killing Strangers.mp3',
    img:'/imgs/Marilyn Manson.jpg'},

]

//variáveis
const tempoFinal = document.querySelector('.tempo-fim')

const musica = document.querySelector('audio')
const imagem = document.querySelector('.img-musicas img')
const musicaNome = document.querySelector('.descricoes .nome-musica')
const Nomeartista = document.querySelector('.descricoes .artista')
let index = 0

tempoFinal.textContent = minutosEsegundos(Math.floor(musica.duration))

//eventos e funções
document.querySelector('.voltar').addEventListener('click', () =>{
    index--
    renderizarMusica(index)
})
document.querySelector('.proxima').addEventListener('click', () =>{
    index++
    renderizarMusica(index)
})
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].musicasrc)
    musica.addEventListener('loadeddata', () =>{
        musicaNome.textContent = musicas[index].titulo
        Nomeartista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        tempoFinal.textContent = minutosEsegundos(Math.floor(musica.duration))
    })
}
document.querySelector('.buttons .play').addEventListener('click', () =>{//evento de ativação da musica
    musica.play()
    document.querySelector('.buttons .play').style.display = 'none'
    document.querySelector('.buttons .pause').style.display = 'block'
})
document.querySelector('.buttons .pause').addEventListener('click', () =>{//evento do pause da musica
    musica.pause()
    document.querySelector('.buttons .play').style.display = 'block'
    document.querySelector('.buttons .pause').style.display = 'none'
})
musica.addEventListener('timeupdate', () =>{//atualização em tempo real da musica para a barra de progresso e timer
    let progresso = document.querySelector('progress')
    progresso.style.width = (musica.currentTime / musica.duration) * 100 + '%'
    let tempo = document.querySelector('.tempo-inicio')
    tempo.textContent = minutosEsegundos(Math.floor(musica.currentTime))
})

function minutosEsegundos(segundos){//funcao para definicao e limetes de minutos e segundos
    let tempoMinutos = Math.floor(segundos / 60)
    let tempoSegudos = segundos % 60
    if (tempoSegudos < 10){
        tempoSegudos ='0' +tempoSegudos
    }
    return (tempoMinutos+ ':' +tempoSegudos)

}