class BottleBar extends StatusBar{

    percentage = 100;

    constructor(){
        super();
        this.IMAGES_BOTTLE = [
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
        ];
        this.setPercentage(0);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 5;
        this.y = 25;
    }

} // end of class BottleBar