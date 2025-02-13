function createDockApp(icon, onClickFunction, appName, classn) {
    let app = document.createElement('button');
    app.innerHTML = `<img src="${icon}" alt="Dock Icon">`;
    document.getElementById('dock').appendChild(app);
    app.setAttribute('onclick', onClickFunction);
    app.setAttribute('data-name', appName)
    if(classn) {
        app.classList.add(classn);
    }
}

function createLaunchpadApp(icon, name) {
    let app = document.createElement('button');
    app.classList.add('launchpadApp');
    app.innerHTML = `<img src="${icon}" alt="${name}"><p>${name}</p>`;
    document.getElementById('launchpad').appendChild(app);
}