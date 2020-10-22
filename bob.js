class Bob{
    constructor(x,y,radius){
    
    var options={
    isStatic:false}
    
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body)}}