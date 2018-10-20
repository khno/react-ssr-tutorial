webpackJsonp([0],{

/***/ "./client/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/_react@16.5.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/_react-dom@16.5.2@react-dom/index.js");

var _index = __webpack_require__("./client/components/homepage/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// render(<HomePage/>,document.getElementById('app'));
(0, _reactDom.hydrate)(_react2.default.createElement(_index2.default, null), document.getElementById("app"));

/***/ }),

/***/ "./client/components/homepage/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/_react@16.5.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("渲染了HomePage");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "h1",
        null,
        "Hello React SSR66"
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ })

},["./client/app.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2hvbWVwYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFDQTtBQUNBLHVCQUFRLDhCQUFDLGVBQUQsT0FBUixFQUFzQkEsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF0QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7OztJQUNxQkMsUTs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0Q7Ozs7RUFObUNDLGdCQUFNQyxTOztrQkFBdkJKLFEiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZXBhZ2UvaW5kZXguanNcIjtcbi8vIHJlbmRlcig8SG9tZVBhZ2UvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuaHlkcmF0ZSg8SG9tZVBhZ2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwi5riy5p+T5LqGSG9tZVBhZ2VcIik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+SGVsbG8gUmVhY3QgU1NSNjY8L2gxPjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvaG9tZXBhZ2UvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9