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
    var loc = window.location.href;
    var match_flip = re_flip.exec(loc);
    var match_amz = re_amz.exec(loc);
    var match_spd = re_spd.exec(loc);

    Zepto(function($){
        var css = '.hof_box{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;height:100%;background:#000;opacity:.7}#wrapper{position:fixed;top:15em;left:2em;z-index:1000;padding:.25em;width:auto}#compare{z-index:2000;float:left}#save_rs{float:right;margin-top:.6em;margin-left:-1.5em;width:auto;height:2.7em;border:1px solid rgba(0,0,0,.15);-webkit-border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;background-color:#fff;-webkit-box-shadow:2px 2px 3px #ccc;-moz-box-shadow:2px 2px 3px #ccc;box-shadow:2px 2px 3px #ccc}#save_rs_content{float:left;margin-top:.8em;margin-right:1em;margin-left:2em;width:auto;height:1.4em;color:#848484;text-align:center;font-size:1.1em}#cha_price{margin-top:.8em;margin-right:.8em;height:1em;content:url(https://hasoffer.com/plg/draw/cha_price.png)}.compare_loading{width:4em;content:url(https://hasoffer.com/plg/2.gif)}.compare_done{margin-top:.5em;margin-left:.5em;width:3em;content:url(https://hasoffer.com/plg/hasoffer_icon.png)}.hof_hide{display:none}.hof_font{font-family:Roboto Light,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif!important}.hof_price_block{position:fixed;top:0;z-index:1010;width:22.86em;font-size:14px}.hof_tool{margin-top:1em;margin-left:.38em;height:4em}.hof_tool_close{z-index:1010;position:absolute;padding:0}.close_loading{content:url(https://hasoffer.com/plg/1.gif);width:3.8em;height:3.8em}.close_done{content:url(https://hasoffer.com/plg/close.png);width:2.86em;height:2.86em;margin-top:.45em;margin-left:.45em}.hof_tool_bar{margin-top:.7em;margin-left:1.45em;position:absolute;width:20em;height:2.4em;-webkit-border-top-right-radius:5px;-webkit-border-bottom-right-radius:5px;background-color:#fff}.hof_carve{margin-bottom:1.75em;margin-left:.95em;width:20.95em}.hof_price_tab_content{float:left;margin-top:.45em;margin-left:4.5em;width:8em;height:1.4em;color:#4d4d4d;text-align:center;font-size:1.1em}.hof_best_price_div{float:left;padding-top:.95em;padding-bottom:1.2em;width:100%;text-align:center}.hof_default_copywriting{color:#fff;font-size:1.27em}.hof_best_price_text_result{float:left;margin-left:.82em;color:#fff;text-align:left;font-size:1em;line-height:1.2em}.hof_price_list{overflow-y:auto;height:27em}.hof_card{float:left;margin-bottom:.94em;margin-left:.95em}.hof_card_tag{float:left;padding-right:.4em;width:1.78em;height:12.25em;-webkit-border-bottom-left-radius:5px;-webkit-border-top-left-radius:5px;background-color:#f66;color:#fff;text-align:center}.hof_card_tag p{margin-top:7.5em;margin-left:.5em;word-wrap:normal;font-size:.95em;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-ms-transform:rotate(-90deg)}.hof_card_right{float:left;width:19.17em;height:12.25em;-webkit-border-top-right-radius:5px;-webkit-border-bottom-right-radius:5px;background-color:#fff}.hof_card_right_content{margin-left:.94em;height:100%}.hof_card_right_title{overflow:hidden;padding-top:1.14em;padding-bottom:.54em;width:20em;border-bottom:1px solid #666;color:#333;text-overflow:ellipsis;white-space:nowrap;font-size:.89em;word-break:keep-all}.hof_card_price{float:right;margin-top:2em;margin-right:.63em;width:9.2em}.hof_money_div{float:left;padding-bottom:.54em;width:9.5em;border-bottom:1px solid #666}.hof_money_unit{float:right;margin-top:.4em;margin-right:.4em}.hof_money_font{float:right;color:#333;font-size:2.5em}.hof_card_img{display:block;display:table;margin:auto;width:auto;height:9.5em;text-align:center}.hof_card_div{display:table-cell;vertical-align:middle}.hof_card_div img{max-width:6em;max-height:6em}.hof_save_div{float:right;padding-top:.76em;height:3.44em;color:#999;font-size:.76em}.hof_save_div_text,.hof_save_how_much{height:.8em;text-align:right}.hof_save_how_much{margin-top:.76em}.hof_card_default{width:20.95em;margin-left:.95em;content:url(https://hasoffer.com/plg/default.png)}.hof_no_yike{font-size:1.3em;font-weight:lighter;color:#fff;margin-top:10em;text-align:center}.hof_no_try{width:8em;height:2.5em;border:1px solid #fff;color:#fff;border-top-left-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px;margin:auto;margin-top:1em}.hof_no_try span{margin:auto;width:5em;display:block;margin-top:.5em}';
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
        
        var loc = window.location.href, re_pid, pid, price_text, price_arr, price,
        match_flip = re_flip.exec(loc),
        match_amz = re_amz.exec(loc),
        match_spd = re_spd.exec(loc);
        price_re = /(\d+[,.]\d+(?:[.,]\d+)?)/;///(?:\d+\.)?\d+,\d+|(\d+)/;

        if(match_flip){
            currentSite = 'FLIPKART';
            product = match_flip[0].split('/')[1].replace(/-/g," ");
            re_pid = /pid=.+/;
            pid = re_pid.exec(loc)[0].replace(/pid=/,'');

            price_text = $(".oBFkmr[itemprop='price']").text();
            if(price_text == ""){
                return false;
            }
            price_arr = price_re.exec(price_text);
            if(price_arr != null){
                price = price_arr[0];
            }
            
        }else if(match_spd){
            currentSite = 'SNAPDEAL';
            product = match_spd[0].split('/')[2].replace(/-/g, " ");
            pid = match_spd[0].split('/')[3];
            price = $("#sdPrice").text();
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
        }

        if(currentSite && product && pid){
            var productObj = {};
            productObj.currentSite = currentSite;
            productObj.product = product;
            productObj.pid = pid;
            productObj.price = price;
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
            if(match_flip || match_amz || match_spd){
                dotAction("showIcon");
                $('<div id="wrapper"><span id="save_rs" class="hof_hide"><span id="save_rs_content"></span><img id="cha_price" /></span><img id="compare" class="compare_done" /></div>').appendTo("body");
            }else{
                $('<div id="wrapper" class="hof_hide"><span id="save_rs" class="hof_hide"><span id="save_rs_content"></span><img id="cha_price" /></span><img id="compare" class="compare_done" /></div>').appendTo("body");
            }
        }

        cleanPage();
        $("body").append(returnPriceBlock());
        var fontsize = (14/320)*$(document).width();
        document.getElementsByClassName("hof_price_block")[0].style.fontSize=fontsize+"px";
        var price_list_height = window.screen.availHeight - fontsize * 13;
        // $(".hof_price_list").height("21rem");


        $.ajax({
            type: 'GET',
            headers: {
                'Accept':accept,
                'deviceinfo': deviceInfo
            },
            url: cmp,
            data: ajaxData(pinfo),
            beforeSend:function(){
                $("#wrapper").removeClass('hof_hide');
                $("#compare").removeClass('compare_done');
                $("#compare").addClass('compare_loading');
                $(".hof_tool_close img").removeClass('close_done'); 
                $(".hof_tool_close img").addClass('close_loading'); 
            },
            success:function(raw){
                if(typeof raw != 'object'){
                    raw = JSON.parse(raw);
                }

                if(raw.msg == "ok" && raw.data.priceList.length > 0){
                	$(".hof_price_tab_content").text("BEST PRICES");

                    // $(".hof_price_list").html('');
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
                        window.open($(this).data("href"));
                    });
                }else{
                	noReturn();
                }
            },
            complete:function(){
                $("#compare").removeClass('compare_loading');
                $("#compare").addClass('compare_done');
                $(".hof_tool_close img").removeClass('close_loading'); 
                $(".hof_tool_close img").addClass('close_done'); 
            },
            error:function(){
				noReturn();
            }
        });
    }

    function noReturn(){
    	$(".hof_price_tab_content").text("");
		$(".hof_price_list").html("<h1 class='hof_no_yike'>Yikes! Data problem</h1><div class='hof_no_try hof_hide'><span>Try Again?</span></div>");
		$(".hof_no_try").click(function(){
			var pinfo = getProductInfo();
			loadResult(pinfo,accept,deviceInfo,cmp);
		});
    }

    function returnCard(obj){
        var imageUrl;
        if(obj.imageUrl == ''){
            imageUrl = "https://hasoffer.com/plg/default_product_img.png";
        }else{
            imageUrl = obj.imageUrl ;
        }

        var saveText;
        if(obj.saved < 0){
            saveText = "PAY MORE";
        }else{
            saveText = "YOU SAVE";
        }
        return '\
        <div class="hof_card" data-href="'+ obj.deepLink +'" data-hid="'+ obj.id +'">\
            <span class="hof_card_tag"><p>'+ obj.website +'</p></span>\
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
                        <span class="hof_card_div">\
                            <img src="'+ imageUrl +'" />\
                        </span>\
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
                <span class="hof_tool_close"> <img class="close_done"/> </span>\
            </div>\
            <div class="hof_price_list">\
                <div class="hof_best_price_div">\
                    <span class="hof_best_price_text"><span class="hof_default_copywriting">Searching for Best Options</span></span>\
                </div>\
                <hr class="hof_carve">\
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
        var loc = window.location.href;
        var match_flip = re_flip.exec(loc);
        var match_amz = re_amz.exec(loc);
        var match_spd = re_spd.exec(loc);

        cleanPage();
        if(match_flip || match_amz || match_spd){
            
            $("#wrapper").removeClass("hof_hide");
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
            $("#wrapper").addClass("hof_hide");
        }

    });

    var moveX,moveY,startX,startY,lastX,lastY;
    $(document).on("touchstart","#compare",function(event){
        if($(event.target).attr('id') == 'compare'){
            var touchPros = event.touches[0];
            startX = touchPros.pageX - event.target.parentNode.offsetLeft;
            startY = touchPros.pageY - event.target.parentNode.offsetTop;
            lastX = event.target.parentNode.offsetLeft;
            lastY = event.target.parentNode.offsetTop;
        }
        return false;
    }).on("touchmove","#compare",function(event){
        if($(event.target).attr('id') == 'compare'){
            var touchPros = event.touches[0];
            moveX = touchPros.pageX - startX;
            moveY = touchPros.pageY - startY;
            var baseFont = (14/320)*$(document).width()
            var compareWidth =  baseFont * 3;
            var rsWidth = $("#save_rs").width();
            if(moveX < 0 || moveX > window.screen.width - compareWidth - rsWidth){
                return false;
            }
            if(moveY < compareWidth || moveY > (window.screen.height - compareWidth - baseFont * 11.4)){
                return false;
            }
            $('#wrapper').css('left',moveX).css('top',moveY);
        }
    }).on("touchend","#compare",function(event){
        if((moveX == undefined && moveY == undefined) ||
            Math.abs(moveX-lastX) <=2 && Math.abs(moveY-lastY) <= 2){
            if($(".hof_price_block") != null){
                $(this).addClass('hof_hide');
                $(".hof_price_tab_content").removeClass("hof_hide");
                $(".hof_price_block").removeClass("hof_hide");
                $(".hof_box").removeClass("hof_hide");
                $("html,body").css("overflow","hidden");
                $("body").css("position","fixed");
                dotAction("priceList");

                $('.hof_tool_close').click(function(){
                    $(".hof_price_block").addClass('hof_hide');
                    $(".hof_box").addClass('hof_hide');
                    $("#compare").removeClass('hof_hide');
                    $("html,body").css("overflow","scroll");
                    $("body").css("position","static");
                });
            }
        }
    });

})(Zepto)