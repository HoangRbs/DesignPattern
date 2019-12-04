"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HasCard_State = require('./states/HasCard_State');

var NoCard_State = require('./states/NoCard_State');

var HasPin_State = require('./states/HasPin_State');

var NoMoney_State = require('./states/NoMoney_State');

var ATM_Machine =
/*#__PURE__*/
function () {
  function ATM_Machine() {
    _classCallCheck(this, ATM_Machine);

    this.insideMoney = 2000;
    this.hasCard_State = new HasCard_State(this);
    this.noCard_State = new NoCard_State(this);
    this.hasPin_State = new HasPin_State(this);
    this.noMoney_State = new NoMoney_State(this);
    this.currentState = this.noCard_State;
  }

  _createClass(ATM_Machine, [{
    key: "insertCard",
    value: function insertCard() {
      this.currentState.insertCard();
    }
  }, {
    key: "ejectCard",
    value: function ejectCard() {
      this.currentState.ejectCard();
    }
  }, {
    key: "insertPin",
    value: function insertPin(enteredPin) {
      this.currentState.insertPin(enteredPin);
    }
  }, {
    key: "requestMoney",
    value: function requestMoney(moneyAmount) {
      this.currentState.requestMoney(moneyAmount);
    }
  }, {
    key: "changeState",
    value: function changeState(state) {
      this.currentState = state;
    }
  }, {
    key: "get_hasCard_State",
    value: function get_hasCard_State() {
      return this.hasCard_State;
    }
  }, {
    key: "get_noCard_State",
    value: function get_noCard_State() {
      return this.noCard_State;
    }
  }, {
    key: "get_hasPin_State",
    value: function get_hasPin_State() {
      return this.hasPin_State;
    }
  }, {
    key: "get_noMoney_State",
    value: function get_noMoney_State() {
      return this.noMoney_State;
    }
  }, {
    key: "get_insideMoney",
    value: function get_insideMoney() {
      return this.insideMoney;
    }
  }, {
    key: "set_insideMoney",
    value: function set_insideMoney(money) {
      this.insideMoney = money;
    }
  }]);

  return ATM_Machine;
}();

module.exports = {
  ATM_Machine: ATM_Machine
};