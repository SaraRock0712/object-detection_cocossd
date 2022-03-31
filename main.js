var img = "";
status = "";
objects=[];
function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(300, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting objects";
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error)
    {
        console.log(error);
    }

    console.log(results);
    objects= results;
}

function draw(){
    image(img ,0 ,0 ,640, 420);

if(status != "")
{
    for(i=0; i<objects.length; i++)
    {
        document.getElementById("status").innerHTML = "status: OBJECT DETECTED!!";
        fill('#301934');
        percent= floor(objects[i].confidence*100);
    noFill();
    text(objects[i].label+ " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    stroke("#301934");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

}

