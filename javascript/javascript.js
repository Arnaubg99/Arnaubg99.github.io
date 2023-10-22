const cursor = document.querySelector(".cursor");
const entrada = document.querySelector(".entrada");
const html = document.querySelector("html");
const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const sobreMiButton = document.querySelector("#sobre-mi-nav-button");
const projectesButton = document.querySelector("#projectes-nav-button");
const contacteButton = document.querySelector("#contacte-nav-button");
const sobreMiContainer = document.querySelector(".sobre-mi-container");
const projectesContainer = document.querySelector(".projectes-container");
const contacteContainer = document.querySelector(".contacte-container");
const sobreMiCheck = document.querySelector("#sobre-mi-check");
const projectesCheck = document.querySelector("#projectes-check");
const contacteCheck = document.querySelector("#contacte-check");
const textProjectes = document.querySelector('.text-projectes');
const projecteCardsWrap = document.querySelector("#projecte-cards-wrap");
const projecteCard = document.querySelector("#projecte-card");
const logoGithub = document.querySelector("#logo-github");
const logoLinkedin = document.querySelector("#logo-linkedin");
const logoEmail = document.querySelector("#logo-email");
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
let alturaInicial = window.scrollY;

function isMouse(pointer) {
    if (pointer.type == "mouse"){
      return true;
    } else {
      return false;
    }
  }
//////////////////////////ANIMACIO ENTRADA////////////////////////////////////////////////////////////////////////////////////////
setTimeout(() => {
    entrada.style.display = "none"; 
    html.style.overflowY = "auto";
}, 3600);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////BOTONS NAVBAR//////////////////////////////////////////////////////////////////////////////////////////
sobreMiButton.addEventListener('click', () => {
    if (!sobreMiButton.classList.contains('selected')) {
        afegirTreureClases(sobreMiButton, [projectesButton, contacteButton], 'selected')
    }
});
projectesButton.addEventListener('click', () => {
    if (!projectesButton.classList.contains('selected')) {
        afegirTreureClases(projectesButton, [sobreMiButton, contacteButton], 'selected')
    }
});
contacteButton.addEventListener('click', () => {
    if (!contacteButton.classList.contains('selected')) {
        afegirTreureClases(contacteButton, [sobreMiButton, projectesButton], 'selected')
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////SUBRALLAT BOTONS NAVBAR I FER APAREIXER/DESAPAREIXER NAVBAR///////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', () => {
    //SUBRALLAT BOTONS NAVBAR
    if (!isInViewport(sobreMiCheck)) {
        if (!isInViewport(projectesCheck)) {
            afegirTreureClases(contacteButton, [sobreMiButton, projectesButton], 'selected');
        } else {
            afegirTreureClases(projectesButton, [sobreMiButton, contacteButton], 'selected');
        }
    } else {
        afegirTreureClases(sobreMiButton, [projectesButton, contacteButton], 'selected');
    }

    //APAREIXER/DESAPAREIXER NAVBAR
    // const ampladaPantalla  = window.innerWidth;
    // if(ampladaPantalla <= 820){
    //     navbar.style.top = '0%';
    // }else{
    //     const alturaActual = window.scrollY;
    //     if(alturaActual == 0){
    //         navbar.style.top = '0%';
    //     }else if(alturaActual <= alturaInicial){
    //         var alturaNavbarNumber = Number(navbar.style.top.replace('%',''));
    //         if(alturaNavbarNumber <= 0){
    //             var alturaNavbarActualizado = alturaNavbarNumber + 0.5;
    //             if(alturaNavbarActualizado > 0){
    //                 navbar.style.top = '0%';
    //             }else{
    //                 navbar.style.top = `${alturaNavbarActualizado}%`;
    //             }
    //         }
    //     }else{
    //         var alturaNavbarNumber = Number(navbar.style.top.replace('%',''));
    //         if(alturaNavbarNumber >= -100){
    //             var alturaNavbarActualizado = alturaNavbarNumber - 0.1;
    //             if(alturaNavbarActualizado < -100){
    //                 navbar.style.top = '-100%';
    //             }else{
    //                 navbar.style.top = `${alturaNavbarActualizado}%`;
    //             }
    //         }
    //     }
    //     alturaInicial = alturaActual
    // }   
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////PROJECTES CARDS//////////////////////////////////////////////////////////////////////////////////
let projectes;
(async () => {
    let resposta = await rebreProjectesJSON();
    projectes = resposta.projectes;
    textProjectes.innerHTML = `Listado con mis proyectos: ${projectes.length}`
    projectes.forEach(projecte => {
        const card = crearElement('div', ['projecte-card'], undefined, undefined, projecteCardsWrap, true);
        crearElement('img', ['projecte-card-img'],[atribut1={clau: 'src', valor: projecte.projecteImg}], undefined, card, true);
        const cardInfoWrap = crearElement('div', ['projecte-card-info'], undefined, undefined, card, true);
        crearElement('h3', ['projecte-card-info-titol'], undefined, projecte.projecteTitol, cardInfoWrap, true);
        crearElement('p', undefined, undefined, projecte.projecteParaulesClau, cardInfoWrap, false);
        const cardButton = crearElement('a', ['projecte-card-button', 'clickable', 'boto'], undefined, 'Ver', card, true);
        cardButton.addEventListener("click", obrirModal.bind(this, projecte.projecteTitol, projecte.projecteVideo, projecte.projecteDescripcio, projecte.projecteParaulesClau, projecte.projecteLink)); 
    });

    //AFEGIR EFECTE AMPLIAR/REDUIR ESFERA ALS ELEMENT QUE CONTENEN LA CLASSE CLICKABLE
    const clickableElements = document.querySelectorAll(".clickable");
    clickableElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        modificarWidthHeigth(cursor, '70px');
    });
    element.addEventListener('mouseout', () => {
        modificarWidthHeigth(cursor, '40px');
    });
});
})();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////LOGOS TEXT///////////////////////////////////////////////////////////////////////////////////////////
logoGithub.addEventListener('mouseover', () => {
    cambiarTextContacte('block', 'GITHUB', 'Arnaubg99');
});
logoLinkedin.addEventListener('mouseover', () => {
    cambiarTextContacte('block', 'LINKEDIN', 'Arnau Bayó Garcia');
});
logoEmail.addEventListener('mouseover', () => {
    cambiarTextContacte('block', 'CORREO ELECTRONICO', 'arnaubayo99@gmail.com');
});
logosContacte.forEach(logo => {
    logo.addEventListener('mouseout', () => {
    cambiarTextContacte('none', '¡TRABAJEMOS JUNTOS!', '');
    });
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////MODAL//////////////////////////////////////////////////////////////////////////////////////////
modalBoto.classList.add("clickable")
modalCreu.classList.add("clickable")

modalCreu.addEventListener("click", () =>{
    modalProjecte.style.display = "none"
    html.style.overflowY = "auto";
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////MOUSE/////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('mousemove', element => {
    let a = cursor.offsetHeight / 2 - 5;
    cursor.style.left = `${element.pageX - a}px`;
    cursor.style.top = `${element.pageY - a}px`;
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////