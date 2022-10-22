function setup(){
    video = createCapture(VIDEO);
    video.size(250,250);
    canvas = createCanvas(250,250);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("modal loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}