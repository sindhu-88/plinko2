class Plinko {
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }

        this.xPos = x;
        this.yPos = y;
        this.radius = 10;
        this.color =  255;

        this.body = Bodies.circle(this.xPos,this.yPos,this.radius,options);
        World.add(myWorld,this.body);
    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}