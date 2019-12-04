class Car{
    constructor(){
        this.description = "normal car";
        this.price = 5000;
    }

    get_description(){
        return this.description;
    }

    get_Price(){
        return this.price;
    }
}

class Bugati extends Car{
    constructor(){
        super();
        this.description = "bugati";
        this.price = 10000;
    }
}

class BMW extends Car{
    constructor(){
        super();
        this.description = "bmw";
        this.price = 20000;
    }
}

/*   decorator   */

class CarOption extends Car {  //act like abstract class
    constructor(carObj){
        super();
        this.decoratingCar = carObj;
    }
}

class AI_CarOption extends CarOption{
    constructor(carObj){
        super(carObj);
        
        //decorating the current car
        this.description = this.decoratingCar.description + " with AI ";
        this.price = this.decoratingCar.price + 5000;
    }
}

class Wings_CarOption extends CarOption {
    constructor(carObj){
        super(carObj);

        //decorating the current car
        this.description = this.decoratingCar.description + " with Wings ";
        this.price = this.decoratingCar.price + "5000";
    }
}

let randomCar = new Bugati();
randomCar = new AI_CarOption(randomCar);
randomCar = new Wings_CarOption(randomCar);
randomCar = new Wings_CarOption(randomCar);

console.log(randomCar.get_description());