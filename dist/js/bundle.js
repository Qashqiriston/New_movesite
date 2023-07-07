/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/src/js/script.js":
/*!******************************!*\
  !*** ./src/src/js/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const { router } = require(\"json-server\");\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  \r\n  const clas = __webpack_require__(/*! ../modules/class */ \"./src/src/modules/class.js\"),\r\n  forms = __webpack_require__(/*! ../modules/forms */ \"./src/src/modules/forms.js\"),\r\n  loader = __webpack_require__(/*! ../modules/loader */ \"./src/src/modules/loader.js\"),\r\n  modal = __webpack_require__(/*! ../modules/modal */ \"./src/src/modules/modal.js\"),\r\n  slider = __webpack_require__(/*! ../modules/slider */ \"./src/src/modules/slider.js\"),\r\n  tabs = __webpack_require__(/*! ../modules/tabs */ \"./src/src/modules/tabs.js\"),\r\n  timer = __webpack_require__(/*! ../modules/timer */ \"./src/src/modules/timer.js\")\r\n\r\n\r\n  clas()\r\n  forms()\r\n  loader()\r\n  modal()\r\n  slider()\r\n  tabs()\r\n  timer()\r\n\r\n// -----------------**************************************-------------------\r\n//                     EASY SLIDER\r\n// -----------------**************************************-------------------\r\n  //     showSlides(slideIndex)\r\n\r\n  //     if(slides.length < 10){\r\n  //       total.textContent = `0${slides.length}`\r\n  //     }else{\r\n  //       total.textContent = slides.length\r\n  //     }\r\n      \r\n\r\n  //     function showSlides(ind){\r\n  //       if(ind > slides.length){\r\n  //         slideIndex = 1\r\n  //       }\r\n  //       if(ind < 1){\r\n  //         slideIndex = slides.length\r\n  //       }\r\n  //       slides.forEach(item => item.style.display = 'none')\r\n  //       slides[slideIndex - 1].style.display = 'block'\r\n\r\n  //       if(slides.length < 10){\r\n  //         current.textContent = `0${slideIndex}`\r\n  //       }else{\r\n  //         current.textContent = slideIndex\r\n  //       }\r\n  //     }\r\n\r\n  // function plusSlides(ind){\r\n  //   showSlides(slideIndex += ind)\r\n  // }\r\n\r\n  // next.addEventListener('click', ()=>{\r\n  //   plusSlides(1)\r\n  // })\r\n\r\n  // prev.addEventListener('click', ()=>{\r\n  //   plusSlides(-1)\r\n  // })\r\n\r\n    })\r\n\n\n//# sourceURL=webpack://movesite/./src/src/js/script.js?");

/***/ }),

/***/ "./src/src/modules/class.js":
/*!**********************************!*\
  !*** ./src/src/modules/class.js ***!
  \**********************************/
/***/ ((module) => {

eval("function clas(){\r\n \r\n  //classlar\r\n\r\n  class MenuCard {\r\n    constructor(src, alt, title, descr, price, parentElement, ...classes) {\r\n      (this.src = src),\r\n        (this.alt = alt),\r\n        (this.title = title),\r\n        (this.descr = descr),\r\n        (this.price = price),\r\n        this.classes = classes,\r\n        (this.parent = document.querySelector(parentElement)),\r\n        (this.transfer = 11000),\r\n        this.changeToUzs();\r\n    }\r\n\r\n    changeToUzs() {\r\n      this.price = this.price * this.transfer;\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement(\"div\");\r\n\r\n      if(this.classes.length === 0){\r\n        this.element = 'menu__item'\r\n        element.classList.add(this.element)\r\n      }else{\r\n        this.classes.forEach((classname) => element.classList.add(classname))\r\n      }\r\n\r\n      element.innerHTML = `\r\n           \r\n            <img src=${this.src} alt=${this.alt} />\r\n            <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n            <div class=\"menu__item-descr\">${this.descr}</div>\r\n            <div class=\"menu__item-divider\"></div>\r\n            <div class=\"menu__item-price\">\r\n              <div class=\"menu__item-cost\">Price:</div>\r\n              <div class=\"menu__item-total\"><span>${this.price}</span>uzs/month</div>\r\n            </div>\r\n            `\r\n\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  // axios.get('http://localhost:3000/menu').then(data => {\r\n  //   data.data.forEach(({img,altimg,title,descr,price}) =>{\r\n  //   new MenuCard(img,altimg,title,descr,price, '.menu .container').render()\r\n  //   })\r\n  // })\r\n\r\n  async function getRecours(url){\r\n    const res = await fetch(url)\r\n\r\n    return await res.json()\r\n  }\r\n  getRecours('http://localhost:3000/menu').then((data)=>{\r\n    data.forEach(({img,altimg,title,descr,price}) =>{\r\n      new MenuCard(img,altimg,title,descr,price, '.menu .container').render()\r\n    })\r\n  })\r\n\r\n\r\n}\r\n\r\nmodule.exports = clas\n\n//# sourceURL=webpack://movesite/./src/src/modules/class.js?");

/***/ }),

