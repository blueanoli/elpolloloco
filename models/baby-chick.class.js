class BabyChick extends Chicken {
    height = 40;
    width = 40;
    y = 370;

    IMAGES_WALK = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_small/2_dead/dead.png';

    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 700 + Math.random() * 700;
        this.speed = 0.5 + Math.random() * 0.7;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (!this.isDead) {
                this.moveLeft();
            }
        }, 1000 / 30);
    
        setInterval(() => {
            if (!this.isDead) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 200);
}
}