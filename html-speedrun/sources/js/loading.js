
const allImages = [
    //? Top Bar Icons
    './sources/image/icons/settings/appleicon.png',

    //? Logos
    './sources/image/logos/big_sur.png',

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
    './sources/image/icons/calendar.png',
    './sources/image/icons/contacts.png',
    './sources/image/icons/controlcenter.png',
    './sources/image/icons/facetime.png',
    './sources/image/icons/FinderBigSur.png',
    './sources/image/icons/iMessage.png',
    './sources/image/icons/launchpad.png',
    './sources/image/icons/mail.png',
    './sources/image/icons/maps.png',
    './sources/image/icons/notes.png',
    './sources/image/icons/photos.png',,
    './sources/image/icons/podcasts.png',
    './sources/image/icons/reminders.png',
    './sources/image/icons/safari.png',
    './sources/image/icons/settings.png',
    './sources/image/icons/steam.png',
    './sources/image/icons/trashcan.png',

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

    //? Widget Icons
    './sources/image/icons/widgets/applemusic.png',

];


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

    function preloadImage(url)
    {
        var img=new Image();
        img.src=url;
        console.log(img)
    }

    for (var i=0;i<allImages.length;i++) {
        console.log(`Percentage ${Math.round((i / (allImages.length - 1)) * 100)}% | Index ${i} | Image: ${allImages[i]}`);
        preloadImage(allImages[i]);
    }

    function showDockIcons() {
        const icons = Array.from(document.getElementById('dock').children);
        for(let i=0;i<icons.length;i++) {
            setTimeout(() => {
                icons[i].classList.add('visible');
            }, i * 150);
        }
    }

    showDockIcons();
}