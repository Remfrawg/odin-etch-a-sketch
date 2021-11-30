//create 256 divs to put in the grid
var container = document.getElementById("divContainer");
 container.style.display = "flex";
 container.style.flexWrap = "wrap";
 container.style.width = "500px";
 container.style.height = "500px";
 container.style.flexShrink="0";
 //container.style.flex="auto";
//console.log(container.isConnected);
//console.log("javascript is running");
var gridSize =16;
function createGrid(gridSize=16){
for (let i = 0; i<(gridSize**2); i++){
    console.log("creating new div");
    var newDiv = document.createElement('div');
    newDiv.classList.add("grid");
    // newDiv.style.display="flex";
    newDiv.style.width = `${500/gridSize}px`;
    newDiv.style.minHeight = `${500/gridSize}px`;
    newDiv.style.backgroundColor="white";
    container.appendChild(newDiv);
}
addListen();
}
function addListen(){
var boxes = document.querySelectorAll(".grid");
console.log("boxes: "+ typeof(boxes));
boxes.forEach((box)=>{
    box.addEventListener('mouseover', ()=>{
        console.log("changing to black");
        box.style.backgroundColor="#333333";

    });
});
//resetListen();
}

const resetButton = document.getElementById("reset");
//function resetListen(){
//console.log(resetButton);
resetButton.addEventListener('click', ()=>{
    let newGridSize = prompt("How large of a grid would you like?");
    for(let i=0; i<gridSize**2; i++){
    container.removeChild(container.firstChild);
    }
    gridSize=newGridSize;
    createGrid(gridSize);
});

//}

