const buttonError = 'Sorry, this item does not have a function yet.';

window.onload = function() {
    window.addEventListener('click', function(e) {
        console.log(e.target)
        if(
            e.target !== document.getElementById('appleMenu') 
            && e.target !== document.querySelector('[onclick="showApple()"]')
            && !e.target.classList.contains('appleMenuButton')) {
            document.getElementById('appleMenu').classList.remove('open');
        }
        if(e.target !== document.getElementById('controlCenter') && e.target !== document.querySelector('[onclick="showControl()"]')) {
            document.getElementById('controlCenter').classList.remove('open');
        }
    });


    //make all buttons without a function alert the user that they don't work
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if(button.getAttribute('onclick') === null && document.getElementById(button.id) === null) {
            button.onclick = function() {
                document.getElementById('buttonNoFunction').classList.add('open');
                setTimeout(() => { document.getElementById('buttonNoFunction').classList.remove('open'); }, 1500);
            }
            
        }
    });
}

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
    let url = ''
    switch(param){
        case 1: 
            url = 'https://store.steampowered.com';
            break;
        case 2:
            url = 'https://www.apple.com/maps';
            break;
        case 3:
            url = 'https://www.icloud.com/photos/';
            break;
        case 4:
            url = 'https://www.spotify.con';
            break;
        case 5:
            url = 'https://podcasts.apple.com/us/browse';
            break;
        case 6:
            url = 'https://www.apple.com/app-store/';
            break;
        default:
            url = '';
            break;
    }
    if(url!=='') window.open(url, '_blank').focus();
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

