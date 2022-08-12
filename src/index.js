class Cat{
    #name;
    #tiredness;
    #hunger;
    #loveliness;
    #happiness;
    #image;

    constructor(name){
        this.#name = name;
        this.#tiredness = Math.floor((Math.random() * 100)+1);
        this.#hunger = Math.floor((Math.random() * 100)+1);
        this.#loveliness = Math.floor((Math.random() * 100)+1);
        this.#happiness = Math.floor((Math.random() * 100)+1);
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

    get name(){ return this.#name; }
    get tiredness(){ return this.#tiredness; }
    get hunger(){ return this.#hunger; }
    get loveliness(){ return this.#loveliness; }
    get happiness(){ return this.#happiness; }
    get image(){ return this.#image; }

    feed(footBites){
        if(this.#hunger < 0){
            this.#tiredness++;
            this.#hunger -= footBites;
            return;
        }else if(this.#hunger >= 0){
            this.#hunger -= footBites;
            this.#happiness += footBites;
            this.#loveliness++;
        }
    }

    sleep(hours){
        this.#happiness+= hours;
        this.#hunger += (hours/0.5);
        this.#loveliness ++;
        this.#tiredness -= hours;
    }

    pet(minutes){
        this.#loveliness += (minutes*2)
        this.#happiness ++;
        this.#hunger++;
        this.#tiredness += minutes;
    }

    statusPrintOut(){
        return(`<li>Ich bin ${this.checkStatus(this.tiredness)} (${this.tiredness}) müde.</li>
        <li>Ich bin ${this.checkStatus(this.hunger)} (${this.hunger}) hungrig.</li>
        <li>Ich bin ${this.checkStatus(this.loveliness)} (${this.loveliness}) verschmust.</li>
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
                return 'keine Ahnung, wie sehr, aber immer etwas';
        }
    }

}
const names = ["Mimi", "Mausi", "Mizi", "Felix", "Katerlein"];
const catName = Math.floor(Math.random() * names.length);
const strayCat = new Cat(names[catName]);
strayCat.sleep(8);
strayCat.feed(30);
strayCat.statusPrintOut();
strayCat.pet(15);
strayCat.statusPrintOut();

const title = document.querySelector('#cat-title');
const description = document.querySelector('#cat-description');
const image = document.querySelector('#cat-image');
image.src = strayCat.image;
title.innerHTML = `Mein Name ist ${strayCat.name}`;
description.innerHTML = `<ul>${strayCat.statusPrintOut()}</ul>`;
