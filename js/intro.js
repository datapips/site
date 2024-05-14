let header = document.querySelector('#intro');
let anim = [
    { t: "D", ms: 200 },
    { t: "Da", ms: 200 },
    { t: "Dal", ms: 200 },
    { t: "Dalt", ms: 200 },
    { t: "Dalto}", ms: 100 },
    { t: "Dalton", ms: 100 },
    { t: "Dalton ", ms: 100 },
    { t: "Dalton T", ms: 100 },
    { t: "Dalton Ta", ms: 100 },
    { t: "Dalton Tar", ms: 100 },
    { t: "Dalton Tard", ms: 100 },
    { t: "Dalton Tarde", ms: 100 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();
