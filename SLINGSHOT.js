class Slingshot{

constructor(bodyA,pointB){

    var options={

bodyA:bodyA,
pointB:pointB,
stiffness:1,
length:100,

    }
this.sling=Matter.Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling);

}
display(){

strokeWeight(0);
stroke(255,0,0);
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);




}
}