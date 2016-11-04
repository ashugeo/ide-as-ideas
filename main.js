var w = 20;
var h = 17.4;

function setup() {
    createCanvas(700, 700);
    strokeWeight(0);
    fill(0);
    frameRate(0.5);
}

function draw() {
    background('#EEE');
    translate(65, 72);

    fill('rgb(132,154,118)');
    for (var i=0; i<3; i++) {
        for (var j=1; j<=4; j++) {
            if (j % 2 == 0 && Math.random() > 0.2) {
                triangle(i*w*8,j*h*8,(i*w+w/2)*8,(j-1)*h*8,(i+1)*w*8,j*h*8);
            } else if (j % 2 != 0 && Math.random() > 0.2) {
                triangle((i*w+w/2)*8,j*h*8,(i*w+w)*8,(j-1)*h*8,((i+1)*w+w/2)*8,j*h*8);
            }
        }
    }

    fill('rgba(106,80,0,0.6)');
    for (var i=0; i<7; i++) {
        for (var j=1; j<=8; j++) {
            if (j % 2 == 0 && Math.random() > 0.5) {
                triangle(i*w*4,j*h*4,(i*w+w/2)*4,(j-1)*h*4,(i+1)*w*4,j*h*4);
            } else if (j % 2 != 0 && Math.random() > 0.5 && i < 6) {
                triangle((i*w+w/2)*4,j*h*4,(i*w+w)*4,(j-1)*h*4,((i+1)*w+w/2)*4,j*h*4);
            }
        }
    }

    fill('rgba(0,0,0,0.8)');
    for (var i=0; i<14; i++) {
        for (var j=1; j<=16; j++) {
            if (j % 2 == 0 && Math.random() > 0.5) {
                triangle(i*w*2,j*h*2,(i*w+w/2)*2,(j-1)*h*2,(i+1)*w*2,j*h*2);
            } else if (j % 2 != 0 && Math.random() > 0.5 && i<13) {
                triangle((i*w+w/2)*2,j*h*2,(i*w+w)*2,(j-1)*h*2,((i+1)*w+w/2)*2,j*h*2);
            }
        }
    }

    fill('rgba(0,0,0,0.3)');
    for (var i=0; i<28; i++) {
        for (var j=1; j<=32; j++) {
            if (j % 2 == 0 && Math.random() > 0.5) {
                triangle(i*w,j*h,i*w+w/2,(j-1)*h,(i+1)*w,j*h);
            } else if (j % 2 != 0 && Math.random() > 0.5 && i < 27) {
                triangle(i*w+w/2,j*h,i*w+w,(j-1)*h,(i+1)*w+w/2,j*h);
            }
        }
    }

}
