"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryMousewheel = require("jquery-mousewheel");

var _jqueryMousewheel2 = _interopRequireDefault(_jqueryMousewheel);

var _malihuCustomScrollbarPlugin = require("malihu-custom-scrollbar-plugin");

var _malihuCustomScrollbarPlugin2 = _interopRequireDefault(_malihuCustomScrollbarPlugin);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log($("ul").html());
(0, _jqueryMousewheel2.default)(_jquery2.default);
(0, _malihuCustomScrollbarPlugin2.default)(_jquery2.default);

(0, _jquery2.default)("ul").mCustomScrollbar();