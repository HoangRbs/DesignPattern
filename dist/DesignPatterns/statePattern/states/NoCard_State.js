"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require('./ATM_State'),
    ATM_State = _require.ATM_State;

module.exports =
/*#__PURE__*/
function (_ATM_State) {
  _inherits(NoCard_State, _ATM_State);

  function NoCard_State(atmMachine) {
    _classCallCheck(this, NoCard_State);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoCard_State).call(this, atmMachine));
  }

  _createClass(NoCard_State, [{
    key: "insertCard",
    value: function insertCard() {
      console.log('card inserted --> pls enter your pin');
      this.atmMachine.changeState(this.atmMachine.get_hasCard_State());
    }
  }, {
    key: "ejectCard",
    value: function ejectCard() {
      return console.log('no card to eject --> pls insert a card');
    }
  }, {
    key: "insertPin",
    value: function insertPin(enteredPin) {
      return console.log('pls insert a card first');
    }
  }, {
    key: "requestMoney",
    value: function requestMoney(moneyAmount) {
      return console.log('pls insert a card first');
    }
  }]);

  return NoCard_State;
}(ATM_State);