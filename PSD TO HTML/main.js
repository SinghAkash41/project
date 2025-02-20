const search_btn = document.getElementById('search_btn')
const search_div = document.querySelector('.search_input')

const toggle_btn = document.getElementById('toggle_btn')
const nav = document.querySelector('.navbar .nav nav')

search_btn.addEventListener('click',()=>{
   if(search_div.style.display === "none"){
     search_div.style.display = "block"
   }else{
    search_div.style.display = "none"
   }
})

toggle_btn.addEventListener('click',()=>{
    if(nav.style.display === "none"){
      nav.style.display = "block"
    }else{
     nav.style.display = "none"
    }
 })

