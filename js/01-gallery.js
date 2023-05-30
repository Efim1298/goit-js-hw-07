import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

const onContainerClick = (e) => {
  //заборона перенеправлення на іншу сторінку
  e.preventDefault();

  //якщо не картинка виходимо
  if (e.target.nodeName !== "IMG") return;

  //створення модального вікна за допомогою бібліотеки basicLightbox
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}"width="800" height="600">`);

  instance.show();

  //додаткове закриття модального вікна через клавішу Escape
  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
};

galleryContainer.addEventListener("click", onContainerClick);
