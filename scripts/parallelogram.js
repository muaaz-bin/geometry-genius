function calculateParallelogramArea() {
    // get parallelogram base value 
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText)

    // get parallelogram height value 
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText)

    // calculate parallelogram area 
    const area = base * height
    console.log('area of the parallelogram is:', area);

    // display parallelogram area 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area; 
}

// Get the div element
const pera = document.getElementById('pera');

pera.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

pera.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});