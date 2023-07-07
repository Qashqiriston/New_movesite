function modal(){
  //modal

  const modalTriger = document.querySelector("[data-modal]"),
    modal = document.querySelector(".modal")
    

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide" );
    // document.body.style.overflow = "hidden";
    // clearInterval(modalTimerId)
  }

  function closeModal() {
    modal.classList.toggle("hide");
    modal.classList.remove("show");
    // modal.classList.remove('show')
    document.body.style.overflow = "";
  }

  modalTriger.addEventListener("click", openModal);


  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  // const modalTimerId = setTimeout(openModal , 4000)

  //modal scrol bottom
  function showModalbyScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      console.log(2);
      openModal();
      window.removeEventListener("scroll", showModalbyScroll);
    }
  }
  showModalbyScroll();
  window.addEventListener("scroll", showModalbyScroll);
}

module.exports = modal