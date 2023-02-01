
let body = document.querySelector('body')
let audio = document.querySelector('#audio')
let on = document.querySelector('.on')
let wrapper = document.querySelector('.wrapper')
var root = document.querySelector(':root');
let bool = false

function f1() {
    bool = !bool
    body.classList.toggle('on')
    wrapper.classList.toggle('none')
    if(bool){
        root.style.setProperty('--main-bg-color', 'linear-gradient(#2b1055,#7597be)')
    }else{
        root.style.setProperty('--main-bg-color', '#000')
    }
    audio.play()

}

document.querySelector('.btn').onclick = f1
const pos = document.documentElement;
pos.addEventListener('mousemove', e=>{
    pos.style.setProperty('--x', e.clientX +'px')
    pos.style.setProperty('--y', e.clientY +'px')
})


