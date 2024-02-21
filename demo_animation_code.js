function setup(){
    createCanvas(800,500)
}

function getRandomArbitrary(min,max){
    return Math.random() * (max-min) + min;
}

function draw(){
    //background(200);
    // 1. point
    //point(200,200)
    // 2.line
    //line(200,200,300,300)
    // 3.triangle
    //triangle(100,200,300,400,150,450)
    // 4.rectangle
    //rect(500,200,100,100)
    // 5.circle
    //ellipse(600,300,100,100)

    //stroke and color
    // fill(132,100,34)
    // stroke(255,0,0)
    // strokeWeight(5)
    // ellipse(100,200,100,100)
    // ellipse(250,200,100,100)
    // ellipse(400,200,100,100)
    // ellipse(550,200,100,100)
    // ellipse(700,200,100,100)

    r=getRandomArbitrary(0,255)
    g=getRandomArbitrary(0,255)
    b=getRandomArbitrary(0,255)
    fill(r,g,b)
    ellipse(mouseX,mouseY,50,50);

}