!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});
;(function($){
    var deviceId='##deviceId##', imeiId='##imeiId##', brand='##brand##', deviceName='##deviceName##', osVersion='##osVersion##', serial='##serial##', mac='##mac##';
    if(window.hasoffer == undefined){
        window.hasoffer = 'hasoffer';
    }else{
        return false;
    }

    var api = "https://hasoffer.com/api/";
    var dot = "https://hasoffer.com/dot?action=";
    var cmp = api + 'cmp/sdk/cmpskus?';
    var accept = 'application/json, text/javascript, */*; q=0.01';
    var deviceInfo = '{"marketChannel":"VC","appType":"PLUGE","deviceId":"'+ deviceId +'","imeiId":"'+ imeiId +'","brand":"'+ brand +'","deviceName":"'+ deviceName +'","osVersion":"'+ osVersion +'","serial":"'+ serial +'","mac":"'+ mac +'"}';
    var currentSite = "";
    var infiniteInterval=null;
    var intTime = 1000;
    var raw;

    var re_flip = /flipkart.com\/.+\/p\//;
    var re_amz = /amazon.in\/gp\/aw\/d\/.{10}|amazon.in\/.*\/dp\/.{10}|amazon.in\/dp\/.{10}/;
    var re_spd = /snapdeal.com\/product\/.+\/.+/;
    var re_spc = /shopclues.com\/.+.html/;
    var loc = window.location.href;
    var match_flip = re_flip.exec(loc);
    var match_amz = re_amz.exec(loc);
    var match_spd = re_spd.exec(loc);
    var match_spc = re_spc.exec(loc);
    before_load(accept,deviceInfo,api);

    function before_load(accept,deviceinfo,api){
    	console.log('before_load called');
    	var tag_url = api + 'app/vcAff';
        $.ajax({
            type: 'GET',
            headers: {
                'Accept':accept,
                'deviceinfo': deviceInfo
            },
            url: tag_url,
            success:function(data){
            	reload_url(data.FLIPKART,data.SNAPDEAL,data.AMAZON,data.SHOPCLUES);
            }
        });
    }

    function reload_url(flip_affID,spd_affID,amz_affID,spc_affID){

	    if(!getCookie("h_f")){
		    var flip_url = /flipkart.com/;
		    var amz_url = /amazon.in/;
		    var spd_url = /snapdeal.com/;
		    var spc_url = /shopclues.com/;
		    var is_flip = flip_url.exec(loc);
		    var is_amz = amz_url.exec(loc);
		    var is_spd = spd_url.exec(loc);
		    var is_spc = spc_url.exec(loc);
		    var tag_prefix = "&";
		    var tag;
		    if(loc.indexOf('?') < 0){
		    	tag_prefix = "?";
		    }
		    
		    if(is_flip || is_spd || is_amz){
				if(is_flip){
					tag = "affid="+ flip_affID +"&affExtParam1=VC";
				}else if(is_spd){
					tag = "aff_id="+ spd_affID +"&utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_sub=VC";
				}else if(is_amz){
					tag = "tag="+ amz_affID; 
				}
				if(loc.indexOf(tag) < 0){
					window.location.href = loc + tag_prefix +tag;
				}
				setCookie("h_f","yes",1);
			}

			if(is_spc){
				window.location.href = spc_affID + loc;
				setCookie("h_f","yes",1);
			}
		}
	}

    Zepto(function($){
        var css = ".hof_box{top:0;right:0;bottom:0;left:0;height:100%;background:#000;opacity:.7}#wrapper,.hof_box{position:fixed;z-index:1000}#wrapper{top:15em;left:2em;padding:.25em;width:auto;font-size:14px}#compare{z-index:2000;float:left}#save_rs{float:right;margin-top:.6em;margin-left:2em;width:auto;height:2.5em;border:1px solid rgba(0,0,0,.15);-webkit-border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;background-color:#fff;box-shadow:2px 2px 3px #ccc}#save_rs_content{line-height: 1em;float:left;margin-top:.8em;margin-right:1em;margin-left:2em;width:auto;height:1.4em;color:#848484;text-align:center;font-size:1.1em}#cha_price{margin-top:.8em;margin-right:.8em;height:1em;content:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAElBMVEUAAABNTU1NTU1NTU1NTU1NTU310jjDAAAABXRSTlMAP+uldEuMLI4AAABBSURBVAjXYzBkAANGAwYhARADRDEqgoUUwTwwAeZCMJgPQhA1ICGIoJMAlMUSwoAihlCH0IswD2EHwl6EWxDuAwCwfwUVTVUZRAAAAABJRU5ErkJggg==')}#compare_icon{width:3em;content:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNGIxZWUwZC05YjE3LTNlNGItOTQ2My00YjA2OTIwNjY2NmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U0OTY4MDRCRUM5MTFFNjg5OTlGRDJENkZBQkFGOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0U0OTY4MDNCRUM5MTFFNjg5OTlGRDJENkZBQkFGOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZWQyYTc5OC05MzMzLTRiY2ItYTkzMi00ZjQyYjQxOTdiNTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjZWMxZmU1ZS1lMjMxLTExNzktYjUy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')}.hof_hide{display:none}.hof_font{font-family:Roboto Light,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif!important}.hof_price_block{position:fixed;top:0;z-index:1010;width:22.86em;font-size:14px}.hof_tool{margin-top:1em;margin-left:.38em;height:4em}.hof_tool_close{z-index:1010;position:absolute;padding:0}.close_loading{width:3.8em;height:3.8em}.close_done{content:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAn1BMVEUAAADi4uLj4+Pj4+Pi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLj4+Pi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL////8/PzT09Pt7e3n5+f5+flbW1v19fXx8fHv7+/i4uKurq6MjIzS0tJNTU2SNikSAAAAJnRSTlMABfbw7BcOx4faml0w3vPBKh/lpYJ1QDrpu49fkFD50byRd1MIB5YqfhMAAAKRSURBVFjDzZnbjuIwDIbdE22hLZTDcJzzjE2STQqz+/7PtkhIixDD4NJY2u+qvflktWnq+AcGQTHIJmkeR7unuHxOJ9mgCKA7wXw6DLVy1hAhIpEx1ikdDqfzbvqHfqwbS3gB2UbH/Yd7vb1ZqRvCq1Cj81kP2pOsImXwBkZFq6RtxVmoCBmQCrNWlQ/GRzFPPh6wxfVSG2yB0cuaWXLksCUu4hT+2b8omVV4//PmwkgV4R2QSm8slVHZ4J005egnc7FweDd2UfxQc2SxAza6Wnc9ttgJO66vvMHcYUdc/u27DNIGO9OkAVyyUugBtbk0P2pCD5B+vHiFkUEvmKiGc5YOPeGW5+a1Rm/o9dnOPzboDTPuwYlMoUdUdjInIaFHKEw8L+kTavXvSVeEXqGqB0dmCj2jZnAkN+gZkx/NDxq9o489W79B77g+HAhiQu9QHBzUc40C6PlBPW1QgGZ6UA8tCmCHAEFIKACFARQaRdAFDDif4tf27Hb7xfggB5A5hnr7a3t295uxsjOYWGS7T9e3sRNIDfLdfDOaFHJCvptvRsohJuS7+WakGCJEvvto5lHBDlu493wz7uAJ+ez/7LGFOiahqisoCUWeNcXwbIRWSA5DI7OuzRAmVuZrtBN4czJ7iHuDdyWz86l3GGmZ/VqPBH9gcr9dwWZBsMURbMzk2knBJliudRc8cAgek8QOdxvBI6ncQVrs+L/oyQ0t5EYtggMi+bHWiVc/w7hX0RHiJUnZffBZJlcGwYuu49rFCK5QdB0yF9KjcfmBvnwMceLj3vDkQy7yYVG/tA2qXmrgsm4Xr63/j1DwQLKpOFFmtUlkAthy1usWG+M3cGNjftiNROywu01EX+12VZyzI/q/k3ms9sLpb5EAAAAASUVORK5CYII=');width:3em;height:3em}.hof_tool_bar{margin-top:.7em;margin-left:1.45em;position:absolute;width:20em;height:2.4em;-webkit-border-top-right-radius:5px;-webkit-border-bottom-right-radius:5px;background-color:#fff}.hof_carve{margin-bottom:0.7em;margin-left:.95em;width:20.95em;border-bottom:1px solid #fff;height:1px;display:inline-block}.hof_price_tab_content{float:left;margin-left:4.5em;width:8em;height:1.4em;color:#4d4d4d;text-align:center;font-size:1.1em;line-height:2.5em}.hof_best_price_div{float:left;padding-top:.5em;padding-bottom:0.7em;width:100%;text-align:center}.hof_default_copywriting{color:#fff;font-size:1.27em}.hof_best_price_text_result{float:left;margin-left:.82em;color:#fff;text-align:left;font-size:1em;line-height:1.2em}.hof_price_list{overflow-y:auto;height:27em}.hof_card{float:left;margin-bottom:.6em;margin-left:.95em}.hof_card_tag{float:left;padding-right:.4em;width:1.78em;height:12.25em;-webkit-border-bottom-left-radius:5px;-webkit-border-top-left-radius:5px;background-color:#f66;color:#fff;text-align:center}.hof_card_tag p{margin-top:7.5em;margin-left:.5em;word-wrap:normal;font-size:.95em;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-ms-transform:rotate(-90deg)}.hof_card_right{float:left;width:19.17em;height:12.25em;-webkit-border-top-right-radius:5px;-webkit-border-bottom-right-radius:5px;background-color:#fff}.hof_card_right_content{margin-left:.94em;height:100%}.hof_card_right_title{overflow:hidden;padding-top:1.14em;padding-bottom:.54em;width:20em;border-bottom:1px solid #666;color:#333;text-overflow:ellipsis;white-space:nowrap;font-size:.89em;word-break:keep-all}.hof_card_price{float:right;margin-top:2em;margin-right:.63em;width:9.2em}.hof_money_div{float:left;padding-bottom:.54em;width:9.5em;border-bottom:1px solid #666;line-height:normal}.hof_money_unit{float:right;margin-top:.4em;margin-right:.4em}.hof_money_font{float:right;color:#333;font-size:2.5em}.hof_card_img{display:block;display:table;margin:auto;width:auto;height:9.5em;text-align:center}.hof_card_div{display:table-cell;vertical-align:middle}.hof_card_div img{max-width:6em;max-height:6em}.hof_save_div{float:right;padding-top:.76em;height:3.44em;color:#999;font-size:.76em}.hof_save_div_text,.hof_save_how_much{height:.8em;text-align:right}.hof_save_how_much{margin-top:.76em}.hof_card_default{width:20.95em;margin-left:.95em;content:url('data:image/png;base64,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')}.hof_no_yike{font-size:1.3em;font-weight:lighter;color:#fff;margin-top:10em;text-align:center}.hof_no_try{width:8em;height:2.5em;border:1px solid #fff;color:#fff;border-top-left-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px;margin:auto;margin-top:1em}.hof_no_try span{margin:auto;width:5em;display:block;margin-top:.5em}.loading{border:2px solid #f60;border-right:2px solid transparent;border-bottom:2px solid transparent;border-radius:50%;-webkit-animation:loading 1s infinite linear;animation:loading 1s infinite linear}.abgne-loading{position:relative;height:3.6em;width:3.6em}.loading{height:100%;width:100%}.word{position:absolute;top:0;left:0;display:inline-block;text-align:center;margin:.3em 0 0 .3em;padding:0}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}";
        appendCss(css);
        cleanPage();
        if($("#wrapper").length == 0){
            console.log("insert wrapper");
            window.clearInterval(infiniteInterval);
            infiniteInterval = window.setInterval(function(){
                var pinfo = getProductInfo();
                console.log(pinfo);
                if(pinfo) {
                    window.clearInterval(infiniteInterval);
                    infiniteInterval = null;
                    loadResult(pinfo,accept,deviceInfo,cmp);
                }
            },intTime);
        }
    })

	function setCookie(c_name,value,expiredays){
		var exdate=new Date();

		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
	}

	function getCookie(c_name){
		if (document.cookie.length>0){
		 	c_start=document.cookie.indexOf(c_name + "=")
		 	if (c_start!=-1){ 
			    c_start=c_start + c_name.length+1;
			    c_end=document.cookie.indexOf(";",c_start);
			    if (c_end==-1) c_end=document.cookie.length;
			    return unescape(document.cookie.substring(c_start,c_end));
		    } 
		 }
		return "";
	}

    function appendCss(css){
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }

    function getProductInfo(){
        
        var loc = window.location.href, re_pid, pid, price_text, price_arr, price, ext_css,
        match_flip = re_flip.exec(loc),
        match_amz = re_amz.exec(loc),
        match_spd = re_spd.exec(loc);
        match_spc = re_spc.exec(loc);
        price_re = /(\d+[,.]\d+(?:[.,]\d+)?)/;///(?:\d+\.)?\d+,\d+|(\d+)/;

        if(match_flip){
            currentSite = 'FLIPKART';
            product = match_flip[0].split('/')[1].replace(/-/g," ");
            re_pid = /pid=.+/;
            pid = re_pid.exec(loc)[0].replace(/pid=/,'');

            price_text = $(".oBFkmr[itemprop='price']").text();

            if(price_text == null){
            	price_text = $("._14X7rf").text();
                price = price_text;
            }else{
				price_arr = price_re.exec(price_text);
	            if(price_arr != null){
	                price = price_arr[0];
	            }
            }
            
        }else if(match_spd){
            currentSite = 'SNAPDEAL';
            product = match_spd[0].split('/')[2].replace(/-/g, " ");
            pid = match_spd[0].split('/')[3];
            price = $("#sdPrice").text();

            ext_css = "#compare_icon{width:3.3em}.close_done{width:3.3em;height:3.3em}";
            appendCss(ext_css);
        }else if(match_amz){
            currentSite = 'AMAZON';
            product = $("#title").text();
            pid = match_amz[0].split('/').pop();
            price = $(".buyingPrice").eq(0).text();

            if(price == null){
                price_text = $("#priceblock_dealprice").html();
                if(price_text != null){
                    price_arr = price_re.exec(price_text);
                    if(price_arr != null){
                        price = price_arr[0];
                    }
                }else{
                    var html_re = /<b>Price:<\/b>&nbsp;Rs.*\d+&nbsp;<br \/>/;
                    var mas = html_re.exec($("body").html());
                    if(mas != null && mas[0]){
                        var mas_price = price_re.exec(mas[0]);
                        if(mas_price != null){
                            price = mas_price[0];
                        }
                    }
                }
            }
        }else if(match_spc){
        	currentSite = 'SHOPCLUES';
        	product = $(".sc_pdpinfo h1").text().trim();
        	pid = $("#product_id").val();
        	price = $(".main_price").text();
        }

        if(currentSite && product && pid){
            var productObj = {};
            productObj.currentSite = $.trim(currentSite);
            productObj.product = $.trim(product);
            productObj.pid = $.trim(pid);
            productObj.price = $.trim(price);
            return productObj;
        }else{
            return false;
        }

    }

    function cleanPage(){
        $(".hof_price_block").remove();
        $(".hof_box").remove();
    }

    function ajaxData(pinfo){
    	return {
            	pageSize:10,
                site:pinfo.currentSite,
                brand:'',
                price:pinfo.price,
                page:'1',
                q:pinfo.product,
                sourceId:pinfo.pid
            };
    }

    function loadResult(pinfo,accept,deviceinfo,cmp){

        if(!pinfo){
            return false;
        }

        if(document.getElementById("wrapper") == null){
            dotAction("showIcon");
            $('<div id="wrapper">\
            	<span id="save_rs" class="hof_hide">\
            	<span id="save_rs_content"></span>\
            	<img id="cha_price" /></span>\
	            	<div class="abgne-loading">\
	            		<div id="compare_loading" class="loading"></div>\
	            		<div id="compare" class="word">\
	            			<img id="compare_icon" />\
	            		</div>\
	            	</div>\
            	</div>').appendTo("body");
        }

        $.ajax({
            type: 'GET',
            headers: {
                'Accept':accept,
                'deviceinfo': deviceInfo
            },
            url: cmp,
            data: ajaxData(pinfo),
            beforeSend:function(){
		        cleanPage();
		        $("body").append(returnPriceBlock());
		        console.log('document width:'+$(document).width() + 'screen width:'+ screen.width);
		        var fontsize = (14/320)*screen.width;
		        document.getElementsByClassName("hof_price_block")[0].style.fontSize=fontsize+"px";
		        var price_list_height = window.screen.availHeight - fontsize * 12;

                $("#wrapper").removeClass('hof_hide');
                $("#compare").removeClass('hof_hide');
                $("#compare_loading").addClass('loading');
                $("#cha_loading").addClass('loading'); 
                // $(".hof_tool_close img").addClass('close_loading'); 
            },
            success:function(raw){
                if(typeof raw != 'object'){
                    raw = JSON.parse(raw);
                }

                if(raw.msg == "ok" && raw.data.priceList.length > 0){

                    $('.hof_card').each(function(index){
                      $(this).remove();
                    })
                    $(".hof_card_default").remove();
                    console.log("hof_card_default remove!")
                    var data = raw.data;
                    
                    $(".hof_best_price_text").html("<span class='hof_best_price_text_result'>"+data.copywriting+"</div>");
                    $.each(data.priceList,function(i,v){
                        var card = returnCard(v);
                        $(".hof_price_list").append(card);

                    });
                    $(".hof_card").last().css("margin-bottom","100px");

                    if(data.priceOff > 0){
                        $("#save_rs_content").text("Save Rs. "+data.priceOff);
                        $("#save_rs").removeClass('hof_hide'); 
                    }

                    $("#cha_price").on("click",function(){
                        $("#save_rs").addClass('hof_hide');
                    });

                    $(".hof_card").on("click",function(){
                        dotAction("shop&value="+$(this).data("hid"));
                        cleanPage();
                        window.open($(this).data("href"));
                    });

                    $(".hof_price_tab_content").text("BEST PRICES");
// $(".hof_price_tab_content").removeClass("hof_hide");
// $(".hof_price_block").removeClass("hof_hide");
// $(".hof_box").removeClass("hof_hide");
// $("html,body").css("overflow","hidden");
// $("body").css("position","fixed");
// $("#compare").addClass('hof_hide');
                }else{
                	noReturn();
                }
            },
            complete:function(){
                $("#compare_loading").removeClass('loading');
                $("#cha_loading").removeClass('loading'); 
            },
            error:function(){
				noReturn();
            }
        });
    }

    function noReturn(){
    	$(".hof_price_tab_content").text(" ");
    	$("#hof_search_text").addClass('hof_hide');
		$(".hof_price_list").html("<h1 class='hof_no_yike'>Yikes! Data problem</h1><div class='hof_no_try hof_hide'><span>Try Again?</span></div>");
		$(".hof_no_try").click(function(){
			var pinfo = getProductInfo();
			loadResult(pinfo,accept,deviceInfo,cmp);
		});
    }

    function returnCard(obj){
        var imageUrl = '',margin_top,saveText,img_html;
        if(obj.imageUrl == ''){
            var default_product_img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAtFBMVEUAAAD19fX29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vbV1dXY2Njn5+ff39/u7u7c3Nzj4+Pp6enh4eHy8vLw8PDa2trr6+tSp7S/AAAALnRSTlMA/swV8W1REYYCBwTz4cW79u9yQwsc3tmnkoycdyQigjHr5bQzAdGfsGddPD99UeFOwgAACFlJREFUeNrc19l2omAQBODiZ/9RdtyQCDEm0ZzU+z/eXMzFZJYoKEsz3xvUOX26ujEMt3bSXfkerldNYpFW0qzW4Xu5S53axTyYWfqmLF5hqbc0MyFY8GJvntnS88Z+CSBQZR8tdmQd7QqS+Nl2zTutt5kPEfyPbcOHNNuP6bMUn0v2YPlZYEK+czTYE+Po+JhGbq/Yq5WdY3yml7B3iWdiXOYu5iDi3ZhRXG/BwSw8F+PQacJBJanGCJwlB7d0MLQq4iiiCkMK9jFHEu8DDKZWHJGqMYzgYHBUxiHAACrF0akKvbssOIHFBf3SJSdSavSoUJyMKtCbrOGEmgw9ORuclHFGH04eJ+ed8DC9oQAbjQflEUWIcjzEVRQidPEA85ViKPP/yEG+mvOfq5+Ui7vkIYUJc9xBC9lXX0UanZ1E9MefNt2bUUCf/4uHjs4U6oxOMoNCGRk6KBqK1RRoTQsrkN8pjbZKilaipQuFu6CVJ4vCWU9owRd3mfwt9HHbgTNwwE212Ab5yqhxQyB68/6iAly350zscVUVcybiCtcI/EG+E+EKhzPi4Fv6BzX2ttNGDIQBeIYEItoEcUwgSBRBEUigf+w97+b936tFKSSNs8U745t+94ljz8HjzPEfmX9LUult7cQVnpEK+8KJq1vAXO+TMaJ5WetapNF2suYRazyxv269fHANUmicSMxOYt69oylitbKRIYVMNlpEmo5onyWi1RK3rupkpEasJe1xdYpoTrZ42HnZ4hDr9Mo49Yokzq1MtiFCb5VcngG6iBSw63QRwdkl7TrEAIVy3fQncxiM73MM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';
        	img_html = '<img style="content:url(\''+ default_product_img +'\')"/>';
        }else{
            img_html = '<img src="'+ obj.imageUrl +'"/>';
        }
console.log(img_html)
        if(obj.saved < 0){
            saveText = "PAY MORE";
        }else{
            saveText = "YOU SAVE";
        }

        switch(obj.website.toLowerCase()){
        	case "shopclues":
        		margin_top = "8.5";
        	break;
        	case "snapdeal":
        		margin_top = "8";
        	break;
        	case "ebay":
        		margin_top = "6.8";
        	break;
        }
        var style = "style='margin-top:"+margin_top+"em'";

        return '\
        <div class="hof_card" data-href="'+ obj.deepLink +'" data-hid="'+ obj.id +'">\
            <span class="hof_card_tag"><p '+ style +'>'+ obj.website +'</p></span>\
            <span class="hof_card_right">\
                <div class="hof_card_right_content">\
                    <div class="hof_card_right_title">' + obj.title + '</div>\
                    <span class="hof_card_price">\
                        <div class="hof_money_div">\
                            <span class="hof_money_font hof_font">'+ obj.skuPrice +'</span>\
                            <span class="hof_money_unit hof_font">₹</span>\
                        </div>\
                        <div class="hof_save_div">\
                            <div class="hof_save_div_text">' + saveText + '</div>\
                            <div class="hof_save_how_much hof_font">₹'+ Math.abs(obj.saved) +'</div>\
                        </div>\
                    </span>\
                    <span class="hof_card_img">\
                        <span class="hof_card_div">'+ img_html +'</span>\
                    </span>\
                </div>\
            </span>\
        </div>';
    }

    function returnPriceBlock(){
        return '\
        <div class="hof_price_block hof_hide">\
            <div class="hof_tool">\
                <span class="hof_tool_bar"> <span class="hof_price_tab_content hof_font hof_hide"></span> </span>\
                <span class="hof_tool_close"> \
				<div class="abgne-loading">\
					<div id="cha_loading" class="loading"></div>\
					<div id="cha" class="word">\
						<img class="close_done"/>\
					</div>\
				</div>\
                </span>\
            </div>\
            <div id="hof_search_text">\
            	<div class="hof_best_price_div">\
                    <span class="hof_best_price_text">\
                    	<span class="hof_default_copywriting">Searching for Best Options</span>\
                    </span>\
                </div>\
                <div class="hof_carve"></div>\
            </div>\
            <div class="hof_price_list">\
                <img class="hof_card_default"/> \
            </div>\
        </div>\
        <div class="hof_box hof_hide"></div>';
    }

    function dotAction(type){
        $.ajax({
            type: 'GET',
            headers: {
                'Accept': accept,
                'deviceinfo': deviceInfo
            },
            url: dot + type
        });
    }

    function hashHandler(callback){
        this.oldHash = window.location.href;
        this.Check;

        var that = this;
        var detect = function(){
            if(that.oldHash!=window.location.href){
                callback();
                that.oldHash = window.location.href;
            }
        };
        this.Check = setInterval(function(){ detect() }, 100);
    }

    var hashDetection = new hashHandler(function(){
        var re_flip = /flipkart.com\/.+\/p\//;
        var re_amz = /amazon.in\/gp\/aw\/d\/.{10}|amazon.in\/.*\/dp\/.{10}|amazon.in\/dp\/.{10}/;
        var re_spd= /snapdeal.com\/product\/.+\//;
        var re_spc = /shopclues.com\/.+.html/;
        var loc = window.location.href;
        var match_flip = re_flip.exec(loc);
        var match_amz = re_amz.exec(loc);
        var match_spd = re_spd.exec(loc);
        var match_spc = re_spc.exec(loc);

        cleanPage();
        if(match_flip || match_amz || match_spd || match_spc){
            
            dotAction("showIcon");
            window.clearInterval(infiniteInterval);
            infiniteInterval = window.setInterval(function(){
                var pinfo = getProductInfo();
                console.log(pinfo);
                if(pinfo) {
                    window.clearInterval(infiniteInterval);
                    infiniteInterval = null;
                    loadResult(pinfo,accept,deviceInfo,cmp);
                }
            },intTime);
            
        }else{
            $("#wrapper").remove();
        }

    });


    // function bind_move(){
	    var moveX,moveY,startX,startY,lastX,lastY;
	    $(document).on("touchstart","#compare_icon",{passive:true},function(event){
	    	

	        if($(event.target).attr('id') == 'compare_icon'){
	            var touchPros = event.touches[0];
	            startX = touchPros.pageX - event.target.parentNode.parentNode.parentNode.offsetLeft;
	            startY = touchPros.pageY - event.target.parentNode.parentNode.parentNode.offsetTop;
	            lastX = event.target.parentNode.parentNode.parentNode.offsetLeft;
	            lastY = event.target.parentNode.parentNode.parentNode.offsetTop;
	            console.log(startX,startY,lastX,lastY);
	        }
	        return false;
	    }).on("touchmove","#compare_icon",{passive:true},function(event){
	    	
	        if($(event.target).attr('id') == 'compare_icon'){
	            var touchPros = event.touches[0];
	            moveX = touchPros.pageX - startX;
	            moveY = touchPros.pageY - startY;
	            var baseFont = (14/320) * window.screen.width;
	            var compareWidth =  baseFont * 3;
	            var rsWidth = $("#save_rs").width();
	            if(moveX < 0 || moveX > window.screen.width - compareWidth - rsWidth){
	                return false;
	            }
	            if(moveY < compareWidth || moveY > (window.screen.height - compareWidth - baseFont * 11.4)){
	                return false;
	            }
	            // console.log(moveX,moveY);
	            $('#wrapper').css('left',moveX).css('top',moveY);
	        }
	    }).on("touchend","#compare_icon",{passive:true},function(event){
	        if((moveX == undefined && moveY == undefined) ||
	            Math.abs(moveX-lastX) <=10 && Math.abs(moveY-lastY) <= 10){
	            // if($(".hof_price_tab_content") != ""){
	                
	                $(".hof_price_tab_content").removeClass("hof_hide");
	                $(".hof_price_block").removeClass("hof_hide");
	                $(".hof_box").removeClass("hof_hide");
	                $("html,body").css("overflow","hidden");
	                $("body").css("position","fixed");
	                $("#compare").addClass('hof_hide');
	                dotAction("priceList");

	                $('.hof_tool_close').click(function(){
	                    $(".hof_price_block").addClass('hof_hide');
	                    $(".hof_box").addClass('hof_hide');
	                    $("#compare").removeClass('hof_hide');
	                    $("html,body").css("overflow","scroll");
	                    $("body").css("position","static");
	                });
	            // }
	        }
    	});
	// }
})(Zepto)