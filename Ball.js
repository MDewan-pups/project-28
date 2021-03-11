class Ball {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image= loadImage("paper.png");
        
       
        
   }
   display(){
    var pos= this.body.position

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius+30, this.radius+30);
   }
}



  
  