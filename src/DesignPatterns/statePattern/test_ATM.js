const {ATM_Machine} = require('./ATM_Machine');

function main (){
    const m_atmMachine = new ATM_Machine();

    m_atmMachine.insertCard();
    m_atmMachine.insertPin(1234);
    m_atmMachine.requestMoney(400);
}

module.exports = main;