import { galleryItems } from './gallery-items.js';
// Change code below this line
import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";

const modal = basicLightbox.create(`
    <img>
`);

const modalImg = modal.element().querySelector("img");

const gallery = document.querySelector("ul.gallery");
const fragment = new DocumentFragment();

const liTemplate = document.createElement("template");
liTemplate.innerHTML = `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>`;

function appendFromGalleryItem(item) {
  const clone = liTemplate.content.cloneNode(true);
  const img = clone.querySelector("img");

  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  fragment.appendChild(clone);
}

galleryItems.forEach(appendFromGalleryItem);
gallery.appendChild(fragment);

gallery.addEventListener("click", e => {
  e.preventDefault();
  modalImg.src = e.target.dataset.source;
  modal.show();
});


document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.visible()) {
    e.preventDefault();
    modal.close();
  }
});
