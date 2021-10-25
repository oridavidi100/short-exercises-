class Cat{
    constructor(){
        this.tiredness;
        this.hunger;
        this.lonliness;
        this.happines;
        }
        sleep(number){
            this.tiredness=number
        }
        feed(number){
            this.hunger=number;
        }
        hug(number){
            this.lonliness=number;
        }
        funny(number){
            this.happines=number;
        }
        status(){
            if (this.tiredness<=5){
                console.log("your cat need to sleep")
            }
            else console.log("your cat not tird")
            if (this.hunger<=5){
                console.log("you need to feed your cat")
            }
            if (this.hug<=5||this.funny<=5){
                console.log("go play with your cat")
            }
        }
}

let citi= new Cat()
citi.hug(6)
citi.feed(3)
citi.status()