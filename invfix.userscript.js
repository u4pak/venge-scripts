// ==UserScript==
// @name Social Hub Inventory Fix
// @namespace https://u4pak.dev/
// @version 1.0
// @description Fix the social hub inventory not working.
// @author shady#9999
// @match https://social.venge.io/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=venge.io
// @grant none
// ==/UserScript==

var oldOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
    if (arguments[1] == "https://gateway.venge.io/?request=get_inventory") {
        arguments[1] = "https://gateway.venge.io/?request=get_inventory_v2";
    }
    oldOpen.apply(this, arguments);
}