/***/ "./src/src/modules/forms.js":
/*!**********************************!*\
  !*** ./src/src/modules/forms.js ***!
  \**********************************/
/***/ ((module) => {

eval("function forms(){\r\n  //  form ----------------------------------->\r\n\r\n  const forms = document.querySelectorAll('form')\r\n\r\n  forms.forEach((form) =>{\r\n    bindPostData(form)  //2ta masivni yani formni bir qilib formga joylayapti\r\n  })\r\n\r\n    const msg = {\r\n      loading: \"Loading...\",\r\n      success: \"Thank for you\",\r\n      failary: \"Something wrong\"\r\n    }\r\n\r\n   async function postData(url,data){\r\n      const res = await fetch(url,{\r\n        method: 'Post',\r\n        headers:{\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: data,\r\n      })\r\n      \r\n      return await res.json()\r\n    }\r\n\r\n  function bindPostData(form){\r\n    form.addEventListener('submit' , (e)=>{\r\n      e.preventDefault()\r\n\r\n      \r\n      const statusMasage = document.createElement('div')\r\n      statusMasage.textContent = msg.loading\r\n      form.append(statusMasage)\r\n      \r\n\r\n      const formData = new FormData(form)\r\n\r\n     const json = JSON.stringify(Object.fromEntries(formData.entries()))\r\n  \r\n      postData('http://localhost:3000/request', json)\r\n      // .then((data)=> data.text())\r\n      .then((data) =>{\r\n        console.log(data)\r\n        showThanksModal(msg.success)\r\n        statusMasage.remove()\r\n      }).catch(() =>{\r\n        showThanksModal(msg.failary)\r\n      }).finally(() => {\r\n        form.reset()\r\n      })\r\n    })\r\n  }\r\n\r\n  function showThanksModal(message){\r\n    const prevModalDialog = document.querySelector('.modal__dialog')\r\n    prevModalDialog.classList.add('hide')\r\n    openModal()\r\n\r\n   const thanksModal = document.createElement('div')\r\n   thanksModal.classList.add('modal__dialog')\r\n   thanksModal.innerHTML =`\r\n   <div class=\"modal__content\">\r\n   <div data-close class=\"modal__close\">&times;</div>\r\n   <div class=\"modal__title\">${message}</div>\r\n   </div>\r\n   `  \r\n   \r\n   document.querySelector('.modal').append(thanksModal)\r\n   setTimeout(() =>{\r\n     thanksModal.remove()\r\n     prevModalDialog.classList.add('show')\r\n     prevModalDialog.classList.remove('hide')\r\n     closeModal()\r\n    },4000)\r\n  }\r\n\r\n}\r\nmodule.exports = forms\n\n//# sourceURL=webpack://movesite/./src/src/modules/forms.js?");

/***/ }),

/***/ "./src/src/modules/loader.js":
/*!***********************************!*\
  !*** ./src/src/modules/loader.js ***!
  \***********************************/
/***/ ((module) => {

eval("function loader(){\r\n  loader = document.querySelector(\".loader\");\r\n  \r\n    //loader\r\n    setTimeout(() => {\r\n      loader.style.display = \"none\";\r\n      setTimeout(() => {\r\n        loader.style.opacity = \"0\";\r\n      });\r\n    }, 2000);\r\n}\r\nmodule.exports = loader\n\n//# sourceURL=webpack://movesite/./src/src/modules/loader.js?");

/***/ }),

/***/ "./src/src/modules/modal.js":
/*!**********************************!*\
  !*** ./src/src/modules/modal.js ***!
  \**********************************/
/***/ ((module) => {

eval("function modal(){\r\n  //modal\r\n\r\n  const modalTriger = document.querySelector(\"[data-modal]\"),\r\n    modal = document.querySelector(\".modal\")\r\n    \r\n\r\n  function openModal() {\r\n    modal.classList.add(\"show\");\r\n    modal.classList.remove(\"hide\" );\r\n    // document.body.style.overflow = \"hidden\";\r\n    // clearInterval(modalTimerId)\r\n  }\r\n\r\n  function closeModal() {\r\n    modal.classList.toggle(\"hide\");\r\n    modal.classList.remove(\"show\");\r\n    // modal.classList.remove('show')\r\n    document.body.style.overflow = \"\";\r\n  }\r\n\r\n  modalTriger.addEventListener(\"click\", openModal);\r\n\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (e.target == modal || e.target.getAttribute('data-close') == \"\") {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.code === \"Escape\" && modal.classList.contains(\"show\")) {\r\n      closeModal();\r\n    }\r\n  });\r\n  // const modalTimerId = setTimeout(openModal , 4000)\r\n\r\n  //modal scrol bottom\r\n  function showModalbyScroll() {\r\n    if (\r\n      window.pageYOffset + document.documentElement.clientHeight >=\r\n      document.documentElement.scrollHeight - 1\r\n    ) {\r\n      console.log(2);\r\n      openModal();\r\n      window.removeEventListener(\"scroll\", showModalbyScroll);\r\n    }\r\n  }\r\n  showModalbyScroll();\r\n  window.addEventListener(\"scroll\", showModalbyScroll);\r\n}\r\n\r\nmodule.exports = modal\n\n//# sourceURL=webpack://movesite/./src/src/modules/modal.js?");

/***/ }),

