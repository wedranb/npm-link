parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.getElementStyle=function(e,t){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})]},t=exports.canUseInRepo=function(){return!!document.querySelector("div.type-javascript")||!!document.querySelector("div.type-typescript")},r=exports.stripWord=function(e){return e.substring(1,e.length-1)},n=exports.createElement=function e(t){var r,n,i;if(t.tagName){if(r=document.createElement(t.tagName),t.className&&(r.className=t.className),t.attributes)for(n in t.attributes)r.setAttribute(n,t.attributes[n]);void 0!==t.html&&(r.innerHTML=t.html)}else r=document.createDocumentFragment();if(t.text&&r.appendChild(document.createTextNode(t.text)),void 0===window.HTMLElement&&(window.HTMLElement=Element),t.childs&&t.childs.length)for(i=0;i<t.childs.length;i++)r.appendChild(t.childs[i]instanceof window.HTMLElement?t.childs[i]:e(t.childs[i]));return r},i=exports.createNPMAnchor=function(e){return n({tagName:"a",text:e,attributes:{href:"https://npmjs.com/package/"+r(e),target:"_blank"}})},o=exports.isRelativeImport=function(e){return e.includes("./")},a=exports.checkIfNpmLink=function(e){var t=Array.from(e.childNodes).filter(function(e){return e&&"A"===e.tagName&&e.href});return t&&t.length};
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./utils"),t=void 0;function n(){if((0,e.canUseInRepo)()){var r=void 0;document.querySelectorAll(".js-file-line").forEach(function(t){var n=t.querySelectorAll("span");n.forEach(function(t,o){if("from"===t.textContent||"require"===t.textContent){if(r=n[o+1],(0,e.isRelativeImport)(r.textContent))return;if((0,e.checkIfNpmLink)(r))return;var i=(0,e.createNPMAnchor)(r.textContent);i.style.color=(0,e.getElementStyle)(r,"color"),r.textContent="",r.appendChild(i)}})})}clearInterval(t),t=setInterval(function(){n()},1e3)}n();
},{"./utils":"FO+Z"}]},{},["Focm"], null)
//# sourceMappingURL=/script.map