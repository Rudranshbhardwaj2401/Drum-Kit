var n = document.querySelectorAll(".drum").length;
//for mouse clicks
for (i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ih = this.innerHTML;
        makeSound(ih);
        buttonAnimation(ih);
        })
}
//for keyboard clicks
document.addEventListener("keydown", function(event)
{makeSound(event.key);

    buttonAnimation(event.key);
});




//to call function
function makeSound(x){
    switch (x) {
        case 'w': var mysound = new Audio("./sounds/crash.mp3");
            mysound.play();
            break;
        case 'a': var mysound = new Audio("./sounds/kick-bass.mp3");
            mysound.play();
            break;
        case 's': var mysound = new Audio("./sounds/snare.mp3");
            mysound.play();
            break;
        case 'd': var mysound = new Audio("./sounds/tom-1.mp3");
            mysound.play();
            break;
        case 'j': var mysound = new Audio("./sounds/tom-2.mp3");
            mysound.play();
            break;
        case 'k': var mysound = new Audio("./sounds/tom-3.mp3");
            mysound.play();
            break;
        case 'l': var mysound = new Audio("./sounds/tom-4.mp3");
            mysound.play();
            break;
    }
}

function buttonAnimation(y){

document.querySelector("."+y).classList.add("pressed");
setTimeout( function() {document.querySelector("." + y).classList.remove("pressed");},100);

}