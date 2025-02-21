const cursorImages = [
    './sources/image/cursors/left_ptr.svg',
    './sources/image/cursors/hand2.svg',
    './sources/image/cursors/X_cursor.svg',
];

function cursorCheck(e) {
    const { clientX, clientY } = e;
    const cursor = document.getElementById('cursor');
    let cursorSource = './sources/image/cursors/left_ptr.svg';

    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;

    switch(e.target.tagName.toLowerCase()) {
        default:
            cursorSource = cursorImages[0];
            break;
        case 'div':
            cursorSource = cursorImages[0];
            break;
        case 'button':
        case 'input':
            cursorSource = cursorImages[1];
            if(e.target.disabled) cursorSource = cursorImages[2];
            break;
    }

    cursor.children[0].src = cursorSource;
}