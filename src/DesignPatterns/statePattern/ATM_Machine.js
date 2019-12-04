const HasCard_State = require('./states/HasCard_State');
const NoCard_State = require('./states/NoCard_State');
const HasPin_State = require('./states/HasPin_State');
const NoMoney_State = require('./states/NoMoney_State');

class ATM_Machine {
    constructor(){
        this.insideMoney = 2000;

        this.hasCard_State = new HasCard_State(this);
        this.noCard_State = new NoCard_State(this);
        this.hasPin_State = new HasPin_State(this);
        this.noMoney_State = new NoMoney_State(this);
        
        this.currentState = this.noCard_State;
    }
    
    insertCard(){
        this.currentState.insertCard();
    }

    ejectCard(){
        this.currentState.ejectCard();
    }

    insertPin(enteredPin){
        this.currentState.insertPin(enteredPin);
    }

    requestMoney(moneyAmount){
        this.currentState.requestMoney(moneyAmount);
    }

    changeState(state){
        this.currentState = state;
    }

    get_hasCard_State(){
        return this.hasCard_State;
    }

    get_noCard_State(){
        return this.noCard_State;
    }

    get_hasPin_State(){
        return this.hasPin_State;
    }

    get_noMoney_State(){
        return this.noMoney_State;
    }

    get_insideMoney(){
        return this.insideMoney;
    }

    set_insideMoney(money){
        this.insideMoney = money;
    }
}

module.exports = {
    ATM_Machine
}