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
        modifyTittleModal("Lapa de Costa Rica");
        modifyModalImage(document.getElementById('aside_first_img').getAttribute("src"), "Lapa de Turrubares");
        modifyInformationModel("Informacion basica de la lapa de turrubares en cara")
        modifyPrincipalModal();
        document.getElementById('page-body').appendChild(modalContainer);
        addListenerToClose();
    });

    document.getElementById('aside_second_link').addEventListener('click', () => {
        initVar();
        modifyModalContainer();
        modifyModalCloser();
        modifyTittleModal("Lapa de Costa Rica");
        modifyModalImage(document.getElementById('aside_second_img').getAttribute("src"), "Lapa de Turrubares");
        modifyInformationModel("Informacion basica de la lapa de turrubares en cara");
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
}