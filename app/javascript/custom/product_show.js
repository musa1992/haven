document.addEventListener("turbolinks:load",()=>{
    if (!Turbolinks) {
        location.reload();
    }
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider')
    const productSlider = document.querySelector('.product-slider')
    const imageWidth = document.getElementsByClassName('product-image')[0].clientWidth
    const productSize = document.querySelector('.product-size');
    const size = document.getElementById('size')
    const availableSizes  = ["Small", "Medium", "Large","X Large", "XX Large"]
    const sizeMeasurement = productSize.children
   const quantitySelector = document.querySelector('.quantity-selector')
   const quantity = document.querySelector('.quantity')
    var clickedElem
    var direction;
    var clickedMeasurement

    

    next.addEventListener('click',()=>{
        
        direction = -1
    
        slider.style.transform = "translateY(-126px)"
        productSlider.style.transform = "translateX(-" + imageWidth + "px)"
         
    })
    prev.addEventListener('click',()=>{
       
        direction = 1
        slider.style.transform = "translateY(132px)"
        productSlider.style.transform = "translateX(" + imageWidth + "px)"


    })

    slider.addEventListener('click', (e)=>{
        direction = 0
        let px = e.target.offsetTop
        let productSliderFactor = (px/126) * imageWidth
        clickedElem = e.target
        slider.style.transform = "translateY(-" + px + "px)"
        productSlider.style.transform = "translateX(-" + productSliderFactor + "px)"
    })


    slider.addEventListener('transitionend', function(){
        
        if (direction == -1){
            slider.append(slider.firstElementChild) 
            
           
        }else if (direction == 1){
            slider.prepend(slider.lastElementChild)
            
        }else if (direction == 0 ){
            do {
                slider.appendChild(slider.firstElementChild) 
                productSlider.appendChild(productSlider.firstElementChild)
            }while (clickedElem.previousElementSibling != clickedElem.parentNode.firstElementChild){
                slider.appendChild(slider.firstElementChild)
                productSlider.appendChild(productSlider.firstElementChild)
            }   
        }
        
        slider.style.transition= "none"
        slider.style.transform = "translateY(0)"
        setTimeout(function(){
            slider.style.transition = "all 0.5s"
        })   
    })

    productSlider.addEventListener('transitionend', function(){
    
        if (direction == -1){
        
           productSlider.append(productSlider.firstElementChild)
        }else if (direction == 1){
            
            productSlider.prepend(productSlider.lastElementChild)
        }
        productSlider.style.transition = "none"
        productSlider.style.transform = "translate(0)"
    
        setTimeout(function(){

            productSlider.style.transition = "all 0.5s"
        })   
    })

    productSize.addEventListener('click', (e)=> {
       let el = e.target
       let index = Array.from(el.parentElement.children).indexOf(el)
       size.innerHTML = availableSizes[index]
        if (typeof clickedMeasurement !== 'undefined'){
            clickedMeasurement.style.borderBottom = "none"
        }
        e.target.style.borderBottom = "3.5px #000 solid"

        clickedMeasurement = e.target
    })

    sizeMeasurement[0].click()

    quantitySelector.addEventListener('click', (e)=> {
        let qty = parseInt(quantity.innerHTML)

        if (e.target.classList.contains('qty-add') || e.target.classList.contains('fa-plus')){
            qty += 1
            quantity.innerHTML = qty
        }

        if (e.target.classList.contains('qty-minus') || e.target.classList.contains('fa-minus')){
            qty -= 1
            if (qty == 0){
                quantity.innerHTML = "1"
            }else {
                quantity.innerHTML = qty
            }
            
        }

        

    })

  
})

