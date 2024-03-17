let width = document.getElementById('width')
let blur = document.getElementById('blur')
let color = document.getElementById('color')

console.log(width.value)
console.log(blur.value)
console.log(color.value)

width.addEventListener('input', function () {
    const root = document.documentElement;
    root.style.setProperty('--width', `${this.value}%`)
});

blur.addEventListener('input', function () {
    const root = document.documentElement;
    root.style.setProperty('--blur', `${this.value / 10}px`)
});

color.addEventListener('input', function () {
    const root = document.documentElement;
    root.style.setProperty('--main-color', `${this.value}`)
});
