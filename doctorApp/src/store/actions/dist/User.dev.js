"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.userLoaded = exports.loadingUser = exports.createUser = exports.logout = exports.userLogged = void 0;

var _ActionTypes = require("./ActionTypes");

var _axios = _interopRequireDefault(require("axios"));

var _Message = require("./Message");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
var API_KEY = 'AIzaSyDHIUKoCidl2nc156NJ688D5MZUIRj1j48';

var userLogged = function userLogged(user) {
  return {
    type: _ActionTypes.USER_LOGGED_IN,
    payload: user
  };
};

exports.userLogged = userLogged;

var logout = function logout() {
  return {
    type: _ActionTypes.USER_LOGGED_OUT
  };
};

exports.logout = logout;

var createUser = function createUser(user) {
  return function (dispatch) {
    dispatch(loadingUser());

    _axios["default"].post("".concat(authBaseURL, "/signupNewUser?key=").concat(API_KEY), {
      email: user.email,
      senha: user.senha,
      returnSecureToken: true
    })["catch"](function (err) {
      dispatch((0, _Message.setMessage)({
        title: 'Erro',
        text: "N\xE3o foi possivel fazer o cadastro erro ".concat(err, " ").concat(user.email)
      }));
    }).then(function (res) {
      if (res.data.localId) {
        _axios["default"].put("/users/".concat(res.data.localId, ".json"), {
          nome: user.nome
        })["catch"](function (err) {
          dispatch((0, _Message.setMessage)({
            title: 'Erro',
            text: 'Não foi possivel fazer o cadastro erro 2'
          }));
        }).then(function () {
          dispatch(login(user));
        });
      }
    });
  };
};

exports.createUser = createUser;

var loadingUser = function loadingUser() {
  return {
    type: _ActionTypes.LOADING_USER
  };
};

exports.loadingUser = loadingUser;

var userLoaded = function userLoaded() {
  return {
    type: _ActionTypes.USER_LOADED
  };
};

exports.userLoaded = userLoaded;

var login = function login(user) {
  return function (dispatch) {
    dispatch(loadingUser());

    _axios["default"].post("".concat(authBaseURL, "/verifyPassword?key=").concat(API_KEY), {
      email: user.email,
      senha: user.senha,
      returnSecureToken: true
    })["catch"](function (err) {
      dispatch((0, _Message.setMessage)({
        title: 'Erro',
        text: 'Não foi possivel fazer o login, tente novamente mais tarde!'
      }));
    }).then(function (res) {
      if (res.data.localId) {
        user.token = res.data.idToken;

        _axios["default"].get("/users/".concat(res.data.localId, ".json"))["catch"](function (err) {
          dispatch((0, _Message.setMessage)({
            title: 'Erro',
            text: 'Não foi possivel fazer o login, tente novamente mais tarde'
          }));
        }).then(function (res) {
          delete user.senha;
          user.nome = res.data.nome;
          dispatch(userLogged(user));
          dispatch(userLoaded());
        });
      }
    });
  };
};

exports.login = login;