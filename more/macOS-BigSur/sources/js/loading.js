
const allImages = [
    //? Top Bar Icons
    './sources/image/icons/settings/appleicon.png',

    //? Logos
    './sources/image/logos/Apple_logo_black.svg',
    './sources/image/logos/big_sur.png',
    './sources/image/logos/monterey.png',

    //? Big Sur BGs
    './sources/image/backgrounds/bigsur/dark.jpg',
    './sources/image/backgrounds/bigsur/light.jpg',
    
    //? Monterey BGs
    './sources/image/backgrounds/monterey/dark.jpg',
    './sources/image/backgrounds/monterey/light.jpg',
    
    //? App Icons
    './sources/image/icons/applemusic.png',
    './sources/image/icons/appletv.png',
    './sources/image/icons/appstore.png',
    './sources/image/icons/books.png',
    './sources/image/icons/calendar.png',
    './sources/image/icons/calculator.png',
    './sources/image/icons/clock.png',
    './sources/image/icons/contacts.png',
    './sources/image/icons/controlcenter.png',
    './sources/image/icons/facetime.png',
    './sources/image/icons/FinderBigSur.png',
    './sources/image/icons/findmy.png',
    './sources/image/icons/freeform.png',
    './sources/image/icons/githubdesktop.png',
    './sources/image/icons/home.png',
    './sources/image/icons/iMessage.png',
    './sources/image/icons/keynote.png',
    './sources/image/icons/launchpad.png',
    './sources/image/icons/ljharnish.png',
    './sources/image/icons/ljharnish2.png',
    './sources/image/icons/mail.png',
    './sources/image/icons/maps.png',
    './sources/image/icons/news.png',
    './sources/image/icons/notes.png',
    './sources/image/icons/numbers.png',
    './sources/image/icons/pages.png',
    './sources/image/icons/photobooth.png',
    './sources/image/icons/photos.png',
    './sources/image/icons/podcasts.png',
    './sources/image/icons/reminders.png',
    './sources/image/icons/safari.png',
    './sources/image/icons/settings.png',
    './sources/image/icons/siri.png',
    './sources/image/icons/steam.png',
    './sources/image/icons/stocks.png',
    './sources/image/icons/trashcan.png',
    './sources/image/icons/voicememos.png',
    './sources/image/icons/vscode.png',
    './sources/image/icons/weather.png',

    //? Control Center Icons
    './sources/image/icons/settings/airdrop.png',
    './sources/image/icons/settings/bluetooth.png',
    './sources/image/icons/settings/brightness-keyboard.svg',
    './sources/image/icons/settings/controlcenter.png',
    './sources/image/icons/settings/donotdisturb.png',
    './sources/image/icons/settings/screen-mirroring.png',
    './sources/image/icons/settings/wifi.png',

    //? Settings Icons
    './sources/image/icons/settings/preferences/Accessibility.png',
    './sources/image/icons/settings/preferences/AppleID.png',
    './sources/image/icons/settings/preferences/Battery.png',
    './sources/image/icons/settings/preferences/Bluetooth.png',
    './sources/image/icons/settings/preferences/DateTime.png',
    './sources/image/icons/settings/preferences/DesktopScreenSaver.png',
    './sources/image/icons/settings/preferences/Displays.png',
    './sources/image/icons/settings/preferences/DockMenuBar.png',
    './sources/image/icons/settings/preferences/Extensions.png',
    './sources/image/icons/settings/preferences/FamilySharing.png',
    './sources/image/icons/settings/preferences/General.png',
    './sources/image/icons/settings/preferences/InternetAccounts.png',
    './sources/image/icons/settings/preferences/Keyboard.png',
    './sources/image/icons/settings/preferences/LanguageRegion.png',
    './sources/image/icons/settings/preferences/MissionControl.png',
    './sources/image/icons/settings/preferences/Mouse.png',
    './sources/image/icons/settings/preferences/Network.png',
    './sources/image/icons/settings/preferences/Notifications.png',
    './sources/image/icons/settings/preferences/Printers.png',
    './sources/image/icons/settings/preferences/ScreenTime.png',
    './sources/image/icons/settings/preferences/SecurityPrivacy.png',
    './sources/image/icons/settings/preferences/Sharing.png',
    './sources/image/icons/settings/preferences/Sidecar.png',
    './sources/image/icons/settings/preferences/Siri.png',
    './sources/image/icons/settings/preferences/SoftwareUpdate.png',
    './sources/image/icons/settings/preferences/Sound.png',
    './sources/image/icons/settings/preferences/Spotlight.png',
    './sources/image/icons/settings/preferences/StartupDisk.png',
    './sources/image/icons/settings/preferences/TimeMachine.png',
    './sources/image/icons/settings/preferences/TouchID.png',
    './sources/image/icons/settings/preferences/Trackpad.png',
    './sources/image/icons/settings/preferences/UserGroups.png',
    './sources/image/icons/settings/preferences/Wallet.png',

    //? Widget Backgrounds
    './sources/image/widgets/smallClockWidget.png',

    //? Widget Icons
    './sources/image/icons/widgets/applemusic.png',
    './sources/image/icons/widgets/spotify.png',
    './sources/image/icons/widgets/battery/macbook.png',

];

