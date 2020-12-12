class paper
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, r, options);
        this.image = loadImage("Paper.png");
        World.add(world, this.body);
    } 
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        imageMode(CENTER);
        stroke("red");
        fill("red");
        image(this.image, 0, 0, this.r);
        pop();
    }
}