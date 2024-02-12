function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('cm')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    
    // height
    const triangleHeightInput = document.getElementById('ft')
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleBaseText);

    // area
    const area = 0.5 * base * height
    console.log('ara of the triangle is:', area);

    // display
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


} 