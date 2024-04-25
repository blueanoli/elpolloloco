class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];
    level_music = new Audio('audio/elpolloloco.wav');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level_music.volume = 0.1;
        this.level_music.loop = true;
        this.level_music.play();
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run(){
        setInterval(() => {



            this.checkCollisions();
            this.checkThrowObjects();
        }, 250);
    }

    checkThrowObjects(){
        let bottle = new ThrowableObject(this.character.x + 35, this.character.y + 115);
        if(this.keyboard.D){
            this.throwableObjects.push(bottle);
            this.keyboard.D = false;
        }
    }

    checkCollisions(){
        this.level.enemies.forEach(e => {
            if(this.character.isColliding(e)){
                    this.character.hit();
                    console.log('hit', this.character.energy);
                    this.statusBar.setPercentage(this.character.energy);
                }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // ----------- SPACE FOR FIXED OBJECTS ----------------
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);

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
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection){
           this.flipImageBack(mo);
        }
    }
    
    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width , 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


            // if(character.x + character.width > chicken.x &&
        //     character.y + character.height > chicken.y &&
        //     character.x < chicken.x &&
        //     character.y < chicken.y + chicken.height)

} // end of class World