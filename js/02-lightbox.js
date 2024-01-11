import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector("ul.gallery");
const fragment = new DocumentFragment();

function appendFromGalleryItem(item) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = item.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;

  a.appendChild(img);
  li.appendChild(a);
  fragment.appendChild(li);
}

galleryItems.forEach(appendFromGalleryItem);
gallery.appendChild(fragment);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  lightbox.open();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && lightbox.isOpen()) {
    e.preventDefault();
    lightbox.close();
  }
});