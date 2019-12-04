const {ATM_State} = require('./ATM_State');

module.exports = class HasCard_State extends ATM_State {
    constructor(atmMachine){
        super(atmMachine);
    }

    insertCard(){
        return console.log('card already inserted');
    }

    ejectCard(){
        console.log('card is being rejected');
        this.atmMachine.changeState(this.atmMachine.get_noCard_State());
    }

    insertPin(enteredPin){

        if(enteredPin == '1234'){
            console.log('you entered the correct Pin');
            return this.atmMachine.changeState(this.atmMachine.get_hasPin_State());
        }

        console.log('you entered the wrong pin');
        console.log('your card is being ejected');
        return this.atmMachine.changeState(this.atmMachine.get_noCard_State());
    }

    requestMoney(moneyAmount){
        return console.log('pls entered your pin first');
    }
}