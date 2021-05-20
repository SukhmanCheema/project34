class Block{

constructor(x,y){

    var options={

   restitution:0.8,
   friction:0.3,
   density:0.9,

    }
this.body=Bodies.rectangle(x,y,20,20,options);
this.width=20;
this.height=20;
World.add(world,this.body);
}
display(){
    
push();
var pos=this.body.position;
translate(pos.x,pos.y);
angleMode(RADIANS);
rotate(this.body.angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();


}





}