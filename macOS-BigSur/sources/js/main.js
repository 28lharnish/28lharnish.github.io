const buttonError = 'Sorry, this item does not have a function yet.';

function setMagnify(low = 1, high = 1.2, lowdistance = -5, highdistance = -25) {
    const root = document.documentElement;

    if (low > high) {
        [low, high] = [high, low];
    }
    
    if (lowdistance < highdistance) {
        [lowdistance, highdistance] = [highdistance, lowdistance];
    }

    root.style.setProperty('--base-magnify-scale', low);
    root.style.setProperty('--sibling-magnify-scale', (low + high) / 2);
    root.style.setProperty('--full-magnify-scale', high);

    root.style.setProperty('--base-magnify-distance', lowdistance + 'px');
    root.style.setProperty('--sibling-magnify-distance', ((lowdistance + highdistance) / 2) + 'px');
    root.style.setProperty('--full-magnify-distance', highdistance + 'px');
}

setMagnify(1, 1.2, -5, -25);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.children[0].onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function openWindow(window) {
    window.style.transform = 'scale(0)';
    window.style.display = 'block';
    setTimeout(() => { window.style.transform = 'scale(1)'; }, 100);
}

let winNum = 0;

function openLink(param) {
    if(param != '') window.open(param, '_blank').focus();
}

function darkMode(btn) {
    if(document.body.classList.contains("dark")) {
        document.body.classList.remove('dark');
        btn.innerText = 'Try Dark Mode';
    } else {
        document.body.classList.add('dark');
        btn.innerText = 'Try Light Mode';
    }
}

function monterey(btn) {
    if(document.body.classList.contains("monterey")) {
        document.body.classList.remove('monterey');
        btn.innerText = 'Try Monterey BGs';
    } else {
        document.body.classList.add('monterey');
        btn.innerText = 'Try Big Sur BGs';
    }
}

function showApple() {
    let cc = document.getElementById('appleMenu');
    if(cc.classList.contains('open')) {
        cc.classList.remove('open');
    } else {
        cc.classList.add('open');
    }
}

function showControl() {
    let cc = document.getElementById('controlCenter');
    if(cc.classList.contains('open')) {
        cc.classList.remove('open');
    } else {
        cc.classList.add('open');
    }
}

function browseURL(event, input) {
    if(event.keyCode == 13) { 
        if(input.value == 'www.google.com'){
            input.parentElement.parentElement.querySelector('iframe').src = 'https://www.google.com/webhp?igu=1'
        }
        input.parentElement.parentElement.querySelector('iframe').src = input.value;
    }
}

function launchpad() {
    const launchpad = document.getElementById('launchpad');
    const icons = Array.from(document.querySelectorAll('button.launchpadApp'));

    if(launchpad.classList.contains('open')) {
        for(let i=0;i<icons.length;i++) {
            setTimeout(() => {
                icons[i].classList.remove('visible');

                if(i == icons.length - 1) {
                    setTimeout(() => {
                        launchpad.classList.remove('open');
                    }, 0);
                }
            }, i * 50);

        }

    } else {
        launchpad.classList.add('open');
        for(let i=0;i<icons.length;i++) {
            setTimeout(() => {
                icons[i].classList.add('visible');
            }, i * 50);
        }
    }
}

