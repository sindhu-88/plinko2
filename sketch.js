const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground;
var divisions = [];
var divisionHeight = 300;
var plinkos1 = [];
var plinkos2 = [];
var plinkos3 = [];
var particles = [];


function setup() {
  var cnv = createCanvas(windowWidth/2,windowHeight);
 console.log(windowHeight);
  //Centering the canvas
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(cnv.width/2,windowHeight,cnv.width,20,"brown");
  
  //Create Divisions
  for(var i=20; i<width; i=i+80){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight,"white"));
  }

  //Create Plinko
  for(var j=20; j<width; j=j+50){
    plinkos1.push(new Plinko(j,cnv.height-600,"white",true));
  }

  for(var j=20; j<width; j=j+50){
    plinkos2.push(new Plinko(j,cnv.height-500,"white",true));
  }

  for(var j=20; j<width; j=j+50){
    plinkos3.push(new Plinko(j,cnv.height-400,"white",true));
  }

  
 
}

function draw() {
  background(56,44,44);  

  Engine.update(myEngine);
  ground.show();
  
  for(var i=0; i<divisions.length; i++){
    divisions[i].show();
  }

  for(var j=0; j<plinkos1.length; j++){
    plinkos1[j].show();
  }

  for(var j=0; j<plinkos2.length; j++){
    plinkos2[j].show();
  }

  for(var j=0; j<plinkos3.length; j++){
    plinkos3[j].show();
  }

  createParticles();
  //text(mouseX +"," + mouseY, mouseX,mouseY);

 
}

function createParticles(){
  if(frameCount % 60 === 0){
      particles.push(new Particle(random(width/2-50,width/2+50),10));
  }

  for(var j=0; j<particles.length; j++){
    particles[j].lifetime = 150;
    particles[j].show();
  }
}