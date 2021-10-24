class BlockLayer4 extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood2.png");

      var options = {
        'restitution':0.8,
        'friction':0.3, 
        'density':1.8
    }
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill('lightblue');
      rect(pos.x, pos.y, this.width, this.height);
    }
  };