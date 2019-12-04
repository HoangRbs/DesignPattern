const {ATM_State} = require('./ATM_State');

module.exports = class NoMoney_State extends ATM_State {
    constructor(atmMachine){
        super(atmMachine);
    }

    insertCard(){
        console.log('there is no money left');
        return console.log('you already insert your card');
    }

    ejectCard(){
        console.log('there is no money left');
        console.log(' ejecting your card ');
        return this.atmMachine.changeState(this.atmMachine.get_noCard_State());
    }

    insertPin(enteredPin){
        console.log('there is no money left');
        return console.log('you already entered your pin');
    }

    requestMoney(moneyAmount){
        return console.log('there is no money left');
    }
}