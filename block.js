class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)
        this.Visibility = 255;

    }
    display()  {
        
        
        if(this.body.speed<3){
            var angle = this.body.angle;
            var pos = this.body.position;
        
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER)
            fill(171,247,247)
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.visibility - 5
            tint(255,this.Visibility);
            rect(999,999, this.width, this.height);
            pop();
        }

    }
}