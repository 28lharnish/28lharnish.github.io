window.onload = () => {
    document.getElementById("commentLanguage").selectedIndex = 0;
    generateShownExcuse();
};

let lastExcuse = "";

let category = "coder";

let currentJSON = {};

function categorySel() {
    category = document.getElementById("categorySelect").value;
    generateShownExcuse();

    if(category == 'coder') { document.getElementById('commentBlocks').style.display = 'block'; }
    else document.getElementById('commentBlocks').style.display = 'none';
}

function generateExcuse(amount = 1) {
    let generatedExcuse =
        excuses[category][Math.floor(Math.random() * excuses[category].length)];
    while (generatedExcuse == lastExcuse) {
        generatedExcuse =
            excuses[category][Math.floor(Math.random() * excuses[category].length)];
    }
    lastExcuse = generatedExcuse;

    if(generatedExcuse.includes('%FIXTIMENUM')) generatedExcuse = generatedExcuse.replace('%FIXTIMENUM', Math.floor(Math.random() * 50));

    return generatedExcuse;
}

let lastTimeout;

function generateShownExcuse() {
    clearTimeout(lastTimeout);
    const bigExcuse = document.getElementById("textHolder");
    bigExcuse.innerHTML = '';
    const excuse = generateExcuse(1);

    for(let i=0;i<excuse.length;i++) {
        let animatedLetter = document.createElement('span');
        animatedLetter.classList.add('animateLetter');
        animatedLetter.innerText = excuse[i];
        if(excuse[i] == ' ') {
            animatedLetter.innerHTML = '&nbsp;'
        } else {
            animatedLetter.style.setProperty('--animation-order', i);
        }
        bigExcuse.appendChild(animatedLetter);
    }

    lastTimeout = setTimeout(() => { bigExcuse.innerText = excuse }, 200 + (excuse.length * 100));

    currentJSON = {
        html: `<!-- ${excuse} -->`,
        css: `/* ${excuse} */`,
        javascript: `// ${excuse}`,
        python: `# ${excuse}`,
    };

    commentLang();
}

function commentLang() {
    const currentLanguage = document.getElementById("commentLanguage").value;

    if (currentLanguage == "custom") {
        let customSyntax = prompt(
            "Custom Comment Syntax | Use {excuse} for the excuse."
        );
        document.getElementById("commentExcuse").innerText =
            customSyntax.replace("{excuse}", lastExcuse);
        return;
    }

    document.getElementById("commentExcuse").innerText =
        currentJSON[currentLanguage];
}

function copyComment() {
    const text = document.getElementById("commentExcuse").innerText;
    navigator.clipboard.writeText(text);

    let alertBox = document.getElementById("copiedComment");
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 1500);
}
