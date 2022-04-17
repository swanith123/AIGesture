noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX= 0;
difference = 0;

function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(1000, 200);
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.position(300, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized.")
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}
function draw(){
    background("cornsilk")
    document.getElementById("square-size").innerHTML = "Width and Height of the Square: " + difference + " pixels";
    fill("aqua");
    stroke("red");
    square(noseX, noseY, difference);

}