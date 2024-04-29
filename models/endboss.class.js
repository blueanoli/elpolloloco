class Endboss extends MovableObject {
    y = -55;
    height = 520;
    width = 400;
    leftPoint = 3100;
    rightPoint = 3600;

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    hadFirstContact = false;

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);

        this.x = 3500;
        this.speed = 8;
        this.animate();
    }

    animate() {
        let i = 0;
        let walkingDirection = 'left';
        let characterReachedPosition = false; 
    
        setInterval(() => {
            if (world.character.x > 3000 && !characterReachedPosition) {
                characterReachedPosition = true;
                this.playAnimation(this.IMAGES_ALERT);
                setTimeout(() => {
                    this.moveLeft();
                }, 1000); 
            }
    
            if (characterReachedPosition) {
                if (i < this.IMAGES_ALERT.length) {
                    this.playAnimation(this.IMAGES_ALERT);
                    i++;
                } else {
                    if (walkingDirection === 'left') {
                        if (this.x > this.leftPoint) {
                            this.playAnimation(this.IMAGES_WALKING);
                            this.moveLeft();
                        } else {
                            walkingDirection = 'right';
                        }
                    } else {
                        if (this.x < this.rightPoint) {
                            this.playAnimation(this.IMAGES_WALKING);
                            this.moveRight();
                        } else {
                            walkingDirection = 'left';
                        }
                    }
                }
            }
        }, 100);
    }

} // end of class Endboss