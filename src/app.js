import {getBreeds, createOptionsElement, getBreedInfo, createImage } from "./utils/index.js";

// Select Element
const catSelect = document.getElementById('cat-select');

// Button
const catBtn = document.getElementById('cat-btn');

// Pictures container
const picturesContainer = document.getElementById('pictures-container');

// runs when the DOM is loaded
window.addEventListener("DOMContentLoaded", async function() {
    // async operation
    const breeds = await getBreeds();
    createOptionsElement(breeds, catSelect);

})

// Event Listeners
catBtn.addEventListener('click', async function() {
    // Clears previous content in picturesContainer
    picturesContainer.innerHTML = '';

    const catsInfo = await getBreedInfo(catSelect.value);
    createImage(catsInfo, picturesContainer);
    
});

