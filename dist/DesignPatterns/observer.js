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

//observerInterface
var Server =
/*#__PURE__*/
function () {
  function Server() {
    _classCallCheck(this, Server);
  }

  _createClass(Server, [{
    key: "addUser",
    value: function addUser(user) {}
  }, {
    key: "removeUser",
    value: function removeUser(user) {}
  }, {
    key: "update_users",
    value: function update_users() {}
  }]);

  return Server;
}();

var GameServer =
/*#__PURE__*/
function (_Server) {
  _inherits(GameServer, _Server);

  function GameServer() {
    var _this;

    _classCallCheck(this, GameServer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameServer).call(this));
    _this.usersNum = 0;
    _this.users = new Array();
    return _this;
  }

  _createClass(GameServer, [{
    key: "addUser",
    value: function addUser(user) {
      this.users.push(user);
      this.usersNum++;
      this.update_users(this.usersNum);
    }
  }, {
    key: "removeUser",
    value: function removeUser(user) {
      var userIndex = this.users.indexOf(user);
      this.users.splice(userIndex, 1);
      this.usersNum--;
    }
  }, {
    key: "update_users",
    value: function update_users(usersNum) {
      this.users.forEach(function (user) {
        user.update(usersNum);
      });
    }
  }]);

  return GameServer;
}(Server); //observer 


var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: "update",
    value: function update(usersNum) {}
  }]);

  return User;
}();

var Player =
/*#__PURE__*/
function (_User) {
  _inherits(Player, _User);

  function Player(Server) {
    var _this2;

    _classCallCheck(this, Player);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this));
    Server.addUser(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(usersNum) {
      console.log("GameServer Players: ".concat(usersNum));
    }
  }]);

  return Player;
}(User);

module.exports = function () {
  var m_gameServer = new GameServer();

  for (var i = 0; i < 10; i++) {
    var m_player = new Player(m_gameServer);
  }
};