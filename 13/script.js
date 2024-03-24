let line1 = document.getElementById('line1'),
    line2 = document.getElementById('line2'),
    scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function () {
    let pageHeight = document.documentElement.scrollHeight;
        visiblePageHeight = document.documentElement.clientHeight,
        scrollNow = this.window.scrollY,
        scrollHeight = pageHeight - visiblePageHeight,
        lineWidthPercent = scrollNow / scrollHeight * 100;

        line1.style.width = lineWidthPercent + '%';
        line2.style.width = lineWidthPercent + '%';

    if (scrollNow > 1000) {
        scrollToTopBtn.style.opacity = 1;
    } else {
        scrollToTopBtn.style.opacity = 0;
    }

    if (scrollNow < 1000) {
        document.documentElement.style.setProperty('--scrollbar-thumb', '#607d8b')
    } else if (scrollNow < 2000) {
        document.documentElement.style.setProperty('--scrollbar-thumb', '#009688')
    } else if (scrollNow < 3000) {
        document.documentElement.style.setProperty('--scrollbar-thumb', '#4caf50')
    } else {
        document.documentElement.style.setProperty('--scrollbar-thumb', '#8bc34a')
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}