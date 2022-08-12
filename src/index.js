class Cat{
    #tiredness;
    #hunger;
    #loveliness;
    #happiness;

    constructor(){
        this.#tiredness = 0;
        this.#hunger = 100;
        this.#loveliness = 0;
        this.#happiness = 0;
    }

    get tiredness(){ return this.#tiredness; }
    get hunger(){ return this.#hunger; }
    get loveliness(){ return this.#loveliness; }
    get happiness(){ return this.#happiness; }

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
        this.#hunger += (hours/2);
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
        console.log(`My  tiredness is ${this.tiredness}`);
        console.log(`My  hunger is ${this.hunger}`);
        console.log(`My  loveliness is ${this.loveliness}`);
        console.log(`My  happiness is ${this.happiness}`);
    }

}

const mimi = new Cat();
mimi.sleep(8);
mimi.feed(5);
mimi.statusPrintOut();
mimi.pet(15);
mimi.statusPrintOut();