"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Container = exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  border-radius: 20px;\n  padding: 6px 16px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  margin-left: 16px;\n  outline: none;\n  cursor: pointer;\n  border: none;\n  ", ";\n  &:disabled {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n    cursor: not-allowed;\n    pointer-events: all !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 0 50px;\n  max-width: 1300px;\n  width: 100%;\n\n  @media (max-width: 400px) {\n    padding: 0 10px;\n  }\n  @media (max-width: 991px) {\n    padding: 0 30px;\n  }\n\n  @media (min-width: 1500px) {\n    max-width: 1500px;\n  }\n\n  @media (min-width: 1800px) {\n    max-width: 1800px;\n    padding: 0 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\nhtml {\n    box-sizing: border-box;\n    font-size: 62.5%;\n\n    @media only screen and (max-width: 1200px){\n        font-size: 58%;\n    }\n    @media only screen and (min-width: 1980px){\n        font-size: 70%;\n    }\n}\n  \n  body{\n    font-family: 'Nunito', sans-serif;\n    font-weight: 400;\n    line-height: 1.6;\n    font-size: 1.6rem;\n    background: #F9F9F9;\n    color: #333;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyle;
exports["default"] = _default;

var Container = _styledComponents["default"].div(_templateObject2());

exports.Container = Container;

var handleButtonType = function handleButtonType(button) {
  switch (button) {
    case "primary":
      return "color: #fff; background: #1e633f;border:none;";

    case "secondary":
      return "color: grey; background: #fff;border:1px solid grey;";

    case "outlined":
      return "color: #1e633f; background: #fff;border:1px solid #1e633f;";

    default:
      return "color: #000; background: #eee;";
  }
};

var Button = _styledComponents["default"].button(_templateObject3(), function (_ref) {
  var button = _ref.button;
  return handleButtonType(button);
});

exports.Button = Button;