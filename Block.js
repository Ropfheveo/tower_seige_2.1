class Block{
  constructor(x, y, width, height) {
      var options = {
         'restitution':0.8,
          'friction' : 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
     /////////// this.image = loadIm,age("block.png");
    }
//   display(){
//  if (this.body.speed<3){
//    var angle =  this.body.angle;
//    //var pos =  this.body.positoin;
//    super.display();
//
//    push();
//    //translate(pos.x,pos.y);
//    rotate(angle);
//    rectMode(CENTER);
//    rect(0,0,this.width,this.height);
//    pop();
//  }
//  else{
//    World.remove(world,this.body);
//    push();
//    this.visiblity = this.visiblity -5;
//    tint(255,this.visiblity)
//    rect(999,999,this.width,this.height);
//    pop();
//  }
//
//
//
display(){
  console.log(this.body.speed < 3)
  if(this.body.speed < 3){
    super.display();
  }
  else{
    //do nothing
    World.remove(world.this.bosy);
    push();
    this.Visiblity = this.Visiblity -5;
    tint(255,this.Visiblity);
    image(this.image.this.position.x,this.position.y);
    pop();
  }
}
}
