document.addEventListener("turbolinks:load",()=>{
    if (!Turbolinks) {
        location.reload();
    }
    var arrow = document.getElementsByClassName('arrow');
    var productThumbnail = document.getElementsByClassName('product-thumbnail');


    var l = 0;
    arrow[0].onclick = ()=> {
        l ++;
        console.log(productThumbnail.length)
        for (let i = 0; i < productThumbnail.length; i ++){
            if (l == 0 ){
                productThumbnail[i].style.top = "0px"
            }
            if (l ==1){
                productThumbnail[i].style.top = "-126px"
            }
            if (l == 2){
                productThumbnail[i].style.top = "-247px"
            }
        }
    }
    
})

