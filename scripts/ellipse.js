function calculateEllipseArea() {
    // get ellipse a value 
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText)

    // get ellipse b value 
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText)

    // calculate ellipse area 
    const area = 3.1416 * a * b
    console.log('area of the ellipse is:', area);

    // display ellipse area 
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area; 
}

// Get the div element
const elip = document.getElementById('elip');

elip.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink';
});

elip.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});
