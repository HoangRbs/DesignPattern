"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//interface
var ATM_State =
/*#__PURE__*/
function () {
  function ATM_State(atmMachine) {
    _classCallCheck(this, ATM_State);

    this.atmMachine = atmMachine;
  }

  _createClass(ATM_State, [{
    key: "insertCard",
    value: function insertCard() {}
  }, {
    key: "ejectCard",
    value: function ejectCard() {}
  }, {
    key: "insertPin",
    value: function insertPin(enteredPin) {}
  }, {
    key: "requestMoney",
    value: function requestMoney(moneyAmount) {}
  }]);

  return ATM_State;
}();

module.exports = {
  ATM_State: ATM_State
};