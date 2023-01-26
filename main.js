var nx=0;
var ny=0;
var cx=0;
var cy=0;
function preload(){
    chifre=loadImage('https://i.postimg.cc/sxLFR06h/filtro.png');
    nariz=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.position(500, 225);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 500, 400);
    //fill(255, 0, 10);
    //stroke(255, 0, 20);
   // circle(nx, ny, 40);
   image(nariz, nx, ny, 60, 45);
   image(chifre, cx, cy, 250, 250);
}

function takeSnapshot(){
    save("FiltroNatal.png");
}

function modelLoaded(){
    console.log("C+N");
    console.log("Modelo Carregado com Sucesso");
}

function gotPoses(results){
    console.log(results);
    if(results.length>0){
        nx=results[0].pose.nose.x-30;
        ny=results[0].pose.nose.y-20;
        console.log(nx,ny);
        cx=results[0].pose.nose.x-130;
        cy=results[0].pose.nose.y-325;

    }
}
