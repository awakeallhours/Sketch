//Global variables

let selected = ''
let pixelSize = 0;



//End of Variables *******************************************************

//Elements

const container = document.querySelector('#container');  
const canvas = document.createElement('div');
const resizeButton = document.createElement('button');
resizeButton.classList.add('resize');
resizeButton.textContent = 'Resize Grid';
resizeButton.addEventListener('click', () => {Resize()});
container.appendChild(resizeButton);
canvas.classList.add('canvas');
container.appendChild(canvas);

//End of Elements  ******************************************************** 

//Functions

function Resize()
{
    let newSize = prompt("What size would you like the grid to be? (Max 100)");
    if(newSize  <= 0 || newSize > 100) {
        alert("Please enter a valid size between 1 and 100");
    }
    else {
        const grid = document.querySelectorAll('.row');
        grid.forEach((row) => {
        canvas.removeChild(row);
        })
        createSquareGrid(newSize);
        watch();
    }
}

function createSquareGrid(size) {
    pixelSize = document.querySelector('.canvas').clientWidth / size ;
    pixelSize = Math.round(pixelSize);
    console.log(pixelSize);

    for(let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    
    

    for(let j = 0; j < size; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.width = pixelSize + 'px';
        column.style.height = pixelSize + 'px';
        row.appendChild(column);
        
    }
    canvas.appendChild(row);
    }
}

function watch(){
    const watcher = document.querySelectorAll('.column');
    watcher.forEach((col) => {
        col.addEventListener('mouseover', () => {colorChange(col)})
        selected = col;
        
    })
}

function colorChange(selected)  {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    selected.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//End of Functions  ********************************************************



createSquareGrid(9);
watch();
