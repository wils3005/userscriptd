// ==UserScript==
// @name        User Script Daemon Client
// @namespace   9d890fd8-d20a-42ae-a7fa-3c046b61d26b
// @match       *://*/*
// @grant       GM_xmlhttpRequest
// @version     1.0
// ==/UserScript==

const main = function () {
  GM_xmlhttpRequest({
    method: "GET",
    onload: ({ response }) => console.debug(response),
    url: "http://127.0.0.1:65432",
  });
};

addEventListener("load", () => void main());
