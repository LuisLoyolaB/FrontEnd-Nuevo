window.onload = desplegarVideo()
// Este codigo esta horrible xdddd 
// falta mejorarlo
function desplegarVideo(){
    const videoSrc = document.getElementById("video-1").setAttribute("src","https://www.youtube.com/embed/Ycs7gq_fRcA")
    const videoSrc2 = document.getElementById("video-1").getAttribute("src")
    document.querySelector(".video-play-btn").addEventListener("click",function(){
            // event.preventDefault()
        //    alert("hola")
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
$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(this).scrollTop() >90){
            $(".navbar").addClass("navbar-shrink");        
        }
        else{
            $("navbar").removeClass("navbar-shrink");
        }
    })
})
