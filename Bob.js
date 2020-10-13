class Bob {
    constructor(x,y,r){
        var options={
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.r = r
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}