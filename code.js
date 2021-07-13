let textInput = document.getElementById("textinput");
let size = document.getElementById("size");
let xInput = document.getElementById("xinput");
let yInput = document.getElementById("yinput");
let mainCanvas = document.getElementById("maincanvas");
let mainCTX = mainCanvas.getContext("2d");

function textInputChanged(){
    mainCTX.fillStyle = "#FFFFFF";
    mainCTX.fillRect(0, 0, mainCanvas.width, mainCanvas.width);
    mainCTX.fillStyle = "#000000";
    let angle = 0;
    let lastC = {x: mainCanvas.width*xInput.value/100, y: mainCanvas.width*yInput.value/100};
    for (let i=0; i<textInput.value.length; i++) {
        let number = 48;
        if (textInput.value.charAt(i) != " ") {
            number = textInput.value.charCodeAt(i)-96;
        }
        if (textInput.value.charAt(i) == "/") {
            number = 96;
        }
        let targetAngle = angle+(number*Math.PI/4);
        let angleDifference = targetAngle - angle;
        let speed = 3;
        while (angle < targetAngle) {
            speed++;
            angle += angleDifference*10/size.value/speed;
            lastC.x += Math.cos(angle);
            lastC.y += Math.sin(angle);
            mainCTX.fillRect(lastC.x, lastC.y, 1, 1);
        }
    }
}
textInput.addEventListener("input", textInputChanged);
size.addEventListener("input", textInputChanged);
xInput.addEventListener("input", textInputChanged);
yInput.addEventListener("input", textInputChanged);