/***/ "./src/src/modules/slider.js":
/*!***********************************!*\
  !*** ./src/src/modules/slider.js ***!
  \***********************************/
/***/ ((module) => {

eval("function slider(){\r\n  //slideer  ---------------->\r\n\r\nconst slides = document.querySelectorAll('.offer__slide'),\r\nnext = document.querySelector('.offer__slider-next'),\r\nprev = document.querySelector('.offer__slider-prev'),\r\ntotal = document.querySelector('#total'),\r\ncurrent = document.querySelector('#current'),\r\nslideWrapper = document.querySelector(\".offer__slider-wrapper\"),\r\nslideField = document.querySelector('.offer__slider-inner'),\r\nwidth = window.getComputedStyle(slideWrapper).width\r\nsldier = document.querySelector('.offer__slider') \r\n\r\n\r\nlet slideIndex = 1\r\nlet offset = 0\r\n\r\n      \r\n// -----------------**************************************-------------------\r\n//                     NEW CARUSEL SLIDER\r\n// -----------------**************************************-------------------\r\n\r\nif(slides.length < 10){\r\ntotal.textContent =  `0${slides.length}`\r\ncurrent.textContent = `0${slideIndex}`\r\n}else{\r\ntotal.textContent = slides.length\r\ncurrent.textContent = slideIndex\r\n}\r\n\r\nslideField.style.width = 100 * slides.length + '%'\r\nslideField.style.display = 'flex'\r\nslideField.style.transition = '.5s ease all'\r\nslideWrapper.style.overflow = 'hidden'\r\nslides.forEach(slides => {\r\nslides.style.width  = width\r\n})\r\n\r\nconst indicators = document.createElement('ol')\r\nconst dots = []\r\nindicators.classList.add('carusel-indexators')\r\nsldier.append(indicators)\r\n\r\nfor(let i = 0; i < slides.length; i++){\r\nconst dot = document.createElement('li')\r\ndot.setAttribute('data-slide-to' , i + 1)\r\ndot.classList.add('carusel-dot')\r\nif( i == 0 ){dot.style.opacity = 1}\r\nindicators.append(dot)\r\ndots.push(dot)\r\n} \r\n\r\nnext.addEventListener('click', ()=>{\r\nif(offset === +width.replace(/\\D/g, '') * (slides.length - 1)){\r\noffset = 0 \r\n}else{\r\noffset += +width.replace(/\\D/g, '')\r\n}\r\nslideField.style.transform = `translateX(-${offset}px)`\r\nif(slideIndex == slides.length){\r\nslideIndex = 1\r\n}else{\r\nslideIndex++\r\n}\r\n\r\nif(slides.length < 10){\r\ncurrent.textContent = `0${slideIndex}`\r\n}else{\r\ncurrent.textContent = slideIndex\r\n}\r\n\r\ndots.forEach(dot => dot.style.opacity = '.5')\r\ndots[slideIndex - 1].style.opacity = 1\r\n})\r\n\r\nprev.addEventListener('click' , ()=>{\r\nif(offset === 0){\r\noffset = +width.replace(/\\D/g, '') * (slides.length - 1)\r\n}else{\r\noffset -= +width.replace(/\\D/g, '')\r\n}\r\nslideField.style.transform = `translateX(-${offset}px)`\r\nif(slideIndex == slides.length){\r\nslideIndex = slides.length\r\n}else{\r\nslideIndex--\r\n}\r\n\r\nif(slides.length < 10){\r\ncurrent.textContent = `0${slideIndex}`\r\n}else{\r\ncurrent.textContent = slideIndex\r\n}\r\n\r\ndots.forEach(dot => dot.style.opacity = '.5')\r\ndots[slideIndex - 1].style.opacity = 1\r\n})\r\ndots.forEach(dot => {\r\ndot.addEventListener('click',(e)=>{\r\nconst slideTo = e.target.getAttribute('data-slide-to')\r\n\r\nslideIndex = slideTo\r\noffset = +width.replace(/\\D/g, '') * (slideTo - 1)\r\nslideField.style.transform = `translateX(-${offset}px)`\r\n\r\nif(slides.length < 10){\r\ncurrent.textContent = `0${slideIndex}`\r\n}else{\r\ncurrent.textContent = slideIndex\r\n}\r\n\r\ndots.forEach(dot => dot.style.opacity = '.5')\r\ndots[slideIndex - 1].style.opacity = 1\r\n})\r\n})\r\n}\r\n\r\nmodule.exports = slider\n\n//# sourceURL=webpack://movesite/./src/src/modules/slider.js?");

/***/ }),

