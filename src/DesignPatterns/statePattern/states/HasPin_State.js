const {ATM_State} = require('./ATM_State');

module.exports = class HasPin_State extends ATM_State {
    constructor(atmMachine){
        super(atmMachine);
    }

    insertCard(){
        return console.log('card is already inserted');
    }

    ejectCard(){
        console.log('your card is being rejected');
        return this.atmMachine.changeState(this.atmMachine.get_noCard_State());
    }

    insertPin(enteredPin){
        return console.log('you already entered you pin');
    }

    requestMoney(moneyAmount){
        
        if(moneyAmount > this.atmMachine.get_insideMoney()){
            return console.log(`we don't have that much cash available`);
        }

        console.log('withdrawing your money');
        this.atmMachine.set_insideMoney(this.atmMachine.get_insideMoney() - moneyAmount);
        console.log(`atm machine money left: ${this.atmMachine.get_insideMoney()}`);

        if(this.atmMachine.get_insideMoney() <= 0){
            console.log(' no money left ');
            return this.atmMachine.changeState(this.atmMachine.get_noMoney_State());
        }

        console.log('ejecting your card');
        return this.atmMachine.changeState(this.atmMachine.get_noCard_State());
    }
}