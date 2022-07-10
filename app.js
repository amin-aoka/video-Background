let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let video= document.querySelector("video")
let preloader = document.querySelector(".preloader")

window.addEventListener("load", function(){
    preloader.style.visibility="hidden"
})

play.addEventListener("click", function(){
    video.play();
    play.classList.add("switch")
    pause.classList.remove("switch")
   
})

pause.addEventListener("click", function(){
    video.pause();
    play.classList.remove("switch")
    pause.classList.add("switch")

})