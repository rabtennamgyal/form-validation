(()=>{"use strict";var e={151:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html,body{font-size:62.5%;box-sizing:border-box}.main{height:100vh;display:grid;place-items:center;background:#ff6842}.main .formContainer{border-radius:10px;background:#fff;box-shadow:rgba(0,0,0,.15) 0px 3px 3px 0px;height:70%;width:30%;display:flex;flex-direction:column;padding:10px}.main .formContainer .input{position:relative;height:18%;width:100%;display:grid;grid-template-rows:1fr 1fr}.main .formContainer .input .inputOne{padding:5px;display:grid;grid-template-columns:1fr 4fr}.main .formContainer .input .inputOne label{justify-self:center;align-self:center;font-size:1.5rem;font-family:cursive,monospace,sans-serif}.main .formContainer .input .inputOne input{height:100%}.main .formContainer .input .inputTwo h1{font-size:1rem;font-family:cursive,monospace,sans-serif;margin-left:5%}.main .formContainer .input .inputTwo .approve{display:none;position:absolute;font-size:1.5rem;top:10%;left:92.5%}.main .formContainer .input .inputTwo .deny{display:none;position:absolute;font-size:1.5rem;top:10%;left:92.5%}.main .formContainer .btn{display:grid;place-items:center}.main .formContainer .btn button{cursor:pointer;height:3rem;width:10rem;border:none;border-radius:20px;color:#fff;border:solid .1px #000;background:#ff6842;font-family:cursive,monospace,sans-serif}.main .formContainer .btn button:hover{border:solid .1px #fff;color:#fff;transition:300ms ease-in-out;box-shadow:inset 0 0 50px #ff6842,inset 20px 0 80px #ff6842,inset -20px 0 80px #ff6842,inset 20px 0 300px #ff6842,inset -20px 0 300px #ff6842,0 0 50px #ff6842,-10px 0 80px #ff6842,10px 0 80px #ff6842}",""]);const s=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(d[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&d[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],s=0;s<e.length;s++){var a=e[s],l=o.base?a[0]+o.base:a[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var f=n(p),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var m=r(u,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var s=n(i[d]);t[s].references--}for(var a=o(e,r),l=0;l<i.length;l++){var c=n(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),s=n(565),a=n.n(s),l=n(216),c=n.n(l),p=n(589),f=n.n(p),u=n(151),m={};m.styleTagTransform=f(),m.setAttributes=a(),m.insert=d().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const h=document.getElementById("Email"),y=document.getElementById("Country"),g=document.getElementById("Zipcode"),v=document.getElementById("Password"),x=document.getElementById("Confirm");h.addEventListener("focusout",(e=>{const t=document.getElementById("approve1"),n=document.getElementById("deny1"),o=e.target.parentNode.parentNode.childNodes[3];if(h.checkValidity()){if(t.style.display="block",n.style.display="none",h.style.border="2px solid #3aff3a",o.childNodes.length>5)for(;5!==o.childNodes.length;){const e=o.childNodes[o.childNodes.length-1];e.parentNode.removeChild(e)}}else{if(t.style.display="none",n.style.display="block",h.style.border="2px solid red",o.childNodes.length>5)return;{const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Please enter a valid email 🙏",o.appendChild(e)}}})),y.addEventListener("focusout",(e=>{const t=document.getElementById("approve2"),n=document.getElementById("deny2"),o=e.target.parentNode.parentNode.childNodes[3];if(y.checkValidity()){if(t.style.display="block",n.style.display="none",y.style.border="2px solid #3aff3a",o.childNodes.length>5)for(;5!==o.childNodes.length;){const e=o.childNodes[o.childNodes.length-1];e.parentNode.removeChild(e)}}else{if(t.style.display="none",n.style.display="block",y.style.border="2px solid red",o.childNodes.length>5)return;{const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Please enter a Country 🙏",o.appendChild(e)}}})),g.addEventListener("focusout",(e=>{const t=document.getElementById("approve3"),n=document.getElementById("deny3"),o=e.target.parentNode.parentNode.childNodes[3];if(g.checkValidity()){if(t.style.display="block",n.style.display="none",g.style.border="2px solid #3aff3a",o.childNodes.length>5)for(;5!==o.childNodes.length;){const e=o.childNodes[o.childNodes.length-1];e.parentNode.removeChild(e)}}else{if(t.style.display="none",n.style.display="block",g.style.border="2px solid red",o.childNodes.length>5)return;{const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Please enter a valid zipcode 🙏",o.appendChild(e)}}})),v.addEventListener("focusout",(e=>{const t=document.getElementById("approve4"),n=document.getElementById("deny4"),o=e.target.parentNode.parentNode.childNodes[3];if(v.checkValidity()){if(t.style.display="block",n.style.display="none",v.style.border="2px solid #3aff3a",o.childNodes.length>5)for(;5!==o.childNodes.length;){const e=o.childNodes[o.childNodes.length-1];e.parentNode.removeChild(e)}}else{if(t.style.display="none",n.style.display="block",v.style.border="2px solid red",o.childNodes.length>5)return;{const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Password must have a min-length of 10 🙏",o.appendChild(e)}}})),x.addEventListener("focusout",(e=>{const t=document.getElementById("approve5"),n=document.getElementById("deny5"),o=e.target.parentNode.parentNode.childNodes[3];if(v.value!==x.value){const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Password must match 😎",o.appendChild(e)}if(x.checkValidity()){if(t.style.display="block",n.style.display="none",x.style.border="2px solid #3aff3a",o.childNodes.length>5)for(;5!==o.childNodes.length;){const e=o.childNodes[o.childNodes.length-1];e.parentNode.removeChild(e)}}else{if(t.style.display="none",n.style.display="block",x.style.border="2px solid red",o.childNodes.length>5)return;{const e=document.createElement("h1");e.classList.add("textStyle"),e.textContent="Password must have a min-length of 10 🙏",o.appendChild(e)}}}))})()})();