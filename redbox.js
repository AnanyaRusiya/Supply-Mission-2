class redBox {
    constructor() {
        this.boxPosition=300;
        this.boxY=610;

        this.leftSprite=createSprite(this.boxPosition,this.boxY,20,100);
        this.leftSprite.shapeColor=color(255,0,0);

        this.boxleftBody=Bodies.rectangle(this.boxPosition+20,this.boxY,20,100,{isStatic:true});
        World.add(world,this.boxleftBody);

        this.boxbaseBody=createSprite(this.boxPosition+100,this.boxY+40,200,20,{isStatic:true});
        this.boxbaseBody.shapeColor=color(255,0,0);

        this.boxbaseBody=Bodies.rectangle(this.boxPosition+100,this.boxY+45-20,200,20,{isStatic:true});
        World.add(world,this.boxbaseBody);

        this.boxrightSprite=createSprite(this.boxPosition+200,this.boxY,20,100,{isStatic:true});
        this.boxrightSprite.shapeColor=color(255,0,0);

        this.boxrightBody=Bodies.rectangle(this.boxPosition+200-20,this.boxY,20,100,{isStatic:true});
        World.add(world,this.boxrightBody);

        }
    display() {
        var posleft = this.boxleftBody.position;
        var posbase = this.boxbaseBody.position;
        var posright = this.boxrightBody.position;
    }
}