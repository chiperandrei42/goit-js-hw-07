import { galleryItems } from './gallery-items.js';

let imageList = document.querySelector(".gallery");

galleryItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;

    link.appendChild(img);
    listItem.appendChild(link);
    imageList.appendChild(listItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
