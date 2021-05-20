class Ball{

    constructor(x,y){
    
        var options={
    
       restitution:0.8,
       friction:0.3,
       density:0.9,
    
        }
    this.body=Bodies.rectangle(x,y,80,80,options);
    this.image=loadImage("Superhero-01.png");
    this.image1=loadImage("Monster-02.png");
    this.width=80;
    this.height=80;
    World.add(world,this.body);
    }
    display(){
        
    push();
    var pos=this.body.position;
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(this.body.angle);
    imageMode(RADIUS);
    
    image(this.image,0,0,this.width,this.width);
    image(this.image1,250,0,this.width,this.width);
    pop();
    
    
    }
    
    
    
    
    
    }