
let field = document.getElementById('scroller');
let leftPos = 0;
let left = document.getElementById("left");
let right = document.getElementById("right");
left.addEventListener('click', () => {
    if (leftPos == 0) {
        leftPos = -1500;
    } else {
        leftPos += 500;
    }
    field.style.left = `${leftPos}px`;
})

right.addEventListener('click', () => {
    if (leftPos == -1500) {
        leftPos = 0;
    } else {
        leftPos -= 500;
    }
    field.style.left = `${leftPos}px`;
})

