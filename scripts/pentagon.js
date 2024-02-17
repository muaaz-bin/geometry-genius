function calculatePentagonArea() {
    // get pentagon p value 
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText)

    // get pentagon b value 
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText)

    // calculate pentagon area 
    const area = 0.5 * p * b
    console.log('area of the pentagon is:', area);

    // display pentagon area 
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area; 
}

// Get the div element
const penta = document.getElementById('penta');

penta.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

penta.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});