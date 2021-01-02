class Rope{
    constructor(bodyA, pointB, offsetX, offsetY){

this.offsetX=offsetX;
this.offsetY=offsetY;

        var options = {
bodyA: body1,
pointB: body2,
pointB:{x:this.offsetX,y:offsetY},
lenght:200,

        }
        this.rope= Constraint.create(options)
    World.add(world,this.rope)
    this.bodyA= body1
    this.body = body2
    }
display(){
    
    var pointA = this.bodyA.position
    var pointB = this.bodyB.position
    strokeWeight(9)

    var anchor2x = pointB.x + this.offsetX;
    var anchor2y = pointB.y + this.offsetY;
    line(pointA.x, pointA.y, anchor2x, anchor2y)
    
}
}