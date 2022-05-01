window.onload = desplegarVideo()

// window.onload = menu()
// Este codigo esta horrible xdddd 
// falta mejorarlo
// sorry profe lo intente xd
function desplegarVideo(){
    const videoSrc = document.getElementById("video-1").setAttribute("src","https://www.youtube.com/embed/Ycs7gq_fRcA")
    const videoSrc2 = document.getElementById("video-1").getAttribute("src")
    document.querySelector(".video-play-btn").addEventListener("click",function(){
            
            if (document.querySelector(".video-popup").classList.contains("open")){
                document.querySelector(".video-popup").classList.remove("open");
                // document.getElementById("video-1").setAttribute("src","");
            }
            else{
                document.querySelector(".video-popup").classList.add("open");
                if(document.querySelector("#video-1").src==""){
                    document.getElementById("video-1").setAttribute("src",videoSrc);
                }    
            }
        })
   document.querySelector(".video-popup").addEventListener("click",function(){
    if (document.querySelector(".video-popup").classList.contains("open")){
        document.querySelector(".video-popup").classList.remove("open");
        // document.getElementById("video-1").setAttribute("src","");
    }
   })     
    
}
function menu(){
    //Obtenemos el navbar
    const navbar = document.querySelector(".navbar")   
    // si el scrolltop es mayor entonces el menu cambia de clase para darle mejores estilos  
    if (document.documentElement.scrollTop >= 59){
        navbar.classList.add("nav-pequeno")
    }else{
        navbar.classList.remove("nav-pequeno")
    }
}

// Escucha de Eventos

// Evento para cambiar estilos al navbar
window.addEventListener("scroll", function(){menu()})
