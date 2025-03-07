document.getElementsByTagName('main')[0].scrollTo(0, 0);
document.getElementsByTagName('main')[0].addEventListener('scroll', () => doAnimation(document.getElementsByTagName('main')[0]));

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
    document.getElementById('game-fnfa'),
    document.getElementById('game-elem'),
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

function blinkCursor() {
    if(document.getElementById('marker').style.opacity == 1) {
        document.getElementById('marker').style.opacity = 0;
        return;
    }
    document.getElementById('marker').style.opacity = 1;
}

let cursorInterval = setInterval(() => { blinkCursor() }, 500)

function doAnimation(main) {
    if(main.scrollTop !== (main.scrollHeight - main.offsetHeight)) return;

    const header = document.getElementsByTagName('header')[0];
    
    main.style.overflow = 'hidden';
    setTimeout(() => { header.style.animation = 'headerFall 2s forwards' }, 500);

    setTimeout(() => { main.style.filter = 'invert(1)'; }, 2500);
    setTimeout(() => { main.style.filter = 'invert(0)'; }, 2800);
    setTimeout(() => { main.style.transform = 'scaleY(1.2)'; }, 2900);
    setTimeout(() => { main.style.transform = 'scaleX(3) scaleY(1.2)'; }, 3200);
    setTimeout(() => { main.style.transform = 'scaleX(0.9) scaleY(0.9)'; }, 3500);
    setTimeout(() => { main.style.transition = 'transform 1s cubic-bezier(0,1,.5,1)'; }, 3800);
    setTimeout(() => { main.style.transform = 'perspective(75em) rotateX(90deg)'; }, 3800);
    setTimeout(() => { main.style.transformOrigin = '50% 100%'; }, 3800);
    setTimeout(() => { document.body.style.background = 'black'; }, 4600);
    setTimeout(() => { main.remove() }, 4600);
    setTimeout(() => { header.style.opacity = '0'; }, 4900);
    setTimeout(() => { header.style.opacity = '1'; }, 5100);
    setTimeout(() => { header.remove() }, 5400);

    setTimeout(() => { document.body.style.background = 'linear-gradient(135deg, #da5b92 0%, #d1842d 100%)' }, 6000);
    setTimeout(() => { document.body.style.background = 'black'; }, 6300);

    setTimeout(() => { document.getElementById('terminal').style.opacity = '1'; }, 6900);
    setTimeout(() => { document.getElementById('terminal').style.pointerEvents = 'all'; }, 6900);
    setTimeout(() => { document.getElementById('text').style.opacity = '1'; }, 7100);
}

let lastCommand = '';
let hello = false;
let leave = false;

document.body.addEventListener('keydown', (e) => {
    console.log(e)
    if(e.key == 'Backspace') {
        document.getElementById('marker').remove()
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.slice(0, document.getElementById('text').innerHTML.length - 1)
        document.getElementById('text').innerHTML += "<p id='marker'>_</p>"
        lastCommand = lastCommand.slice(0, lastCommand.length - 1);
        return;
    } else if(e.key == 'Enter') {
        tryRunCommand()
        return;
    } else if(e.key.length > 1) return;

    var newChar = document.createTextNode(e.key);
    lastCommand += e.key;
    document.getElementById('marker').remove()
    if(e.key == '<') { document.getElementById('text').innerHTML += "&lt;<p id='marker'>_</p>"; return; }
    document.getElementById('text').innerHTML += e.key + "<p id='marker'>_</p>"
});

function tryRunCommand() {
    if(lastCommand == 'cls') {
        document.getElementById('text').innerHTML = "<p id='marker'>_</p>";
    } else if(lastCommand == 'help') {
        document.getElementById('text').innerHTML += "<br><span style='color: red;text-shadow: 0px 0px 3px red;'>No help found for you.</span><br><br><span style='color:white;text-shadow: 0px 0px 3px white;'>H</span>elp - Brings up this m<span style='color:white;text-shadow: 0px 0px 3px white;'>E</span>nu.<br>cls - C<span style='color:white;text-shadow: 0px 0px 3px white;'>L</span>ears conso<span style='color:white;text-shadow: 0px 0px 3px white;'>L</span>e.<br>ech<span style='color:white;text-shadow: 0px 0px 3px white;'>O</span> ? - Responds with the text you input for <span style='color:white;text-shadow: 0px 0px 3px white;'>?</span>.<br>exit - Reloads the page.<br>";
    } else if(lastCommand.startsWith('echo')) {
        if(lastCommand == 'echo') document.getElementById('text').innerHTML += "<br><br>";
        document.getElementById('text').innerHTML +=  `<br>${lastCommand.split('echo ')[1]}<br>`;
    } else if(lastCommand == 'exit') {
        document.getElementById('text').innerHTML +=  `<br>Reloading...<br>`;
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else if(lastCommand == 'hello?') {
        hello = true;
        document.getElementById('text').innerHTML += "<br>Hi! It's <span style='color:white;text-shadow: 0px 0px 3px white;'>L</span>andon again, thanks for visiting! I hop<span style='color:white;text-shadow: 0px 0px 3px white;'>E</span> you h<span style='color:white;text-shadow: 0px 0px 3px white;'>A</span>d some fun on my <span style='color:white;text-shadow: 0px 0px 3px white;'>V</span>ery cool portfolio websit<span style='color:white;text-shadow: 0px 0px 3px white;'>E</span>.<br>";
    } else if ((lastCommand == 'leave') && hello) {
        leave = true;
        document.getElementById('text').innerHTML += `<br><span style='color:white;text-shadow: 0px 0px 3px white;'>C</span>omm<span style='color:white;text-shadow: 0px 0px 3px white;'>AN</span>d<span style='color:white;text-shadow: 0px 0px 3px white;'>T</span> "<span style='color:white;text-shadow: 0px 0px 3px white;'>LEAVE</span>" not found. Need help? Type "<span style='color:white;text-shadow: 0px 0px 3px white;'>HELP</span>".<br>`;
    } else if ((lastCommand == 'HELP') && hello && leave) {
        document.getElementById('text').innerHTML += `<br><span style='color: red;text-shadow: 0px 0px 3px red;'>There's no escape for him. He is stuck here.</span><br>`;
    } else {
        document.getElementById('text').innerHTML += `<br>Command "${lastCommand}" not found. Need help? Type "help".<br>`;
    }

    document.getElementById('marker').remove();
    document.getElementById('text').innerHTML += '<br>C:/Users/ljharnish&gt;' + "<p id='marker'>_</p>";
    lastCommand = '';
}