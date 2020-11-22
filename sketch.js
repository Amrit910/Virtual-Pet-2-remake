var dog;
var database;
var foods,foodstock;
var milk;
var button1, button2;

function preload()
{
  dog = loadImage("dogImg.png");
  happydog = loadImage("dongImg1.png");
}

function setup() {
	createCanvas(500,500);
  
}


function draw() {  
  var backGround();

  drawSprites();
  //add styles here

}

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();

});
feed=createButton("Feed The Dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFood);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Lase Feed: " + lastFed%12 + "PM" , 350,30);
}else if(lastFed==0){
  text("Last fed at 12:00 AM", 350,30);
}else{
  text("Last Feed : " + lastFed + "AM", 350,30)
}



dog.display();
foods.display();
foodstock.display();
happydog.display();
milk.display();


