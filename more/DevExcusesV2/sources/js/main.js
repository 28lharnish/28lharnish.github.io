window.onload = () => {
    document.getElementById('commentLanguage').selectedIndex = 0;
    generateShownExcuse();
};

let betaExcuses = [
    'I\'m surprised that was working at all.',
    'I was told to stop working on that when something important came up.',
    'Oh, you said you DIDN\'T want that to happen?',
    'It must be because of a leap year!',
    'We should have updated our software years ago.',
    'That error means it was successful.'
];

let lastExcuse = '';

let currentJSON = {};

function generateExcuse(amount=1) {
    let arrayOfExcuses = [];

    if(amount == 0) {
        return 'Cannot generate 0 excuses... why would you try to?'
    } else if(amount == 1) {
        let generatedExcuse = betaExcuses[Math.floor(Math.random() * betaExcuses.length)];
        while (generatedExcuse == lastExcuse) {
            generatedExcuse = betaExcuses[Math.floor(Math.random() * betaExcuses.length)];
        }
        lastExcuse = generatedExcuse;
        return generatedExcuse;
    } else if(amount <= betaExcuses.length) {
        for(let i=0;i<amount;i++) {
            let generatedExcuse = betaExcuses[Math.floor(Math.random() * betaExcuses.length)];
            
            while (arrayOfExcuses.indexOf(generatedExcuse) > -1) {
                generatedExcuse = betaExcuses[Math.floor(Math.random() * betaExcuses.length)];
            }

            lastExcuse = generatedExcuse;
            arrayOfExcuses.push(generatedExcuse);
        }

        return arrayOfExcuses;
    } else {
        return 'Can\'t generate more excuses than ' + betaExcuses.length + ' at a time.'
    }
}

function generateShownExcuse() {
    const bigExcuse = document.getElementById('textHolder');
    const excuse = generateExcuse(1)

    bigExcuse.innerText = excuse;

    currentJSON = {
        html:           `<!-- ${excuse} -->`,
        css:            `/* ${excuse} */`,
        javascript:     `// ${excuse}`,
        python:         `# ${excuse}`
    };

    commentLang();
}

function commentLang() {
    const currentLanguage = document.getElementById('commentLanguage').value;

    if(currentLanguage == 'custom') {
        let customSyntax = prompt('Custom Comment Syntax | Use {excuse} for the excuse.');
        document.getElementById('commentExcuse').innerText = customSyntax.replace('{excuse}', lastExcuse);
        return;
    }

    document.getElementById('commentExcuse').innerText = currentJSON[currentLanguage];
}

function copyComment() {
    const text = document.getElementById('commentExcuse').innerText;
    navigator.clipboard.writeText(text);

    let alertBox = document.getElementById('copiedComment');
    alertBox.classList.add('show');
    setTimeout(() => { alertBox.classList.remove('show') }, 1500);
}