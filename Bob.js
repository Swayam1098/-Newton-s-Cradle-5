class Bob{
    constructor(x,y,radius){
        var options = {
            restitution:0.9,
            frictionAir:0.0,
            friction:0,
            //slop:1
            inertia:Infinity
        }
this.body = Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(world,this.body)

    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    fill("blue")
     ellipse(0,0,this.radius,this.radius)
    pop();
}
}