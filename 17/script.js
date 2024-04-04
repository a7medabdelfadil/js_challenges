const   btns = document.querySelectorAll('.btn'),
        options = document.querySelectorAll('.option');

btns.forEach( (btn, btnIndex) => {  // 1
    btn.addEventListener('click', () => {
        options.forEach( (option, optionIndex) => {
            option.style.left = btnIndex === optionIndex ? '0' : '200%';
        })
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
    })
})