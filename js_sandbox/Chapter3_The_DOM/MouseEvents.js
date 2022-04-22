const clearBtn = document.querySelector('a.clear-tasks.btn.black');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
//Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
clearBtn.addEventListener('mousedown', runEvent);
//Mouseup
clearBtn.addEventListener('mouseup', runEvent);

//Mousenter - will fire off if you enter the specified element ONLY
card.addEventListener('mouseenter', runEvent);
//Mouseleave - will fire off if you leave the specified element ONLY
card.addEventListener('mouseleave', runEvent);
//Mouseover - will fire off if you enter the specified element OR any element within the specified element
card.addEventListener('mouseover', runEvent);
//Mouseout - will fire off if you leave the specified element OR any element within the specified element
card.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);
//Mousemove
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)

    heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}