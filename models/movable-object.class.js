class MovableObject {
    x = 120;
    y = 270;
    height = 150;
    width = 100;
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('move right');
    }

    moveLeft() {
        console.log('move left');
    }


} // end of class MovableObject