const dockApps = [
    { icon: './sources/image/icons/FinderBigSur.png',   onClickFunction: "newWindow('finder')", appName: 'Finder' },
    { icon: './sources/image/icons/launchpad.png',      onClickFunction: "launchpad()", appName: 'Launchpad' },
    { icon: './sources/image/icons/steam.png',          onClickFunction: "openLink('https://store.steampowered.com/')", appName: 'Steam' },
    { icon: './sources/image/icons/githubdesktop.png',  onClickFunction: "openLink('https://github.com/apps/desktop/')", appName: 'GitHub Desktop' },
    { icon: './sources/image/icons/vscode.png',         onClickFunction: "openLink('https://vscode.dev/')", appName: 'Visual Studio Code' },
    { icon: './sources/image/icons/photos.png',         onClickFunction: "openLink('https://www.icloud.com/photos/')", appName: 'Photos' },
    { icon: './sources/image/icons/applemusic.png',     onClickFunction: "openLink('https://music.apple.com/us/new')", appName: 'Music' },
    { icon: './sources/image/icons/podcasts.png',       onClickFunction: "openLink('https://podcasts.apple.com/us/browse')", appName: 'Podcasts' },
    { icon: './sources/image/icons/appstore.png',       onClickFunction: "openLink('https://www.apple.com/app-store/')", appName: 'App Store' },
    { icon: './sources/image/icons/settings.png',       onClickFunction: "newWindow('settings')", appName: 'Settings' },
    { divider: true, class: 'trashDivider' },
    { icon: './sources/image/icons/ljharnish2.png',     onClickFunction: "openLink('https://github.com/28lharnish')", appName: '28lharnish\'s Github' },
    { icon: './sources/image/icons/ljharnish.png',      onClickFunction: "openLink('https://github.com/ljharnish')", appName: 'ljharnish\'s Github' },
    { icon: './sources/image/icons/trashcan.png',       onClickFunction: "", class: 'trash', appName: 'Trash' },
];