/***/ "./src/src/modules/tabs.js":
/*!*********************************!*\
  !*** ./src/src/modules/tabs.js ***!
  \*********************************/
/***/ ((module) => {

eval("function tabs(){\r\n\r\n  const tabsParent = document.querySelector(\".tabheader__items\"),\r\n    tabs = document.querySelectorAll(\".tabheader__item\"),\r\n    tabsContent = document.querySelectorAll(\".tabcontent\");\r\n \r\n    //tabs\r\n    function hideTabContent() {\r\n      tabsContent.forEach((item) => {\r\n        item.classList.add(\"hide\");\r\n        item.classList.remove(\"show\");\r\n      });\r\n      tabs.forEach((item) => {\r\n        item.classList.remove(\"tabheader__item_active\");\r\n      });\r\n    }\r\n  \r\n    function showTabContent(i = 0) {\r\n      tabsContent[i].classList.add(\"show\", \"fade\");\r\n      tabsContent[i].classList.remove(\"hide\");\r\n      tabs[i].classList.add(\"tabheader__item_active\");\r\n    }\r\n  \r\n    hideTabContent();\r\n    showTabContent();\r\n  \r\n    tabsParent.addEventListener(\"click\", (event) => {\r\n      const target = event.target;\r\n      if (target && target.classList.contains(\"tabheader__item\")) {\r\n        tabs.forEach((item, indx) => {\r\n          if (target == item) {\r\n            hideTabContent();\r\n            showTabContent(indx);\r\n          }\r\n        });\r\n      }\r\n    });\r\n}\r\nmodule.exports = tabs\n\n//# sourceURL=webpack://movesite/./src/src/modules/tabs.js?");

/***/ }),

/***/ "./src/src/modules/timer.js":
/*!**********************************!*\
  !*** ./src/src/modules/timer.js ***!
  \**********************************/
/***/ ((module) => {

eval("function timer(){\r\n  //time\r\n  const deadLine = \"2023-08-11\";\r\n\r\n  function getTimeRemaining(endtime) {\r\n    let days, hours, minutes, seconds;\r\n    const timer = Date.parse(endtime) - Date.parse(new Date());\r\n    if (timer <= 0) {\r\n      days = 0;\r\n      hours = 0;\r\n      minutes = 0;\r\n      seconds = 0;\r\n    } else {\r\n      (days = Math.floor(timer / (1000 * 60 * 60 * 24))),\r\n        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),\r\n        (minutes = Math.floor((timer / 1000 / 1000) % 60)),\r\n        (seconds = Math.floor((timer / 1000) % 60));\r\n    }\r\n\r\n    return {\r\n      timer: timer,\r\n      days: days,\r\n      hours: hours,\r\n      minutes: hours,\r\n      seconds: seconds,\r\n    };\r\n  }\r\n\r\n  function getZero(num) {\r\n    if (num >= 0 && num < 10) {\r\n      return `0${num}`;\r\n    } else {\r\n      return num;\r\n    }\r\n  }\r\n\r\n  function setClock(selector, endtime) {\r\n    const timer = document.querySelector(selector),\r\n      days = timer.querySelector(\"#days\"),\r\n      hours = timer.querySelector(\"#hours\"),\r\n      minutes = timer.querySelector(\"#minutes\"),\r\n      seconds = timer.querySelector(\"#seconds\");\r\n    timeInterval = setInterval(updateClock, 1000);\r\n\r\n    updateClock();\r\n\r\n    function updateClock() {\r\n      const tim = getTimeRemaining(endtime);\r\n\r\n      days.innerHTML = getZero(tim.days);\r\n      hours.innerHTML = getZero(tim.hours);\r\n      minutes.innerHTML = getZero(tim.minutes);\r\n      seconds.innerHTML = getZero(tim.seconds);\r\n\r\n      if (tim.timer <= 0) {\r\n        clearInterval(timeInterval);\r\n      }\r\n    }\r\n  }\r\n\r\n  setClock(\".timer\", deadLine);\r\n}\r\n\r\nmodule.exports = timer\n\n//# sourceURL=webpack://movesite/./src/src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/src/js/script.js");
/******/ 	
/******/ })()
;