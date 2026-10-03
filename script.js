/* =========================
   CONFIGURAÇÃO
========================= */

const relationshipStart = "2026-09-28";


/* =========================
   PARTÍCULAS
========================= */

const particlesContainer =
    document.getElementById("particles");


for (let i = 0; i < 50; i++) {

    const particle =
        document.createElement("div");


    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDelay =
        Math.random() * 8 + "s";


    particle.style.animationDuration =
        4 + Math.random() * 6 + "s";


    particle.style.opacity =
        0.2 + Math.random() * 0.8;


    particlesContainer.appendChild(
        particle
    );

}


/* =========================
   TROCAR DE TELA
========================= */

function nextScreen(number) {

    const current =
        document.querySelector(
            ".screen.active"
        );


    const next =
        document.getElementById(
            "screen" + number
        );


    if (!next) {

        console.error(
            "Tela não encontrada:",
            number
        );

        return;
    }


    if (current) {

        current.classList.remove(
            "active"
        );

    }


    setTimeout(() => {

        next.classList.add(
            "active"
        );

    }, 150);

}


/* =========================
   PROCESSAMENTO
========================= */

let processingStarted = false;


function startProcessing() {

    if (processingStarted) {
        return;
    }


    processingStarted = true;


    const loadingText =
        document.getElementById(
            "loadingText"
        );


    const messages = [

        "Analisando momentos...",

        "Calculando carinho...",

        "Verificando compatibilidade...",

        "Analisando quantidade de felicidade...",

        "Procurando uma solução...",

        "Resultado encontrado ❤️"

    ];


    let index = 0;


    const interval =
        setInterval(() => {

            loadingText.textContent =
                messages[index];


            index++;


            if (
                index >=
                messages.length
            ) {

                clearInterval(
                    interval
                );


                setTimeout(() => {

                    nextScreen(5);

                }, 900);

            }

        }, 900);

}


/* =========================
   OBSERVADOR DA TELA 4
========================= */

const container =
    document.querySelector(
        ".container"
    );


const observer =
    new MutationObserver(() => {

        const processingScreen =
            document.getElementById(
                "screen4"
            );


        if (
            processingScreen &&
            processingScreen.classList.contains(
                "active"
            )
        ) {

            startProcessing();

        }

    });


observer.observe(
    container,
    {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"]
    }
);


/* =========================
   CONTADOR DE DIAS
========================= */

function updateDaysCounter() {

    const startDate =
        new Date(
            relationshipStart +
            "T00:00:00"
        );


    const today =
        new Date();


    const start =
        new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );


    const current =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );


    const difference =
        current.getTime() -
        start.getTime();


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const daysElement =
        document.getElementById(
            "daysTogether"
        );


    const dateElement =
        document.getElementById(
            "sinceDate"
        );


    if (daysElement) {

        daysElement.textContent =
            Math.max(days, 0);

    }


    if (dateElement) {

        dateElement.textContent =
            "Desde " +
            start.toLocaleDateString(
                "pt-BR"
            ) +
            " ❤️";

    }

}


updateDaysCounter();


setInterval(
    updateDaysCounter,
    60000
);


/* =========================
   SCANNER EMOCIONAL
========================= */

const emotionSliders =
    document.querySelectorAll(
        ".emotion-slider"
    );


emotionSliders.forEach(
    (slider) => {

        function updateEmotion() {

            let value =
                parseInt(
                    slider.value
                );


            if (isNaN(value)) {

                value = 0;

            }


            value =
                Math.max(
                    0,
                    Math.min(
                        100,
                        value
                    )
                );


            slider.value =
                value;


            const person =
                slider.dataset.person;


            const emotion =
                slider.dataset.emotion;


            const valueElement =
                document.getElementById(
                    `${person}-${emotion}-value`
                );


            if (valueElement) {

                valueElement.textContent =
                    value + "%";

            }


            /*
             * Cor de cada emoção
             */

            let color;


            if (
                emotion ===
                "happiness"
            ) {

                color = "#57ff9a";

            } else if (
                emotion ===
                "stress"
            ) {

                color = "#ff9f43";

            } else if (
                emotion ===
                "sadness"
            ) {

                color = "#5795ff";

            } else if (
                emotion ===
                "attraction"
            ) {

                color = "#ff4da6";

            } else {

                color = "#b46cff";

            }


            /*
             * Preenche a barra
             */

            slider.style.background =
                `linear-gradient(
                    to right,
                    ${color} 0%,
                    ${color} ${value}%,
                    #21151e ${value}%,
                    #21151e 100%
                )`;

        }


        /*
         * Atualiza enquanto arrasta
         */

        slider.addEventListener(
            "input",
            updateEmotion
        );


        /*
         * Atualiza ao soltar
         */

        slider.addEventListener(
            "change",
            updateEmotion
        );


        /*
         * Inicializa a barra
         */

        updateEmotion();

    }
);


/* =========================
   BOTÃO ACEITAR
========================= */

function accepted() {

    nextScreen(8);

    createHearts();

}


/* =========================
   CORAÇÕES
========================= */

function createHearts() {

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            "♥";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.top =
            "100%";


        heart.style.fontSize =
            15 +
            Math.random() * 35 +
            "px";


        heart.style.color =
            "#ff3c91";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "9999";


        heart.style.textShadow =
            "0 0 10px #ff3c91";


        document.body.appendChild(
            heart
        );


        const duration =
            2000 +
            Math.random() * 3000;


        const rotation =
            Math.random() * 360;


        heart.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {

                    transform:
                        `translateY(-${window.innerHeight + 250}px) rotate(${rotation}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-out"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, duration);

    }

}


/* =========================
   TECLA ENTER
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Enter"
        ) {

            return;

        }


        const active =
            document.querySelector(
                ".screen.active"
            );


        if (!active) {
            return;
        }


        switch (
            active.id
        ) {

            case "screen1":

                nextScreen(2);

                break;


            case "screen2":

                nextScreen(3);

                break;


            case "screen3":

                nextScreen(4);

                break;


            case "screen5":

                nextScreen(6);

                break;


            case "screen6":

                nextScreen(7);

                break;

        }

    }
);