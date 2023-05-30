import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
    })
    .join("");
}

//створення SimpleLightbox (додавання кліків по зоброженні, відкриття і закриття модального вікна, гортання зображень за допомогою клавіатури і додткової інформація зображення)
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
