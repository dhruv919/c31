class Particles{
	constructor(x,y,r)
	{
		var options={
			isStatic: false,
            restitution: 0.4,
            density: 0.8,
            friction: 1
        }
		
		this.r=r
        this.body=Bodies.circle(x,y,r, options)
        this.color = color(random(20,255),random(20,255),random(20,255));
		World.add(world, this.body);

	}
	display()
	{
			
            var pos = this.body.position;
            var angle = this.body.angle;	

			push()
            translate(pos.x,pos.y);
            noStroke();
            fill(this.color)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r,this.r);
			pop()
			
	}

}