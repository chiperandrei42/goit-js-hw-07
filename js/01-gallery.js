import { galleryItems } from './gallery-items.js';
// Change code below this line
let imageList = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
    let newImg = document.createElement("img");
    newImg.src = galleryItems[i].preview;
    newImg.alt = galleryItems[i].description;
    newImg.classList.add("imageItem");
    imageList.appendChild(newImg);
}

let listChildren = imageList.childNodes

for (let i = 0; i < listChildren.length; i++) {
    listChildren[i].addEventListener("click", () => {
        let newLightBox = basicLightbox.create(`
		<img width="1400" height="900" src="${galleryItems[i].original}" alt ="${listChildren[i].alt}">
	`);
        newLightBox.show();
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                newLightBox.close();
            }
        })
    })
}