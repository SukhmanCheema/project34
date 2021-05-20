class Ground{

    constructor(x,y){
    
        var options={
       isStatic:true,
       restitution:0.8,
       friction:0.3,
       density:0.9,
    
        }
    this.body=Bodies.rectangle(x,y,700,10,options);
    this.width=600;
    this.height=10;
    World.add(world,this.body);
    }
    display(){
    
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
    
    
    }
    
    
    
    
    
    }