let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains_behind = document.querySelector('#mountains_behind')
let mountains_front = document.querySelector('#mountains_front')
let text = document.querySelector('#text')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    stars.style.left = value  *0.25 + 'px'
    moon.style.top = value  *2 + 'px'
    mountains_behind.style.top = value  *0.5 + 'px'
    mountains_front.style.top = value  *0 + 'px'
    text.style.marginRight = value  * 4 + 'px'
    text.style.marginTop = value  * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
         nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });
  

document.addEventListener('mousemove', parallax);
function parallax(e){
  this.querySelectorAll('.object').forEach(layer =>{
    const speed = layer.getAttribute('data-value')

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100

    layer.style.transform = 
    
    `translateX(${x}px) translateY(${y}px) 
    `
  })
}



