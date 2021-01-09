class Block{
    constructor(x,y,width,height,color){
        var options={
            friction: 0.5,
            density: 1,
            restitution: 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.color= color;
        World.add(world,this.body);
    }
    display(){
        var p= this.body.position;
        push();
        var angle= this.body.angle;
        translate(p.x,p.y);
        rotate(angle);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}