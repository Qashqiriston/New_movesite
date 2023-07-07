function slider(){
  //slideer  ---------------->

const slides = document.querySelectorAll('.offer__slide'),
next = document.querySelector('.offer__slider-next'),
prev = document.querySelector('.offer__slider-prev'),
total = document.querySelector('#total'),
current = document.querySelector('#current'),
slideWrapper = document.querySelector(".offer__slider-wrapper"),
slideField = document.querySelector('.offer__slider-inner'),
width = window.getComputedStyle(slideWrapper).width
sldier = document.querySelector('.offer__slider') 


let slideIndex = 1
let offset = 0

      
// -----------------**************************************-------------------
//                     NEW CARUSEL SLIDER
// -----------------**************************************-------------------

if(slides.length < 10){
total.textContent =  `0${slides.length}`
current.textContent = `0${slideIndex}`
}else{
total.textContent = slides.length
current.textContent = slideIndex
}

slideField.style.width = 100 * slides.length + '%'
slideField.style.display = 'flex'
slideField.style.transition = '.5s ease all'
slideWrapper.style.overflow = 'hidden'
slides.forEach(slides => {
slides.style.width  = width
})

const indicators = document.createElement('ol')
const dots = []
indicators.classList.add('carusel-indexators')
sldier.append(indicators)

for(let i = 0; i < slides.length; i++){
const dot = document.createElement('li')
dot.setAttribute('data-slide-to' , i + 1)
dot.classList.add('carusel-dot')
if( i == 0 ){dot.style.opacity = 1}
indicators.append(dot)
dots.push(dot)
} 

next.addEventListener('click', ()=>{
if(offset === +width.replace(/\D/g, '') * (slides.length - 1)){
offset = 0 
}else{
offset += +width.replace(/\D/g, '')
}
slideField.style.transform = `translateX(-${offset}px)`
if(slideIndex == slides.length){
slideIndex = 1
}else{
slideIndex++
}

if(slides.length < 10){
current.textContent = `0${slideIndex}`
}else{
current.textContent = slideIndex
}

dots.forEach(dot => dot.style.opacity = '.5')
dots[slideIndex - 1].style.opacity = 1
})

prev.addEventListener('click' , ()=>{
if(offset === 0){
offset = +width.replace(/\D/g, '') * (slides.length - 1)
}else{
offset -= +width.replace(/\D/g, '')
}
slideField.style.transform = `translateX(-${offset}px)`
if(slideIndex == slides.length){
slideIndex = slides.length
}else{
slideIndex--
}

if(slides.length < 10){
current.textContent = `0${slideIndex}`
}else{
current.textContent = slideIndex
}

dots.forEach(dot => dot.style.opacity = '.5')
dots[slideIndex - 1].style.opacity = 1
})
dots.forEach(dot => {
dot.addEventListener('click',(e)=>{
const slideTo = e.target.getAttribute('data-slide-to')

slideIndex = slideTo
offset = +width.replace(/\D/g, '') * (slideTo - 1)
slideField.style.transform = `translateX(-${offset}px)`

if(slides.length < 10){
current.textContent = `0${slideIndex}`
}else{
current.textContent = slideIndex
}

dots.forEach(dot => dot.style.opacity = '.5')
dots[slideIndex - 1].style.opacity = 1
})
})
}

module.exports = slider