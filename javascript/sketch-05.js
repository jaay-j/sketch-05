function setup(){
    createCanvas(1000, 1000);
    background(100, 232, 177);
    angleMode(DEGREES);

    var i = 0;
    while (i < 800) {
    translate(200, 200);
    rotate(50);
    rect(230, 20, 20, 400);
    i++;
    }
}

function draw(){
    fill(0);
    stroke(255);
    rect(mouseX, mouseY, random(60, 120), random(150, 240));
}

translate (400, 300);
rotate(200);
rect(230, 20, 20, 400);


function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-05", "png");
    }
}