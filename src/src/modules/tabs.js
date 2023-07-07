function tabs(){

  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");
 
    //tabs
    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show");
      });
      tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
      });
    }
  
    function showTabContent(i = 0) {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add("tabheader__item_active");
    }
  
    hideTabContent();
    showTabContent();
  
    tabsParent.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, indx) => {
          if (target == item) {
            hideTabContent();
            showTabContent(indx);
          }
        });
      }
    });
}
module.exports = tabs