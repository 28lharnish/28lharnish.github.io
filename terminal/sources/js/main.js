window.onload = function() {
    document.body.addEventListener('keydown', (e) => {
        if(e.key == 'Backspace') {
            document.getElementById('marker').remove()
            document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.slice(0, document.getElementById('text').innerHTML.length - 1)
            document.getElementById('text').innerHTML += "<p id='marker'>_</p>"
            return;
        } else if(e.key == 'Enter') {
            tryRunCommand()
            return;
        } else if(e.key.length > 1) return;

        var newChar = document.createTextNode(e.key);
        document.getElementById('marker').remove()
        document.getElementById('text').innerHTML += e.key + "<p id='marker'>_</p>"
    });

    cursorInterval = setInterval(() => { blinkCursor() }, 500)
}

function blinkCursor() {
    if(document.getElementById('marker').style.opacity == 1) {
        document.getElementById('marker').style.opacity = 0;
        return;
    }
    document.getElementById('marker').style.opacity = 1
}

function tryRunCommand() {
    var command = document.getElementById('text').innerHTML.split('C:/Users/ljharnish&gt;')[1].split('<p')[0].trim()
    if(command) {
        document.getElementById('text').innerHTML += `<br>Command "${command}" not found.`
    }

    document.getElementById('marker').remove()
    document.getElementById('text').innerHTML += '<br>C:/Users/ljharnish&gt;' + "<p id='marker'>_</p>"
}