
let numberOfKeys=document.querySelectorAll(".piano").length;

//detecting button press

for(let i=0;i<numberOfKeys;i++)
{
   let char= document.querySelectorAll(".piano .character")[i].innerText;
   document.querySelectorAll(".piano")[i].addEventListener("click",()=>{
        makeSound(char);
   })
}


//detecting keyboard press

document.addEventListener("keydown", (event)=> {
    makeSound(event.key);
})


function makeSound(key) {

    key=key.toLowerCase();
    switch (key) {
        case "w":
            let audio_1 = new Audio("./sounds/sound_1.wav");
            audio_1.play();
            break;

        case "a":
            let audio_2 = new Audio("./sounds/sound_2.wav");
            audio_2.play();
            break;

        case "s":
            let audio_3 = new Audio("./sounds/sound_3.wav");
            audio_3.play();
            break;

        case "d":
            let audio_4 = new Audio("./sounds/sound_4.wav");
            audio_4.play();
            break;

        case "j":
            let audio_5 = new Audio("./sounds/sound_5.wav");
            audio_5.play();
            break;

        case "k":

            let audio_6 = new Audio("./sounds/sound_6.wav");
            audio_6.play();
            break;


        default:
            console.log(key);
    }
}