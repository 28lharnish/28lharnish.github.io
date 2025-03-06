window.onload = function() {
    document.getElementById('convo1').style.opacity = 1;
    setTimeout(() => document.getElementById('convo2').style.opacity = 1, 1000);
    setTimeout(() => document.getElementById('convo3').style.opacity = 1, 2000);
    setTimeout(() => document.getElementById('convo-dot3').style.opacity = 1, 3000);
    setTimeout(() => document.getElementById('convo-dot2').style.opacity = 1, 3250);
    setTimeout(() => document.getElementById('convo-dot1').style.opacity = 1, 3500);

    setTimeout(() => document.getElementById('conversation').style.opacity = 0, 5000);
    setTimeout(() => document.getElementById('aboutMe').style.display = 'flex', 6000);
    setTimeout(() => document.getElementById('aboutMe').style.opacity = 1, 6000)
    setTimeout(() => document.getElementById('skipIntro').style.opacity = 0, 6000)
    setTimeout(() => document.getElementById('skipIntro').remove(), 6000)
}

function skip() {
    document.getElementById('conversation').style.opacity = 0;
    document.getElementById('aboutMe').style.display = 'flex';
    document.getElementById('aboutMe').style.opacity = 1;
    document.getElementById('skipIntro').style.opacity = 0;
    document.getElementById('skipIntro').remove() 
}