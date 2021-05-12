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
  dog = createSprite(50, 50);
  dog.addImage(dogImg);
  
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  

  drawSprites();
  //add styles here
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  text("Food:" + foodStock, 40, 40);
  textSize(34);
  fill("cyan");
  stroke("white");
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database,ref('/').update({
    food: x
  });
}