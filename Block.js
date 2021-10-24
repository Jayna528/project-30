class BlockLayer1 extends BaseClass{
    constructor(x,y,width, height){
      super(x, y, width, height);
      var options = {
        'restitution':0.8,
        'friction':.3,
        'density':1.8
    }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
       
        pop();
        
      }
    }
  }
