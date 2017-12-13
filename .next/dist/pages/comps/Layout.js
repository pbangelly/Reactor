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

var _jsxFileName = "/Users/angellydejesus/Documents/dev/react-test/pages/comps/Layout.js";

exports.default = function (props) {
    return _react2.default.createElement("div", {
        className: "jsx-76362760" + " " + "grid-container",
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
        className: "jsx-76362760",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Reactor"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", className: "jsx-76362760",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), props.children, _react2.default.createElement("div", {
        className: "jsx-76362760" + " " + "footer",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, "Footer"), _react2.default.createElement(_style2.default, {
        styleId: "76362760",
        css: "*{padding:0px;margin:0px;box-sizing:border-box;}.grid-container{display:grid;}@media only screen and (min-width:500px){h1{font-size:50px;color:#ffffff;}h2{font-size:32px;color:#e43c4b;}h3{font-size:24px;color:#272727;}h4{font-size:20px;color:#272727;}h5{font-size:18px;color:#413d3d;}p{font-size:16px;color:#1e3656;color:grey;}.footer{color:white;background-color:darkBlue;padding:20px;margin-top:20px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHb0IsQUFLQyxBQU9FLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUtILFlBcENELEFBcUNlLENBaEM3QixFQU9pQixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsUUEvQlMsTUFZMUIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUljLFNBS0UsRUFKaEIsS0FoQ0EsTUFxQ21CLGdCQUNFLGtCQUNyQiIsImZpbGUiOiJwYWdlcy9jb21wcy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZ2VsbHlkZWplc3VzL0RvY3VtZW50cy9kZXYvcmVhY3QtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PihcbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlYWN0b3I8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+Rm9vdGVyPC9kaXY+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAqe1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLmdyaWQtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgIC8qIGdyaWQgZGVjbGFyYXRpb24gc3R5bGVzICovXG4gICAgICAgICAgIH1cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOjUwcHg7XG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgfVxuICAgIGgye1xuICAgICAgICBmb250LXNpemU6MzJweDtcbiAgICAgICAgY29sb3I6I2U0M2M0YjtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICBjb2xvcjojMjcyNzI3O1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgIGNvbG9yOiMyNzI3Mjc7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgY29sb3I6IzQxM2QzZDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGNvbG9yOiMxZTM2NTY7XG4gICAgICAgIGNvbG9yOmdyZXk7XG4gICAgfVxuICAgIC5mb290ZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtCbHVlO1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4pIl19 */\n/*@ sourceURL=pages/comps/Layout.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNmLGNBQUE7MENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Ysb0RBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztzQkFBQTt3QkFITixBQUNJLEFBRUUsQUFFRztBQUZIO2VBSE4sQUFLZSxBQUNYLDBCQUFBLGNBQUE7MENBQUEsQUFBZTs7c0JBQWY7d0JBQUE7QUFBQTtBQUFBLE9BTkosQUFNSTtpQkFOSjthQURlLEFBQ2Y7QUFBQTtBQURBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5nZWxseWRlamVzdXMvRG9jdW1lbnRzL2Rldi9yZWFjdC10ZXN0In0=