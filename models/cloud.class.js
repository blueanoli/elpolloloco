class Cloud extends MovableObject {
    y = 20;
    width = 600;
    height = 450;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
    }


} // end of class Cloud