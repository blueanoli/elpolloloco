class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    level_music = new Audio('audio/elpolloloco.wav');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level_music.volume = 0.015;
        this.level_music.loop = true;
        //this.level_music.play();
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 250);
    }

    checkThrowObjects() {
        let bottle = new ThrowableObject(this.character.x + 35, this.character.y + 115);
        if (this.keyboard.D) {
            this.throwableObjects.push(bottle);
            this.keyboard.D = false;
        }
    }

    checkCollisions() {
        for (let i = this.level.enemies.length - 1; i >= 0; i--) {
            let e = this.level.enemies[i];

            if (!e.isDead && this.character.isStompboxColliding(e)) { // ------------ NEED HELP!!!
                e.chickenStomped();
                console.log('chicken stomped by character');
                setTimeout(() => {
                    this.level.enemies.splice(i, 1);
                }, 500);
                continue;
            }

            if (!e.isDead && this.character.isColliding(e)) {
                this.character.hit();
                console.log('hit by enemy', this.character.energy);
                this.statusBar.setPercentage(this.character.energy);
            }
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        // ----------- SPACE FOR FIXED OBJECTS ----------------
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });

    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawStompBox(this.ctx);
        mo.drawCharacterHitBox(this.ctx);
        mo.drawBottleBox(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

} // end of class World