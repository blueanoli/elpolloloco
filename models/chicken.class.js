class Chicken extends MovableObject {
height = 70;
width = 70;
y = 345;
IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
];
IMAGE_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
chicken_sound = new Audio('audio/chicken.wav');


constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.chicken_sound.volume = 0.02;
    this.animate();
    this.isDead = false;
}

animate() {
    setInterval(() => {
        if (!this.isDead) {
            this.moveLeft();
        }
    }, 1000 / 30);

    setInterval(() => {
        if (!this.isDead) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }, 200);
  

    // setInterval(() => {
    //     if (!this.soundPlaying) { 
    //         this.chicken_sound.play();
    //         this.soundPlaying = true; 
    //         setTimeout(() => {
    //             this.soundPlaying = false; 
    //         }, 2000);
    //     }
    // }, 2000);

}

chickenStomped() {
    this.loadImage(this.IMAGE_DEAD); 
    this.isDead = true;
}

} // end of class Chicken