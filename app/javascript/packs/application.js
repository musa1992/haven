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
    const displayOnCartPage = document.getElementsByClassName('only-cart-display')
    const cartPartial = document.getElementById('cart-products')
    
    var myPath = window.location.pathname
    var page = myPath.split("/").pop()

    
    closeCart.addEventListener('click', ()=>{
        cartPopup.style.top ="-352px"
    })
    cart.addEventListener('mouseover', ()=>{
        if (page != "index"){
        cartPopup.style.top = "0"
        }
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

    if (document.readyState === 'complete' && page === 'index'){
        for (var i = 0; i < displayOnCartPage.length; i ++){
            displayOnCartPage[i].style.display = "block"
        }
    }
    const colorSelect = cartPartial.querySelector('.color-select')
    var selectedColor = cartPartial.querySelector('.selected-color')
    const sizeSelect = cartPartial.querySelector('.size-select')
    var selectedSize = cartPartial.querySelector('.selected-size')
    var quantity = cartPartial.querySelector('.selected-quantity')
    const quantitySelect = cartPartial.querySelector('.quantity-select')

    colorSelect.addEventListener('change',(e)=>{
        var select = e.target
        var color = select.options[select.selectedIndex].text
        selectedColor.innerHTML = color
    })

    sizeSelect.addEventListener('change',(e)=>{
        var select = e.target
        var size = select.options[select.selectedIndex].text
        selectedSize.innerHTML = size
    })

    quantitySelect.addEventListener('click',(e)=>{
        let qty = parseInt(quantity.innerHTML)

        if (e.target.classList.contains('fa-angle-up')){
            qty += 1
            quantity.innerHTML = qty
        }

        if (e.target.classList.contains('fa-angle-down')){
            qty -= 1
            if (qty == 0){
                quantity.innerHTML = "1"
            }else {
                quantity.innerHTML = qty
            }
            
        }

    })
})


