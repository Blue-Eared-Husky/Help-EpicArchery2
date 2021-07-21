class PlayerArcher{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x+60,y+60,w,h);
        Matter.Body.setAngle(this.body,-PI/2);
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/playerArcher.png");
    }
    display(){
        push();
        this.pos = this.body.position;
        this.angle = this.body.angle;
        translate(this.pos.x,this.pos.y);
        rotate(this.angle);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}