function newWindow(window) {
    // Make windows by innerHTML instead of creating elements
    if(window === 'finder') {
        finder = document.createElement('div');
        finder.classList.add('find-win');
        finder.id = `win${winNum}`

        finder.innerHTML = `<div class="find-top"><div class="find-top-btns"><button onclick="this.parentElement.parentElement.parentElement.remove()"><div class="find-top-btns-icon"></div></button><button><div class="find-top-btns-icon"></div></button><button><div class="find-top-btns-icon"></div></button></div></div>`

        document.body.appendChild(finder)
        dragElement(finder);
        winNum++;
    } else if(window === 'aboutThisMac') {
        aboutThisMac = document.createElement('div');
        aboutThisMac.classList.add('abtMac-win');
        aboutThisMac.id = `win${winNum}`

        aboutThisMac.innerHTML = `<div class="abtMac-top"><div class="abtMac-top-btns"><button onclick="this.parentElement.parentElement.parentElement.remove()"><div class="abtMac-top-btns-icon"></div></button> <button><div class="abtMac-top-btns-icon"></div></button> <button><div class="abtMac-top-btns-icon"></div></button></div><div class="abtMac-topSelector"><button class="abtMac-selected"><p>Overview</p></button> <button><p>Displays</p></button> <button><p>Storage</p></button> <button><p>Support</p></button> <button><p>Resources</p></button></div></div><div class="abtMacInfo"><div class="abtMacOverview"><div class="abtMacOverviewLogo"><img src="./sources/image/logos/big_sur.png" alt="Big Sur Logo"></div><div class="abtMacOverviewText"><h1><span>macOS</span> Big Sur</h1><p>Version 11.7.10 (20G1427) (WebVersion 1.0.3)</p><div class="abtMacOverviewSpecs"><p>MacBook Web (W1, 2025)</p><p>Chip<span>Apple W1</span></p><p>Memory<span>8 GB</span></p><p>Serial Number<span>1234567890</span></p></div><div class="abtMacOverviewButtons"><button>System Report...</button> <button>Software Update...</button></div></div></div></div>`
        document.body.appendChild(aboutThisMac)
        dragElement(aboutThisMac);
        winNum++;
    } else if (window === 'settings') {
        settings = document.createElement('div');
        settings.classList.add('settings-win');
        settings.id = `win${winNum}`

        settings.innerHTML = `<div class="settings-top"><div class="settings-top-btns"><button onclick="this.parentElement.parentElement.parentElement.remove()"><div class="settings-top-btns-icon"></div></button> <button><div class="settings-top-btns-icon"></div></button> <button><div class="settings-top-btns-icon"></div></button></div><div class="settings-labelnbuttons"><button><ion-icon name="chevron-back-outline"></ion-icon></button> <button><ion-icon name="chevron-forward-outline"></ion-icon></button> <button><ion-icon name="apps"></ion-icon></button><h1 unselectable="on">System Preferences</h1></div><div class="settings-search"><ion-icon name="search"></ion-icon><input type="text" name="" placeholder="Search" id=""></div></div><div class="settingsInfo"><div class="settingsProfileSection"><div class="settingsProfile"><div class="profilePicture"><img src="./sources/image/backgrounds/bigsur/dark.jpg" alt="Guest's Profile"></div><div class="profileText"><h1>Guest</h1><p>Apple ID, iCloud, Media &amp; App Store</p></div></div><div class="settingsButton"><img src="./sources/image/icons/settings/preferences/AppleID.png" alt=""><p>Apple ID</p></div><div class="settingsButton"><img src="./sources/image/icons/settings/preferences/FamilySharing.png" alt=""><p>Sharing</p></div></div><div class="settingsSection"><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/General.png" alt=""></div><div class="settingsButtonText"><p>General</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/DesktopScreenSaver.png" alt=""></div><div class="settingsButtonText"><p>Desktop &<br>Screen Saver</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/DockMenuBar.png" alt=""></div><div class="settingsButtonText"><p>Dock &<br>Menu Bar</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/MissionControl.png" alt=""></div><div class="settingsButtonText"><p>Mission<br>Control</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Siri.png" alt=""></div><div class="settingsButtonText"><p>Siri</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Spotlight.png" alt=""></div><div class="settingsButtonText"><p>Spotlight</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/LanguageRegion.png" alt=""></div><div class="settingsButtonText"><p>Language<br>& Region</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Notifications.png" alt=""></div><div class="settingsButtonText"><p>Notifications</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/InternetAccounts.png" alt=""></div><div class="settingsButtonText"><p>Internet<br>Accounts</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Wallet.png" alt=""></div><div class="settingsButtonText"><p>Wallet &<br>Apple Pay</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/TouchID.png" alt=""></div><div class="settingsButtonText"><p>Touch ID</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/UserGroups.png" alt=""></div><div class="settingsButtonText"><p>Users &<br>Groups</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Accessibility.png" alt=""></div><div class="settingsButtonText"><p>Accessibility</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/ScreenTime.png" alt=""></div><div class="settingsButtonText"><p>Screen Time</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Extensions.png" alt=""></div><div class="settingsButtonText"><p>Extensions</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/SecurityPrivacy.png" alt=""></div><div class="settingsButtonText"><p>Security<br>& Privacy</p></div></div></div><div class="settingsSection"><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/SoftwareUpdate.png" alt=""></div><div class="settingsButtonText"><p>Software<br>Update</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Network.png" alt=""></div><div class="settingsButtonText"><p>Network</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Bluetooth.png" alt=""></div><div class="settingsButtonText"><p>Bluetooth</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Sound.png" alt=""></div><div class="settingsButtonText"><p>Sound</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Printers.png" alt=""></div><div class="settingsButtonText"><p>Printers &<br>Scanners</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Keyboard.png" alt=""></div><div class="settingsButtonText"><p>Keyboard</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Trackpad.png" alt=""></div><div class="settingsButtonText"><p>Trackpad</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Mouse.png" alt=""></div><div class="settingsButtonText"><p>Mouse</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Displays.png" alt=""></div><div class="settingsButtonText"><p>Displays</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Sidecar.png" alt=""></div><div class="settingsButtonText"><p>Sidecar</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Battery.png" alt=""></div><div class="settingsButtonText"><p>Battery</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/DateTime.png" alt=""></div><div class="settingsButtonText"><p>Date & Time</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/Sharing.png" alt=""></div><div class="settingsButtonText"><p>Sharing</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/TimeMachine.png" alt=""></div><div class="settingsButtonText"><p>Time<br>Machine</p></div></div><div class="settingsButton"><div class="settingsButtonIcon"><img src="./sources/image/icons/settings/preferences/StartupDisk.png" alt=""></div><div class="settingsButtonText"><p>Startup<br>Disk</p></div></div></div></div>`
        document.body.appendChild(settings)
        dragElement(settings);
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