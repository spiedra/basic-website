var modalContainer;
var principalModal;
var modalClose;
var modalTittle;
var modalImage;
var modalInformation;

addEventListener('DOMContentLoaded', () => {
    init();
})

function init() {
    document.getElementById('aside_first_link').addEventListener('click', () => {
        initVar()
        modifyModalContainer();
        modifyModalCloser();
        modifyTittleModal("Lapa Roja (Ara macao)");
        modifyModalImage(document.getElementById('aside_first_img').getAttribute("src"), "Lapa Roja (Ara macao) obtenido de https://es.m.wikipedia.org/wiki/Archivo:Ara_Macao_(Yarinacocha,_Pucallpa).jpg");
        modifyInformationModel("La guacamaya roja,​ guacamayo macao o guacamaya bandera (Ara macao) s una especie de ave perteneciente a la familia de los psitácidos. Además, es una de las nueve especies existentes del género Ara, del cual es una de las de mayor tamaño, pues llega a alcanzar 90,7 cm de longitud y 1 kg de peso. Se distingue por su plumaje de colores vivos, que es principalmente rojo escarlata, complementado con algunas plumas azules y amarillas con verde que inician desde las alas hasta su cola.")
        modifyReferencesModel("https://es.m.wikipedia.org/wiki/Ara_macao");
        modifyPrincipalModal();
        document.getElementById('page-body').appendChild(modalContainer);
        addListenerToClose();
    });

    document.getElementById('aside_second_link').addEventListener('click', () => {
        initVar();
        modifyModalContainer();
        modifyModalCloser();
        modifyTittleModal("Garrobo (Ctenosaura similis)");
        modifyModalImage(document.getElementById('aside_second_img').getAttribute("src"), "Iguana rayada (Ctenosaura similis)");
        modifyInformationModel("La iguana rayada (Ctenosaura similis), también conocida como garrobo, es un iguánido centroamericano y mexicano presente desde Panamá hasta el istmo de Tehuantepec en México. Habita en climas calientes y húmedos, secos, y templados y húmedos; asimismo, en altitudes desde cerca del nivel del mar hasta moderadas. ");
        modifyReferencesModel("https://es.m.wikipedia.org/wiki/Ctenosaura_similis");
        modifyPrincipalModal();
        document.getElementById('page-body').appendChild(modalContainer);
        addListenerToClose();
    });
}

function addListenerToClose() {
    const modal = document.querySelector('.modal');
    var nodoTittle = document.getElementById('modal-tittle');
    var nodosContainer = document.getElementById('modal-container');

    document.getElementById('modal_close').addEventListener('click', () => {
        modal.classList.toggle('close');
        document.getElementById('modal-container').style.visibility = "hidden";
        document.getElementById('modal-container').style.opacity = "0";
        nodosContainer.remove();
    });
}

function addChldToPrincipalModal(child) {
    principalModal.appendChild(child);
}

function setAttributeToElement(element, name, value) {
    element.setAttribute(name, value);
}

function addTextNode(text) {
    return document.createTextNode(text);
}

function modifyModalContainer() {
    setAttributeToElement(modalContainer, "class", "modal-container");
    setAttributeToElement(modalContainer, "style", "visibility: visible; opacity: 1;");
    setAttributeToElement(modalContainer, "id", "modal-container");
}

function modifyPrincipalModal() {
    setAttributeToElement(principalModal, "id", "modal");
    setAttributeToElement(principalModal, "class", "modal");
    modalContainer.appendChild(principalModal);
}

function modifyTittleModal(tittle) {
    setAttributeToElement(modalTittle, "id", "modal-tittle");
    setAttributeToElement(modalTittle, "class", "modal-tittle");
    modalTittle.appendChild(addTextNode(tittle));
    addChldToPrincipalModal(modalTittle);
}

function modifyModalImage(root, alt) {
    setAttributeToElement(modalImage, "class", "modal-image");
    setAttributeToElement(modalImage, "src", root);
    setAttributeToElement(modalImage, "alt", alt);
    addChldToPrincipalModal(modalImage);
}

function modifyInformationModel(information) {
    setAttributeToElement(modalInformation, "class", "modal-information");
    modalInformation.appendChild(addTextNode(information));
    addChldToPrincipalModal(modalInformation);
}

function modifyReferencesModel(link){
    setAttributeToElement(modalReferences, "class", "references-container__link--modal");
    setAttributeToElement(modalReferencesLink, "class", "references__link");
    setAttributeToElement(modalReferencesLink, "href", link);
    setAttributeToElement(modalReferencesLink, "target", "_blank");
    modalReferencesLink.appendChild(addTextNode("Referencias"));
    modalReferences.appendChild(modalReferencesLink);
    addChldToPrincipalModal(modalReferences);
}

function modifyModalCloser() {
    setAttributeToElement(modalClose, "class", "close");
    setAttributeToElement(modalClose, "id", "modal_close");
    modalClose.appendChild(addTextNode("X"));
    addChldToPrincipalModal(modalClose);
}

function initVar() {
    modalContainer = document.createElement('div');
    principalModal = document.createElement('div');
    modalClose = document.createElement('a');
    modalTittle = document.createElement('h2');
    modalImage = document.createElement('img');
    modalInformation = document.createElement('p');
    modalReferences = document.createElement('div');
    modalReferencesLink = document.createElement('a');
}