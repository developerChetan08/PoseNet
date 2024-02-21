//let sha_img;
let capture;

function setup(){
    createCanvas(800,500)
    //sha_img = loadImage('images/sharukh.jpg')
    capture = createCapture(VIDEO)
    capture.hide()
}

function draw(){
    //Images & Videos(wabcam)
    //image(sha_img,100,100,100,100)
    //image(sha_img,mouseX,mouseY,100,100)
    image(capture,0,0,800,800)
}