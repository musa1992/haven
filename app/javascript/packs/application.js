// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import '@fortawesome/fontawesome-free/css/all'
import 'bootstrap'
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "custom/product_show"
Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', ()=>{
    if(!Turbolinks){
        location.reload()
    }
    const cartPopup = document.querySelector('.cart-popup')
    const closeCart = document.querySelector('.close-cart')
    const cart = document.querySelector('.cart')
    
    closeCart.addEventListener('click', ()=>{
        cartPopup.style.top ="-352px"
    })
    cart.addEventListener('mouseover', ()=>{
        cartPopup.style.top = "0"
    })
    cart.addEventListener('mouseout', (e)=>{ 
        cartPopup.style.top = "-352px"
    })

    cartPopup.addEventListener('mouseenter', ()=> {
        cartPopup.style.top = "0"
    })
    cartPopup.addEventListener('mouseleave', ()=>{
        cartPopup.style.top = "-352px"
    })
})


