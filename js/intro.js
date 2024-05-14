let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "D_", ms: 100 },
    { t: "DA_", ms: 100 },
    { t: "DAL_", ms: 100 },
    { t: "DALT_", ms: 100 },
    { t: "DALTO_", ms: 100 },
    { t: "DALTON_", ms: 100 },
    { t: "DALTON _", ms: 100 },
    { t: "DALTON T_", ms: 100 },
    { t: "DALTON TA_", ms: 100 },
    { t: "DALTON TAR_", ms: 100 },
    { t: "DALTON TARD_", ms: 100 },
    { t: "DALTON TARDE_", ms: 200 },
    { t: "DALTON TARDE ", ms: 400 },
    { t: "DALTON TARDE_", ms: 200 },
    { t: "DALTON TARD_", ms: 100 },
    { t: "DALTON TAR_", ms: 100 },
    { t: "DALTON TA_", ms: 100 },
    { t: "DALTON T_", ms: 100 },
    { t: "DALTON _", ms: 100 },
    { t: "DALTON_", ms: 100 },
    { t: "DALTON", ms: 400 }
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
