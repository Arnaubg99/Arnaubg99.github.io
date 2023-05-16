 //FUNCIO PER REBRE TOTS ELS PROJECTES DE L'ARXIU JSON
 async function rebreProjectesJSON(){
    try {
        let resposta =  await fetch('javascript/projectes.json');
        return  resposta.json();
    }catch (error) {
        return error;
    }
}

//FUNCIO PER AFEGIR CLASE A UN ELEMENT I RETIRAR-LA D'UNS ALTRES ELEMENTS
function afegirTreureClases(elementAfegir, arrayElementsTreure, clase){
    elementAfegir.classList.add(clase);
    arrayElementsTreure.forEach(element => {
        element.classList.remove(clase);
    });
};

//FUNCIO PER CREAR UN NOU ELEMENT DEL DOM
function crearElement(tipus, classes, atributs, text, elementPare, returnNecessari){
    const nouElement = document.createElement(tipus);
    if(classes){
        classes.forEach(clase => {
            nouElement.classList.add(clase);
        });
    }
    if(atributs){
        atributs.forEach(atribut => {
            nouElement.setAttribute(atribut.clau, atribut.valor)
        });
    }
    if(text){
        nouElement.innerHTML = text;
    }
    if(elementPare){
        elementPare.appendChild(nouElement);
    }
    if(returnNecessari){
        return nouElement;
    }
}

//FUNCIO PER CAMBIAR EL TEXT DE LA SECCIO DE CONTACTE
function cambiarTextContacte(display, titol, info){
    textLogo.style.display = display;
    titolLogo.innerHTML = titol;
    textLogo.innerHTML = info;
}

//MODIFICAR WIDTH I HEIGTH D'UN ELEMENT
function modificarWidthHeigth(element, tamany){
    element.style.width = tamany;
    element.style.height = tamany;
}

//OBRIR MODAL
function obrirModal(titol, video, descripcio, paraulesClau, link){
    modalProjecte.style.display = "flex"
    html.style.overflowY = "hidden";
    modalTitol.innerHTML = titol.toUpperCase()
    modalVideo.src = video
    modalDescripcio.innerHTML = descripcio
    modalParaulesClau.innerHTML = paraulesClau
    modalBoto.href = link
}

//SABER SI UN ELEMENT ESTA EN PANTALLA
function isInViewport(element) {
    let distancia = element.getBoundingClientRect();
    return distancia.top < (window.innerHeight || document.documentElement.clientHeight) && distancia.bottom > 0;
}