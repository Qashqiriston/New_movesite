function loader(){
  loader = document.querySelector(".loader");
  
    //loader
    setTimeout(() => {
      loader.style.display = "none";
      setTimeout(() => {
        loader.style.opacity = "0";
      });
    }, 2000);
}
module.exports = loader