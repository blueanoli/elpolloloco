class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.2;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 120;
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
  
    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 28;
    }

    isColliding(mo) {
        if (mo.isDead) { 
            return false;
        }
        if (this instanceof Character) {
            return (this.x + 20 + this.width - 50) > mo.x &&
                   (this.y + 90 + this.height - 100) > mo.y &&
                   (this.x + 20) < (mo.x + mo.width) &&
                   (this.y + 90) < (mo.y + mo.height);
        } else {
            return this.x + this.width > mo.x &&
                   this.y + this.height > mo.y &&
                   this.x < mo.x &&
                   this.y < mo.y + mo.height;
        }
    }

    isStompboxColliding(mo) { // ----------------------------- NEED HELP!!! tried this.y between 280 and 320, nothing works
        let characterStompBottom = this.y + 280 + (this.height - 320);
        let withinHorizontalBounds = (this.x -15 < mo.x + mo.width) && (this.x + this.width + 30 > mo.x);
        let stomping = characterStompBottom >= mo.y && characterStompBottom <= mo.y + mo.height;
        return withinHorizontalBounds && stomping;
      
    }
    
    hit() {
        let currentTime = new Date().getTime();
        let timeSinceLastHit = (currentTime - this.lastHit) / 1000; 
    
        if (timeSinceLastHit > 1.5) { 
            this.energy -= 20;
            if (this.energy <= 0) {
                this.energy = 0;
            }
            this.lastHit = currentTime; 
        }
    }

    isDead() {
        return this.energy === 0;
    }

    isHurt() {
        let currentTime = new Date().getTime();
        let timePassed = (currentTime - this.lastHit) / 1000; 
        return timePassed < 1.5; 
    }
    

} // end of class MovableObject