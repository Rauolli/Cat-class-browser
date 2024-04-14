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
        this.#tiredness = Math.floor((Math.random() * 100)+1);
        this.#hunger = Math.floor((Math.random() * 100)+1);
        this.#cuddliness = Math.floor((Math.random() * 100)+1);
        this.#happiness = Math.floor((Math.random() * 100)+1);

        // this.#tiredness = 100;
        // this.#hunger = 100;
        // Anstatt: Loneliness -> habe ich so entschieden
        // this.#cuddliness = 0;
        // this.#happiness = 0;

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
        // in nubmber wandeln
        this.#tiredness -= parseInt(hours);
    }

    pet(minutes){
        // in Number wandeln
        const minInt = parseInt(minutes);
        // vorerst keine weitere Logik
        this.#cuddliness += minInt;
        this.#happiness += minInt;
        //this.#tiredness += minInt/4;
    }

    statusPrintOut(){
        return(`<li>Ich bin ${this.checkStatus(this.hunger)} (${this.hunger}) hungrig.</li>
        <li>Ich bin ${this.checkStatus(this.tiredness)} (${this.tiredness}) müde.</li>  
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

export default Cat;