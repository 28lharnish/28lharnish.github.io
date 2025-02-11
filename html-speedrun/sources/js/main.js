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

function newWindow(window) {
    if(window === 'finder') {
        finder = document.createElement('div');
        finder.classList.add('find-win');
        finder.id = `win${winNum}`

        titleBar = finder.appendChild(document.createElement('div'));
        titleBar.classList.add('find-top');

        titleBtns = titleBar.appendChild(document.createElement('div'));
        titleBtns.classList.add('find-top-btns');
        
        btnClose = titleBtns.appendChild(document.createElement('button'));
        btnCloseIcon = document.createElement('div');
        btnCloseIcon.classList.add('find-top-btns-icon')
        btnMin = titleBtns.appendChild(document.createElement('button'));
        btnMinIcon = document.createElement('div');
        btnMinIcon.classList.add('find-top-btns-icon')
        btnMax = titleBtns.appendChild(document.createElement('button'));
        btnMaxIcon = document.createElement('div');
        btnMaxIcon.classList.add('find-top-btns-icon');
        
        btnClose.appendChild(btnCloseIcon);
        btnMin.appendChild(btnMinIcon);
        btnMax.appendChild(btnMaxIcon);
        btnClose.setAttribute('onclick', 'this.parentElement.parentElement.parentElement.remove()')

        document.body.appendChild(finder)
        dragElement(finder);
        winNum++;
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