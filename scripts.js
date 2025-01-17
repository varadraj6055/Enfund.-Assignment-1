// Toggle the visibility of the left menu
function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
}

// Adjust page width based on screen size
function adjustPageWidth() {
    const width = window.innerWidth;
    const page = document.body;
    if (width >= 992 && width <= 1600) {
        page.style.transform = 'scale(0.9)';
        page.style.transformOrigin = 'top left';
    } else if (width >= 700 && width <= 767) {
        page.style.transform = 'scale(0.8)';
        page.style.transformOrigin = 'top left';
    } else if (width >= 600 && width < 700) {
        page.style.transform = 'scale(0.75)';
        page.style.transformOrigin = 'top left';
    } else if (width <= 600) {
        page.style.transform = 'scale(0.5)';
        page.style.transformOrigin = 'top left';
    } else {
        page.style.transform = 'scale(1)';
        page.style.transformOrigin = 'top left';
    }
}

window.onresize = adjustPageWidth;
window.onload = adjustPageWidth;
