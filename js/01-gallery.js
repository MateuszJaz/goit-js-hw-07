import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryHTML);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const imageOriginal = event.target.getAttribute("data-source");
  const imageAlt = event.target.getAttribute("alt");
  const instance = basicLightbox.create(`
    <img src="${imageOriginal}" alt="${imageAlt}" width="800" height="600">`);

  instance.show(() =>
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close(() => document.removeEventListener("keydown", event));
      }
    })
  );
});
