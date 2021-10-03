document.addEventListener("turbolinks:load",()=>{
    if (!Turbolinks) {
        location.reload();
    }
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider')
    var clickedElem
    var direction;

    next.addEventListener('click',()=>{
        direction = -1
        slider.style.transform= "translateY(-112px)"  
         
    })
    prev.addEventListener('click',()=>{
       
        direction = 1
        slider.style.transform = "translateY(112px)"
    })

    slider.addEventListener('click', (e)=>{
        direction = 0
        let px = e.target.offsetTop
        clickedElem = e.target
        slider.style.transform = "translateY(-" + px + "px)"
    })


    slider.addEventListener('transitionend', function(){
    
        if (direction == -1){
           slider.append(slider.firstElementChild) 
        }else if (direction == 1){
            slider.prepend(slider.lastElementChild)
        }else if (direction == 0 ){
            do {
                slider.appendChild(slider.firstElementChild) 
            }while (clickedElem.previousElementSibling != clickedElem.parentNode.firstElementChild){
                slider.appendChild(slider.firstElementChild)
            }   
        }
        
        slider.style.transition= "none"
        slider.style.transform = "translateY(0)"
        setTimeout(function(){
            slider.style.transition = "all 0.5s"
        })   
    })

    


    
   
})

