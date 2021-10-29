class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
  shoot(){
    var na=cannon.angle-28
      na=na*(3.14/180)
      var vel = p5.Vector.fromAngle(na)
      vel.mult(0.5)
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:vel.x*(180/3.14),y:vel.y*(180/3.14)})  
}
}

