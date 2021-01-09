class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.sling= Matter.Constraint.create(options);
        this.pointB=pointB;
         
         this.sling1= loadImage("sling1.png");
         this.sling2= loadImage("sling2.png");
         this.sling3= loadImage("sling3.png");

        World.add(world,this.sling);
    }
    display(){

      imageMode(CENTER);
      image(this.sling1,150,450);
      image(this.sling2,125,420);

      stroke("black");

      if(this.sling.bodyA){

       var Pa= this.sling.bodyA.position;
       var Pb= this.pointB;

   
       push();
       
       stroke(48,22,8);
       if(Pa.x<250){
       strokeWeight(7);
       line(Pa.x-20,Pa.y,Pb.x-10,Pb.y);
       line(Pa.x-20,Pa.y,Pb.x+30,Pb.y-10);
       image(this.sling3,Pa.x-30,Pa.y-10,15,30);
       }
       else{
           strokeWeight(4);
       line(Pa.x+25,Pa.y,Pb.x-10,Pb.y);
       line(Pa.x+25,Pa.y,Pb.x+30,Pb.y-10);
       image(this.sling3,Pa.x+25,Pa.y-10,15,30);
       }
       pop();
    }
    }
    launch(){
        this.sling.bodyA= null;
        }
    attach(body){
        this.sling.bodyA= body;
         }
}