class Character extends MovableObject{
    height = 280;
    y = 150;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
    }

    jump() {
        console.log('jump');
    }



} // end of class Character