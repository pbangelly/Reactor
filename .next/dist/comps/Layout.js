"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/angellydejesus/Documents/dev/react-test/comps/Layout.js";

exports.default = function (props) {
    return _react2.default.createElement("div", {
        className: "jsx-1094330253",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("title", {
        className: "jsx-1094330253",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Reactor"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", className: "jsx-1094330253",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement("div", {
        className: "jsx-1094330253" + " " + "header",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement("div", {
        className: "jsx-1094330253" + " " + "container",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement("span", {
        className: "jsx-1094330253",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, "Reactor"))), props.children, _react2.default.createElement("footer", {
        className: "jsx-1094330253",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, "Footer"), _react2.default.createElement(_style2.default, {
        styleId: "2899392934",
        css: "*{padding:0px;margin:0px;box-sizing:border-box;}.container{max-width:90%;margin:0 auto;}.row{display:grid;}h1{font-size:50px;color:#ffffff;}h2{font-size:32px;color:#e43c4b;}h3{font-size:24px;color:#272727;}h4{font-size:20px;color:#272727;}h5{font-size:18px;color:#413d3d;}p{font-size:16px;color:#1e3656;color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFHb0IsQUFLRyxBQUlGLEFBR0UsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLFlBL0JKLENBU2QsQ0FKa0IsQ0FPRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsUUEvQlMsS0FLMUIsQ0FPQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSWMsV0FDZCxLQWhDQSIsImZpbGUiOiJjb21wcy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcmVhY3QtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PihcbjxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVhY3RvcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlJlYWN0b3I8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Zm9vdGVyPkZvb3RlcjwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgKntcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5yb3d7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOjMycHg7XG4gICAgICAgIGNvbG9yOiNlNDNjNGI7XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LXNpemU6MjRweDtcbiAgICAgICAgY29sb3I6IzI3MjcyNztcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICBjb2xvcjojMjcyNzI3O1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGNvbG9yOiM0MTNkM2Q7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICBjb2xvcjojMWUzNjU2O1xuICAgICAgICBjb2xvcjpncmV5O1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYuaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ZGFya0JsdWU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4pIl19 */\n/*@ sourceURL=comps/Layout.js */"
    }), _react2.default.createElement(_style2.default, {
        styleId: "4046675394",
        css: "div.header.jsx-1094330253{position:absolute;color:white;width:100%;display:block;}span.jsx-1094330253{display:inline-block;margin-top:1em;font-size:1.5rem;}footer.jsx-1094330253{color:white;background-color:darkBlue;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGdCLEFBRytCLEFBTUcsQUFLVixZQUNjLE1BWGIsR0FNRSxTQUxILE1BTU0sRUFLQSxHQVZILFlBTWxCLEVBTEEsQ0FVQSIsImZpbGUiOiJjb21wcy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcmVhY3QtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PihcbjxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVhY3RvcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlJlYWN0b3I8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Zm9vdGVyPkZvb3RlcjwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgKntcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5yb3d7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOjMycHg7XG4gICAgICAgIGNvbG9yOiNlNDNjNGI7XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LXNpemU6MjRweDtcbiAgICAgICAgY29sb3I6IzI3MjcyNztcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICBjb2xvcjojMjcyNzI3O1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGNvbG9yOiM0MTNkM2Q7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICBjb2xvcjojMWUzNjU2O1xuICAgICAgICBjb2xvcjpncmV5O1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYuaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ZGFya0JsdWU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4pIl19 */\n/*@ sourceURL=comps/Layout.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNmLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREYsQUFDRSxBQUNBLG9EQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7c0JBQUE7d0JBSE4sQUFDSSxBQUVFLEFBRUY7QUFGRTt5QkFFRixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BUFosQUFLSSxBQUNJLEFBQ0ksQUFHUCxvQkFWTCxBQVVXLEFBQ1AsMEJBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BWEosQUFXSTtpQkFYSjthQUFBO0FBQUE7aUJBQUE7YUFEZSxBQUNmO0FBQUE7QUFEQSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcmVhY3QtdGVzdCJ9