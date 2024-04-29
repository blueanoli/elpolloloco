class Level {
    enemies;
    clouds;
    backgroundObjects;
    statusbar;
    bottleBar;
    level_end_x = 3600;

    constructor(enemies, clouds, backgroundObjects, statusbar, bottleBar) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.statusbar = statusbar;
        this.bottleBar = bottleBar;
    }

} // end of class Level