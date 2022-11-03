// ==UserScript==
// @name         Der Standard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.derstandard.at/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=derstandard.at
// @grant        none
// ==/UserScript==

function oneSecondFunction() {
    document.body.classList.remove('tp-modal-open');
    const blur = document.querySelector('body > div.tp-backdrop.tp-active');
    if (blur != null) {
        blur.remove();
    }
    const popup = document.querySelector('body > div.tp-modal');
    if (popup != null) {
        popup.style.overflow = "scroll !important";
        popup.style.overflowX = "scroll !important";
        popup.remove();
    }
}

(function() {
    'use strict';
    setInterval(oneSecondFunction, 100);
})();
