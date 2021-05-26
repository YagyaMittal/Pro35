//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg;

function preload()
{
	//load images here
  happyDog = loadImage("images/happydog.png");
  dogImg = loadImage("images/Dog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 350);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  //add styles here
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    dog.scaleImage = 0.3;
  }
  drawSprites();

  textSize(24);
  fill("cyan");
  stroke("white");
  text("Food: " + foodS, 40, 40);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  });
}
