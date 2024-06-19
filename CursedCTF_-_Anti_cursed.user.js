// ==UserScript==
// @name         CursedCTF -> Anti cursed CTF
// @description  A script to remove the browser ponies and makes the cursed ctf normal again.
// @version      1.0
// @description  Stop. Being. Cursed.
// @author       Ha1fdan
// @namespace    https://github.com/ha1fdan/userscripts
// @license      MIT
// @match        https://ctf.cursedc.tf/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeBrowserPonies() {
        var browserPoniesElement = document.getElementById('browser-ponies');
        if (browserPoniesElement) {
            browserPoniesElement.parentNode.removeChild(browserPoniesElement);
        }
    }
    removeBrowserPonies();

    var elements = document.querySelectorAll('.c0121');
    elements.forEach(function(element) {
        var secondChildDiv = element.querySelector('div:nth-child(2)');
        if (secondChildDiv) {
            secondChildDiv.remove();
        }
    });

    var browserPoniesInterval = setInterval(function() {
        var browserPoniesElement = document.getElementById('browser-ponies');
        if (browserPoniesElement) {
            browserPoniesElement.style.display = 'none';
            clearInterval(browserPoniesInterval);
        }
    }, 1200);

    var styleTag = document.createElement('style');
    styleTag.textContent = '.c0121 { cursor: default !important; }';
    document.head.appendChild(styleTag);
})();
