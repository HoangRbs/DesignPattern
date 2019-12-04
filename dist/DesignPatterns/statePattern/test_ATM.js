"use strict";

var _require = require('./ATM_Machine'),
    ATM_Machine = _require.ATM_Machine;

function main() {
  var m_atmMachine = new ATM_Machine();
  m_atmMachine.insertCard();
  m_atmMachine.insertPin(1234);
  m_atmMachine.requestMoney(400);
}

module.exports = main;