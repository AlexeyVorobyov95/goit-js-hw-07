import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(SimpleLightbox);
const gallery = document.querySelector(`.gallery`)

const markup = galleryItems.map(({
    description, 
    original, 
    preview
}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join(``);

// console.log(markup);
gallery.innerHTML = markup;

// console.log(gallery);

gallery.addEventListener(`click`, onClick);

function onClick(evt) {
    // console.log(evt.target);
    evt.preventDefault();
    // console.dir(evt.target);
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
});
