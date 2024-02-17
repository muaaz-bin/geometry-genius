function calculateRectangleArea() {
    // get Rectangle base value 
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)

    // get rectangle length value 
    const rectanglelengthInput = document.getElementById('rectangle-length');
    const rectanglelengthText = rectanglelengthInput.value;
    const length = parseFloat(rectanglelengthText)

    // calculate rectangle area 
    const area = width * length
    console.log('area of the rectangle is:', area);

    // display rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area; 
}

// Get the div element
const rec = document.getElementById('rec');

rec.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

rec.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});