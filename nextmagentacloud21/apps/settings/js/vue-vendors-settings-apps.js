(window["webpackJsonpSettings"] = window["webpackJsonpSettings"] || []).push([["vendors-settings-apps"],{

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppNavigationSpacer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppNavigationSpacer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=208)}({0:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=r(e,4),n=t[1],o=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([c]).join("\n")}return[n].join("\n")}},1:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},159:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i)()(o.a);a.push([e.i,"\n.app-navigation-spacer[data-v-42195cc8] {\n\tflex-shrink: 0;\n\torder: 1;\n\theight: 22px;\n}\n\n","",{version:3,sources:["webpack://./AppNavigationSpacer.vue"],names:[],mappings:";AAgCA;CACA,cAAA;CACA,QAAA;CACA,YAAA;AACA",sourcesContent:["\x3c!--\n - @copyright Copyright (c) 2019 Christoph Wurst <christoph@winzerhof-wurst.at>\n -\n - @author Christoph Wurst <christoph@winzerhof-wurst.at>\n -\n - @license GNU AGPL version 3 or any later version\n -\n - This program is free software: you can redistribute it and/or modify\n - it under the terms of the GNU Affero General Public License as\n - published by the Free Software Foundation, either version 3 of the\n - License, or (at your option) any later version.\n -\n - This program is distributed in the hope that it will be useful,\n - but WITHOUT ANY WARRANTY; without even the implied warranty of\n - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n - GNU Affero General Public License for more details.\n -\n - You should have received a copy of the GNU Affero General Public License\n - along with this program. If not, see <http://www.gnu.org/licenses/>.\n -\n --\x3e\n<template>\n\t<li class=\"app-navigation-spacer\" />\n</template>\n\n<script>\nexport default {\n\tname: 'AppNavigationSpacer',\n}\n<\/script>\n\n<style scoped>\n\t.app-navigation-spacer {\n\t\tflex-shrink: 0;\n\t\torder: 1;\n\t\theight: 22px;\n\t}\n\n</style>\n"],sourceRoot:""}]),t.a=a},2:function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,f="".concat(s," ").concat(u);n[s]=u+1;var l=c(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:f,updater:m(p,t),references:1}),r.push(f)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=u(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var f=c(n[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},208:function(e,t,n){"use strict";n.r(t);var r={name:"AppNavigationSpacer"},o=n(2),i=n.n(o),a=n(159),c={insert:"head",singleton:!1},s=(i()(a.a,c),a.a.locals,n(3)),u=Object(s.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("li",{staticClass:"app-navigation-spacer"})}),[],!1,null,"42195cc8",null).exports;t.default=u},3:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,c){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(e,t){return s.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))}})}));
//# sourceMappingURL=AppNavigationSpacer.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppSidebar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppSidebar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(window,(function(){return function(t){var n={};function e(A){if(n[A])return n[A].exports;var i=n[A]={i:A,l:!1,exports:{}};return t[A].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,A){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:A})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(e.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(A,i,function(n){return t[n]}.bind(null,i));return A},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=191)}([function(t,n,e){"use strict";function A(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],A=!0,i=!1,a=void 0;try{for(var o,r=t[Symbol.iterator]();!(A=(o=r.next()).done)&&(e.push(o.value),!n||e.length!==n);A=!0);}catch(t){i=!0,a=t}finally{try{A||null==r.return||r.return()}finally{if(i)throw a}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,A=new Array(n);e<n;e++)A[e]=t[e];return A}t.exports=function(t){var n=A(t,4),e=n[1],i=n[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */"),s=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(s).concat([r]).join("\n")}return[e].join("\n")}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,A){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(A)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);A&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},function(t,n,e){"use strict";var A,i=function(){return void 0===A&&(A=Boolean(window&&document&&document.all&&!window.atob)),A},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),o=[];function r(t){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},A=[],i=0;i<t.length;i++){var a=t[i],s=n.base?a[0]+n.base:a[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var d=r(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:l,updater:h(u,n),references:1}),A.push(l)}return A}function c(t){var n=document.createElement("style"),A=t.attributes||{};if(void 0===A.nonce){var i=e.nc;i&&(A.nonce=i)}if(Object.keys(A).forEach((function(t){n.setAttribute(t,A[t])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function u(t,n,e,A){var i=e?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(t.styleSheet)t.styleSheet.cssText=d(n,i);else{var a=document.createTextNode(i),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a)}}function g(t,n,e){var A=e.css,i=e.media,a=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=A;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(A))}}var p=null,m=0;function h(t,n){var e,A,i;if(n.singleton){var a=m++;e=p||(p=c(n)),A=u.bind(null,e,a,!1),i=u.bind(null,e,a,!0)}else e=c(n),A=g.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return A(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;A(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var A=0;A<e.length;A++){var i=r(e[A]);o[i].references--}for(var a=s(t,n),c=0;c<e.length;c++){var l=r(e[c]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}e=a}}}},function(t,n,e){"use strict";function A(t,n,e,A,i,a,o,r){var s,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),A&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=s):i&&(s=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(t,n){return s.call(n),l(t,n)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:c}}e.d(n,"a",(function(){return A}))},function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js")},function(t,n){t.exports=__webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js")},function(t,n,e){"use strict";n.a="data:application/vnd.ms-fontobject;base64,rg8AAOQOAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAABzczSwAAAAAAAAAAAAAAAAAAAAAAACgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwAAAAAAABYAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAKAAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBmADUANgBkADUAMQA3AAAAAAABAAAACgCAAAMAIE9TLzJ044/RAAAArAAAAGBjbWFwAA3ruAAAAQwAAAFCZ2x5ZsdHOUwAAAJQAAAH/GhlYWQtEm+6AAAKTAAAADZoaGVhJv0ThQAACoQAAAAkaG10eGe+//8AAAqoAAAANGxvY2ENvA9mAAAK3AAAAChtYXhwASAAVwAACwQAAAAgbmFtZeb6hCsAAAskAAACpnBvc3Q/VL7XAAANzAAAARYABBLKAZAABQAADGUNrAAAArwMZQ2sAAAJYAD1BQoAAAIABQMAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUGZFZABA6gHqEhOIAAABwhOIAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQAAAAAAPAADAAEAAAAcAAQAIAAAAAQABAABAADqEv//AADqAf//FgAAAQAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAAGNxOIAAUAABMHCQEXAZSUBXL6jpQFoxOIVfaR9pFVCcQAAAEAAAAAEYcPgwAFAAAJBQ/N9/P7+/5GBb8Jxw+D9/MEBf5H+kEJxgABAAAAABEXERcACwAACQsRF/3t+sD6wP3tBUD6wAITBUAFQAIT+sAEhP3tBUD6wAITBUAFQAIT+sAFQP3t+sAAAf//AAATkxLsADMAAAEiBw4BFxYXASEmBwYHBgcGFBcWFxYXFjchAQYHBhcWFx4BFxYXFjc2NwE2NzYnJicBLgEKYGVPSkYQEkgF1/HgTT46KScUFBQUJyk6Pk0OIPopNxoYAwMbGVY1Nzs+Oj81B+07FRUUFTz4Eyx0Euw5NKxZYEf6KgEbGC4sOTh4ODksLhgbAvopNT87Pjo3NlYZGgMDGBk4B+w8UVBPUjwH7C0yAAAAAgAAAAAOphJQABgARgAAASIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgEiBwYHBhQXFhcWMyERISIHBgcGFBcWFxY3ITI3Njc2NCcmJyYjIRE0JyYnJiMJdm9mYpgpKyspmGJm3mZilyorKyqXYmb8NlZIRykrKylHSFYCcf2PVkhHKSsrKUdIVgdTVUhHKSsrKUdIVf2PKylHSVUSUCsql2Nl32VimCkrKymYYmXfZWOXKiv55SspR0irSEcpK/nmKylHSapJRykrASopR0mqSUcpKwdTVUhHKSsAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAEp4L5wAYADEASgAAATIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYhMhceARcWFAcOAQcGIicuAScmNDc+ATc2Aw1wZWKYKSsrKZhiZd9mYpcqKysql2JmByZvZmKXKisrKpdiZt5mYpcqKysql2JmByZvZmKXKisrKpdiZt9lYpgpKyspmGJlC+crKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisAAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAH/4AAAE2kTaQAxAAABBAUEBQQDAgMCERATEhMSBQQFBCEgJSQlJBMSExITBgAFBCEgJSQnJicmAwIREBMSAAhs/pj+sf66/u3+7sbKa26Ae+nlATkBPAFyAX4BlgFxAWEBVgEuASrr7JmcOLz+Kf75/vP+6v6+/s7+2f37uLtjZ1BOAScTaS6Xk+nn/tf+0/6r/p/+j/5q/oL+jv7E/sfl6HyAa2jFwgENAQ4BQwFLAWnM/tpOUGdju7j7/QEnATIBQgElARMBDQHLAAIAAAAAE4gTiAAkAEAAAAEgBQQFBAMCAwIQExITEgUEBQQgJSQlJBMSExIQAwIDAiUkJSQBITIXHgEXFhQHDgEHBiMhIicuAScmNDc+ATc2CcT+av6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyAgHzo5f7H/sT+jv6C+sEHU1tXVIQkJiYkhFRXW/itXFdUhCQmJiSEVFcTiIB86OX+x/7E/o7+gvzU/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofID4ESYlhFNXuFdThCUmJiWEU1e4V1OEJSYAAAACAAAAABOIE4gAJAA9AAABIAUEBQQDAgMCEBMSExIFBAUEICUkJSQTEhMSEAMCAwIlJCUkASAFBAATEhADAgAFBCAlJAADAhATEgAlJAnE/mr+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gIB86OX+x/7E/o7+gv5qATcBFwEPAZtwdHRw/mX+8f7p/ZL+6f7x/mVwdHRwAZsBDwEXE4iAfOjl/sf+xP6O/oL81P6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyA/Bh0cP5l/vH+6f2S/un+8f5lcHR0cAGbAQ8BFwJuARcBDwGbcHQAAAACAAAAABOIE4gAAwAoAAABIREhASAFBAUEAwIDAhATEhMSBQQFBCAlJCUkExITEhADAgMCJSQlJAXcB9D4MAPo/mr+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gIB86OX+x/7E/o7+ggXcB9AF3IB86OX+x/7E/o7+gvzU/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofIAAAAEAAAABAABLMzcHXw889QALE4gAAAAA3Wjz1gAAAADdGBfX/+AAABOTE4gAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j/4P/1E5MAAQAAAAAAAAAAAAAAAAAAAAcAAAAAE4gAABOIAAATiAAAE4gAAAY2AAATiAAAAAD//wAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAiADYAWABsAIAAlAC0AQ4BfAGaAhACJgI0AkICqAMiA6YD/gABAAAAEwBLAAMAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAAAEADGAAEAAAAAAAEAFAAAAAEAAAAAAAIABwAUAAEAAAAAAAMAFAAbAAEAAAAAAAQAFAAvAAEAAAAAAAUACwBDAAEAAAAAAAYAFABOAAEAAAAAAAoAKwBiAAEAAAAAAAsAEwCNAAMAAQQJAAEAKACgAAMAAQQJAAIADgDIAAMAAQQJAAMAKADWAAMAAQQJAAQAKAD+AAMAAQQJAAUAFgEmAAMAAQQJAAYAKAE8AAMAAQQJAAoAVgFkAAMAAQQJAAsAJgG6aWNvbmZvbnQtdnVlLWY1NmQ1MTdSZWd1bGFyaWNvbmZvbnQtdnVlLWY1NmQ1MTdpY29uZm9udC12dWUtZjU2ZDUxN1ZlcnNpb24gMS4waWNvbmZvbnQtdnVlLWY1NmQ1MTdHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGYANQA2AGQANQAxADcAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGYANQA2AGQANQAxADcAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQBmADUANgBkADUAMQA3AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGYANQA2AGQANQAxADcARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwATAAABAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMRYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQKYnJlYWRjcnVtYgljaGVja21hcmsFY2xvc2UHY29uZmlybQRpbmZvBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXMQdXNlci1zdGF0dXMtYXdheQ91c2VyLXN0YXR1cy1kbmQVdXNlci1zdGF0dXMtaW52aXNpYmxlEnVzZXItc3RhdHVzLW9ubGluZQAA"},function(t,n,e){"use strict";n.a="data:font/woff;base64,d09GRgABAAAAAA8sAAoAAAAADuQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOP0WNtYXAAAAFUAAABQgAAAUIADeu4Z2x5ZgAAApgAAAf8AAAH/MdHOUxoZWFkAAAKlAAAADYAAAA2LRJvumhoZWEAAArMAAAAJAAAACQm/ROFaG10eAAACvAAAAA0AAAANGe+//9sb2NhAAALJAAAACgAAAAoDbwPZm1heHAAAAtMAAAAIAAAACABIABXbmFtZQAAC2wAAAKmAAACpub6hCtwb3N0AAAOFAAAARYAAAEWP1S+1wAEEsoBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoSE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoS//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAf/gAAATaRNpADEAAAEEBQQFBAMCAwIREBMSExIFBAUEISAlJCUkExITEhMGAAUEISAlJCcmJyYDAhEQExIACGz+mP6x/rr+7f7uxsprboB76eUBOQE8AXIBfgGWAXEBYQFWAS4BKuvsmZw4vP4p/vn+8/7q/r7+zv7Z/fu4u2NnUE4BJxNpLpeT6ef+1/7T/qv+n/6P/mr+gv6O/sT+x+XofIBraMXCAQ0BDgFDAUsBacz+2k5QZ2O7uPv9AScBMgFCASUBEwENAcsAAgAAAAATiBOIACQAQAAAASAFBAUEAwIDAhATEhMSBQQFBCAlJCUkExITEhADAgMCJSQlJAEhMhceARcWFAcOAQcGIyEiJy4BJyY0Nz4BNzYJxP5q/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofICAfOjl/sf+xP6O/oL6wQdTW1dUhCQmJiSEVFdb+K1cV1SEJCYmJIRUVxOIgHzo5f7H/sT+jv6C/NT+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gPgRJiWEU1e4V1OEJSYmJYRTV7hXU4QlJgAAAAIAAAAAE4gTiAAkAD0AAAEgBQQFBAMCAwIQExITEgUEBQQgJSQlJBMSExIQAwIDAiUkJSQBIAUEABMSEAMCAAUEICUkAAMCEBMSACUkCcT+av6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyAgHzo5f7H/sT+jv6C/moBNwEXAQ8Bm3B0dHD+Zf7x/un9kv7p/vH+ZXB0dHABmwEPARcTiIB86OX+x/7E/o7+gvzU/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofID8GHRw/mX+8f7p/ZL+6f7x/mVwdHRwAZsBDwEXAm4BFwEPAZtwdAAAAAIAAAAAE4gTiAADACgAAAEhESEBIAUEBQQDAgMCEBMSExIFBAUEICUkJSQTEhMSEAMCAwIlJCUkBdwH0PgwA+j+av6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyAgHzo5f7H/sT+jv6CBdwH0AXcgHzo5f7H/sT+jv6C/NT+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gAAAAQAAAAEAAEszNwdfDzz1AAsTiAAAAADdaPPWAAAAAN0YF9f/4AAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZjU2ZDUxN1JlZ3VsYXJpY29uZm9udC12dWUtZjU2ZDUxN2ljb25mb250LXZ1ZS1mNTZkNTE3VmVyc2lvbiAxLjBpY29uZm9udC12dWUtZjU2ZDUxN0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGYANQA2AGQANQAxADcAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(t,n,e){"use strict";n.a="data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjj9EAAACsAAAAYGNtYXAADeu4AAABDAAAAUJnbHlmx0c5TAAAAlAAAAf8aGVhZC0Sb7oAAApMAAAANmhoZWEm/ROFAAAKhAAAACRobXR4Z77//wAACqgAAAA0bG9jYQ28D2YAAArcAAAAKG1heHABIABXAAALBAAAACBuYW1l5vqEKwAACyQAAAKmcG9zdD9UvtcAAA3MAAABFgAEEsoBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoSE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoS//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAAAY3E4gABQAAEwcJARcBlJQFcvqOlAWjE4hV9pH2kVUJxAAAAQAAAAARhw+DAAUAAAkFD8338/v7/kYFvwnHD4P38wQF/kf6QQnGAAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAACAAAAAA6mElAAGABGAAABIgcOAQcGFBceARcWMjc+ATc2NCcuAScmASIHBgcGFBcWFxYzIREhIgcGBwYUFxYXFjchMjc2NzY0JyYnJiMhETQnJicmIwl2b2ZimCkrKymYYmbeZmKXKisrKpdiZvw2VkhHKSsrKUdIVgJx/Y9WSEcpKyspR0hWB1NVSEcpKyspR0hV/Y8rKUdJVRJQKyqXY2XfZWKYKSsrKZhiZd9lY5cqK/nlKylHSKtIRykr+eYrKUdJqklHKSsBKilHSapJRykrB1NVSEcpKwAAAwAAAAARFxEXAAMABwALAAABESERAREhEQERIRECcQ6m8VoOpvFaDqYRF/2PAnH55v2PAnH55f2PAnEAAwAAAAASngvnABgAMQBKAAABMhceARcWFAcOAQcGIicuAScmNDc+ATc2ITIXHgEXFhQHDgEHBiInLgEnJjQ3PgE3NiEyFx4BFxYUBw4BBwYiJy4BJyY0Nz4BNzYDDXBlYpgpKyspmGJl32ZilyorKyqXYmYHJm9mYpcqKysql2Jm3mZilyorKyqXYmYHJm9mYpcqKysql2Jm32VimCkrKymYYmUL5ysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKysql2Jm3mZilyorKyqXYmbeZmKXKisrKpdiZt5mYpcqKwAAAAACAAAAAA/fD98AAwAHAAABESERIREhEQOqBOICcQTiD9/zyww188sMNQAAAAEAAAAAERcRFwACAAAJAgJxDqbxWhEX+K34rQABAAAAAA6mDDUAAgAACQIE4gTiBOIMNfseBOAAAf/gAAATaRNpADEAAAEEBQQFBAMCAwIREBMSExIFBAUEISAlJCUkExITEhMGAAUEISAlJCcmJyYDAhEQExIACGz+mP6x/rr+7f7uxsprboB76eUBOQE8AXIBfgGWAXEBYQFWAS4BKuvsmZw4vP4p/vn+8/7q/r7+zv7Z/fu4u2NnUE4BJxNpLpeT6ef+1/7T/qv+n/6P/mr+gv6O/sT+x+XofIBraMXCAQ0BDgFDAUsBacz+2k5QZ2O7uPv9AScBMgFCASUBEwENAcsAAgAAAAATiBOIACQAQAAAASAFBAUEAwIDAhATEhMSBQQFBCAlJCUkExITEhADAgMCJSQlJAEhMhceARcWFAcOAQcGIyEiJy4BJyY0Nz4BNzYJxP5q/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofICAfOjl/sf+xP6O/oL6wQdTW1dUhCQmJiSEVFdb+K1cV1SEJCYmJIRUVxOIgHzo5f7H/sT+jv6C/NT+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gPgRJiWEU1e4V1OEJSYmJYRTV7hXU4QlJgAAAAIAAAAAE4gTiAAkAD0AAAEgBQQFBAMCAwIQExITEgUEBQQgJSQlJBMSExIQAwIDAiUkJSQBIAUEABMSEAMCAAUEICUkAAMCEBMSACUkCcT+av6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyAgHzo5f7H/sT+jv6C/moBNwEXAQ8Bm3B0dHD+Zf7x/un9kv7p/vH+ZXB0dHABmwEPARcTiIB86OX+x/7E/o7+gvzU/oL+jv7E/sfl6HyAgHzo5QE5ATwBcgF+AywBfgFyATwBOeXofID8GHRw/mX+8f7p/ZL+6f7x/mVwdHRwAZsBDwEXAm4BFwEPAZtwdAAAAAIAAAAAE4gTiAADACgAAAEhESEBIAUEBQQDAgMCEBMSExIFBAUEICUkJSQTEhMSEAMCAwIlJCUkBdwH0PgwA+j+av6C/o7+xP7H5eh8gIB86OUBOQE8AXIBfgMsAX4BcgE8ATnl6HyAgHzo5f7H/sT+jv6CBdwH0AXcgHzo5f7H/sT+jv6C/NT+gv6O/sT+x+XofICAfOjlATkBPAFyAX4DLAF+AXIBPAE55eh8gAAAAQAAAAEAAEszNwdfDzz1AAsTiAAAAADdaPPWAAAAAN0YF9f/4AAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtZjU2ZDUxN1JlZ3VsYXJpY29uZm9udC12dWUtZjU2ZDUxN2ljb25mb250LXZ1ZS1mNTZkNTE3VmVyc2lvbiAxLjBpY29uZm9udC12dWUtZjU2ZDUxN0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtAGYANQA2AGQANQAxADcAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AZgA1ADYAZAA1ADEANwBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(t,n,e){"use strict";n.a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLWY1NmQ1MTciIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtZjU2ZDUxNyIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0zMiAwIDUwMTEgNTAwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSI1MCIgdW5pY29kZS1yYW5nZT0iVStlYTAxLWVhMTIiIC8+PG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjAiICAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMTsiIGQ9Ik0zNzUwIDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaTTIzNDQgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQiIHVuaWNvZGU9IiYjeGVhMDI7IiBkPSJNMTU2MyAyNTAwIGwxODc1IC0xODc1IGwwIC0zMTIgbC0yMTg4IDIxODcgbDIxODggMjE4OCBsMCAtMzEzIGwtMTg3NSAtMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDM7IiBkPSJNMTI1MCAxMDk0IGwxNDA2IDE0MDYgbC0xNDA2IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaTTI2NTYgMTA5NCBsMTQwNyAxNDA2IGwtMTQwNyAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQiIHVuaWNvZGU9IiYjeGVhMDQ7IiBkPSJNMzQzOCAyNTAwIGwtMTg3NSAxODc1IGwwIDMxMyBsMjE4NyAtMjE4OCBsLTIxODcgLTIxODcgbDAgMzEyIGwxODc1IDE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYnJlYWRjcnVtYiIgdW5pY29kZT0iJiN4ZWEwNTsiIGQ9Ik0xNDggNTAwMCBsLTE0OCAtODUgbDEzOTQgLTI0MTUgbC0xMzk0IC0yNDE1IGwxNDggLTg1IGwxNDQzIDI1MDAgbC0xNDQzIDI1MDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY2hlY2ttYXJrIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQwNDUgMzk3MSBsLTIwNjEgLTIwNjEgbC0xMDI5IDEwMjkgbC00NDIgLTQ0MSBsMTQ3MSAtMTQ3MSBsMjUwMyAyNTAyIGwtNDQyIDQ0MiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjbG9zZSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik00Mzc1IDExNTYgbC01MzEgLTUzMSBsLTEzNDQgMTM0NCBsLTEzNDQgLTEzNDQgbC01MzEgNTMxIGwxMzQ0IDEzNDQgbC0xMzQ0IDEzNDQgbDUzMSA1MzEgbDEzNDQgLTEzNDQgbDEzNDQgMTM0NCBsNTMxIC01MzEgbC0xMzQ0IC0xMzQ0IGwxMzQ0IC0xMzQ0IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNvbmZpcm0iIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJpbmZvIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTI0MjIgNDY4OCBxLTExMSAwIC0yMTMgLTQzIHEtOTggLTQyIC0xNzQgLTExNy41IHEtNzYgLTc1LjUgLTExNyAtMTc0LjUgcS00MyAtMTAxIC00MyAtMjEyLjUgcTAgLTExMS41IDQzIC0yMTIuNSBxNDEgLTk4IDExNyAtMTc0IHE3NiAtNzYgMTc0IC0xMTcgcTEwMiAtNDMgMjEzIC00MyBxMTExIDAgMjEzIDQzIHE5OCA0MSAxNzMuNSAxMTcgcTc1LjUgNzYgMTE3LjUgMTc0IHE0MyAxMDEgNDMgMjEyLjUgcTAgMTExLjUgLTQzIDIxMi41IHEtNDIgOTkgLTExNy41IDE3NC41IHEtNzUuNSA3NS41IC0xNzMuNSAxMTcuNSBxLTEwMiA0MyAtMjEzIDQzIFpNMTU2MyAzMTI1IHEtODYgMCAtMTU4IC00MyBxLTcxIC00MSAtMTEyIC0xMTIgcS00MyAtNzIgLTQzIC0xNTcuNSBxMCAtODUuNSA0MyAtMTU3LjUgcTQxIC03MSAxMTIgLTExMiBxNzIgLTQzIDE1OCAtNDMgbDYyNSAwIGwwIC0xNTYyIGwtNjI1IDAgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MyAtNDMgLTE1OCBxMCAtODUgNDMgLTE1OCBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MiBsMTg3NSAwIHE4NSAwIDE1NyA0MiBxNzEgNDEgMTEyIDExMiBxNDMgNzMgNDMgMTU4IHEwIDg1IC00MyAxNTggcS00MSA3MSAtMTEyIDExMiBxLTcyIDQzIC0xNTcgNDMgbC02MjUgMCBsMCAxODc1IHEwIDg1IC00MyAxNTcgcS00MSA3MSAtMTEyIDExMiBxLTczIDQzIC0xNTggNDMgbC05MzcgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTc4MSAzMDQ3IHExMTIgMCAyMTMgLTQzIHE5OCAtNDIgMTc0IC0xMTcuNSBxNzYgLTc1LjUgMTE3IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MSAtOTggLTExNyAtMTczLjUgcS03NiAtNzUuNSAtMTc0IC0xMTcuNSBxLTEwMSAtNDMgLTIxMi41IC00MyBxLTExMS41IDAgLTIxMy41IDQzIHEtOTggNDIgLTE3My41IDExNy41IHEtNzUuNSA3NS41IC0xMTcuNSAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQyIDk4IDExNy41IDE3My41IHE3NS41IDc1LjUgMTczLjUgMTE3LjUgcTEwMiA0MyAyMTMgNDMgWk0yNTAwIDMwNDcgcTExMSAwIDIxMyAtNDMgcTk4IC00MiAxNzMuNSAtMTE3LjUgcTc1LjUgLTc1LjUgMTE3LjUgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQyIC05OCAtMTE3LjUgLTE3My41IHEtNzUuNSAtNzUuNSAtMTczLjUgLTExNy41IHEtMTAyIC00MyAtMjEzIC00MyBxLTExMSAwIC0yMTMgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTQyMTkgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMuNSAtNDMgcS0xMTEuNSAwIC0yMTIuNSA0MyBxLTk4IDQyIC0xNzQgMTE3LjUgcS03NiA3NS41IC0xMTcgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MSA5OCAxMTcgMTczLjUgcTc2IDc1LjUgMTc0IDExNy41IHExMDEgNDMgMjEzIDQzIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBjOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwZDsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0cmlhbmdsZS1zIiB1bmljb2RlPSImI3hlYTBlOyIgZD0iTTEyNTAgMzEyNSBsMTI1MCAtMTI1MCBsMTI1MCAxMjQ4IGwtMjUwMCAyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWF3YXkiIHVuaWNvZGU9IiYjeGVhMGY7IiBkPSJNMjE1NiA0OTY5IHEtMzYwIC00NiAtNjk1IC0xOTcgcS0zMjYgLTE0NyAtNjAxIC0zODAgcS0yNzQgLTIzMSAtNDcyIC01MjggcS0yMDIgLTMwMSAtMzA5IC02NDIgcS0xMTAgLTM1MyAtMTEwIC03MjIgcTAgLTQwNiAxMjggLTc4OCBxMTIzIC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTM2OSAwIDcyMiAxMDcgcTM0MiAxMDQgNjQ0IDMwMSBxMjk4IDE5NCA1MzMgNDYzIHEyMzYgMjcwIDM4OSA1OTMgcTE1NiAzMzEgMjEyIDY5MiBxLTE4OCAtMjA0IC00MjMuNSAtMzUxIHEtMjM1LjUgLTE0NyAtNDk4LjUgLTIyNSBxLTI2OSAtODAgLTU0NyAtODAgcS0zMjIgMCAtNjI4IDEwMyBxLTI5NSA5OSAtNTQ4IDI4NiBxLTI1MSAxODQgLTQzNSA0MzUgcS0xODcgMjUzIC0yODYgNTQ4IHEtMTAzIDMwNiAtMTAzIDYyOCBxMCAyOTMgODAgNTY4IHE3OCAyNjkgMjI1LjUgNDk4LjUgcTE0Ny41IDIyOS41IDM1MC41IDQwMi41IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWRuZCIgdW5pY29kZT0iJiN4ZWExMDsiIGQ9Ik0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFpNMTU2MyAyOTY5IGwxODc1IDAgcTkxIDAgMTc4IC0zOCBxODQgLTM3IDE1MCAtMTAzIHE2NiAtNjYgMTAyIC0xNDkgcTM4IC04NyAzOCAtMTc5IHEwIC05MiAtMzggLTE3OSBxLTM2IC04MyAtMTAyIC0xNDkgcS02NiAtNjYgLTE1MCAtMTAzIHEtODcgLTM4IC0xNzggLTM4IGwtMTg3NSAwIHEtOTIgMCAtMTc5IDM4IHEtODQgMzcgLTE1MCAxMDMgcS02NiA2NiAtMTAyIDE0OSBxLTM4IDg3IC0zOCAxNzkgcTAgOTIgMzggMTc5IHEzNiA4MyAxMDIgMTQ5IHE2NiA2NiAxNTAgMTAzIHE4NyAzOCAxNzkgMzggWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtaW52aXNpYmxlIiB1bmljb2RlPSImI3hlYTExOyIgZD0iTTI1MDAgNTAwMCBxLTQwNiAwIC03ODggLTEyOCBxLTM3MCAtMTI0IC02ODYgLTM1NiBxLTMxMyAtMjI5IC01NDIgLTU0MiBxLTIzMiAtMzE2IC0zNTYgLTY4NiBxLTEyOCAtMzgyIC0xMjggLTc4OCBxMCAtNDA2IDEyOCAtNzg4IHExMjQgLTM3MCAzNTYgLTY4NiBxMjI5IC0zMTMgNTQyIC01NDIgcTMxNiAtMjMyIDY4NiAtMzU2IHEzODIgLTEyOCA3ODggLTEyOCBxNDA2IDAgNzg4IDEyOCBxMzcwIDEyNCA2ODYgMzU2IHEzMTMgMjI5IDU0MiA1NDIgcTIzMiAzMTYgMzU2IDY4NiBxMTI4IDM4MiAxMjggNzg4IHEwIDQwNiAtMTI4IDc4OCBxLTEyNCAzNzAgLTM1NiA2ODYgcS0yMjkgMzEzIC01NDIgNTQyIHEtMzE2IDIzMiAtNjg2IDM1NiBxLTM4MiAxMjggLTc4OCAxMjggWk0yNTAwIDQwMDAgcTMxMSAwIDU5MCAtMTE2IHEyNzEgLTExMiA0NzYuNSAtMzE3LjUgcTIwNS41IC0yMDUuNSAzMTcuNSAtNDc2LjUgcTExNiAtMjc5IDExNiAtNTkwIHEwIC0zMTEgLTExNiAtNTkwIHEtMTEyIC0yNzEgLTMxNy41IC00NzYuNSBxLTIwNS41IC0yMDUuNSAtNDc2LjUgLTMxNy41IHEtMjc5IC0xMTYgLTU5MCAtMTE2IHEtMzExIDAgLTU5MCAxMTYgcS0yNzEgMTEyIC00NzYuNSAzMTcuNSBxLTIwNS41IDIwNS41IC0zMTcuNSA0NzYuNSBxLTExNiAyNzkgLTExNiA1OTAgcTAgMzExIDExNiA1OTAgcTExMiAyNzEgMzE3LjUgNDc2LjUgcTIwNS41IDIwNS41IDQ3Ni41IDMxNy41IHEyNzkgMTE2IDU5MCAxMTYgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtb25saW5lIiB1bmljb2RlPSImI3hlYTEyOyIgZD0iTTE1MDAgMTUwMCBsMjAwMCAwIGwwIDIwMDAgbC0yMDAwIDAgbDAgLTIwMDAgWk0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFoiIC8+PC9mb250PjwvZGVmcz48L3N2Zz4="},function(t,n){t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));e(27);var A=e(32),i=Object(A.getGettextBuilder)().detectLocale();[{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura",Choose:"Tria",Close:"Tanca",Custom:"Personalitzat",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji",Previous:"Anterior",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Selecciona una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Unable to search the group":"No es pot cercar el grup","Write message, @ to mention someone …":"Escriu un missatge, @ per mencionar algú..."}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda",Choose:"Zvolit",Close:"Zavřít",Custom:"Uživatelsky určené","External documentation for {title}":"Externí dokumentace k {title}",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji",Previous:"Předchozí",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Unable to search the group":"Nedaří se hledat skupinu","Write message, @ to mention someone …":"Pište zprávu, pokud chcete někoho zmínit, použijte @ …"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur",Choose:"Vælg",Close:"Luk",Custom:"Brugerdefineret",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji",Previous:"Forrige",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Unable to search the group":"Kan ikke søge på denne gruppe","Write message, @ to mention someone …":"Skriv i meddelelse, @ for at nævne nogen  …"}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση",Choose:"Επιλογή",Close:"Κλείσιμο",Custom:"Προσαρμογή",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji",Previous:"Προηγούμενο",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας"}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza",Choose:"Elegir",Close:"Cerrar",Custom:"Personalizado",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji",Previous:"Anterior",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Unable to search the group":"No es posible buscar en el grupo","Write message, @ to mention someone …":"Escriba un mensaje, @ para mencionar a alguien..."}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Choose:"Aukeratu",Close:"Itxi",Next:"Hurrengoa","No results":"Emaitzarik ez","Pause slideshow":"Pausatu diaporama",Previous:"Aurrekoa","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Start slideshow":"Hasi diaporama"}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto",Choose:"Valitse",Close:"Sulje",Custom:"Mukautettu",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt","Message limit of {count} characters reached":"Viestin maksimimerkkimäärä  {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt ja & tunteet","Start slideshow":"Aloita diaesitys",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Unable to search the group":"Ryhmää ei voi hakea","Write message, @ to mention someone …":"Kirjoita viesti, @ mainitaksesi jonkun..."}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature",Choose:"Choisir",Close:"Fermer",Custom:"Personnalisé",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji",Previous:"Précédent",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Unable to search the group":"Impossible de chercher le groupe","Write message, @ to mention someone …":"Écrivez un message, @ pour mentionner quelqu'un…"}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza",Choose:"Escoller",Close:"Pechar",Custom:"Personalizado",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación de axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet",Choose:"Válassszon",Close:"Bezárás",Custom:"Egyéni",Flags:"Zászló","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit",Previous:"Előző",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Unable to search the group":"A csoport nem kereshető","Write message, @ to mention someone …":"Írjon üzenetet, @ valaki megemlítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura",Choose:"Scegli",Close:"Chiudi",Custom:"Personalizzato","External documentation for {title}":"Documentazione esterna per {title}",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji",Previous:"Precedente",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Unable to search the group":"Impossibile cercare il gruppo","Write message, @ to mention someone …":"Scrivi messaggio, @ per menzionare qualcuno…"}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然",Choose:"選択",Close:"閉じる",Custom:"カスタム",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択",Previous:"前",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Smileys & Emotion":"笑顔と気持ち","Start slideshow":"スライドショーを開始",Symbols:"記号","Travel & Places":"旅行と場所","Unable to search the group":"グループを検索できません","Write message, @ to mention someone …":"メッセージを書く、@ で通知します。"}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа",Choose:"Избери",Close:"Затвори",Custom:"Прилагодени",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Symbols:"Симболи","Travel & Places":"Патувања & Места","Unable to search the group":"Неможе да се принајде групата","Write message, @ to mention someone …":"Напиши порака, @ за да спомнеш некој …"}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur",Choose:"Velg",Close:"Lukk",Custom:"Selvvalgt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji",Previous:"Forrige",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Symbols:"Symboler","Travel & Places":"Reise og steder","Unable to search the group":"Kunne ikke søke i gruppen"}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur",Choose:"Kies",Close:"Sluiten",Custom:"Aangepast",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt","Message limit of {count} characters reached":"Berichtlengte van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Unable to search the group":"Kan niet in de groep zoeken","Write message, @ to mention someone …":"Schrijf een bericht, @ om iemand te noemen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura",Choose:"Wybierz",Close:"Zamknij",Custom:"Zwyczajne","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków",Next:"Następny","No emoji found":"Nie znaleziono emotikonów","No results":"Brak wyników",Objects:"Obiekty","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji",Previous:"Poprzedni",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Nawigacja ustawień","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Unable to search the group":"Nie można przeszukać grupy","Write message, @ to mention someone …":"Napisz wiadomość, aby wspomnieć o kimś użyj @…"}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza",Choose:"Escolher",Close:"Fechar",Custom:"Personalizado","External documentation for {title}":"Documentação externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji",Previous:"Anterior",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Unable to search the group":"Não foi possível pesquisar o grupo","Write message, @ to mention someone …":"Escreva mensagem, @ para mencionar alguém ..."}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Choose:"Выберите",Close:"Закрыть",Next:"Следующее","No results":"Результаты отсуствуют","Pause slideshow":"Приостановить показ слйдов",Previous:"Предыдущее","Select a tag":"Выберите метку",Settings:"Параметры","Start slideshow":"Начать показ слайдов"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda",Choose:"Vybrať",Close:"Zatvoriť",Custom:"Zvyk",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Unable to search the group":"Skupinu sa nepodarilo nájsť"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava",Choose:"Izbor",Close:"Zapri",Custom:"Po meri","External documentation for {title}":"Zunanja dokumentacija za {title}",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick an emoji":"Izbor izrazne ikone",Previous:"Predhodni",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Unable to search the group":"Ni mogoče iskati po skuspini","Write message, @ to mention someone …":"Napišite sporočilo, z @ omenite osebo ..."}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur",Choose:"Välj",Close:"Stäng",Custom:"Anpassad",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji",Previous:"Föregående",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Unable to search the group":"Kunde inte söka i gruppen","Write message, @ to mention someone …":"Skicka meddelande, skriv @ för att omnämna någon ..."}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa",Choose:"Seçin",Close:"Kapat",Custom:"Özel","External documentation for {title}":"{title} için dış belgeler",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin",Previous:"Önceki",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Unable to search the group":"Grupta arama yapılamadı","Write message, @ to mention someone …":"İletiyi yazın. Birini anmak için @ kullanın …"}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа",Choose:"Виберіть",Close:"Закрити",Custom:"Власне",Flags:"Прапори","Food & Drink":"Їжа та напитки","Frequently used":"Найчастіші",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Smileys & Emotion":"Усміхайлики та емоційки","Start slideshow":"Почати показ слайдів",Symbols:"Символи","Travel & Places":"Поїздки та місця","Unable to search the group":"Неможливо шукати в групі"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然",Choose:"选择",Close:"关闭",Custom:"自定义",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情",Previous:"上一个",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Symbols:"符号","Travel & Places":"旅游 & 地点","Unable to search the group":"无法搜索分组","Write message, @ to mention someone …":"输入消息，输入 @ 来提醒某人"}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義","External documentation for {title}":"{title} 的外部文檔",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((function(t){var n={};for(var e in t.translations)t.translations[e].pluralId?n[e]={msgid:e,msgid_plural:t.translations[e].pluralId,msgstr:t.translations[e].msgstr}:n[e]={msgid:e,msgstr:[t.translations[e]]};i.addTranslation(t.locale,{translations:{"":n}})}));var a=i.build(),o=a.ngettext.bind(a),r=a.gettext.bind(a)},,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js")},function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".popover{z-index:100000;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.popover__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius);background:var(--color-main-background)}.popover__arrow{position:absolute;z-index:1;width:0;height:0;margin:10px;border-style:solid;border-color:var(--color-main-background)}.popover[x-placement^='top']{margin-bottom:10px}.popover[x-placement^='top'] .popover__arrow{bottom:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='bottom']{margin-top:10px}.popover[x-placement^='bottom'] .popover__arrow{top:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='right']{margin-left:10px}.popover[x-placement^='right'] .popover__arrow{top:calc(50% - $arrow-width);left:-10px;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='left']{margin-right:10px}.popover[x-placement^='left'] .popover__arrow{top:calc(50% - $arrow-width);right:-10px;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-bottom-color:transparent !important}.popover[aria-hidden='true']{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.popover[aria-hidden='false']{visibility:visible;transition:opacity var(--animation-quick);opacity:1}\n","",{version:3,sources:["webpack://./Popover.vue"],names:[],mappings:"AAgHA,SACC,cAAe,CACf,wBAAyB,CAEzB,sDAAuD,CAEvD,gBACC,SAAU,CACV,4BAA6B,CAC7B,kCAAmC,CACnC,uCAAwC,CACxC,gBAGA,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,WApBgB,CAqBhB,kBAAmB,CACnB,yCAA0C,CApB5C,6BAwBE,kBA1BgB,CAElB,6CA2BG,YA7Be,CA8Bf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAjCe,CAkCf,yCAA0C,CAC1C,0CAA2C,CAC3C,wCAAyC,CAlC5C,gCAuCE,eAzCgB,CAElB,gDA0CG,SA5Ce,CA6Cf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAhDe,CAiDf,uCAAwC,CACxC,yCAA0C,CAC1C,wCAAyC,CAjD5C,+BAsDE,gBAxDgB,CAElB,+CAyDG,4BAA6B,CAC7B,UA5De,CA6Df,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,uCAAwC,CACxC,0CAA2C,CAC3C,wCAAyC,CAhE5C,8BAqEE,iBAvEgB,CAElB,8CAwEG,4BAA6B,CAC7B,WA3Ee,CA4Ef,cAAe,CACf,aAAc,CACd,6BA9Ee,CA+Ef,uCAAwC,CACxC,yCAA0C,CAC1C,0CAA2C,CA/E9C,6BAoFE,iBAAkB,CAClB,2EAA6E,CAC7E,SAAU,CAtFZ,8BA0FE,kBAAmB,CACnB,yCAA0C,CAC1C,SAAU",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$arrow-width: 10px;\n\n.popover {\n\tz-index: 100000;\n\tdisplay: block !important;\n\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t&__inner {\n\t\tpadding: 0;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground: var(--color-main-background);\n\t}\n\n\t&__arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: $arrow-width;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n\n\t&[x-placement^='top'] {\n\t\tmargin-bottom: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\tbottom: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='bottom'] {\n\t\tmargin-top: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='right'] {\n\t\tmargin-left: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tleft: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='left'] {\n\t\tmargin-right: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tright: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t}\n\t}\n\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\topacity: 0;\n\t}\n\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity var(--animation-quick);\n\t\topacity: 1;\n\t}\n}\n\n"],sourceRoot:""}]),n.a=o},function(t,n){},function(t,n,e){"use strict";e.r(n);var A=e(6),i=e(2),a=e.n(i),o=e(23),r={insert:"head",singleton:!1};a()(o.a,r),o.a.locals;
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
A.VTooltip.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("f56d517",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),A.VTooltip.options.defaultHtml=!1;n.default=A.VTooltip},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js")},function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".vue-tooltip[data-v-f56d517]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;opacity:0;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-f56d517][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-f56d517][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-f56d517][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-f56d517][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-f56d517][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-f56d517][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-f56d517] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-f56d517] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n","",{version:3,sources:["webpack://./index.scss"],names:[],mappings:"AAeA,6BACC,iBAAkB,CAClB,cAAe,CACf,UAAW,CACX,SAAU,CACV,aAAc,CACd,QAAS,CAET,eAAgB,CAChB,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,SAAU,CACV,eAAgB,CAEhB,eAAgB,CAChB,sDAAuD,CAhBxD,gEAqBG,QAAS,CACT,YAAa,CACb,eAAgB,CAChB,6BA1Be,CA2Bf,8BAA+B,CAC/B,+BAAgC,CAChC,6BAA8B,CA3BjC,mEAkCG,KAAM,CACN,YAAa,CACb,eAAgB,CAChB,6BAvCe,CAwCf,4BAA6B,CAC7B,8BAA+B,CAC/B,6BAA8B,CAxCjC,kEA+CG,UAAW,CACX,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,4BAA6B,CAC7B,+BAAgC,CAChC,6BAA8B,CArDjC,iEA4DG,SAAU,CACV,cAAe,CACf,aAAc,CACd,6BAjEe,CAkEf,4BAA6B,CAC7B,8BAA+B,CAC/B,+BAAgC,CAlEnC,iDAwEE,iBAAkB,CAClB,wCAAyC,CACzC,SAAU,CA1EZ,kDA6EE,kBAAmB,CACnB,uBAAwB,CACxB,SAAU,CA/EZ,4CAoFE,eAAgB,CAChB,eAAgB,CAChB,iBAAkB,CAClB,4BAA6B,CAC7B,kCAAmC,CACnC,6CAA8C,CAzFhD,4CA8FE,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,QAAS,CACT,kBAAmB,CACnB,yCAA0C",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap v3.3.5 (http://getbootstrap.com)\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n\n$arrow-width: 10px;\n\n.vue-tooltip[data-v-#{$scope_version}] {\n\tposition: absolute;\n\tz-index: 100000;\n\tright: auto;\n\tleft: auto;\n\tdisplay: block;\n\tmargin: 0;\n\t/* default to top */\n\tmargin-top: -3px;\n\tpadding: 10px 0;\n\ttext-align: left;\n\ttext-align: start;\n\topacity: 0;\n\tline-height: 1.6;\n\n\tline-break: auto;\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t// TOP\n\t&[x-placement^='top'] {\n\t\t.tooltip-arrow {\n\t\t\tbottom: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// BOTTOM\n\t&[x-placement^='bottom'] {\n\t\t.tooltip-arrow {\n\t\t\ttop: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// RIGHT\n\t&[x-placement^='right'] {\n\t\t.tooltip-arrow {\n\t\t\tright: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// LEFT\n\t&[x-placement^='left'] {\n\t\t.tooltip-arrow {\n\t\t\tleft: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t}\n\t}\n\n\t// HIDDEN / SHOWN\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity .15s, visibility .15s;\n\t\topacity: 0;\n\t}\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity .15s;\n\t\topacity: 1;\n\t}\n\n\t// CONTENT\n\t.tooltip-inner {\n\t\tmax-width: 350px;\n\t\tpadding: 5px 8px;\n\t\ttext-align: center;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-main-background);\n\t}\n\n\t// ARROW\n\t.tooltip-arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: 0;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n}\n"],sourceRoot:""}]),n.a=o},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js")},function(t,n,e){"use strict";var A={name:"Popover",components:{VPopover:e(6).VPopover},mounted:function(){var t=this;this.$watch((function(){return t.$refs.popover.isOpen}),(function(n){n?t.$emit("after-show"):t.$emit("after-hide")}))}},i=e(2),a=e.n(i),o=e(19),r={insert:"head",singleton:!1},s=(a()(o.a,r),o.a.locals,e(3)),c=e(20),l=e.n(c),d=Object(s.a)(A,(function(){var t=this.$createElement,n=this._self._c||t;return n("VPopover",this._g(this._b({ref:"popover",attrs:{"popover-base-class":"popover","popover-wrapper-class":"popover__wrapper","popover-arrow-class":"popover__arrow","popover-inner-class":"popover__inner"}},"VPopover",this.$attrs,!1),this.$listeners),[this._t("trigger"),this._v(" "),n("template",{slot:"popover"},[this._t("default")],2)],2)}),[],!1,null,null,null);"function"==typeof l.a&&l()(d);n.a=d.exports},,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js")},function(t,n){t.exports=__webpack_require__(/*! @nextcloud/l10n/dist/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},function(t,n,e){"use strict";e(15),e(25),e(5),e(26);n.a=function(t){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t||5)}},,,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js")},,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js")},function(t,n){t.exports=__webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js")},,,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js")},function(t,n,e){"use strict";e.r(n);var A=e(28);
/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */n.default=A.a},function(t,n){t.exports=__webpack_require__(/*! linkifyjs/string */ "./node_modules/linkifyjs/string.js")},,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js")},,,,,,,,,,,,,,,function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a),r=e(4),s=e.n(r),c=e(7),l=e(8),d=e(9),u=e(10),g=o()(i.a),p=s()(c.a),m=s()(l.a),h=s()(d.a),C=s()(u.a);g.push([t.i,'@font-face{font-family:"iconfont-vue-f56d517";src:url('+p+");src:url("+p+') format("embedded-opentype"),url('+m+') format("woff"),url('+h+') format("truetype"),url('+C+') format("svg")}.icon[data-v-74d0a51f]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.arrow-left[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.arrow-right-double[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.arrow-right[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.breadcrumb[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.checkmark[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.close[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.confirm[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.info[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.menu[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.more[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.pause[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.play[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.triangle-s[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.user-status-away[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.user-status-dnd[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.user-status-invisible[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.icon.user-status-online[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";content:""}.action-item[data-v-74d0a51f]{position:relative;display:inline-block}.action-item--single[data-v-74d0a51f]:hover,.action-item--single[data-v-74d0a51f]:focus,.action-item--single[data-v-74d0a51f]:active,.action-item__menutoggle[data-v-74d0a51f]:hover,.action-item__menutoggle[data-v-74d0a51f]:focus,.action-item__menutoggle[data-v-74d0a51f]:active{opacity:1;background-color:rgba(127,127,127,0.25)}.action-item__menutoggle[data-v-74d0a51f]:disabled,.action-item--single[data-v-74d0a51f]:disabled{opacity:.3 !important}.action-item.action-item--open .action-item__menutoggle[data-v-74d0a51f]{opacity:1;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-74d0a51f],.action-item__menutoggle[data-v-74d0a51f]{box-sizing:border-box;width:auto;min-width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;border-radius:22px;background-color:transparent}.action-item__menutoggle[data-v-74d0a51f]{display:flex;align-items:center;justify-content:center;opacity:.7;font-weight:bold;line-height:16px}.action-item__menutoggle[data-v-74d0a51f] span{width:16px;height:16px;line-height:16px}.action-item__menutoggle[data-v-74d0a51f]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-74d0a51f]:before{font-family:"iconfont-vue-f56d517";font-style:normal;font-weight:400;content:""}.action-item__menutoggle--default-icon[data-v-74d0a51f]::before{font-size:16px}.action-item__menutoggle--with-title[data-v-74d0a51f]{position:relative;padding-left:44px;white-space:nowrap;opacity:1;border:1px solid var(--color-border-dark);background-color:var(--color-background-dark);background-position:14px center;font-size:inherit}.action-item__menutoggle--with-title[data-v-74d0a51f]:before{position:absolute;top:14px;left:14px}.action-item__menutoggle--primary[data-v-74d0a51f]{opacity:1;color:var(--color-primary-text);border:none;background-color:var(--color-primary-element)}.action-item--open .action-item__menutoggle--primary[data-v-74d0a51f],.action-item__menutoggle--primary[data-v-74d0a51f]:hover,.action-item__menutoggle--primary[data-v-74d0a51f]:focus,.action-item__menutoggle--primary[data-v-74d0a51f]:active{color:var(--color-primary-text) !important;background-color:var(--color-primary-element-light) !important}.action-item--single[data-v-74d0a51f]{opacity:.7}.action-item--single[data-v-74d0a51f]:hover,.action-item--single[data-v-74d0a51f]:focus,.action-item--single[data-v-74d0a51f]:active{opacity:1}.action-item--single>[hidden][data-v-74d0a51f]{display:none}.ie .action-item__menu[data-v-74d0a51f],.ie .action-item__menu .action-item__menu_arrow[data-v-74d0a51f],.edge .action-item__menu[data-v-74d0a51f],.edge .action-item__menu .action-item__menu_arrow[data-v-74d0a51f]{border:1px solid var(--color-border)}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./Actions.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,uBACE,iBAAkB,CAClB,eAAgB,CAFlB,gDAMM,kCAAmC,CACnC,WA5Ge,CAAO,yCA0GL,kCACJ,CAAsB,WA1G3B,CAAA,iDAyGU,kCACL,CAAA,WAzGG,CAAA,0CAwGL,kCACE,CAAA,WAxGJ,CAAA,yCAuGC,kCACG,CAAA,WACN,CAxGC,wCAsGC,kCACI,CAAA,WACb,CAAO,oCAFF,kCACQ,CAAA,WACb,CAAA,sCAFO,kCACM,CAAA,WACb,CAAA,mCAFI,kCACS,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,oCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WAAsB,CACnC,yCAPD,kCAMc,CAAA,WAAA,CAAsB,+CANpC,kCAMc,CAAA,WAAA,CAAA,8CANd,kCAMc,CAAA,WAAA,CAAA,oDANd,kCAMc,CAAA,WAAA,CAAA,iDANd,kCAMc,CAAA,WAAA,CAAA,8BA1FG,iBC2mBZ,CACX,oBACA,CAAA,sRASC,SAAA,CAAY,uCCrmBE,CAAA,kGD6mBd,qBACA,CAAA,yEAGmB,SAAA,CAAA,uCCrmBK,CAAA,gFD4mBxB,qBACA,CAAA,UAAY,CAAA,cACL,CAAA,WACP,CAAS,QACT,CAAA,YACA,CAAA,cChoBY,CAAA,WDkoBJ,CAAA,kBAER,CAAA,4BACA,CAAA,0CACA,YAAA,CAAA,kBAMA,CAAA,sBACA,CAAA,UAAe,CAAE,gBCnoBF,CAAE,gBDqoBJ,CAAI,+CANjB,UAUA,CAAA,WACC,CAAK,gBCxpBI,CAAI,iDD6oBd,UAAY,CAAA,+DAkBX,kCD3rBF,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,gEC0mBD,cAAc,CAAA,sDAIb,iBAAA,CAGW,iBACF,CAAQ,kBC7qBA,CD+qBlB,SAAA,CAAA,yCAEkB,CAAA,6CAEA,CAAA,+BAClB,CAAA,iBAAkC,CAAM,6DARxC,iBAAY,CAWJ,QACP,CAAQ,SAAU,CAClB,mDAEA,SAAA,CAAA,+BAKM,CAAA,WAAA,CAAA,6CAEW,CAAA,kPAJlB,0CASQ,CAAA,8DACW,CAAA,sCAClB,UAAA,CAAA,qIAIF,SAAA,CAAA,+CAAA,YAQI,CAAA,sNASc,oCACA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-f56d517": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-f56d517";\n   src: url(\'../iconfont-vue-f56d517.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-f56d517.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-f56d517.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-f56d517.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-f56d517.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-f56d517") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-f56d517";\n        content: iconfont-item("iconfont-vue-f56d517/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.action-item {\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t// put a grey round background when menu is opened\n\t// or hover-focused\n\t&--single:hover,\n\t&--single:focus,\n\t&--single:active,\n\t&__menutoggle:hover,\n\t&__menutoggle:focus,\n\t&__menutoggle:active {\n\t\topacity: $opacity_full;\n\t\t// good looking on dark AND white bg\n\t\tbackground-color: $icon-focus-bg;\n\t}\n\n\t// TODO: handle this in the future button component\n\t&__menutoggle:disabled,\n\t&--single:disabled {\n\t\topacity: .3 !important;\n\t}\n\n\t&.action-item--open .action-item__menutoggle {\n\t\topacity: $opacity_full;\n\t\tbackground-color: $action-background-hover;\n\t}\n\n\t// icons\n\t&--single,\n\t&__menutoggle {\n\t\tbox-sizing: border-box;\n\t\twidth: auto;\n\t\tmin-width: $clickable-area;\n\t\theight: $clickable-area;\n\t\tmargin: 0;\n\t\tpadding: $icon-margin;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\tborder-radius: $clickable-area / 2;\n\t\tbackground-color: transparent;\n\t}\n\n\t// icon-more\n\t&__menutoggle {\n\t\t// align menu icon in center\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\topacity: $opacity_normal;\n\t\tfont-weight: bold;\n\t\tline-height: $icon-size;\n\n\t\t// image slot\n\t\t/deep/ span {\n\t\t\twidth: $icon-size;\n\t\t\theight: $icon-size;\n\t\t\tline-height: $icon-size;\n\t\t}\n\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t}\n\n\t\t&--default-icon {\n\t\t\t@include iconfont('more');\n\t\t\t&::before {\n\t\t\t\tfont-size: $icon-size;\n\t\t\t}\n\t\t}\n\n\t\t&--with-title {\n\t\t\tposition: relative;\n\t\t\tpadding-left: $clickable-area;\n\t\t\twhite-space: nowrap;\n\t\t\topacity: $opacity_full;\n\t\t\tborder: 1px solid var(--color-border-dark);\n\t\t\t// with a title, we need to display this as a real button\n\t\t\tbackground-color: var(--color-background-dark);\n\t\t\tbackground-position: $icon-margin center;\n\t\t\tfont-size: inherit;\n\t\t\t// non-background icon class\n\t\t\t&:before {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: $icon-margin;\n\t\t\t\tleft: $icon-margin;\n\t\t\t}\n\t\t}\n\n\t\t&--primary {\n\t\t\topacity: $opacity_full;\n\t\t\tcolor: var(--color-primary-text);\n\t\t\tborder: none;\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t.action-item--open &,\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\tcolor: var(--color-primary-text) !important;\n\t\t\t\tbackground-color: var(--color-primary-element-light) !important;\n\t\t\t}\n\t\t}\n\t}\n\n\t&--single {\n\t\topacity: $opacity_normal;\n\t\t&:hover,\n\t\t&:focus,\n\t\t&:active {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t\t// hide anything the slot is displaying\n\t\t& > [hidden] {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.ie,\n.edge {\n\t.action-item__menu,\n\t.action-item__menu .action-item__menu_arrow {\n\t\tborder: 1px solid var(--color-border);\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=g},function(t,n){},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js")},,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js")},function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js")},function(t,n,e){"use strict";e.r(n);var A=e(84);
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */n.default=A.a},,,,,,,,,,,,function(t,n,e){"use strict";e(22),e(50),e(68),e(31),e(70),e(27),e(71),e(37),e(5),e(45),e(16),e(17),e(18),e(51),e(40),e(14);var A=e(21),i=e(33),a=e(12),o=e(46);function r(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,A=new Array(n);e<n;e++)A[e]=t[e];return A}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,A)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u={name:"Actions",directives:{tooltip:A.default},components:{Popover:o.default,VNodes:{functional:!0,render:function(t,n){return n.props.vnodes}}},props:{open:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},menuTitle:{type:String,default:null},primary:{type:Boolean,default:!1},defaultIcon:{type:String,default:"action-item__menutoggle--default-icon"},ariaLabel:{type:String,default:Object(a.b)("Actions")},placement:{type:String,default:"bottom"},boundariesElement:{type:Element,default:function(){return document.querySelector("body")}},container:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{actions:[],opened:this.open,focusIndex:0,randomId:"menu-"+Object(i.a)(),children:this.$children}},computed:{hasMultipleActions:function(){return this.actions.length>1},isValidSingleAction:function(){return 1===this.actions.length&&null!==this.firstActionElement},firstActionVNode:function(){return this.actions[0]},firstAction:function(){return this.children[0]?this.children[0]:{}},firstActionBinding:function(){if(this.firstActionVNode&&this.firstActionVNode.componentOptions){var t=this.firstActionVNode.componentOptions.tag;if("ActionLink"===t)return l(l({is:"a",href:this.firstAction.href,target:this.firstAction.target,"aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props);if("ActionRouter"===t)return l(l({is:"router-link",to:this.firstAction.to,exact:this.firstAction.exact,"aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props);if("ActionButton"===t)return l(l({is:"button","aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props)}return null},firstActionEvent:function(){var t,n,e;return null===(t=this.firstActionVNode)||void 0===t||null===(n=t.componentOptions)||void 0===n||null===(e=n.listeners)||void 0===e?void 0:e.click},firstActionEventBinding:function(){return this.firstActionEvent?"click":null},firstActionIconSlot:function(){var t,n;return null===(t=this.firstAction)||void 0===t||null===(n=t.$slots)||void 0===n?void 0:n.icon},firstActionClass:function(){return((this.firstActionVNode&&this.firstActionVNode.data.staticClass)+" "+(this.firstActionVNode&&this.firstActionVNode.data.class)).trim()},iconSlotIsPopulated:function(){return!!this.$slots.icon}},watch:{open:function(t){t!==this.opened&&(this.opened=t)}},beforeMount:function(){this.initActions()},beforeUpdate:function(){this.initActions()},methods:{openMenu:function(t){this.opened||(this.opened=!0,this.$emit("update:open",!0),this.$emit("open"))},closeMenu:function(t){this.opened&&(this.opened=!1,this.$emit("update:open",!1),this.$emit("close"),this.opened=!1,this.focusIndex=0,this.$refs.menuButton.focus())},onOpen:function(t){var n=this;this.$nextTick((function(){n.focusFirstAction(t)}))},onMouseFocusAction:function(t){if(document.activeElement!==t.target){var n=t.target.closest("li");if(n){var e=n.querySelector(".focusable");if(e){var A=r(this.$refs.menu.querySelectorAll(".focusable")).indexOf(e);A>-1&&(this.focusIndex=A,this.focusAction())}}}},removeCurrentActive:function(){var t=this.$refs.menu.querySelector("li.active");t&&t.classList.remove("active")},focusAction:function(){var t=this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];if(t){this.removeCurrentActive();var n=t.closest("li.action");t.focus(),n&&n.classList.add("active")}},focusPreviousAction:function(t){this.opened&&(0===this.focusIndex?this.closeMenu():(this.preventIfEvent(t),this.focusIndex=this.focusIndex-1),this.focusAction())},focusNextAction:function(t){if(this.opened){var n=this.$refs.menu.querySelectorAll(".focusable").length-1;this.focusIndex===n?this.closeMenu():(this.preventIfEvent(t),this.focusIndex=this.focusIndex+1),this.focusAction()}},focusFirstAction:function(t){this.opened&&(this.preventIfEvent(t),this.focusIndex=0,this.focusAction())},focusLastAction:function(t){this.opened&&(this.preventIfEvent(t),this.focusIndex=this.$el.querySelectorAll(".focusable").length-1,this.focusAction())},preventIfEvent:function(t){t&&(t.preventDefault(),t.stopPropagation())},execFirstAction:function(t){this.firstActionEvent&&this.firstActionEvent(t)},initActions:function(){this.actions=(this.$slots.default||[]).filter((function(t){return!!t&&!!t.componentOptions}))},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)}}},g=e(2),p=e.n(g),m=e(66),h={insert:"head",singleton:!1},C=(p()(m.a,h),m.a.locals,e(3)),b=e(67),f=e.n(b),B=Object(C.a)(u,(function(){var t,n,e=this,A=e.$createElement,i=e._self._c||A;return e.isValidSingleAction&&!e.forceMenu?i("element",e._b({directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.firstAction.text,expression:"firstAction.text",modifiers:{auto:!0}}],staticClass:"action-item action-item--single",class:(t={},t[e.firstAction.icon]=e.firstAction.icon,t[e.firstActionClass]=e.firstActionClass,t),attrs:{rel:"noreferrer noopener",disabled:e.disabled},on:e._d({focus:e.onFocus,blur:e.onBlur},[e.firstActionEventBinding,e.execFirstAction])},"element",e.firstActionBinding,!1),[i("VNodes",{attrs:{vnodes:e.firstActionIconSlot}}),e._v(" "),i("span",{attrs:{"aria-hidden":!0,hidden:""}},[e._t("default")],2)],1):i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasMultipleActions||e.forceMenu,expression:"hasMultipleActions || forceMenu"}],staticClass:"action-item",class:{"action-item--open":e.opened}},[i("Popover",{attrs:{delay:0,"handle-resize":!0,open:e.opened,placement:e.placement,"boundaries-element":e.boundariesElement,container:e.container},on:{"update:open":function(t){e.opened=t},show:e.openMenu,"after-show":e.onOpen,hide:e.closeMenu}},[i("button",{ref:"menuButton",staticClass:"icon action-item__menutoggle",class:(n={},n[e.defaultIcon]=!e.iconSlotIsPopulated,n["action-item__menutoggle--with-title"]=e.menuTitle,n["action-item__menutoggle--primary"]=e.primary,n),attrs:{slot:"trigger",disabled:e.disabled,"aria-haspopup":"true","aria-label":e.ariaLabel,"aria-controls":e.randomId,"aria-expanded":e.opened?"true":"false","test-attr":"1",type:"button"},on:{focus:e.onFocus,blur:e.onBlur},slot:"trigger"},[e._t("icon"),e._v("\n\t\t\t"+e._s(e.menuTitle)+"\n\t\t")],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],ref:"menu",class:{open:e.opened},attrs:{tabindex:"-1"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusPreviousAction(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNextAction(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNextAction(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?t.ctrlKey||t.altKey||t.metaKey?null:e.focusPreviousAction(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"page-up",void 0,t.key,void 0)||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusFirstAction(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"page-down",void 0,t.key,void 0)||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusLastAction(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.closeMenu(t))}],mousemove:e.onMouseFocusAction}},[i("ul",{attrs:{id:e.randomId,tabindex:"-1"}},[e.opened?[e._t("default")]:e._e()],2)])])],1)}),[],!1,null,"74d0a51f",null);"function"==typeof f.a&&f()(B);n.a=B.exports},,,,,,,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js")},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".empty-content[data-v-2dc16832]{display:flex;align-items:center;flex-direction:column;margin-top:20vh}.empty-content__icon[data-v-2dc16832]{display:flex;align-items:center;justify-content:center;width:64px;height:64px;margin:0 auto 15px;opacity:.4;background-repeat:no-repeat;background-position:center;background-size:64px}.empty-content__icon svg[data-v-2dc16832]{width:64px;height:64px}.empty-content__title[data-v-2dc16832]{margin-bottom:10px}\n","",{version:3,sources:["webpack://./EmptyContent.vue"],names:[],mappings:"AA2FA,gCACC,YAAa,CACb,kBAAmB,CACnB,qBAAsB,CACtB,eAAgB,CAEhB,sCACC,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,UAAW,CACX,WAAY,CACZ,kBAAmB,CACnB,UAAW,CACX,2BAA4B,CAC5B,0BAA2B,CAC3B,oBAAqB,CAVrB,0CAaC,UAAW,CACX,WAAY,CACZ,uCAID,kBAAmB",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.empty-content {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tmargin-top: 20vh;\n\n\t&__icon {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 64px;\n\t\theight: 64px;\n\t\tmargin: 0 auto 15px;\n\t\topacity: .4;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tbackground-size: 64px;\n\n\t\tsvg {\n\t\t\twidth: 64px;\n\t\t\theight: 64px;\n\t\t}\n\t}\n\n\t&__title {\n\t\tmargin-bottom: 10px;\n\t}\n}\n\n"],sourceRoot:""}]),n.a=o},function(t,n){},,,function(t,n,e){"use strict";var A={name:"EmptyContent",props:{icon:{type:String,default:""}}},i=e(2),a=e.n(i),o=e(119),r={insert:"head",singleton:!1},s=(a()(o.a,r),o.a.locals,e(3)),c=e(120),l=e.n(c),d=Object(s.a)(A,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"empty-content",attrs:{role:"note"}},[n("div",{staticClass:"empty-content__icon",class:this.icon,attrs:{role:"img"}},[this._t("icon")],2),this._v(" "),n("h2",{staticClass:"empty-content__title"},[this._t("default")],2),this._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:this.$slots.desc,expression:"$slots.desc"}]},[this._t("desc")],2)])}),[],!1,null,"2dc16832",null);"function"==typeof l.a&&l()(d);n.a=d.exports},,function(t,n,e){"use strict";e.r(n),e.d(n,"directive",(function(){return A}));
/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var A={inserted:function(t){t.focus()}};n.default=A},function(t,n,e){"use strict";e.r(n),e.d(n,"directive",(function(){return a}));var A=e(47),i=e.n(A),a=function(t,n){var e;!0===(null===(e=n.value)||void 0===e?void 0:e.linkify)&&(t.innerHTML=i()(n.value.text,{defaultProtocol:"https"}))};n.default=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".app-sidebar-tabs[data-v-98e5f178]{display:flex;flex-direction:column;min-height:0;flex:1 1 100%}.app-sidebar-tabs__nav[data-v-98e5f178]{margin-top:10px}.app-sidebar-tabs__nav ul[data-v-98e5f178]{display:flex;justify-content:stretch}.app-sidebar-tabs__tab[data-v-98e5f178]{display:block;flex:1 1;min-width:0;text-align:center}.app-sidebar-tabs__tab a[data-v-98e5f178]{position:relative;display:block;overflow:hidden;padding:25px 5px 5px 5px;transition:color var(--animation-quick),opacity var(--animation-quick),border-color var(--animation-quick);text-align:center;white-space:nowrap;text-overflow:ellipsis;opacity:.7;color:var(--color-main-text);border-bottom:1px solid var(--color-border)}.app-sidebar-tabs__tab a[data-v-98e5f178]:hover,.app-sidebar-tabs__tab a[data-v-98e5f178]:focus,.app-sidebar-tabs__tab a[data-v-98e5f178]:active,.app-sidebar-tabs__tab a.active[data-v-98e5f178]{opacity:1}.app-sidebar-tabs__tab a:hover .app-sidebar-tabs__tab-icon[data-v-98e5f178],.app-sidebar-tabs__tab a:focus .app-sidebar-tabs__tab-icon[data-v-98e5f178],.app-sidebar-tabs__tab a:active .app-sidebar-tabs__tab-icon[data-v-98e5f178],.app-sidebar-tabs__tab a.active .app-sidebar-tabs__tab-icon[data-v-98e5f178]{opacity:1}.app-sidebar-tabs__tab a[data-v-98e5f178]:not(.active):hover,.app-sidebar-tabs__tab a[data-v-98e5f178]:not(.active):focus{border-bottom-color:var(--color-background-darker);box-shadow:inset 0 -1px 0 var(--color-background-darker)}.app-sidebar-tabs__tab a.active[data-v-98e5f178]{color:var(--color-text-light);border-bottom-color:var(--color-text-light);box-shadow:inset 0 -1px 0 var(--color-text-light);font-weight:bold}.app-sidebar-tabs__tab a[data-v-98e5f178]:focus{border-bottom-color:var(--color-primary-element);box-shadow:inset 0 -1px 0 var(--color-primary-element)}.app-sidebar-tabs__tab-icon[data-v-98e5f178]{position:absolute;top:0;left:0;width:100%;height:25px;transition:opacity var(--animation-quick);opacity:.7;background-position:center 8px;background-size:16px}.app-sidebar-tabs__content[data-v-98e5f178]{position:relative;min-height:0;height:100%}.app-sidebar-tabs__content--multiple[data-v-98e5f178]>:not(section){display:none}\n","",{version:3,sources:["webpack://./AppSidebarTabs.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AAuQA,mCACC,YAAa,CACb,qBAAsB,CACtB,YAAa,CACb,aAAc,CAEd,wCACC,eAAgB,CADhB,2CAGC,YAAa,CACb,uBAAwB,CACxB,wCAGD,aAAc,CACd,QAAS,CACT,WAAY,CACZ,iBAAkB,CAJlB,0CAMC,iBAAkB,CAClB,aAAc,CACd,eAAgB,CAChB,wBAAyB,CACzB,0GAA6G,CAC7G,iBAAkB,CAClB,kBAAmB,CACnB,sBAAuB,CACvB,UCvPgB,CDwPhB,4BAA6B,CAC7B,2CAA4C,CAhB7C,kMAsBE,SC9PY,CDwOd,kTAwBG,SChQW,CDwOd,0HA6BE,kDAAmD,CACnD,wDAAyD,CA9B3D,iDAiCE,6BAA8B,CAC9B,2CAA4C,CAC5C,iDAAkD,CAClD,gBAAiB,CApCnB,gDA0CE,gDAAiD,CACjD,sDAAuD,CACvD,6CAKF,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,UAAW,CACX,WAAY,CACZ,yCAA0C,CAC1C,UChSiB,CDiSjB,8BAA+B,CAC/B,oBAAqB,CACrB,4CAGA,iBAAkB,CAElB,YAAa,CACb,WAAY,CAGZ,oEACC,YAAa",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-sidebar-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tflex: 1 1 100%;\n\n\t&__nav {\n\t\tmargin-top: 10px;\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: stretch;\n\t\t}\n\t}\n\t&__tab {\n\t\tdisplay: block;\n\t\tflex: 1 1;\n\t\tmin-width: 0;\n\t\ttext-align: center;\n\t\ta {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t\toverflow: hidden;\n\t\t\tpadding: 25px 5px 5px 5px;\n\t\t\ttransition: color var(--animation-quick), opacity var(--animation-quick), border-color var(--animation-quick);\n\t\t\ttext-align: center;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\topacity: $opacity_normal;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-bottom: 1px solid var(--color-border);\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active,\n\t\t\t&.active {\n\t\t\t\topacity: $opacity_full;\n\t\t\t\t.app-sidebar-tabs__tab-icon {\n\t\t\t\t\topacity: $opacity_full;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:not(.active):hover,\n\t\t\t&:not(.active):focus {\n\t\t\t\tborder-bottom-color: var(--color-background-darker);\n\t\t\t\tbox-shadow: inset 0 -1px 0 var(--color-background-darker);\n\t\t\t}\n\t\t\t&.active {\n\t\t\t\tcolor: var(--color-text-light);\n\t\t\t\tborder-bottom-color: var(--color-text-light);\n\t\t\t\tbox-shadow: inset 0 -1px 0 var(--color-text-light);\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t// differentiate the two for accessibility purpose\n\t\t\t// make sure the user knows she's focusing the navigation\n\t\t\t// and can use arrows/home/pageup...\n\t\t\t&:focus {\n\t\t\t\tborder-bottom-color: var(--color-primary-element);\n\t\t\t\tbox-shadow: inset 0 -1px 0 var(--color-primary-element);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__tab-icon {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 25px;\n\t\ttransition: opacity var(--animation-quick);\n\t\topacity: $opacity_normal;\n\t\tbackground-position: center 8px;\n\t\tbackground-size: 16px;\n\t}\n\n\t&__content {\n\t\tposition: relative;\n\t\t// take full available height\n\t\tmin-height: 0;\n\t\theight: 100%;\n\t\t// force the use of the tab component if more than one tab\n\t\t// you can just put raw content if you don't use tabs\n\t\t&--multiple > :not(section) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=o},function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".app-sidebar[data-v-6add9d65]{position:-webkit-sticky;position:sticky;z-index:1500;top:var(--header-height);right:0;display:flex;overflow-x:hidden;overflow-y:auto;flex-direction:column;flex-shrink:0;width:27vw;min-width:300px;max-width:500px;height:calc(100vh - var(--header-height));border-left:1px solid var(--color-border);background:var(--color-main-background)}.app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-6add9d65]{position:absolute;z-index:100;top:6px;right:6px;width:44px;height:44px;opacity:.7;border-radius:22px}.app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-6add9d65]:hover,.app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-6add9d65]:active,.app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-6add9d65]:focus{opacity:1;background-color:rgba(127,127,127,0.25)}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info[data-v-6add9d65]{flex-direction:row}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info .app-sidebar-header__figure[data-v-6add9d65]{z-index:2;width:70px;height:70px;margin:9px;border-radius:3px;flex:0 0 auto}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info .app-sidebar-header__desc[data-v-6add9d65]{padding-left:0;flex:1 1 auto;min-width:0;padding-right:94px}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info .app-sidebar-header__desc.app-sidebar-header__desc--without-actions[data-v-6add9d65]{padding-right:50px}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info .app-sidebar-header__desc .app-sidebar-header__tertiary-actions[data-v-6add9d65]{z-index:3;position:absolute;top:9px;left:-44px}.app-sidebar .app-sidebar-header--compact.app-sidebar-header--with-figure .app-sidebar-header__info .app-sidebar-header__desc .app-sidebar-header__menu[data-v-6add9d65]{top:6px;right:50px;background-color:transparent;position:absolute}.app-sidebar .app-sidebar-header:not(.app-sidebar-header--with-figure) .app-sidebar-header__menu[data-v-6add9d65]{position:absolute;top:6px;right:50px}.app-sidebar .app-sidebar-header:not(.app-sidebar-header--with-figure) .app-sidebar-header__desc[data-v-6add9d65]{padding-right:94px}.app-sidebar .app-sidebar-header:not(.app-sidebar-header--with-figure) .app-sidebar-header__desc.app-sidebar-header__desc--without-actions[data-v-6add9d65]{padding-right:50px}.app-sidebar .app-sidebar-header .app-sidebar-header__info[data-v-6add9d65]{display:flex;flex-direction:column}.app-sidebar .app-sidebar-header__figure[data-v-6add9d65]{width:100%;height:250px;max-height:250px;background-repeat:no-repeat;background-position:center;background-size:contain}.app-sidebar .app-sidebar-header__figure--with-action[data-v-6add9d65]{cursor:pointer}.app-sidebar .app-sidebar-header__desc[data-v-6add9d65]{position:relative;display:flex;flex-direction:row;justify-content:center;padding:18px 6px 18px 9px}.app-sidebar .app-sidebar-header__desc--with-tertiary-action[data-v-6add9d65]{padding-left:0}.app-sidebar .app-sidebar-header__desc--editable .app-sidebar-header__maintitle-form[data-v-6add9d65],.app-sidebar .app-sidebar-header__desc--with-subtitle--editable .app-sidebar-header__maintitle-form[data-v-6add9d65]{margin-top:-2px;margin-bottom:-2px}.app-sidebar .app-sidebar-header__desc--with-subtitle--editable .app-sidebar-header__subtitle[data-v-6add9d65]{margin-top:-2px}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__tertiary-actions[data-v-6add9d65]{display:flex;height:44px;width:44px;justify-content:center;flex:0 0 auto}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container[data-v-6add9d65]{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;min-width:0}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle[data-v-6add9d65]{padding:0;min-height:30px;font-size:20px;line-height:30px}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle[data-v-6add9d65] .linkified{cursor:pointer;text-decoration:underline}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle[data-v-6add9d65],.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__subtitle[data-v-6add9d65]{overflow:hidden;width:100%;margin:0;white-space:nowrap;text-overflow:ellipsis}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__subtitle[data-v-6add9d65]{padding:0;opacity:.7;font-size:var(--default-font-size)}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle-form[data-v-6add9d65]{display:flex;margin-left:-7.5px}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle-form .icon-confirm[data-v-6add9d65]{margin:0}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle-form input.app-sidebar-header__maintitle-input[data-v-6add9d65]{flex:1 1 auto;margin:0;padding:7px;font-size:20px;font-weight:bold}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__star[data-v-6add9d65]{display:block;width:44px;height:44px;padding:14px}.app-sidebar .app-sidebar-header__desc .app-sidebar-header__menu[data-v-6add9d65]{height:44px;width:44px;border-radius:22px;background-color:rgba(127,127,127,0.25)}.app-sidebar .app-sidebar-header__description[data-v-6add9d65]{display:flex;align-items:center;margin:0 10px}.slide-right-leave-active[data-v-6add9d65],.slide-right-enter-active[data-v-6add9d65]{transition-duration:var(--animation-quick);transition-property:max-width, min-width}.slide-right-enter-to[data-v-6add9d65],.slide-right-leave[data-v-6add9d65]{min-width:300px;max-width:500px}.slide-right-enter[data-v-6add9d65],.slide-right-leave-to[data-v-6add9d65]{min-width:0 !important;max-width:0 !important}\n","",{version:3,sources:["webpack://./AppSidebar.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AAqiBA,8BACC,uBAAwB,CACxB,eAAgB,CAChB,YAAa,CACb,wBAAyB,CACzB,OAAQ,CACR,YAAa,CACb,iBAAkB,CAClB,eAAgB,CAChB,qBAAsB,CACtB,aAAc,CACd,UAAW,CACX,eA7BwB,CA8BxB,eA7BwB,CA8BxB,yCAA0C,CAC1C,yCAA0C,CAC1C,uCAAwC,CAhBzC,sEAmBG,iBAAkB,CAClB,WAAY,CACZ,OA3BsB,CA4BtB,SA5BsB,CA6BtB,UCniBkB,CDoiBlB,WCpiBkB,CDqiBlB,UCnhBgB,CDohBhB,kBAAkC,CA1BrC,qOA8BI,SCvhBY,CDwhBZ,uCCphB8C,CDqflD,qHAsCI,kBAAmB,CAtCvB,iJAyCK,SAAU,CACV,UAA4C,CAC5C,WAA6C,CAC7C,UAAkC,CAClC,iBAAkB,CAClB,aAAc,CA9CnB,+IAiDK,cAAe,CACf,aAAc,CACd,WAAY,CACZ,kBAAyD,CApD9D,yLAuDM,kBAAe,CAvDrB,qLA2DM,SAAU,CACV,iBAAkB,CAClB,OAA+B,CAC/B,UAA0B,CA9DhC,yKAiEM,OAvEmB,CAwEnB,UAA6C,CAC7C,4BAA6B,CAC7B,iBAAkB,CApExB,kHA8EI,iBAAkB,CAClB,OArFqB,CAsFrB,UAA6C,CAhFjD,kHAoFI,kBAAe,CApFnB,4JAuFK,kBAAe,CAvFpB,4EA8FG,YAAa,CACb,qBAAsB,CA/FzB,0DAoGG,UAAW,CACX,YAAa,CACb,gBAAiB,CACjB,2BAA4B,CAC5B,0BAA2B,CAC3B,uBAAwB,CAzG3B,uEA2GI,cAAe,CA3GnB,wDAiHG,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,yBAAkH,CArHrH,8EAyHI,cAAe,CAzHnB,2NA8HI,eAAgB,CAChB,kBAAmB,CA/HvB,+GAmII,eAAgB,CAnIpB,8FAuII,YAAa,CACb,WCppBiB,CDqpBjB,UCrpBiB,CDspBjB,sBAAuB,CACvB,aAAc,CA3IlB,6FAgJI,aAAc,CACd,YAAa,CACb,qBAAsB,CACtB,sBAAuB,CACvB,WAAY,CApJhB,4HAwJK,SAAU,CACV,eAAgB,CAChB,cAAe,CACf,gBArKmB,CAUxB,uIA+JM,cAAe,CACf,yBAA0B,CAhKhC,uPAsKK,eAAgB,CAChB,UAAW,CACX,QAAS,CACT,kBAAmB,CACnB,sBAAuB,CA1K5B,2HA+KK,SAAU,CACV,UC1qBc,CD2qBd,kCAAmC,CAjLxC,iIAqLK,YAAa,CACb,kBAAmB,CAtLxB,+IAwLM,QAAS,CAxLf,2KA4LM,aAAc,CACd,QAAS,CACT,WA3MkB,CA4MlB,cAAe,CACf,gBAAiB,CAhMvB,kFAuMI,aAAc,CACd,UCptBiB,CDqtBjB,WCrtBiB,CDstBjB,YC9sB4C,CDogBhD,kFA8MI,WC1tBiB,CD2tBjB,UC3tBiB,CD4tBjB,kBAAkC,CAClC,uCCtsB8C,CDqflD,+DAuNG,YAAa,CACb,kBAAmB,CACnB,aAAc,CACd,sFAMF,0CAA2C,CAC3C,wCAAyC,CACzC,2EAIA,eAvPwB,CAwPxB,eAvPwB,CAwPxB,2EAIA,sBAAuB,CACvB,sBAAuB",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$sidebar-min-width: 300px;\n$sidebar-max-width: 500px;\n\n$desc-vertical-padding: 18px;\n$desc-input-padding: 7px;\n\n// title and subtitle\n$desc-title-height: 30px;\n$desc-subtitle-height: 22px;\n$desc-height: $desc-title-height + $desc-subtitle-height;\n\n$top-buttons-spacing: 6px;\n\n/*\n\tSidebar: to be used within #content\n\tapp-content will be shrinked properly\n*/\n.app-sidebar {\n\tposition: -webkit-sticky; // Safari support\n\tposition: sticky;\n\tz-index: 1500;\n\ttop: var(--header-height);\n\tright: 0;\n\tdisplay: flex;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\twidth: 27vw;\n\tmin-width: $sidebar-min-width;\n\tmax-width: $sidebar-max-width;\n\theight: calc(100vh - var(--header-height));\n\tborder-left: 1px solid var(--color-border);\n\tbackground: var(--color-main-background);\n\t.app-sidebar-header {\n\t\t> .app-sidebar__close {\n\t\t\tposition: absolute;\n\t\t\tz-index: 100;\n\t\t\ttop: $top-buttons-spacing;\n\t\t\tright: $top-buttons-spacing;\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_normal;\n\t\t\tborder-radius: $clickable-area / 2;\n\t\t\t&:hover,\n\t\t\t&:active,\n\t\t\t&:focus {\n\t\t\t\topacity: $opacity_full;\n\t\t\t\tbackground-color: $action-background-hover;\n\t\t\t}\n\t\t}\n\n\t\t// Compact mode only affects a sidebar with a figure\n\t\t&--compact.app-sidebar-header--with-figure {\n\t\t\t.app-sidebar-header__info {\n\t\t\t\tflex-direction: row;\n\n\t\t\t\t.app-sidebar-header__figure {\n\t\t\t\t\tz-index: 2;\n\t\t\t\t\twidth: $desc-height + $desc-vertical-padding;\n\t\t\t\t\theight: $desc-height + $desc-vertical-padding;\n\t\t\t\t\tmargin: $desc-vertical-padding / 2;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\tflex: 0 0 auto;\n\t\t\t\t}\n\t\t\t\t.app-sidebar-header__desc {\n\t\t\t\t\tpadding-left: 0;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tmin-width: 0;\n\t\t\t\t\tpadding-right: 2 * $clickable-area + $top-buttons-spacing;\n\n\t\t\t\t\t&.app-sidebar-header__desc--without-actions {\n\t\t\t\t\t\tpadding-right: #{$clickable-area + $top-buttons-spacing};\n\t\t\t\t\t}\n\n\t\t\t\t\t.app-sidebar-header__tertiary-actions {\n\t\t\t\t\t\tz-index: 3; // above star\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: $desc-vertical-padding / 2;\n\t\t\t\t\t\tleft: -1 * $clickable-area;\n\t\t\t\t\t}\n\t\t\t\t\t.app-sidebar-header__menu {\n\t\t\t\t\t\ttop: $top-buttons-spacing;\n\t\t\t\t\t\tright: $clickable-area + $top-buttons-spacing; // left of the close button\n\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// sidebar without figure\n\t\t&:not(.app-sidebar-header--with-figure) {\n\t\t\t// align the menu with the close button\n\t\t\t.app-sidebar-header__menu {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: $top-buttons-spacing;\n\t\t\t\tright: $top-buttons-spacing + $clickable-area;\n\t\t\t}\n\t\t\t// increase the padding to not overlap the menu\n\t\t\t.app-sidebar-header__desc {\n\t\t\t\tpadding-right: #{$clickable-area * 2 + $top-buttons-spacing};\n\n\t\t\t\t&.app-sidebar-header__desc--without-actions {\n\t\t\t\t\tpadding-right: #{$clickable-area + $top-buttons-spacing};\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// the container with the figure and the description\n\t\t.app-sidebar-header__info {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t// header background\n\t\t&__figure {\n\t\t\twidth: 100%;\n\t\t\theight: 250px;\n\t\t\tmax-height: 250px;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-position: center;\n\t\t\tbackground-size: contain;\n\t\t\t&--with-action {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\n\t\t// description\n\t\t&__desc {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: center;\n\t\t\tpadding: #{$desc-vertical-padding} #{$top-buttons-spacing} #{$desc-vertical-padding} #{$desc-vertical-padding / 2};\n\n\t\t\t// custom overrides\n\t\t\t&--with-tertiary-action {\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\n\t\t\t&--editable .app-sidebar-header__maintitle-form,\n\t\t\t&--with-subtitle--editable .app-sidebar-header__maintitle-form {\n\t\t\t\tmargin-top: -2px;\n\t\t\t\tmargin-bottom: -2px;\n\t\t\t}\n\n\t\t\t&--with-subtitle--editable .app-sidebar-header__subtitle {\n\t\t\t\tmargin-top: -2px;\n\t\t\t}\n\n\t\t\t.app-sidebar-header__tertiary-actions {\n\t\t\t\tdisplay: flex;\n\t\t\t\theight: $clickable-area;\n\t\t\t\twidth: $clickable-area;\n\t\t\t\tjustify-content: center;\n\t\t\t\tflex: 0 0 auto;\n\t\t\t}\n\n\t\t\t// titles\n\t\t\t.app-sidebar-header__title-container {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\tmin-width: 0;\n\n\t\t\t\t// main title\n\t\t\t\t.app-sidebar-header__maintitle {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tmin-height: 30px;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tline-height: $desc-title-height;\n\n\t\t\t\t\t// Needs 'deep' as the link is generated by the linkify directive\n\t\t\t\t\t&::v-deep .linkified {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.app-sidebar-header__maintitle,\n\t\t\t\t.app-sidebar-header__subtitle {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t}\n\n\t\t\t\t// subtitle\n\t\t\t\t.app-sidebar-header__subtitle {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\topacity: $opacity_normal;\n\t\t\t\t\tfont-size: var(--default-font-size);\n\t\t\t\t}\n\n\t\t\t\t.app-sidebar-header__maintitle-form {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tmargin-left: -7.5px;\n\t\t\t\t\t& .icon-confirm {\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\tinput.app-sidebar-header__maintitle-input {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: $desc-input-padding;\n\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// favourite\n\t\t\t.app-sidebar-header__star {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: $clickable-area;\n\t\t\t\theight: $clickable-area;\n\t\t\t\tpadding: $icon-margin;\n\t\t\t}\n\t\t\t// main menu\n\t\t\t.app-sidebar-header__menu {\n\t\t\t\theight: $clickable-area;\n\t\t\t\twidth: $clickable-area;\n\t\t\t\tborder-radius: $clickable-area / 2;\n\t\t\t\tbackground-color: $action-background-hover;\n\t\t\t}\n\t\t}\n\n\t\t// sidebar description slot\n\t\t&__description {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tmargin: 0 10px;\n\t\t}\n\t}\n}\n\n.slide-right-leave-active,\n.slide-right-enter-active {\n\ttransition-duration: var(--animation-quick);\n\ttransition-property: max-width, min-width;\n}\n\n.slide-right-enter-to,\n.slide-right-leave {\n\tmin-width: $sidebar-min-width;\n\tmax-width: $sidebar-max-width;\n}\n\n.slide-right-enter,\n.slide-right-leave-to {\n\tmin-width: 0 !important;\n\tmax-width: 0 !important;\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=o},function(t,n,e){"use strict";var A=e(0),i=e.n(A),a=e(1),o=e.n(a)()(i.a);o.push([t.i,".app-sidebar-header__description button,.app-sidebar-header__description .button,.app-sidebar-header__description input[type='button'],.app-sidebar-header__description input[type='submit'],.app-sidebar-header__description input[type='reset']{padding:6px 22px}\n","",{version:3,sources:["webpack://./AppSidebar.vue"],names:[],mappings:"AAyxBA,kPAKE,gBAAiB",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// ! slots specific designs, cannot be scoped\n// if any button inside the description slot, increase visual padding\n.app-sidebar-header__description {\n\tbutton, .button,\n\tinput[type='button'],\n\tinput[type='submit'],\n\tinput[type='reset'] {\n\t\tpadding: 6px 22px;\n\t}\n}\n\n"],sourceRoot:""}]),n.a=o},function(t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var A=e(72),i=e(125),a=e(126),o=e(21),r=(e(22),e(220),e(50),e(92),e(14),e(24),e(11)),s=e.n(r),c=function(t){return t&&"string"==typeof t&&""!==t.trim()},l=function(t){return c(t)&&-1===t.indexOf(" ")},d={name:"AppSidebarTabs",props:{active:{type:String,default:""}},data:function(){return{tabs:[],activeTab:"",children:[]}},computed:{hasMultipleTabs:function(){return this.tabs.length>1},currentTabIndex:function(){var t=this;return this.tabs.findIndex((function(n){return n.id===t.activeTab}))}},watch:{active:function(t){t!==this.activeTab&&this.updateActive()},children:function(){this.updateTabs()}},mounted:function(){this.updateTabs(),this.children=this.$children},methods:{setActive:function(t){this.activeTab=t,this.$emit("update:active",this.activeTab)},focusPreviousTab:function(){this.currentTabIndex>0&&this.setActive(this.tabs[this.currentTabIndex-1].id),this.focusActiveTab()},focusNextTab:function(){this.currentTabIndex<this.tabs.length-1&&this.setActive(this.tabs[this.currentTabIndex+1].id),this.focusActiveTab()},focusFirstTab:function(){this.setActive(this.tabs[0].id),this.focusActiveTab()},focusLastTab:function(){this.setActive(this.tabs[this.tabs.length-1].id),this.focusActiveTab()},focusActiveTab:function(){this.$el.querySelector("#"+this.activeTab).focus()},focusActiveTabContent:function(){this.$el.querySelector("#tab-"+this.activeTab).focus()},updateActive:function(){var t=this;this.activeTab=this.active&&-1!==this.tabs.findIndex((function(n){return n.id===t.active}))?this.active:this.tabs.length>0?this.tabs[0].id:""},updateTabs:function(){if(this.$slots.default){var t=this.$slots.default.filter((function(t){return t.tag||t.text.trim()})),n=[],e=t.reduce((function(t,e){var A=e.componentInstance;return c(null==A?void 0:A.name)&&l(null==A?void 0:A.id)&&l(null==A?void 0:A.icon)?t.push(A):n.push(e),t}),[]);0!==e.length&&e.length!==t.length&&(s.a.util.warn("Mixing tabs and non-tab-content is not possible."),n.map((function(t){return console.debug("Ignoring invalid tab",t)}))),this.tabs=e.sort((function(t,n){var e=t.order||0,A=n.order||0;return e===A?OC.Util.naturalSortCompare(t.name,n.name):e-A})),this.tabs.length>0&&this.updateActive()}else this.tabs=[]}}},u=e(2),g=e.n(u),p=e(163),m={insert:"head",singleton:!1},h=(g()(p.a,m),p.a.locals,e(3)),C=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-sidebar-tabs"},[t.hasMultipleTabs?e("nav",{staticClass:"app-sidebar-tabs__nav",on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),t.focusPreviousTab(n))},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&2!==n.button||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),t.focusNextTab(n))},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"tab",9,n.key,"Tab")||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),t.focusActiveTabContent(n))},function(n){return n.type.indexOf("key")||33===n.keyCode?n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),t.focusFirstTab(n)):null},function(n){return n.type.indexOf("key")||34===n.keyCode?n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),t.focusLastTab(n)):null}]}},[e("ul",t._l(t.tabs,(function(n){return e("li",{key:n.id,staticClass:"app-sidebar-tabs__tab"},[e("a",{class:{active:t.activeTab===n.id},attrs:{id:n.id,"aria-controls":"tab-"+n.id,"aria-selected":t.activeTab===n.id,"data-id":n.id,href:"#tab-"+n.id,tabindex:t.activeTab===n.id?null:-1,role:"tab"},on:{click:function(e){return e.preventDefault(),t.setActive(n.id)}}},[e("span",{staticClass:"app-sidebar-tabs__tab-icon",class:n.icon}),t._v("\n\t\t\t\t\t"+t._s(n.name)+"\n\t\t\t\t")])])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"app-sidebar-tabs__content",class:{"app-sidebar-tabs__content--multiple":t.hasMultipleTabs}},[t._t("default")],2)])}),[],!1,null,"98e5f178",null).exports,b=e(123),f=e(12),B=e(41),v={name:"AppSidebar",components:{Actions:A.default,AppSidebarTabs:C,EmptyContent:b.a},directives:{focus:i.default,linkify:a.default,ClickOutside:B.directive,Tooltip:o.default},props:{active:{type:String,default:""},title:{type:String,default:"",required:!0},titleEditable:{type:Boolean,default:!1},titlePlaceholder:{type:String,default:""},subtitle:{type:String,default:""},subtitleTooltip:{type:String,default:""},background:{type:String,default:""},starred:{type:Boolean,default:null},starLoading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},linkifyTitle:{type:Boolean,default:!1},titleTooltip:{type:String,default:""}},data:function(){return{closeTranslated:Object(f.b)("Close"),isStarred:this.starred}},computed:{canStar:function(){return null!==this.isStarred},hasFigure:function(){return this.$slots.header||this.background},hasFigureClickListener:function(){return this.$listeners["figure-click"]}},watch:{starred:function(){this.isStarred=this.starred}},beforeDestroy:function(){this.$emit("closed")},methods:{onBeforeEnter:function(t){this.$emit("opening",t)},onAfterEnter:function(t){this.$emit("opened",t)},onBeforeLeave:function(t){this.$emit("closing",t)},onAfterLeave:function(t){this.$emit("closed",t)},closeSidebar:function(t){this.$emit("close",t)},onFigureClick:function(t){this.$emit("figure-click",t)},toggleStarred:function(){this.isStarred=!this.isStarred,this.$emit("update:starred",this.isStarred)},editTitle:function(){var t=this;this.$emit("update:titleEditable",!0),this.titleEditable&&this.$nextTick((function(){return t.$refs.titleInput.focus()}))},onTitleInput:function(t){this.$emit("update:title",t.target.value)},onSubmitTitle:function(t){this.$emit("update:titleEditable",!1),this.$emit("submit-title",t)},onDismissEditing:function(){this.$emit("update:titleEditable",!1),this.$emit("dismiss-editing")},onUpdateActive:function(t){this.$emit("update:active",t)}}},y=e(164),w={insert:"head",singleton:!1},x=(g()(y.a,w),y.a.locals,e(165)),I={insert:"head",singleton:!1},M=(g()(x.a,I),x.a.locals,e(166)),E=e.n(M),T=Object(h.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{appear:"",name:"slide-right"},on:{"before-enter":t.onBeforeEnter,"after-enter":t.onAfterEnter,"before-leave":t.onBeforeLeave,"after-leave":t.onAfterLeave}},[e("aside",{staticClass:"app-sidebar",attrs:{id:"app-sidebar-vue"}},[e("header",{staticClass:"app-sidebar-header",class:{"app-sidebar-header--with-figure":t.hasFigure,"app-sidebar-header--compact":t.compact}},[e("a",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.closeTranslated,expression:"closeTranslated",modifiers:{auto:!0}}],staticClass:"app-sidebar__close icon-close",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.closeSidebar(n)}}}),t._v(" "),e("div",{staticClass:"app-sidebar-header__info"},[t.hasFigure&&!t.empty?e("div",{staticClass:"app-sidebar-header__figure",class:{"app-sidebar-header__figure--with-action":t.hasFigureClickListener},style:{backgroundImage:"url("+t.background+")"},on:{click:t.onFigureClick}},[t._t("header")],2):t._e(),t._v(" "),t.empty?t._e():e("div",{staticClass:"app-sidebar-header__desc",class:{"app-sidebar-header__desc--with-tertiary-action":t.canStar||t.$slots["tertiary-actions"],"app-sidebar-header__desc--editable":t.titleEditable&&!t.subtitle,"app-sidebar-header__desc--with-subtitle--editable":t.titleEditable&&t.subtitle,"app-sidebar-header__desc--without-actions":!t.$slots["secondary-actions"]}},[t.canStar||t.$slots["tertiary-actions"]?e("div",{staticClass:"app-sidebar-header__tertiary-actions"},[t._t("tertiary-actions",[t.canStar?e("a",{staticClass:"app-sidebar-header__star",class:{"icon-starred":t.isStarred&&!t.starLoading,"icon-star":!t.isStarred&&!t.starLoading,"icon-loading-small":t.starLoading},on:{click:function(n){return n.preventDefault(),t.toggleStarred(n)}}}):t._e()])],2):t._e(),t._v(" "),e("div",{staticClass:"app-sidebar-header__title-container"},[e("h2",{directives:[{name:"show",rawName:"v-show",value:!t.titleEditable,expression:"!titleEditable"},{name:"linkify",rawName:"v-linkify",value:{text:t.title,linkify:t.linkifyTitle},expression:"{text: title, linkify: linkifyTitle}"},{name:"tooltip",rawName:"v-tooltip.auto",value:t.titleTooltip,expression:"titleTooltip",modifiers:{auto:!0}}],staticClass:"app-sidebar-header__maintitle",on:{click:function(n){return n.target!==n.currentTarget?null:t.editTitle(n)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t\t\t")]),t._v(" "),t.titleEditable?[e("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return t.onSubmitTitle()},expression:"() => onSubmitTitle()"}],staticClass:"app-sidebar-header__maintitle-form",on:{submit:function(n){return n.preventDefault(),t.onSubmitTitle(n)}}},[e("input",{directives:[{name:"focus",rawName:"v-focus"}],ref:"titleInput",staticClass:"app-sidebar-header__maintitle-input",attrs:{type:"text",placeholder:t.titlePlaceholder},domProps:{value:t.title},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.onDismissEditing(n)},input:t.onTitleInput}}),t._v(" "),e("button",{staticClass:"icon-confirm",attrs:{type:"submit"}})])]:t._e(),t._v(" "),""!==t.subtitle.trim()?e("p",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.subtitleTooltip,expression:"subtitleTooltip",modifiers:{auto:!0}}],staticClass:"app-sidebar-header__subtitle"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.subtitle)+"\n\t\t\t\t\t\t")]):t._e()],2),t._v(" "),t.$slots["secondary-actions"]?e("Actions",{staticClass:"app-sidebar-header__menu",attrs:{"force-menu":t.forceMenu}},[t._t("secondary-actions")],2):t._e()],1)]),t._v(" "),t.$slots.description&&!t.empty?e("div",{staticClass:"app-sidebar-header__description"},[t._t("description")],2):t._e()]),t._v(" "),e("AppSidebarTabs",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"tabs",attrs:{active:t.active},on:{"update:active":t.onUpdateActive}},[t._t("default")],2),t._v(" "),t.loading?e("EmptyContent",{attrs:{icon:"icon-loading"}}):t._e()],1)])}),[],!1,null,"6add9d65",null);"function"==typeof E.a&&E()(T);var k=T.exports;
/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */n.default=k},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){t.exports=__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js")}])}));
//# sourceMappingURL=AppSidebar.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppSidebarTab.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppSidebarTab.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(window,(function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=210)}({0:function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(s).concat([c]).join("\n")}return[t].join("\n")}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},167:function(n,e,t){"use strict";var r=t(0),o=t.n(r),i=t(1),a=t.n(i)()(o.a);a.push([n.i,".app-sidebar__tab[data-v-ea6a5b0c]{display:none;padding:10px;min-height:100%;max-height:100%;overflow:auto}.app-sidebar__tab[data-v-ea6a5b0c]:focus{border-color:var(--color-primary);box-shadow:0 0 0.2em var(--color-primary);outline:0}.app-sidebar__tab--active[data-v-ea6a5b0c]{display:block}\n","",{version:3,sources:["webpack://./AppSidebarTab.vue"],names:[],mappings:"AAsFA,mCACC,YAAa,CACb,YAAa,CACb,eAAgB,CAChB,eAAgB,CAChB,aAAc,CALf,yCAQE,iCAAkC,CAClC,yCAA0C,CAC1C,SAAU,CACV,2CAGA,aAAc",sourcesContent:["$scope_version:\"f56d517\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-sidebar__tab {\n\tdisplay: none;\n\tpadding: 10px;\n\tmin-height: 100%; // fill available height\n\tmax-height: 100%; // scroll inside\n\toverflow: auto;\n\n\t&:focus {\n\t\tborder-color: var(--color-primary);\n\t\tbox-shadow: 0 0 0.2em var(--color-primary);\n\t\toutline: 0;\n\t}\n\n\t&--active {\n\t\tdisplay: block;\n\t}\n}\n"],sourceRoot:""}]),e.a=a},2:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,e),references:1}),r.push(l)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,h=0;function v(n,e){var t,r,o;if(e.singleton){var i=h++;t=b||(b=u(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},210:function(n,e,t){"use strict";t.r(e);t(30);var r={name:"AppSidebarTab",props:{id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,required:!0},order:{type:Number,default:0}},computed:{isActive:function(){return this.$parent.activeTab===this.id}},methods:{onScroll:function(n){this.$el.scrollHeight-this.$el.scrollTop===this.$el.clientHeight&&this.$emit("bottomReached",n),this.$emit("scroll",n)}}},o=t(2),i=t.n(o),a=t(167),c={insert:"head",singleton:!1},s=(i()(a.a,c),a.a.locals,t(3)),u=Object(s.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("section",{staticClass:"app-sidebar__tab",class:{"app-sidebar__tab--active":this.isActive},attrs:{id:"tab-"+this.id,"aria-hidden":!this.isActive,"aria-labelledby":this.id,tabindex:"0",role:"tabpanel"},on:{scroll:this.onScroll}},[this._t("default")],2)}),[],!1,null,"ea6a5b0c",null).exports;e.default=u},3:function(n,e,t){"use strict";function r(n,e,t,r,o,i,a,c){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(n,e){return s.call(e),l(n,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:n,options:u}}t.d(e,"a",(function(){return r}))},30:function(n,e){n.exports=__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js")}})}));
//# sourceMappingURL=AppSidebarTab.js.map

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.2.9';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;


    var ElementPrototype = Element.prototype;

    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    var ALL_SVG_TAGS = addToSet({}, svg);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);

    var ALL_MATHML_TAGS = addToSet({}, mathMl);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erronously deleted from
        // HTML namespace.
        var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG or MathML). Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = stringToLowerCase(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = stringToLowerCase(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = currentNode.nodeName.toLowerCase();
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = stringToLowerCase(tag);
      var lcName = stringToLowerCase(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);

    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var defaults$5 = {exports: {}};

  function getDefaults$1() {
    return {
      baseUrl: null,
      breaks: false,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }

  function changeDefaults$1(newDefaults) {
    defaults$5.exports.defaults = newDefaults;
  }

  defaults$5.exports = {
    defaults: getDefaults$1(),
    getDefaults: getDefaults$1,
    changeDefaults: changeDefaults$1
  };

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape$2(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape$1(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit$1(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl$1(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim$1(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest$1 = {
    exec: function noopTest() {}
  };

  function merge$2(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells$1(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim$1(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket$1(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation$1(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777


  function repeatString$1(pattern, count) {
    if (count < 1) {
      return '';
    }

    var result = '';

    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }

      count >>= 1;
      pattern += pattern;
    }

    return result + pattern;
  }

  var helpers = {
    escape: escape$2,
    unescape: unescape$1,
    edit: edit$1,
    cleanUrl: cleanUrl$1,
    resolveUrl: resolveUrl,
    noopTest: noopTest$1,
    merge: merge$2,
    splitCells: splitCells$1,
    rtrim: rtrim$1,
    findClosingBracket: findClosingBracket$1,
    checkSanitizeDeprecation: checkSanitizeDeprecation$1,
    repeatString: repeatString$1
  };

  var defaults$4 = defaults$5.exports.defaults;
  var rtrim = helpers.rtrim,
      splitCells = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket = helpers.findClosingBracket;

  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$4;
    }

    var _proto = Tokenizer.prototype;

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    };

    _proto.code = function code(src) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');

          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }

        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text
        };
      }
    };

    _proto.nptable = function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };

        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          return item;
        }
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
            item,
            space,
            bcurr,
            bnext,
            addBack,
            loose,
            istask,
            ischecked,
            endMatch;
        var l = itemMatch.length;
        bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);

        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item;

          if (!this.options.pedantic) {
            // Determine if current item contains the end of the list
            endMatch = item.match(new RegExp('\\n\\s*\\n {0,' + (bcurr[0].length - 1) + '}\\S'));

            if (endMatch) {
              addBack = item.length - endMatch.index + itemMatch.slice(i + 1).join('\n').length;
              list.raw = list.raw.substring(0, list.raw.length - addBack);
              item = item.substring(0, endMatch.index);
              raw = item;
              l = i + 1;
            }
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);

            if (!this.options.pedantic ? bnext[1].length >= bcurr[0].length || bnext[1].length > 3 : bnext[1].length > bcurr[1].length) {
              // nested list or continuation
              itemMatch.splice(i, 2, itemMatch[i] + (!this.options.pedantic && bnext[1].length < bcurr[0].length && !itemMatch[i].match(/\n$/) ? '' : '\n') + itemMatch[i + 1]);
              i--;
              l--;
              continue;
            } else if ( // different bullet style
            !this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
              addBack = itemMatch.slice(i + 1).join('\n').length;
              list.raw = list.raw.substring(0, list.raw.length - addBack);
              i = l - 1;
            }

            bcurr = bnext;
          } // Remove the list item's bullet
          // so it is seen as the next token.


          space = item.length;
          item = item.replace(/^ *([*+-]|\d+[.)]) ?/, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // trim item newlines at end


          item = rtrim(item, '\n');

          if (i !== l - 1) {
            raw = raw + '\n';
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(raw);

          if (i !== l - 1) {
            next = raw.slice(-2) === '\n\n';
            if (!loose) loose = next;
          }

          if (loose) {
            list.loose = true;
          } // Check for task list items


          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;

            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    };

    _proto.text = function text(src) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    };

    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }

        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var trimmedUrl = cap[2].trim();

        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped


          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim();

        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }

        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        return outputLink(cap, link, cap[0]);
      }
    };

    _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
      var nextChar = match[1] || match[2] || '';

      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
            rLength,
            delimTotal = lLength,
            midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;

          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }

          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*

          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

          if (Math.min(lLength, rLength) % 2) {
            return {
              type: 'em',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: src.slice(1, lLength + match.index + rLength)
            };
          } // Create 'strong' if smallest delimiter has even char count. **a***


          return {
            type: 'strong',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: src.slice(2, lLength + match.index + rLength - 1)
          };
        }
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2]
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  var noopTest = helpers.noopTest,
      edit = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block$1 = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block$1.def = edit(block$1.def).replace('label', block$1._label).replace('title', block$1._title).getRegex();
  block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block$1.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
  block$1.item = edit(block$1.item, 'gm').replace(/bull/g, block$1.bullet).getRegex();
  block$1.listItemStart = edit(/^( *)(bull) */).replace('bull', block$1.bullet).getRegex();
  block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block$1.def.source + ')').getRegex();
  block$1._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block$1.html = edit(block$1.html, 'i').replace('comment', block$1._comment).replace('tag', block$1._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block$1.paragraph = edit(block$1._paragraph).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block$1._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block$1.blockquote = edit(block$1.blockquote).replace('paragraph', block$1.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block$1.normal = merge$1({}, block$1);
  /**
   * GFM Block Grammar
   */

  block$1.gfm = merge$1({}, block$1.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' {0,3}([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' {0,3}\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block$1.gfm.nptable = edit(block$1.gfm.nptable).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block$1.gfm.table = edit(block$1.gfm.table).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block$1.pedantic = merge$1({}, block$1.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block$1._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    paragraph: edit(block$1.normal._paragraph).replace('hr', block$1.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block$1.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline$1 = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //        () Skip other delimiter (1) #***                   (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  }; // list of punctuation marks from CommonMark spec
  // without * and _ to handle the different emphasis markers * and _

  inline$1._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline$1.escapedEmSt = /\\\*|\\_/g;
  inline$1._comment = edit(block$1._comment).replace('(?:-->|$)', '-->').getRegex();
  inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline$1.autolink = edit(inline$1.autolink).replace('scheme', inline$1._scheme).replace('email', inline$1._email).getRegex();
  inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline$1.tag = edit(inline$1.tag).replace('comment', inline$1._comment).replace('attribute', inline$1._attribute).getRegex();
  inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline$1.link = edit(inline$1.link).replace('label', inline$1._label).replace('href', inline$1._href).replace('title', inline$1._title).getRegex();
  inline$1.reflink = edit(inline$1.reflink).replace('label', inline$1._label).getRegex();
  inline$1.reflinkSearch = edit(inline$1.reflinkSearch, 'g').replace('reflink', inline$1.reflink).replace('nolink', inline$1.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline$1.normal = merge$1({}, inline$1);
  /**
   * Pedantic Inline Grammar
   */

  inline$1.pedantic = merge$1({}, inline$1.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline$1._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline$1._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline$1.gfm = merge$1({}, inline$1.normal, {
    escape: edit(inline$1.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  });
  inline$1.gfm.url = edit(inline$1.gfm.url, 'i').replace('email', inline$1.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline$1.breaks = merge$1({}, inline$1.gfm, {
    br: edit(inline$1.br).replace('{2,}', '*').getRegex(),
    text: edit(inline$1.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block$1,
    inline: inline$1
  };

  var Tokenizer$1 = Tokenizer_1;
  var defaults$3 = defaults$5.exports.defaults;
  var block = rules.block,
      inline = rules.inline;
  var repeatString = helpers.repeatString;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$3;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block.normal,
        inline: inline.normal
      };

      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;

        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */


    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    ;

    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens, top) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (top === void 0) {
        top = true;
      }

      if (this.options.pedantic) {
        src = src.replace(/^ +$/gm, '');
      }

      var token, i, l, lastToken;

      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && lastToken.type === 'paragraph') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)


        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;

          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }

          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);

          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph


        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _proto.inline = function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }

          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells


              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];

                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }

              break;
            }

          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }

          case 'list':
            {
              l2 = token.items.length;

              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }

              break;
            }
        }
      }

      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (inLink === void 0) {
        inLink = false;
      }

      if (inRawBlock === void 0) {
        inRawBlock = false;
      }

      var token, lastToken; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      } // Mask out escaped em & strong delimiters


      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }

      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }

        keepPrevChar = false; // escape

        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          var _lastToken = tokens[tokens.length - 1];

          if (_lastToken && token.type === 'text' && _lastToken.type === 'text') {
            _lastToken.raw += token.raw;
            _lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          var _lastToken2 = tokens[tokens.length - 1];

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            tokens.push(token);
          } else if (_lastToken2 && token.type === 'text' && _lastToken2.type === 'text') {
            _lastToken2.raw += token.raw;
            _lastToken2.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // em & strong


        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);

          if (token.raw.slice(-1) !== '_') {
            // Track prevChar before string of ____ started
            prevChar = token.raw.slice(-1);
          }

          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block,
          inline: inline
        };
      }
    }]);

    return Lexer;
  }();

  var defaults$2 = defaults$5.exports.defaults;
  var cleanUrl = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$2;
    }

    var _proto = Renderer.prototype;

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      _code = _code.replace(/\n$/, '') + '\n';

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape$1(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    };

    _proto.image = function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */

  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype;

    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */

  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }

    var _proto = Slugger.prototype;

    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     */
    ;

    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;

      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];

        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }

      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }

      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    ;

    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }

      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };

    return Slugger;
  }();

  var Renderer$1 = Renderer_1;
  var TextRenderer$1 = TextRenderer_1;
  var Slugger$1 = Slugger_1;
  var defaults$1 = defaults$5.exports.defaults;
  var unescape = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$1;
      this.options.renderer = this.options.renderer || new Renderer$1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer$1();
      this.slugger = new Slugger$1();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    ;

    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  var Lexer = Lexer_1;
  var Parser = Parser_1;
  var Tokenizer = Tokenizer_1;
  var Renderer = Renderer_1;
  var TextRenderer = TextRenderer_1;
  var Slugger = Slugger_1;
  var merge = helpers.merge,
      checkSanitizeDeprecation = helpers.checkSanitizeDeprecation,
      escape = helpers.escape;
  var getDefaults = defaults$5.exports.getDefaults,
      changeDefaults = defaults$5.exports.changeDefaults,
      defaults = defaults$5.exports.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }

            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  /**
   * Use Extension
   */

  marked.use = function (extension) {
    var opts = merge({}, extension);

    if (extension.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop];

          renderer[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var ret = extension.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (extension.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop];

          tokenizer[prop] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var ret = extension.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    }

    if (extension.walkTokens) {
      var walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        extension.walkTokens(token);

        if (walkTokens) {
          walkTokens(token);
        }
      };
    }

    marked.setOptions(opts);
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      callback(token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    }
  };
  /**
   * Parse Inline
   */


  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    try {
      var tokens = Lexer.lexInline(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }

      return Parser.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.parse = marked;
  var marked_1 = marked;

  return marked_1;

})));


