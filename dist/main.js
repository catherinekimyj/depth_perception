!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.submitInput(),this.greeting(),this.animateGreeting(),this.animateInput()}var t,n,r;return t=e,(n=[{key:"greeting",value:function(){var e=(new Date).getHours(),t=document.getElementById("user-greeting");return t.innerHTML=e>4&&e<12?"Good morning":e>11&&e<18?"Good afternoon":"Good evening"}},{key:"submitInput",value:function(){var e=document.getElementById("user-button"),t=document.getElementById("name-input"),n=document.getElementById("thought-input"),o=document.getElementById("myModal"),r=(document.getElementsByClassName("close")[0],{});e.onclick=function(e){e.preventDefault();var u=t.value,a=n.value;r.name=u,r.thought=a;var i=r.name.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");""!==r.name?document.getElementById("user-output-greet").innerHTML="Welcome, "+i:document.getElementById("user-output-greet").innerHTML="Hi, there.",""!==r.thought?document.getElementById("user-output-words").innerHTML=r.thought:document.getElementById("user-output-words").innerHTML="Your goal is not to battle with the mind, but to witness the mind.",o.style.display="none"}}},{key:"animateGreeting",value:function(){var e=document.querySelector(".ml16");e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml16 .letter",translateY:[-100,0],easing:"easeOutExpo",duration:1400,delay:function(e,t){return 250*t}}).add({targets:".ml16",opacity:1,duration:1e3,easing:"easeOutExpo",delay:1e3})}}])&&o(t.prototype,n),r&&o(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.closeModal(),this.openModal()}var t,n,o;return t=e,(n=[{key:"closeModal",value:function(){var e=document.getElementById("myModal");document.getElementsByClassName("modal-content"),document.getElementById("close").onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}},{key:"openModal",value:function(){var e=document.getElementById("myModal");document.getElementsByClassName("modal-content"),document.getElementById("myBtn").onclick=function(){e.style.display="block"}}}])&&u(t.prototype,n),o&&u(t,o),e}();n(4);console.log("Webpack is working!"),window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("canvas");e.width=document.body.clientWidth,e.height=document.body.clientHeight;new a(e),new r;var t=document.getElementById("player");t.addEventListener("play",(function(){console.log("playing")})),t.addEventListener("pause",(function(){console.log("paused")}))}))}]);
//# sourceMappingURL=main.js.map