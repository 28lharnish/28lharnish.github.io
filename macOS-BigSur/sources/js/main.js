const buttonError = "Sorry, this item does not have a function yet.";

window.onload = function() {
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

    for (var i=0;i<allImages.length;i++) {
        console.log(`Percentage ${Math.round((i / (allImages.length - 1)) * 100)}% | Index ${i} | Image: ${allImages[i]}`);
        preloadImage(allImages[i]);
    }

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
    
    timeAndDate();
    changeBattery(93);
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        timeAndDate();
    } else {
        //! stop time;
    }
});


function setMagnify(low = 1, high = 1.2, lowdistance = -5, highdistance = -25) {
    const root = document.documentElement;

    if (low > high) {
        [low, high] = [high, low];
    }

    if (lowdistance < highdistance) {
        [lowdistance, highdistance] = [highdistance, lowdistance];
    }

    root.style.setProperty("--base-magnify-scale", low);
    root.style.setProperty("--sibling-magnify-scale", (low + high) / 2);
    root.style.setProperty("--full-magnify-scale", high);

    root.style.setProperty("--base-magnify-distance", lowdistance + "px");
    root.style.setProperty(
        "--sibling-magnify-distance",
        (lowdistance + highdistance) / 2 + "px"
    );
    root.style.setProperty("--full-magnify-distance", highdistance + "px");
}

setMagnify(1, 1.2, -5, -25);

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function openWindow(window) {
    window.style.transform = "scale(0)";
    window.style.display = "block";
    setTimeout(() => {
        window.style.transform = "scale(1)";
    }, 100);
}

let winNum = 0;

function openLink(param) {
    if (param != "") window.open(param, "_blank").focus();
}

function darkMode(btn) {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        btn.innerText = "Try Dark Mode";
    } else {
        document.body.classList.add("dark");
        btn.innerText = "Try Light Mode";
    }
}

function monterey(btn) {
    if (document.body.classList.contains("monterey")) {
        document.body.classList.remove("monterey");
        btn.innerText = "Try Monterey BGs";
    } else {
        document.body.classList.add("monterey");
        btn.innerText = "Try Big Sur BGs";
    }
}

function openClose(elId) {
    const el = document.getElementById(elId);
    if(el) {
        el.classList.contains("open") ? el.classList.remove("open") : el.classList.add("open");
    } else {
        console.log('Element not found:', elId);
    }
    
}

function browseURL(event, input) {
    if (event.keyCode == 13) {
        if (input.value == "www.google.com") {
            input.parentElement.parentElement.querySelector("iframe").src =
                "https://www.google.com/webhp?igu=1";
        }
        input.parentElement.parentElement.querySelector("iframe").src =
            input.value;
    }
}

function launchpad() {
    const launchpad = document.getElementById("launchpad");
    const icons = Array.from(document.querySelectorAll("button.launchpadApp"));

    if (launchpad.classList.contains("open")) {
        for (let i = 0; i < icons.length; i++) {
            setTimeout(() => {
                icons[i].classList.remove("visible");

                if (i == icons.length - 1) {
                    setTimeout(() => {
                        launchpad.classList.remove("open");
                    }, 0);
                }
            }, i * 50);
        }
    } else {
        launchpad.classList.add("open");
        for (let i = 0; i < icons.length; i++) {
            setTimeout(() => {
                icons[i].classList.add("visible");
            }, i * 50);
        }
    }
}

function timeAndDate() {
    const date = new Date(Date.now());

    const clockWidgetHours = Array.from(document.querySelectorAll('div.widgetSquareSmall.clockWidget div.clockHand.hourHand'));
    const clockWidgetMinutes = Array.from(document.querySelectorAll('div.widgetSquareSmall.clockWidget div.clockHand.minuteHand'));
    const clockWidgetSeconds = Array.from(document.querySelectorAll('div.widgetSquareSmall.clockWidget div.clockHand.secondHand'));
    
    const finderDate = document.getElementById("finderDate");
    const finderTime = document.getElementById("finderTime");

    const monthToName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dayToName = [
        "Sun",
        "Mon",
        'Tues',
        'Wed',
        'Thurs',
        'Fri',
        'Sat'
    ];

    const ampm = 'AM';
    const hours = date.getHours();
    let fhours = hours;
    if(hours > 12) {
        ampm = 'PM';
        fhours = fhours % 12 + 1
    }

    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = date.getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    

    const dateString = `${dayToName[date.getDay()]} ${monthToName[date.getMonth()]} ${date.getDate()}`;
    const timeStringNoSec = `${fhours}:${minutes} ${ampm}`;
    const timeString = `${fhours}:${minutes}:${seconds} ${ampm}`;

    finderDate.innerText = dateString;
    finderTime.innerText = timeStringNoSec;

    const hourRotation = (360 / 12) * fhours/* + (seconds / (360 / 60))*/;
    const minRotation = ((360 / 60) * minutes)/* + (seconds / (360 / 60))*/;
    const secRotation = (360 / 60) * seconds;

    clockWidgetHours.forEach(e => e.style.rotate = hourRotation + 'deg');
    clockWidgetMinutes.forEach(e => e.style.rotate = minRotation + 'deg');
    clockWidgetSeconds.forEach(e => e.style.rotate = secRotation + 'deg');
}

setInterval(e => { timeAndDate() }, 1000);