const launchpadApps = [
    { icon: './sources/image/icons/FinderBigSur.png',   name: 'Finder'},
    { icon: './sources/image/icons/safari.png',         name: 'Safari'},
    { icon: './sources/image/icons/mail.png',           name: 'Mail'},
    { icon: './sources/image/icons/contacts.png',       name: 'Contacts'},
    { icon: './sources/image/icons/calendar.png',       name: 'Calendar'},
    { icon: './sources/image/icons/reminders.png',      name: 'Reminders'},
    { icon: './sources/image/icons/notes.png',          name: 'Notes'},
    { icon: './sources/image/icons/facetime.png',       name: 'FaceTime'},
    { icon: './sources/image/icons/iMessage.png',       name: 'Messages'},
    { icon: './sources/image/icons/maps.png',           name: 'Maps'},
    { icon: './sources/image/icons/findmy.png',         name: 'Find My'},
    { icon: './sources/image/icons/photobooth.png',     name: 'Photo Booth'},
    { icon: './sources/image/icons/photos.png',         name: 'Photos'},
    { icon: './sources/image/icons/applemusic.png',     name: 'Music'},
    { icon: './sources/image/icons/podcasts.png',       name: 'Podcasts'},
    { icon: './sources/image/icons/facetime.png',       name: 'FaceTime'},
    { icon: './sources/image/icons/appletv.png',        name: 'Apple TV'},
    { icon: './sources/image/icons/voicememos.png',     name: 'Voice Memos'},
    { icon: './sources/image/icons/keynote.png',        name: 'Keynote'},
    { icon: './sources/image/icons/numbers.png',        name: 'Numbers'},
    { icon: './sources/image/icons/pages.png',          name: 'Pages'},
    { icon: './sources/image/icons/weather.png',        name: 'Weather'},
    { icon: './sources/image/icons/news.png',           name: 'News'},
    { icon: './sources/image/icons/stocks.png',         name: 'Stocks'},
    { icon: './sources/image/icons/books.png',          name: 'Books'},
    { icon: './sources/image/icons/clock.png',          name: 'Clock'},
    { icon: './sources/image/icons/calculator.png',     name: 'Calculator'},
    { icon: './sources/image/icons/freeform.png',       name: 'Freeform'},
    { icon: './sources/image/icons/home.png',           name: 'Home'},
    { icon: './sources/image/icons/siri.png',           name: 'Siri'},
    { icon: './sources/image/icons/settings.png',       name: 'System Settings'},
];

window.onload = async function() {
    window.addEventListener('mousemove', (e) => {
        cursorCheck(e);
    });

    window.addEventListener('click', function(e) {
        if(
            e.target !== document.getElementById('appleMenu') 
            && e.target !== document.querySelector(`[onclick="openClose('appleMenu')"]`)
            && !e.target.classList.contains('appleMenuButton')) {
            document.getElementById('appleMenu').classList.remove('open');
        }

        if(e.target !== document.getElementById('controlCenter') && e.target !== document.querySelector(`[onclick="openClose('controlCenter')"]`)) {
            document.getElementById('controlCenter').classList.remove('open');
        }

        if(e.target.parentElement.id.indexOf('win') > -1) {
            e.target.parentElement.classList.add('activeWindow');
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

    function preloadImage(url)
    {
        var img=new Image();
        img.src=url;
    }

    const timeOut = ms => new Promise(res => setTimeout(res, ms))

    for(let i=0;i<dockApps.length;i++) {
        if(dockApps[i].divider) {
            let divider = document.createElement('div');
            divider.classList.add('dockDivider');
            divider.classList.add(dockApps[i].class);
            document.getElementById('dock').appendChild(divider);
        } else {
            createDockApp(dockApps[i].icon, dockApps[i].onClickFunction, dockApps[i].appName, dockApps[i].class);
        }
    }

    const dockIcons = Array.from(document.getElementById('dock').children).filter(e => !e.classList.contains('dockDivider'));
    for(let i=0;i<dockIcons.length;i++) {
        setTimeout(() => {
            dockIcons[i].classList.add('visible');
        }, i * 150);
    }

    for(let i=0;i<launchpadApps.length;i++) {
        createLaunchpadApp(launchpadApps[i].icon, launchpadApps[i].name);
    }
    
    //? Preload Images
    console.log("%c" + 'Preloading Images...', 'font-size: 32px;');

    for (var i=0;i<allImages.length;i++) {
        console.log(`Image Preloadings | Percentage ${Math.round((i / (allImages.length - 1)) * 100)}% | Index ${i} | Image: ${allImages[i]}`);
        preloadImage(allImages[i]);
        document.querySelector('div#bootLoadingBar div').style.width = `${Math.round((i / (allImages.length - 1)) * 100)}%`
        await timeOut(Math.floor(Math.random() * 100));
    }

    console.log("%c" + 'Preloading Cursors...', 'font-size: 32px;');

    for (var i=0;i<cursorImages.length;i++) {
        console.log('Cursor: ' + cursorImages[i] + ' preloaded.');
    }

    timeAndDate();
    changeBattery(93);

    if(document.querySelector('div#bootLoadingBar div').style.width == '100%') {
        //TODO: Boot Up Sound
        document.getElementById('bootScreen').classList.add("closing");
        setTimeout(() => { document.getElementById('bootScreen').remove() }, 500);
    }
}