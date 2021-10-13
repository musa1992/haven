document.addEventListener("turbolinks:load",()=>{
    if (!Turbolinks) {
        location.reload();
    }
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider')
    const productSlider = document.querySelector('.product-slider')
    const imageWidth = document.getElementsByClassName('product-image')[0].clientWidth
    var clickedElem
    var direction;
    
    next.addEventListener('click',()=>{
        
        direction = -1
    
        slider.style.transform = "translateY(-106px)"
        productSlider.style.transform = "translateX(-" + imageWidth + "px)"
         
    })
    prev.addEventListener('click',()=>{
       
        direction = 1
        slider.style.transform = "translateY(112px)"
        productSlider.style.transform = "translateX(" + imageWidth + "px)"


    })

    slider.addEventListener('click', (e)=>{
        direction = 0
        let px = e.target.offsetTop
        let productSliderFactor = (px/106) * imageWidth
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
  
})

