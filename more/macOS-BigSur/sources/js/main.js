const buttonError = "Sorry, this item does not have a function yet.";
let macVersion = 'bigsur';

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
        btn.innerText = "Try Monterey";
        macVersion = 'bigsur';
        document.querySelectorAll('img.abtMacVersionIcon').forEach(e => {
            e.src = './sources/image/logos/big_sur.png';
            e.alt = 'Big Sur Logo';
        });
        document.querySelectorAll('h1.abtMacVersionNameText').forEach(e => {
            e.innerHTML = '<span>macOS</span> Big Sur';
        });
    } else {
        document.body.classList.add("monterey");
        btn.innerText = "Try Big Sur";
        macVersion = 'monterey';
        document.querySelectorAll('img.abtMacVersionIcon').forEach(e => {
            e.src = './sources/image/logos/monterey.png';
            e.alt = 'Monterey Logo';
        });
        document.querySelectorAll('h1.abtMacVersionNameText').forEach(e => {
            e.innerHTML = '<span>macOS</span> Monterey'
        });
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

    let ampm = 'AM';
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

    const hourRotation = (360 / 12) * fhours + ((minutes / (360 / 60)) / 2);
    const minRotation = ((360 / 60) * minutes) + ((seconds / (360 / 60)) / 2);
    const secRotation = (360 / 60) * seconds;

    clockWidgetHours.forEach(e => e.style.rotate = hourRotation + 'deg');
    clockWidgetMinutes.forEach(e => e.style.rotate = minRotation + 'deg');
    clockWidgetSeconds.forEach(e => e.style.rotate = secRotation + 'deg');
}

setInterval(() => { timeAndDate() }, 1000);

function enableDebug() {
    document.getElementById('debugSettings').style.display = 'flex';

    console.log('----------------------------------')
    console.log('| 28lharnish | macOS For The Web |')
    console.log('----------------------------------')
    console.log('|       Debug Mode: Enabled      |')
    console.log('----------------------------------')

    const magnifierVals = [
        {
            low: 1,
            high: 1,
            lowdistance: 0, 
            highdistance: 0,
        },
        {
            low: 1,
            high: 1.1,
            lowdistance: -2, 
            highdistance: -10,
        },
        {
            low: 1,
            high: 1.2,
            lowdistance: -5, 
            highdistance: -25,
        },
        {
            low: 1,
            high: 1.3,
            lowdistance: -10, 
            highdistance: -30,
        },
        {
            low: 1,
            high: 1.5,
            lowdistance: -15, 
            highdistance: -50,
        }
    ]

    const cursorEnabled = document.getElementById('debug_cursorEnabled');
    const cursorSizeVal = document.getElementById('debug_cursorSize');
    const debugBatteryVal = document.getElementById('debug_batteryPercentVal');
    const dockMagnifyVal = document.getElementById('debug_dockMagnify');
    
    cursorSizeVal.addEventListener('input', () => { 
        document.getElementById('cursor').style.width = `${cursorSizeVal.value}px`;
        document.getElementById('cursor').style.height = `${cursorSizeVal.value}px`;
    });

    cursorEnabled.addEventListener('input', () => {
        if(cursorEnabled.checked) {
            document.body.classList.remove('disablecursor');
        } else {
            document.body.classList.add('disablecursor');
        }
    }); 

    debugBatteryVal.addEventListener('input', () => changeBattery(debugBatteryVal.value));
    
    dockMagnifyVal.addEventListener('input', () => {
        const magData = magnifierVals[dockMagnifyVal.value];
        setMagnify(magData.low, magData.high, magData.lowdistance, magData.highdistance);
    });
}