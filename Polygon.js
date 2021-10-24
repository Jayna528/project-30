class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("polygon.png");
  }

  display() {
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 50, 50);
  }
}

    