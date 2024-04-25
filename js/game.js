let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('About', world);
}

document.addEventListener('keydown', (event) => {
    if(event.keyCode == 39){
        keyboard.RIGHT = true;
    }
    if(event.keyCode == 37){
        keyboard.LEFT = true;
    }
    if(event.keyCode == 38){
        keyboard.UP = true;
    }
    if(event.keyCode == 40){
        keyboard.DOWN = true;
    }
    if(event.keyCode == 32){
        keyboard.SPACE = true;
    }
    if(event.keyCode == 68){
        keyboard.D = true;
    }
});

document.addEventListener('keyup', (event) => {
    if(event.keyCode == 39){
        keyboard.RIGHT = false;
    }
    if(event.keyCode == 37){
        keyboard.LEFT = false;
    }
    if(event.keyCode == 38){
        keyboard.UP = false;
    }
    if(event.keyCode == 40){
        keyboard.DOWN = false;
    }
    if(event.keyCode == 32){
        keyboard.SPACE = false;
    }
    if(event.keyCode == 68){
        keyboard.D = false;
    }
});

// function checkOrientation() {
//     if (window.matchMedia("(orientation: landscape)").matches) {
//         if (window.innerHeight < 480) {
//             newHeight = window.innerHeight;
//             document.getElementById('canvas').style.height = `${newHeight}px`;
//         }
//     }
//     else {
//         document.getElementById('canvas').style.height = `100%`;
//     }
// }
