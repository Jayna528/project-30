const World1= Matter.World;
const Constraint = Matter.Constraint;

class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 13
        }

        this.sling = Constraint.create(options);
        World1.add(world,this.sling);
        
    }
    display(){
        if(this.sling.bodyA !== null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    
}