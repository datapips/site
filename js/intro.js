document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('#intro');
    if (!header) {
        console.error('Header element not found!');
        return;
    }

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
        { t: "DALTON TARDE_", ms: 100 },
        { t: "DALTON TARDE", ms: 200 },
        { t: "DALTON TARDE_", ms: 200 },
        { t: "DALTON TARDE", ms: 200 },
        { t: "DALTON TARDE_", ms: 200 },
        { t: "DALTON TARDE", ms: 200 },
        { t: "DALTON TARDE", ms: 200 }
    ];

    let stepDenominator = 1;
    try {
        if (window.localStorage.stepDenominator) {
            stepDenominator = parseFloat(window.localStorage.stepDenominator);
        }
    } catch (e) {
        console.warn('Local storage access error:', e);
    }

    let i = 0;
    let update = () => {
        if (i < anim.length) {
            let step = anim[i];
            header.innerText = step.t;
            i++;
            setTimeout(update, step.ms / stepDenominator);
        } else {
            header.classList.add('top');
            setTimeout(() => {
                let mainElement = document.getElementById('main');
                if (mainElement) {
                    mainElement.style.opacity = 1;
                }
                if (typeof initGlobe === 'function') {
                    initGlobe();
                } else {
                    console.error('initGlobe function not defined!');
                }
                try {
                    window.localStorage.stepDenominator = 2;
                } catch (e) {
                    console.warn('Local storage access error:', e);
                }
            }, 500);
        }
    };
    update();
});
