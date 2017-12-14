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
        className: "jsx-1585879341" + " " + "grid-container",
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
        className: "jsx-1585879341",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Reactor"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", className: "jsx-1585879341",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), props.children, _react2.default.createElement("div", {
        className: "jsx-1585879341" + " " + "footer",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, "Footer"), _react2.default.createElement(_style2.default, {
        styleId: "1585879341",
        css: "*{padding:0px;margin:0px;box-sizing:border-box;box-shadow:200px;}.grid-container{display:grid;}.row{display:grid;}h1{font-size:50px;color:#ffffff;}h2{font-size:32px;color:#e43c4b;}h3{font-size:24px;color:#272727;}h4{font-size:20px;color:#272727;}h5{font-size:18px;color:#413d3d;}p{font-size:16px;color:#1e3656;color:grey;}.footer{color:white;background-color:darkBlue;text-align:center;}@media only screen and (min-width:500px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHb0IsQUFNQyxBQUdBLEFBR0UsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBS0gsWUFwQ0QsQUFxQ2UsQ0EvQjdCLEFBR0EsRUFHaUIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLFFBL0JTLE1BWTFCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJYyxTQUtPLEVBSnJCLEtBaENxQixXQXFDckIsTUFwQ0EiLCJmaWxlIjoicGFnZXMvY29tcHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmdlbGx5ZGVqZXN1cy9Eb2N1bWVudHMvZGV2L3JlYWN0LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4oXG48ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFjdG9yPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxuICAgIDwvSGVhZD5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPkZvb3RlcjwvZGl2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgKntcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDIwMHB4O1xuICAgIH1cbiAgICAuZ3JpZC1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICB9XG4gICAgLnJvd3tcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOjUwcHg7XG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgfVxuICAgIGgye1xuICAgICAgICBmb250LXNpemU6MzJweDtcbiAgICAgICAgY29sb3I6I2U0M2M0YjtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICBjb2xvcjojMjcyNzI3O1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgIGNvbG9yOiMyNzI3Mjc7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgY29sb3I6IzQxM2QzZDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGNvbG9yOiMxZTM2NTY7XG4gICAgICAgIGNvbG9yOmdyZXk7XG4gICAgfVxuICAgIC5mb290ZXJ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtCbHVlO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgLyogc3R5bGVzICovXG4gICAgICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+IFxuKSJdfQ== */\n/*@ sourceURL=pages/comps/Layout.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNmLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Ysb0RBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztzQkFBQTt3QkFITixBQUNJLEFBRUUsQUFFRztBQUZIO2VBSE4sQUFLZSxBQUNYLDBCQUFBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUE7QUFBQTtBQUFBLE9BTkosQUFNSTtpQkFOSjthQURlLEFBQ2Y7QUFBQTtBQURBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5nZWxseWRlamVzdXMvRG9jdW1lbnRzL2Rldi9yZWFjdC10ZXN0In0=