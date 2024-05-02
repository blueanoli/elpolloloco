class Level {
    enemies;
    clouds;
    backgroundObjects;
    statusbar;
    bottleBar;
    coinBar;
    level_end_x = 3600;

    constructor(enemies, clouds, backgroundObjects, statusbar, bottleBar, coinBar) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.statusbar = statusbar;
        this.bottleBar = bottleBar;
        this.coinBar = coinBar;
    }

} // end of class Level