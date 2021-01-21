class redBox {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body1 = Bodies.rectangle(x, y, width, height, options);
        this.body2 = Bodies.rectangle(x, y, width, height, options);
        this.body3 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);

   }
    display() {
        var pos = this.body1.position;
        var pos = this.body2.position;
        var pos = this.body3.position;
        var angle = this.body1.angle;
        var angle = this.body2.angle;
        var angle = this.body3.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
} 