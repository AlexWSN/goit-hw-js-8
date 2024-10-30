// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

// simple-lightbox.esm.js:1591 Uncaught ReferenceError: global is not defined
//  import SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.esm.js'; // Importul modulului

 // 01-gallery.js:35 Uncaught TypeError: SimpleLightbox is not a constructor
//  import * as SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.min.js';

import '../../node_modules/simplelightbox/dist/simple-lightbox.esm.js';    
        
 //GET http://127.0.0.1:5500/parcel-project-template/node_modules/simplelightbox/dist/simple-lightbox net::ERR_ABORTED 404 (Not Found)
 //import {SimpleLightbox} from '../../node_modules/simplelightbox/dist/simple-lightbox';

 //import 'simplelightbox/dist/simple-lightbox.min.css'; // Importul CSS-ului

const galleryContainer = document.querySelector("ul.gallery"); 
const photosMarkup = createGalleryItems(galleryItems); 

// galeria
function createGalleryItems(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
     <a href="${original}" class="gallery__item">
      <img src="${preview}" alt="${description}" class="gallery__image">
    </a>
  `;
    })
    .join("");
}

// Inserează markup-ul în containerul de galerie
galleryContainer.insertAdjacentHTML("beforeend", photosMarkup); // Corectăm metoda pentru inserare

// SimpleLightbox
const galleryHandler = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryHandler.on("show.simplelightbox", () => {
  console.log("Lightbox is opened");
});
