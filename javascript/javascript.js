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
const modalProjecte = document.querySelector("#modal-projecte-wrap");
const modalTitol = document.querySelector("#modal-text");
const modalVideo = document.querySelector("#modal-video");
const modalDescripcio = document.querySelector("#modal-descripcio");
const modalParaulesClau = document.querySelector("#modal-paraules-clau");
const modalBoto= document.querySelector("#modal-boto");
const modalCreu = document.querySelector("#creu");

const projectes = [
    {
        id: 0,
        projecteImg: "assets/CapturesProjectes/app-tiempo.jpg",
        projecteVideo: "assets/VideosProjectes/app_meteorologica.mp4",
        projecteTitol: "App Meteorológica",
        projecteDescripcio: "Muestra los datos meteorológicos recibidos mediante APIs de España clasificado por provincias y municipios. Muestra datos de temperatura, estado del cielo, pronóstico de los próximos días, posición geográfica... 100% responsive adaptada a todo tipo de dispositivos.",
        projecteParaulesClau: "Proyecto hecho con Angular, Bootstrap, TypeScript, HTML y CSS.",
        projecteLink: "https://github.com/Arnaubg99/aplicacion-meteorologica"
    },
    {
        id: 1,
        projecteImg: "assets/CapturesProjectes/portafolio.png",
        projecteVideo: "assets/VideosProjectes/portafolio.mp4",
        projecteTitol: "Portafolio Web",
        projecteDescripcio: "Web dónde muestro quien soy, mi currículum, aptitudes, proyectos y formas de contacto. 100% responsive adaptada a todo tipo de dispositivos.",
        projecteParaulesClau:  "Proyecto hecho con HTML, CSS y JavaScript.",
        projecteLink: "https://github.com/Arnaubg99/Arnaubg99.github.io"
    },
    {
        id: 2,
        projecteImg: "assets/CapturesProjectes/productes-snow.jpg",
        projecteVideo: "assets/VideosProjectes/productes-snow.mp4",
        projecteTitol: "Listado de Productos",
        projecteDescripcio: "Muesta un listado de productos de snowboard recibios desde una API a través de un servidor Node.js. Muestra datos de precio, descripción, variantes e imágenes del producto.",
        projecteParaulesClau: "Proyecto hecho con HTML, CSS y JavaScript y Node.js.",
        projecteLink: "https://github.com/Arnaubg99/PruebaFantasticFy"
    },
    {
        id: 3,
        projecteImg: "assets/CapturesProjectes/cami-al-mercat.jpg",
        projecteVideo: "assets/VideosProjectes/cami_al_mercat.mp4",
        projecteTitol: "Camino al mercado",
        projecteDescripcio: "El objetivo de este juego es conducir el camión de camino al mercado, pero cuidado, los coches de la carretera van muy rápido y debes evitar chocar con ellos para seguir con vida. De vez en cuando aparecen corazones, intenta cojerlos para recuperar vidas, también intenta cojer los escudos que te vuelven invulnerable durante un tiempo, y ten en cuenta que los coches van aumentando de velocidad.",
        projecteParaulesClau: "Proyecto hecho con HTML, CSS y JavaScript.",
        projecteLink: "https://github.com/Arnaubg99/camino-al-mercado"
    },
    {
        id: 4,
        projecteImg: "assets/CapturesProjectes/calculadora.jpg",
        projecteVideo: "assets/VideosProjectes/calculadora.mp4",
        projecteTitol: "Calculadora",
        projecteDescripcio: "Calculadora capaz de hacer sumas, restas, multiplicaciones y divisiones.",
        projecteParaulesClau: "Proyecto hecho con HTML, CSS y JavaScript.",
        projecteLink: "https://github.com/Arnaubg99/calculadora"
    },
    {
        id: 5,
        projecteImg: "assets/CapturesProjectes/tribut.jpg",
        projecteVideo: "assets/VideosProjectes/pagina_tribut.mp4",
        projecteTitol: "Página tributo",
        projecteDescripcio: "Página con datos de una personalidad icónica.",
        projecteParaulesClau: "Proyecto hecho con HTML y CSS.",
        projecteLink: "https://github.com/Arnaubg99/pagina-tributo"
    },
    {
        id: 6,
        projecteImg: "assets/CapturesProjectes/formulari.jpg",
        projecteVideo: "assets/VideosProjectes/formulari.mp4",
        projecteTitol: "Ejemplo de formulario",
        projecteDescripcio: "Formulario de ejemplo con diversos tipos de campos.",
        projecteParaulesClau: "Proyecto hecho con HTML y CSS.",
        projecteLink: "https://github.com/Arnaubg99/formulario-de-ejemplo"
    },
];

//////////////////////////ANIMACIO ENTRADA////////////////////////////////////////////////////////////////////////////////////////
setTimeout(function () {
    entrada.style.display = "none"; 
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
    let cardButton = document.createElement("a");

    card.classList.add('projecte-card');
    cardImg.classList.add('projecte-card-img');
    cardInfoWrap.classList.add('projecte-card-info');
    cardInfoTitol.classList.add('projecte-card-info-titol');
    cardButton.classList.add('projecte-card-button');
    cardButton.classList.add('clickable');
    cardButton.classList.add('boto');

    cardImg.src = projecte.projecteImg;
    cardInfoTitol.innerHTML = projecte.projecteTitol;
    cardInfop.innerHTML = projecte.projecteParaulesClau;
    cardButton.innerHTML = "Ver";
    
    cardButton.addEventListener("click", obrirModal.bind(this, projecte.projecteTitol, projecte.projecteVideo, projecte.projecteDescripcio, projecte.projecteParaulesClau, projecte.projecteLink));

    cardInfoWrap.appendChild(cardInfoTitol);
    cardInfoWrap.appendChild(cardInfop);

    card.appendChild(cardImg);
    card.appendChild(cardInfoWrap);
    card.appendChild(cardButton);

    projecteCardsWrap.appendChild(card);
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

////////////////////////MODAL//////////////////////////////////////////////////////////////////////////////////////////
modalBoto.classList.add("clickable")
modalCreu.classList.add("clickable")

modalCreu.addEventListener("click", function(){
    modalProjecte.style.display = "none"
    html.style.overflowY = "auto";
})

function obrirModal(titol, video, descripcio, paraulesClau, link){
    modalProjecte.style.display = "flex"
    html.style.overflowY = "hidden";
    modalTitol.innerHTML = titol.toUpperCase()
    modalVideo.src = video
    modalDescripcio.innerHTML = descripcio
    modalParaulesClau.innerHTML = paraulesClau
    modalBoto.href = link
}
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