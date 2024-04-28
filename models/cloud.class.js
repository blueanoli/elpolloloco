class Cloud extends MovableObject {
    y = 0;
    width = 600;
    height = 450;

    constructor(path, xPos) {
        super();
        this.loadImage(path);
        this.x = xPos;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 30);
    }


} // end of class Cloud