function forms(){
  //  form ----------------------------------->

  const forms = document.querySelectorAll('form')

  forms.forEach((form) =>{
    bindPostData(form)  //2ta masivni yani formni bir qilib formga joylayapti
  })

    const msg = {
      loading: "Loading...",
      success: "Thank for you",
      failary: "Something wrong"
    }

   async function postData(url,data){
      const res = await fetch(url,{
        method: 'Post',
        headers:{
          'Content-Type': 'application/json',
        },
        body: data,
      })
      
      return await res.json()
    }

  function bindPostData(form){
    form.addEventListener('submit' , (e)=>{
      e.preventDefault()

      
      const statusMasage = document.createElement('div')
      statusMasage.textContent = msg.loading
      form.append(statusMasage)
      

      const formData = new FormData(form)

     const json = JSON.stringify(Object.fromEntries(formData.entries()))
  
      postData('http://localhost:3000/request', json)
      // .then((data)=> data.text())
      .then((data) =>{
        console.log(data)
        showThanksModal(msg.success)
        statusMasage.remove()
      }).catch(() =>{
        showThanksModal(msg.failary)
      }).finally(() => {
        form.reset()
      })
    })
  }

  function showThanksModal(message){
    const prevModalDialog = document.querySelector('.modal__dialog')
    prevModalDialog.classList.add('hide')
    openModal()

   const thanksModal = document.createElement('div')
   thanksModal.classList.add('modal__dialog')
   thanksModal.innerHTML =`
   <div class="modal__content">
   <div data-close class="modal__close">&times;</div>
   <div class="modal__title">${message}</div>
   </div>
   `  
   
   document.querySelector('.modal').append(thanksModal)
   setTimeout(() =>{
     thanksModal.remove()
     prevModalDialog.classList.add('show')
     prevModalDialog.classList.remove('hide')
     closeModal()
    },4000)
  }

}
module.exports = forms