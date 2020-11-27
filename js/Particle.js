class Particle {
    constructor(x,y){
        var options = {
            restitution : 0.4
        }

        this.xPos = x;
        this.yPos = y;
        this.radius = 10;
        this.color =  color(random(0,255),random(0,255),random(0,255));

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