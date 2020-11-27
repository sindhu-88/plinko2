class Ground{
    constructor(x,y,w,h,color){
        var options = {
            isStatic : true
        }

        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.body = Bodies.rectangle(this.xPos,this.yPos,this.width,this.height,options);
        World.add(myWorld,this.body);
    }

    show(){
        var pos = this.body.position;
        
        push();
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}