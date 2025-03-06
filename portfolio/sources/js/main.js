document.getElementsByTagName('main')[0].scrollTo(0, 0);

let webCarouselOrder = [
    document.getElementById('web-gmailuno'),
    document.getElementById('web-pictocord'),
    document.getElementById('web-goose'),
    document.getElementById('web-ljhclock'),
    document.getElementById('web-windows'),
    document.getElementById('web-macos'),
];

let gameCarouselOrder = [
    document.getElementById('game-gmailuno'),
    document.getElementById('game-goose'),
    document.getElementById('game-gts6'),
];


function webCarouselForwards() {
    let activeImage = webCarouselOrder.find((e) => e.classList.contains('active'));
    let activeImageIndex = webCarouselOrder.indexOf(activeImage);
    activeImage.classList.remove('active');
    let nextElIndex = activeImageIndex + 1;
    if(nextElIndex > webCarouselOrder.length - 1) nextElIndex = 0;
    webCarouselOrder[nextElIndex].classList.add('active');
    return nextElIndex
}

function webCarouselBackwards() {
    let activeImage = webCarouselOrder.find((e) => e.classList.contains('active'));
    let activeImageIndex = webCarouselOrder.indexOf(activeImage);
    activeImage.classList.remove('active');
    let nextElIndex = activeImageIndex - 1;
    if(nextElIndex < 0) nextElIndex = webCarouselOrder.length - 1;
    webCarouselOrder[nextElIndex].classList.add('active');
    return nextElIndex
}

function gameCarouselForwards() {
    let activeImage = gameCarouselOrder.find((e) => e.classList.contains('active'));
    let activeImageIndex = gameCarouselOrder.indexOf(activeImage);
    activeImage.classList.remove('active');
    let nextElIndex = activeImageIndex + 1;
    if(nextElIndex > gameCarouselOrder.length - 1) nextElIndex = 0;
    gameCarouselOrder[nextElIndex].classList.add('active');
    return nextElIndex
}

function gameCarouselBackwards() {
    let activeImage = gameCarouselOrder.find((e) => e.classList.contains('active'));
    let activeImageIndex = gameCarouselOrder.indexOf(activeImage);
    activeImage.classList.remove('active');
    let nextElIndex = activeImageIndex - 1;
    if(nextElIndex < 0) nextElIndex = gameCarouselOrder.length - 1;
    gameCarouselOrder[nextElIndex].classList.add('active');
    return nextElIndex
}