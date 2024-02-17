function calculateRhombusArea() {
    // get rhombus base 1 value 
    const rhombusBase1Input = document.getElementById('rhombus-base1');
    const rhombusBase1Text = rhombusBase1Input.value;
    const base1 = parseFloat(rhombusBase1Text)

    // get rhombus base 2 value 
    const rhombusBase2Input = document.getElementById('rhombus-base2');
    const rhombusBase2Text = rhombusBase2Input.value;
    const base2 = parseFloat(rhombusBase2Text)

    // calculate rhombus area 
    const area = 0.5 * base1 * base2 
    console.log('area of the rhombus is:', area);

    // display rhombus area 
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area; 
}

// Get the div element
const rho = document.getElementById('rho');

rho.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

rho.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});