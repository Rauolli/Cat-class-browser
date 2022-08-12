class Cat{
    #name;
    #tiredness;
    #hunger;
    #cuddliness;
    #happiness;
    #image;

    constructor(name){
        this.#name = name;
        // Zufallszahlen 0 - 100 -> erstmal auskommentiert ***********************
        // this.#tiredness = Math.floor((Math.random() * 100)+1);
        // this.#hunger = Math.floor((Math.random() * 100)+1);
        // this.#cuddliness = Math.floor((Math.random() * 100)+1);
        // this.#happiness = Math.floor((Math.random() * 100)+1);

        this.#tiredness = 100;
        this.#hunger = 100;
        // Anstatt: Loneliness -> habe ich so entschieden
        this.#cuddliness = 0;
        this.#happiness = 0;

        const img = Math.floor((Math.random()* 3)+1 );
        switch(img){
            case 1:
                this.#image = './src/img/cat1.png';
                break;
            case 2:
                this.#image = './src/img/cat2.png';
                break;
            case 3:
                this.#image = './src/img/cat3.png';
                break;
            default:
                this.#image = './src/img/cat3.png';
        }
    }

    // getter-Methoden
    get name(){ return this.#name; }
    get tiredness(){ return this.#tiredness; }
    get hunger(){ return this.#hunger; }
    get cuddliness(){ return this.#cuddliness; }
    get happiness(){ return this.#happiness; }
    get image(){ return this.#image; }


    feed(footBites){
        this.#hunger -= parseInt(footBites);
        // Vorerst ohne jegliche Logic
    }

    sleep(hours){
        // in nubmber wandeln und durch 2 teilen
        this.#tiredness -= parseInt(hours)/2;
    }

    pet(minutes){
        // in Number wandeln
        const minInt = parseInt(minutes);
        // vorerst keine weitere Logik
        this.#cuddliness += minInt;
        this.#happiness += minInt/2;
        this.#tiredness += minInt/4;
    }

    statusPrintOut(){
        return(`<li>Ich bin ${this.checkStatus(this.tiredness)} (${this.tiredness}) müde.</li>
        <li>Ich bin ${this.checkStatus(this.hunger)} (${this.hunger}) hungrig.</li>
        <li>Ich bin ${this.checkStatus(this.cuddliness)} (${this.cuddliness}) verschmust.</li>
        <li>Ich bin ${this.checkStatus(this.happiness)} (${this.happiness}) glücklich.</li>`);
    }

    checkStatus(value){       
        switch(true){
            case (value >= 90):
                return 'extrem';
                break;
            case (value >= 60):
                return 'sehr';
                break;
            case (value >= 25):
                return 'ein wenig';
                break;
            case (value < 25):
                return 'überhaupt nicht';
                break;
            default:
                return 'keine Ahnung, wie sehr, aber etwas';
        }
    }

}
const names = ["Mimi", "Mausi", "Mizi", "Felix", "Katerlein"];
const catName = Math.floor(Math.random() * names.length);
const strayCat = new Cat(names[catName]);

// **** verschiedene Werte zum Füttern, Schlafen, Streicheln ***
// strayCat.sleep(8);
// strayCat.feed(30);
// strayCat.statusPrintOut();
// strayCat.pet(15);
// strayCat.statusPrintOut();

// Überschrift
const title = document.querySelector('#cat-title');
// Beschreibung
const description = document.querySelector('#cat-description');
// Bild
const image = document.querySelector('#cat-image');

// Werte der Input-Range-Felder auslesen
const feedVal = document.querySelector('#feed-rng').value;
console.log(feedVal);
const sleepVal = document.querySelector('#sleep-rng').value;
console.log(sleepVal);
const petVal = document.querySelector('#pet-rng').value;

// Buttons für Füttern, Schlafen, Streicheln 
const btnFeed = document.querySelector('#feed-btn');
btnFeed.addEventListener('click', () => {
    strayCat.feed(feedVal);
    changeDescription();
});
const btnSleep = document.querySelector('#sleep-btn');
btnSleep.addEventListener('click', () => {
    strayCat.sleep(sleepVal);
    changeDescription();
});
const btnPet = document.querySelector('#pet-btn');
btnPet.addEventListener('click', () => {
    strayCat.pet(petVal);
    changeDescription();
});



// Function zum Ändern der Beschreibung ----------------------------------------------
const changeDescription = () => description.innerHTML = `<ul>${strayCat.statusPrintOut()}</ul>`;


image.src = strayCat.image;
title.innerHTML = `Mein Name ist ${strayCat.name}`;
changeDescription();
