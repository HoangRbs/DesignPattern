"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car() {
    _classCallCheck(this, Car);

    this.description = "normal car";
    this.price = 5000;
  }

  _createClass(Car, [{
    key: "get_description",
    value: function get_description() {
      return this.description;
    }
  }, {
    key: "get_Price",
    value: function get_Price() {
      return this.price;
    }
  }]);

  return Car;
}();

var Bugati =
/*#__PURE__*/
function (_Car) {
  _inherits(Bugati, _Car);

  function Bugati() {
    var _this;

    _classCallCheck(this, Bugati);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bugati).call(this));
    _this.description = "bugati";
    _this.price = 10000;
    return _this;
  }

  return Bugati;
}(Car);

var BMW =
/*#__PURE__*/
function (_Car2) {
  _inherits(BMW, _Car2);

  function BMW() {
    var _this2;

    _classCallCheck(this, BMW);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BMW).call(this));
    _this2.description = "bmw";
    _this2.price = 20000;
    return _this2;
  }

  return BMW;
}(Car);
/*   decorator   */


var CarOption =
/*#__PURE__*/
function (_Car3) {
  _inherits(CarOption, _Car3);

  //act like abstract class
  function CarOption(carObj) {
    var _this3;

    _classCallCheck(this, CarOption);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CarOption).call(this));
    _this3.decoratingCar = carObj;
    return _this3;
  }

  return CarOption;
}(Car);

var AI_CarOption =
/*#__PURE__*/
function (_CarOption) {
  _inherits(AI_CarOption, _CarOption);

  function AI_CarOption(carObj) {
    var _this4;

    _classCallCheck(this, AI_CarOption);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AI_CarOption).call(this, carObj)); //decorating the current car

    _this4.description = _this4.decoratingCar.description + " with AI ";
    _this4.price = _this4.decoratingCar.price + 5000;
    return _this4;
  }

  return AI_CarOption;
}(CarOption);

var Wings_CarOption =
/*#__PURE__*/
function (_CarOption2) {
  _inherits(Wings_CarOption, _CarOption2);

  function Wings_CarOption(carObj) {
    var _this5;

    _classCallCheck(this, Wings_CarOption);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Wings_CarOption).call(this, carObj)); //decorating the current car

    _this5.description = _this5.decoratingCar.description + " with Wings ";
    _this5.price = _this5.decoratingCar.price + "5000";
    return _this5;
  }

  return Wings_CarOption;
}(CarOption);

var randomCar = new Bugati();
randomCar = new AI_CarOption(randomCar);
randomCar = new Wings_CarOption(randomCar);
randomCar = new Wings_CarOption(randomCar);
console.log(randomCar.get_description());