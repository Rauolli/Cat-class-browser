import Cat from './cat.js';
const htmlElements = registerHTMLElemnents();
// Zufälliger Name für die Katze
const names = ["Mimi", "Mausi", "Mizi", "Felix", "Katerlein"];
const catName = Math.floor(Math.random() * names.length);
const strayCat = new Cat(names[catName]);

document.addEventListener('DOMContentLoaded', function(event){
    console.log('DOM fully loaded and parsed');
    //console.log(htmlElements);
    addButtonEventListener();
    console.log('Event listener added');
    changeDescription();   
})



// HTML-Elemente
function registerHTMLElemnents() {
    return {
        title: document.querySelector('#cat-title'),
        description: document.querySelector('.cat-description'),
        image: document.querySelector('#cat-image'),
        btnFeed: document.querySelector('#feed-btn'),
        btnSleep: document.querySelector('#sleep-btn'),
        btnPet: document.querySelector('#pet-btn'),
        feedRng: document.querySelector('#feed-rng'),
        sleepRng: document.querySelector('#sleep-rng'),
        petRng: document.querySelector('#pet-rng')
    };
}

// Event-Listener für die Buttons
function addButtonEventListener() {
    htmlElements.btnFeed.addEventListener('click', () => {
        strayCat.feed(htmlElements.feedRng.value);
        changeDescription();
    });
    htmlElements.btnSleep.addEventListener('click', () => {
        strayCat.sleep(htmlElements.sleepRng.value);
        changeDescription();
    });
    htmlElements.btnPet.addEventListener('click', () => {
        strayCat.pet(htmlElements.petRng.value);
        changeDescription();
    });
}



// Function zum Ändern der Beschreibung ----------------------------------------------
const changeDescription = () => {
    htmlElements.description.innerHTML = `<ul>${strayCat.statusPrintOut()}</ul>`;
    htmlElements.image.src = strayCat.image;
    htmlElements.title.innerHTML = `Mein Name ist ${strayCat.name}`;
};

