// const { router } = require("json-server");

window.addEventListener("DOMContentLoaded", () => {

  
  const clas = require('../modules/class'),
  forms = require('../modules/forms'),
  loader = require('../modules/loader'),
  modal = require('../modules/modal'),
  slider = require('../modules/slider'),
  tabs = require('../modules/tabs'),
  timer = require('../modules/timer')


  clas()
  forms()
  loader()
  modal()
  slider()
  tabs()
  timer()

// -----------------**************************************-------------------
//                     EASY SLIDER
// -----------------**************************************-------------------
  //     showSlides(slideIndex)

  //     if(slides.length < 10){
  //       total.textContent = `0${slides.length}`
  //     }else{
  //       total.textContent = slides.length
  //     }
      

  //     function showSlides(ind){
  //       if(ind > slides.length){
  //         slideIndex = 1
  //       }
  //       if(ind < 1){
  //         slideIndex = slides.length
  //       }
  //       slides.forEach(item => item.style.display = 'none')
  //       slides[slideIndex - 1].style.display = 'block'

  //       if(slides.length < 10){
  //         current.textContent = `0${slideIndex}`
  //       }else{
  //         current.textContent = slideIndex
  //       }
  //     }

  // function plusSlides(ind){
  //   showSlides(slideIndex += ind)
  // }

  // next.addEventListener('click', ()=>{
  //   plusSlides(1)
  // })

  // prev.addEventListener('click', ()=>{
  //   plusSlides(-1)
  // })

    })