/***/ }),

/***/ "./node_modules/p-limit/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-limit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Queue = __webpack_require__(/*! yocto-queue */ "./node_modules/yocto-queue/index.js");

var pLimit = function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
    throw new TypeError('Expected `concurrency` to be a number from 1 and up');
  }

  var queue = new Queue();
  var activeCount = 0;

  var next = function next() {
    activeCount--;

    if (queue.size > 0) {
      queue.dequeue()();
    }
  };

  var run = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fn, resolve) {
      var _len,
          args,
          _key,
          result,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              for (_len = _args2.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = _args2[_key];
              }

              activeCount++;
              result = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", fn.apply(void 0, args));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
              resolve(result);
              _context2.prev = 4;
              _context2.next = 7;
              return result;

            case 7:
              _context2.next = 11;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](4);

            case 11:
              next();

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 9]]);
    }));

    return function run(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var enqueue = function enqueue(fn, resolve) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    queue.enqueue(run.bind.apply(run, [null, fn, resolve].concat(args)));

    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.resolve();

            case 2:
              if (activeCount < concurrency && queue.size > 0) {
                queue.dequeue()();
              }

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  };

  var generator = function generator(fn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return new Promise(function (resolve) {
      enqueue.apply(void 0, [fn, resolve].concat(args));
    });
  };

  Object.defineProperties(generator, {
    activeCount: {
      get: function get() {
        return activeCount;
      }
    },
    pendingCount: {
      get: function get() {
        return queue.size;
      }
    },
    clearQueue: {
      value: function value() {
        queue.clear();
      }
    }
  });
  return generator;
};

module.exports = pLimit;

/***/ }),

/***/ "./node_modules/yocto-queue/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yocto-queue/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Node {
	/// value;
	/// next;

	constructor(value) {
		this.value = value;

		// TODO: Remove this when targeting Node.js 12.
		this.next = undefined;
	}
}

class Queue {
	// TODO: Use private class fields when targeting Node.js 12.
	// #_head;
	// #_tail;
	// #_size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this._head) {
			this._tail.next = node;
			this._tail = node;
		} else {
			this._head = node;
			this._tail = node;
		}

		this._size++;
	}

	dequeue() {
		const current = this._head;
		if (!current) {
			return;
		}

		this._head = this._head.next;
		this._size--;
		return current.value;
	}

	clear() {
		this._head = undefined;
		this._tail = undefined;
		this._size = 0;
	}

	get size() {
		return this._size;
	}

	* [Symbol.iterator]() {
		let current = this._head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

module.exports = Queue;


/***/ })

}]);
//# sourceMappingURL=vue-vendors-settings-apps.js.map?v=3ab29eaa08d34e32f249