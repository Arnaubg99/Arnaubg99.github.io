const cursor = document.querySelector(".cursor");
const entrada = document.querySelector(".entrada");
const html = document.querySelector("html");
const body = document.querySelector("body");
const sobreMiButton = document.querySelector("#sobre-mi-nav-button");
const projectesButton = document.querySelector("#projectes-nav-button");
const contacteButton = document.querySelector("#contacte-nav-button");
const sobreMiContainer = document.querySelector(".sobre-mi-container");
const projectesContainer = document.querySelector(".projectes-container");
const contacteContainer = document.querySelector(".contacte-container");
const sobreMiCheck = document.querySelector("#sobre-mi-check");
const projectesCheck = document.querySelector("#projectes-check");
const contacteCheck = document.querySelector("#contacte-check");
const projecteCardsWrap = document.querySelector("#projecte-cards-wrap");
const projecteCard = document.querySelector("#projecte-card");
const logoGithub = document.querySelector("#logo-github");
const logoLinkedin = document.querySelector("#logo-linkedin");
const logoEmail = document.querySelector("#logo-email");
const logoInstagram = document.querySelector("#logo-instagram");
const logosContacte = document.querySelectorAll(".logo-contacte");
const titolLogo = document.querySelector("#text-contacte-titol");
const textLogo = document.querySelector("#text-contacte");
const projectes = [
    {
        projecteImg: "assets/CapturesProjectes/cami-al-mercat.jpg",
        projecteTitol: "Camino al mercado",
        projecteInfo: "Proyecto hecho con HTML, CSS y JavaScript.",
        projecteLink: ""
    },
    {
        projecteImg: "assets/CapturesProjectes/calculadora.jpg",
        projecteTitol: "Calculadora",
        projecteInfo: "Proyecto hecho con HTML, CSS y JavaScript.",
        projecteLink: ""
    },
    {
        projecteImg: "assets/CapturesProjectes/tribut.jpg",
        projecteTitol: "Página tributo",
        projecteInfo: "Proyecto hecho con HTML y CSS.",
        projecteLink: ""
    },
    {
        projecteImg: "assets/CapturesProjectes/formulari.jpg",
        projecteTitol: "Ejemplo de formulario",
        projecteInfo: "Proyecto hecho con HTML y CSS.",
        projecteLink: ""
    },
];

//////////////////////////ANIMACIO ENTRADA////////////////////////////////////////////////////////////////////////////////////////
setTimeout(function () {
    // entrada.style.display = "none";
    html.style.overflowY = "auto";
    // if(!window.matchMedia("(any-hover: none)").matches) {
    //     cursor.style.display = "block";
    // }
}, 3700);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////BOTONS NAVBAR//////////////////////////////////////////////////////////////////////////////////////////
sobreMiButton.addEventListener('click', function () {
    if (!sobreMiButton.classList.contains('selected')) {
        sobreMiButton.classList.add('selected');
        projectesButton.classList.remove('selected');
        contacteButton.classList.remove('selected');
    }
});
projectesButton.addEventListener('click', function () {
    if (!projectesButton.classList.contains('selected')) {
        projectesButton.classList.add('selected');
        sobreMiButton.classList.remove('selected');
        contacteButton.classList.remove('selected');
    }
});
contacteButton.addEventListener('click', function () {
    if (!contacteButton.classList.contains('selected')) {
        contacteButton.classList.add('selected');
        sobreMiButton.classList.remove('selected');
        projectesButton.classList.remove('selected');
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////SUBRALLAT BOTONS NAVBAR///////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function () {
    if (!isInViewport(sobreMiCheck)) {
        if (!isInViewport(projectesCheck)) {
            contacteButton.classList.add('selected');
            sobreMiButton.classList.remove('selected');
            projectesButton.classList.remove('selected');
        } else {
            projectesButton.classList.add('selected');
            sobreMiButton.classList.remove('selected');
            contacteButton.classList.remove('selected');
        }
    } else {
        sobreMiButton.classList.add('selected');
        projectesButton.classList.remove('selected');
        contacteButton.classList.remove('selected');
    }
})
function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////PROJECTES CARDS//////////////////////////////////////////////////////////////////////////////////
projectes.forEach(projecte => {
    let card = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardInfoWrap = document.createElement("div");
    let cardInfoTitol = document.createElement("h3");
    let cardInfop = document.createElement("p");
    let cardButton = document.createElement("button");

    card.classList.add('projecte-card');
    cardImg.classList.add('projecte-card-img');
    cardInfoWrap.classList.add('projecte-card-info');
    cardInfoTitol.classList.add('projecte-card-info-titol');
    cardButton.classList.add('projecte-card-button');
    cardButton.classList.add('clickable');
    cardButton.classList.add('boto');

    cardImg.src = projecte.projecteImg;
    cardInfoTitol.innerHTML = projecte.projecteTitol;
    cardInfop.innerHTML = projecte.projecteInfo;
    cardButton.innerHTML = "Ver";

    cardInfoWrap.appendChild(cardInfoTitol);
    cardInfoWrap.appendChild(cardInfop);

    card.appendChild(cardImg);
    card.appendChild(cardInfoWrap);
    card.appendChild(cardButton);

    projecteCardsWrap.appendChild(card);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////MOUSE/////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('mousemove', e => {
    let a = cursor.offsetHeight / 2 - 5;
    cursor.style.left = e.pageX - a + "px";
    cursor.style.top = e.pageY - a + "px";
});
const clickableElements = document.querySelectorAll(".clickable");
clickableElements.forEach(element => {
    element.addEventListener('mouseover', function () {
        cursor.style.width = "70px";
        cursor.style.height = "70px";
    });
    element.addEventListener('mouseout', function () {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////LOGOS TEXT///////////////////////////////////////////////////////////////////////////////////////////
logoGithub.addEventListener('mouseover', function () {
    textLogo.style.display = "block";
    titolLogo.innerHTML = "GITHUB";
    textLogo.innerHTML = "arnaubg99";
});
logoLinkedin.addEventListener('mouseover', function () {
    textLogo.style.display = "block";
    titolLogo.innerHTML = "LINKEDIN";
    textLogo.innerHTML = "Arnau Bayó Garcia";
});
logoEmail.addEventListener('mouseover', function () {
    textLogo.style.display = "block";
    titolLogo.innerHTML = "CORREO ELECTRONICO";
    textLogo.innerHTML = "arnaubayo99@gmail.com";
});
logoInstagram.addEventListener('mouseover', function () {
    textLogo.style.display = "block";
    titolLogo.innerHTML = "INSTAGRAM";
    textLogo.innerHTML = "@arnaubg99";
});
logosContacte.forEach(logo => {
    logo.addEventListener('mouseout', function () {
        titolLogo.innerHTML = "¡TRABAJEMOS JUNTOS!";
        textLogo.style.display = "none";
        textLogo.innerHTML = "";
    });
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////