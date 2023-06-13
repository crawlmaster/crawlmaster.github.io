let title = document.querySelector('#game-title');

let colorValue = '#000000';

let isMouseDown = false;

function RandomColor(colorValue)
{
    colorValue = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return colorValue;
}

let gridsize = 0;

let r = 0;
let g = 0;
let b = 0;

title.addEventListener('click', function(e){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    e.target.style.color = `rgb(${r}, ${g}, ${b})`;
    console.log(`Changed title color to ${e.target.style.color}.`);
});

let colorPicker = document.getElementById('palette');

colorPicker.addEventListener('click', function(e){
    if (!rainb)
    {
        console.log('Clicked the color palette.');
    }
});

colorPicker.addEventListener('change', function(e){
    if (!rainb)
    {
        colorValue = e.target.value;
    }
})

let rainb = false;

let rainbow = document.querySelector('#rainbow');
rainbow.innerHTML += rainb ? " ON" : " OFF"
rainbow.addEventListener('click', function(e)
{
    rainb = !rainb;
    colorPicker.disabled = rainb;
    if (colorPicker.disabled)
    {
        colorPicker.value = '#f1f1f1';
    }
    else
    {
        colorPicker.value = '#000000';
    }
    if (rainb)
    {
        colorValue = RandomColor(colorValue);
        console.log(colorValue)
    }
    console.log(`Rainbow button has been pressed. Rainbow color status: ${rainb}`);
    e.target.innerHTML = rainb ? "Rainbow ON" : "Rainbow OFF";
});

const div = document.createElement('div');
div.classList.add('square');
filled = false;

gridSlider = document.querySelector('#grid-size');
gridsize = gridSlider.value ** 2;
console.log(gridsize);

gridSlider.addEventListener('change', function(e){
    console.log(e.target.value);
    rangeSize.innerHTML = `${gridSlider.value} x ${gridSlider.value}`;
    gridsize = gridSlider.value ** 2;
    if(filled)
    {
        const willDeleteSquare = document.querySelectorAll('.square');
        willDeleteSquare.forEach(function (div){
            grid.removeChild(div);
        });
        filled = !filled;
    }
    if(!filled)
    {
        for(i = 1; i <= gridsize; i++)
        {
            const div = document.createElement('div');
            div.style.background = 'whitesmoke';
            div.style.width = `${720 / gridSlider.value}px`;
            div.style.height = `${720 / gridSlider.value}px`;
            /*div.style.border = '0.3px solid black';*/
            div.classList.add('square');
            grid.appendChild(div);
        }
        // grid.addEventListener('mousedown', function(e){
        //     if (e.target.classList.contains('square')) {
        //         console.log('clicked me');
        //         colorValue = RandomColor(colorValue);
        //         e.target.style.background = colorValue;
        //     }
        // });
        const squares = document.querySelectorAll('.square');
        
        const reset = document.getElementById('reset');
        reset.addEventListener('click', function(){
            squares.forEach(function(square) {
                square.style.backgroundColor = 'whitesmoke'; // Change the background color to white
              });
        })

        squares.forEach(function(square) {
        square.addEventListener('mousedown', function() {
            isMouseDown = true;
            square.style.backgroundColor = colorValue;
            if (rainb)
            {
                colorValue = RandomColor(colorValue);
            }
        });

        square.addEventListener('mouseup', function() {
            isMouseDown = false;
        });

        square.addEventListener('mouseover', function() {
            if (isMouseDown) {
            square.style.backgroundColor = colorValue;
            if (rainb)
            {
                colorValue = RandomColor(colorValue);
            }
            }
        });
    });

    filled = !filled;
    }
    console.log(gridsize);
});

grid = document.querySelector('.playarea');

rangeSize = document.querySelector('#grid-out')
rangeSize.innerHTML = `${gridSlider.value} x ${gridSlider.value}`;
// if (filled)
// {
    
// }
