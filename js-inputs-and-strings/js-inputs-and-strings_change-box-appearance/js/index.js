console.clear();

let box = document.querySelector('[data-js="box"]')
let colorInput = document.querySelector('[data-js="input-color"]')
let borderRadiusInput = document.querySelector('[data-js="input-radius"]')
let rotationInput = document.querySelector('[data-js="input-rotation"]')

colorInput.addEventListener("input", () => {
    let color = colorInput.value;
    box.style.backgroundColor = `hsl(${color}, 80%, 30%)`  
})

borderRadiusInput.addEventListener("input", () => {
    let radius = borderRadiusInput.value;
    box.style.borderRadius = `${radius}px`  
})

rotationInput.addEventListener("input", () => {
    let rotation = rotationInput.value;
    box.style.transform = `rotate(${rotation}deg)`  
})