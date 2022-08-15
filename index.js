
const containerElem = document.getElementById('container');
const formElem = document.querySelector('form');
const thanksTemplateContent = document.getElementById('thanks-template').content;


formElem.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let rating = this['rating'].value;

    let ratingElem = document.createElement('div');
    ratingElem.innerHTML = `<span slot="rating">${rating}</span>`;

    let ratingShadow = ratingElem.attachShadow({ mode: 'open' });
    ratingShadow.appendChild(thanksTemplateContent.cloneNode(true));
    ratingShadow.innerHTML += `
    `;

    containerElem.replaceChildren(ratingElem);
});

