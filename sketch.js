const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var bgImg,engine,world;
var gameState="attach";

function preload(){
bgImg=loadImage("bg.png");
}
function setup(){

   var canvas= createCanvas(1300,650);

engine= Engine.create();
world= engine.world;

ground1= new Ground(650,500,300,20);
ground2= new Ground(1000,350,300,20);

block1= new Block(650,470,40,60,"chartreuse");
block2= new Block(610,470,40,60,"chartreuse");
block3= new Block(570,470,40,60,"chartreuse");
block4= new Block(530,470,40,60,"chartreuse");
block5= new Block(690,470,40,60,"chartreuse");
block6= new Block(730,470,40,60,"chartreuse");
block7= new Block(770,470,40,60,"chartreuse");

block8=  new Block(650,410,40,60,"yellow");
block9=  new Block(610,410,40,60,"yellow");
block10= new Block(570,410,40,60,"yellow");
block11= new Block(690,410,40,60,"yellow");
block12= new Block(730,410,40,60,"yellow");

block13=  new Block(650,350,40,60,"orange");
block14=  new Block(610,350,40,60,"orange");
block15=  new Block(690,350,40,60,"orange");

block16=  new Block(650,290,40,60,"crimson");

block17= new Block(1000,320,40,60,"violet");
block18= new Block(960,320,40,60,"violet");
block19= new Block(920,320,40,60,"violet");
block20= new Block(880,320,40,60,"violet");
block21= new Block(1040,320,40,60,"violet");
block22= new Block(1080,320,40,60,"violet");
block23= new Block(1120,320,40,60,"violet");

block28= new Block(1000,260,40,60,"indigo");
block24= new Block(1040,260,40,60,"indigo");
block25= new Block(1080,260,40,60,"indigo");
block26= new Block(960,260,40,60,"indigo");
block27= new Block(920,260,40,60,"indigo");

block29= new Block(1000,200,40,60,"blue");
block30= new Block(960,200,40,60,"blue");
block31= new Block(1040,200,40,60,"blue");

block32= new Block(1000,140,40,60,"chartreuse");

polygon= new Polygon(150,400,50);

launcher= new SlingShot(polygon.body,{x:130, y:380})

ground3= new Ground(150,600,300,100);

Engine.run(engine);

}
function draw(){

    background(bgImg);

    Engine.update(engine);

ground1.display();
ground2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();

polygon.display();
ground3.display();
launcher.display();



}
function mouseDragged(){
    if(gameState !="fly" ){
       Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
   }
   }
   function mouseReleased(){
       launcher.launch();
       gameState="fly";
   }
   function keyPressed(){
       if(keyCode === 32){
           Matter.Body.setPosition(polygon.body, {x:150, y:400})
           launcher.attach(polygon.body);
           gameState="attach";
       }
   }