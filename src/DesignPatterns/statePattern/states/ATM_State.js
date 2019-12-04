//interface
class ATM_State{
    constructor(atmMachine){
        this.atmMachine = atmMachine;
    }

    insertCard(){};
    ejectCard(){};
    insertPin(enteredPin){};
    requestMoney(moneyAmount){};
}

module.exports = {
    ATM_State
}