const {ATM_State} = require('./ATM_State');

module.exports = class NoCard_State extends ATM_State {
    constructor(atmMachine){
        super(atmMachine);
    }

    insertCard(){
        console.log('card inserted --> pls enter your pin');
        this.atmMachine.changeState(this.atmMachine.get_hasCard_State());
    }

    ejectCard(){
        return console.log('no card to eject --> pls insert a card');
    }

    insertPin(enteredPin){
        return console.log('pls insert a card first');
    }

    requestMoney(moneyAmount){
        return console.log('pls insert a card first');
    }
}