

import $ from "jquery";
import mouseWheel from "jquery-mousewheel";
import mCustomScrollbar from "malihu-custom-scrollbar-plugin";

import HOME from "./index";
// console.log($("ul").html());
mouseWheel($);
mCustomScrollbar($);

$("ul").mCustomScrollbar();
