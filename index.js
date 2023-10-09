const logo = document.getElementById('logo');
// Si la fenêtre est resize
window.addEventListener('resize', function () {
    if (window.innerWidth < 1000) {
        logo.setAttribute('src', 'images/image-product-mobile.jpg')
    }
    else {
        logo.setAttribute('src', 'images/image-product-desktop.jpg')
    }
});

if (window.innerWidth < 1000) {
    logo.setAttribute('src', 'images/image-product-mobile.jpg')
}
else {
    logo.setAttribute('src', 'images/image-product-desktop.jpg')
}