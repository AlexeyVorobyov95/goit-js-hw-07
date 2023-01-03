import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(`.gallery`)

const markup = galleryItems.map(({
    description, 
    original, 
    preview
}) => `<div class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}" /></a></div>`
).join(``);

// console.log(markup);
gallery.innerHTML = markup;

// console.log(gallery);

gallery.addEventListener(`click`, onClick);

function onClick(evt){
    // console.log(evt.target);
    evt.preventDefault();
    // console.dir(evt.target);
    
    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }
    // console.log(evt.target);
    const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
  );
    instance.show();
    
    document.addEventListener("keydown", evt => {
    if (evt.key === "Escape") instance.close();
  });
}
