!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){var n=document.createElement("style");n.textContent="button[data-i6f3bfb96]{padding:5px;border-radius:5px;border:none;background-color:tomato;color:white;}button[data-i6f3bfb96]:hover{cursor:pointer;background-color:orangered;}",document.head.appendChild(n)},function(t,e){var n=document.createElement("style");n.textContent="\nhome-page {\n\tdisplay: block;\n\tbackground-color: cornsilk;\n\tpadding: 20px;\n\tborder-radius: 5px;\n\twidth: 200px;\n\ttext-align: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 30px;\n}\n.reset {\n\tfont-size: .8rem;\n\tmargin-top: 5px;\n\tcolor: #8f8f8f;\n}\n.reset:hover {\n\ttext-decoration: underline;\n\tcolor: tomato;\n\tcursor: pointer;\n}\n",document.head.appendChild(n)},function(t,e){var n=document.createElement("style");n.textContent="\nhtml {\n\tbackground-color: darkslateblue;\n\tdisplay: block;\n}\n",document.head.appendChild(n)},function(t,e,n){"use strict";n.r(e);class i{constructor(t){this.dom=t,this.string=""}contains(t){return this.dom.classList.contains(t)}add(t){return this.contains(t)||(this.string+=(this.string?" ":"")+t,this.dom.classList.add(t)),this}remove(t){if(!this.contains(t))return this;var e=new RegExp("(^|\\s)*"+t+"(\\s|$)*","g");return this.string=this.string.replace(e,""),this.dom.classList.remove(t),this}toggle(t,e){return null==e&&(e=!this.contains(t)),e?this.add(t):this.remove(t)}valueOf(){return this.string}toString(){return this.string}sync(){return this.dom.flagSync$()}}var r="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(t,1e3/60)};function s(t){return t?t.toIterable?t.toIterable():t:[]}const o={esc:[27],tab:[9],enter:[13],space:[32],up:[38],down:[40],del:[8,46]};var a,h,l;a=Event,h={wait$mod:(t,e)=>new Promise((function(t){return setTimeout(t,"number"==typeof e[0]||e[0]instanceof Number?e[0]:1e3)})),sel$mod:(t,e)=>t.event.target.closest(e[0])||!1,throttle$mod({handler:t,element:e,event:n},i){if(t.throttled)return!1;t.throttled=!0;let r=i[0];"string"==typeof r||r instanceof String||(r="in-"+(n.type||"event"));let s=e.classList;return s.add(r),t.once("idle",(function(){return s.remove(r),t.throttled=!1})),!0}},l=Object.getOwnPropertyDescriptors(h),Object.defineProperties(a.prototype,l);class u{constructor(t,e){this.params=t,this.closure=e}getHandlerForMethod(t,e){return t?t[e]?t:this.getHandlerForMethod(t.parentNode,e):null}emit(t,...e){return imba.emit(this,t,e)}on(t,...e){return imba.listen(this,t,...e)}once(t,...e){return imba.once(this,t,...e)}un(t,...e){return imba.unlisten(this,t,...e)}async handleEvent(t){var e=t.target,n=t.currentTarget,i=this.params;let r=!0,a=!1;this.currentEvents||(this.currentEvents=new Set),this.currentEvents.add(t);let h={element:n,event:t,modifiers:i,handler:this};for(let l,u,c=0,d=Object.keys(i),p=d.length;c<p;c++){l=d[c],u=i[l],l.indexOf("~")>0&&(l=l.split("~")[0]);let p=[t,this],f=void 0,m=null;if("$"==l[0]&&"_"==l[1]&&u[0]instanceof Function)l=u[0],p=[t,h].concat(u.slice(1)),m=n;else if(u instanceof Array){p=u.slice();for(let e=0,n=s(p),i=n.length;e<i;e++){let i=n[e];if("string"==typeof i&&"~"==i[0]&&"$"==i[1]){let n=i.slice(2).split("."),r=h[n.shift()]||t;for(let t=0,e=s(n),i=e.length;t<i;t++){let n=e[t];r=r?r[n]:void 0}p[e]=r}}}if("stop"==l)t.stopImmediatePropagation();else if("prevent"==l)t.preventDefault();else if("ctrl"==l){if(!t.ctrlKey)break}else if("commit"==l)r=!0;else if("silence"==l)r=!1;else if("alt"==l){if(!t.altKey)break}else if("shift"==l){if(!t.shiftKey)break}else if("meta"==l){if(!t.metaKey)break}else if("self"==l){if(e!=n)break}else if("once"==l)n.removeEventListener(t.type,this);else{if("options"==l)continue;if(o[l]){if(o[l].indexOf(t.keyCode)<0)break}else if("trigger"==l||"emit"==l){let e=p[0],i=p[1],r=new CustomEvent(e,{bubbles:!0,detail:i});r.originalEvent=t;n.dispatchEvent(r)}else if("string"==typeof l){let e=l+"$mod";t[e]instanceof Function?(l=e,m=t,p=[h,p]):"_"==l[0]?(l=l.slice(1),m=this.closure):m=this.getHandlerForMethod(n,l)}}if(l instanceof Function?f=l.apply(m||n,p):m&&(f=m[l].apply(m,p)),f&&f.then instanceof Function&&(r&&imba.commit(),a=!0,f=await f),!1===f)break;h.value=f}r&&imba.commit(),this.currentEvents.delete(t),0==this.currentEvents.size&&this.emit("idle")}}var{Document:c,Node:d,Text:p,Comment:f,Element:m,SVGElement:_,HTMLElement:$,DocumentFragment:g,ShadowRoot:b,Event:v,CustomEvent:y,MouseEvent:x,document:C}=window;function E(t){return t?t.toIterable?t.toIterable():t:[]}function w(t,e){var n=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(t.prototype,n),t}w(g,{get $parent(){return this.up$||this.__parent},setup$(t,e){return this.__start=imba.document.createComment("start"),this.__end=imba.document.createComment("end"),this.__end.replaceWith$=function(t){return this.parentNode.insertBefore(t,this),t},this.appendChild(this.__start),this.appendChild(this.__end)},text$(t){this.__text?this.__text.textContent=t:this.__text=this.insert$(t)},insert$(t,e,n){return this.__parent?this.__parent.insert$(t,e,n||this.__end):m.prototype.insert$.call(this,t,e,n||this.__end)},insertInto$(t,e){return this.__parent||(this.__parent=t,t.appendChild$(this)),this},replaceWith$(t,e){this.__start.insertBeforeBegin$(t);for(var n=this.__start;n;){let t=n.nextSibling;if(this.appendChild(n),n==this.__end)break;n=t}return t},appendChild$(t){return this.__end?this.__end.insertBeforeBegin$(t):this.appendChild(t),t},removeChild$(t){return t.parentNode&&t.parentNode.removeChild(t),this},isEmpty$(){let t=this.__start,e=this.__end;for(;(t=t.nextSibling)&&t!=e;)if(t instanceof m||t instanceof p)return!1;return!0}}),w(b,{get $parent(){return this.host}});class N{constructor(t,e){this.__f=t,this.__parent=e,!(128&t)&&this instanceof k&&(this.__start=C.createComment("start"),e&&e.appendChild$(this.__start)),256&t||(this.__end=C.createComment("end"),e&&e.appendChild$(this.__end)),this.setup()}get $parent(){return this.__parent}appendChild$(t,e){this.__end&&this.__parent?this.__end.insertBeforeBegin$(t):this.__parent&&this.__parent.appendChild$(t)}replaceWith$(t){this.detachNodes(),this.__end.insertBeforeBegin$(t),this.__parent.removeChild$(this.__end),this.__parent=null}joinBefore$(t){return this.insertInto$(t.parentNode,t)}insertInto$(t,e){return this.__parent||(this.__parent=t,e?e.insertBeforeBegin$(this.__end):t.appendChild$(this.__end),this.attachNodes()),this}replace$(t){return this.__parent||(this.__parent=t.parentNode),t.replaceWith$(this.__end),this.attachNodes(),this}setup(){return this}}class k extends N{static init$(){return super.inherited instanceof Function&&super.inherited(this)}setup(){return this.array=[],this.changes=new Map,this.dirty=!1,this.$={}}push(t,e){if(!(1&this.__f))return this.array.push(t),void this.appendChild$(t);let n=this.array[e];if(n===t);else{this.dirty=!0;let i=this.array.indexOf(t),r=this.changes.get(t);-1===i?(this.array.splice(e,0,t),this.insertChild(t,e)):i===e+1?(n&&this.changes.set(n,-1),this.array.splice(e,1)):(i>=0&&this.array.splice(i,1),this.array.splice(e,0,t),this.insertChild(t,e)),-1==r&&this.changes.delete(t)}}insertChild(t,e){if(e>0){this.array[e-1].insertAfterEnd$(t)}else this.__start?this.__start.insertAfterEnd$(t):this.__parent.insertAfterBegin$(t)}removeChild(t,e){t.parentNode==this.__parent&&this.__parent.removeChild(t)}attachNodes(){for(let t=0,e=E(this.array),n=e.length;t<n;t++){let n=e[t];this.__end.insertBeforeBegin$(n)}}detachNodes(){for(let t=0,e=E(this.array),n=e.length;t<n;t++){let n=e[t];this.__parent.removeChild(n)}}end$(t){var e=this;if(1&this.__f){if(this.dirty&&(this.changes.forEach((function(t,n){if(-1==t)return e.removeChild(n)})),this.changes.clear(),this.dirty=!1),this.array.length>t)for(;this.array.length>t;){let t=this.array.pop();this.removeChild(t)}}else this.__f|=1}}k.init$();class S extends N{static init$(){return super.inherited instanceof Function&&super.inherited(this)}setup(){return this.$=[],this.length=0}end$(t){let e=this.length;if(e==t||!this.__parent)return;let n=this.$,i=this.__parent;if(e>t)for(;e>t;)i.removeChild$(n[--e]);else if(t>e)for(;t>e;)this.appendChild$(n[e++]);this.length=t}attachNodes(){for(let t=0,e=E(this.$),n=e.length;t<n;t++){let n=e[t];if(t==this.length)break;this.__end.insertBeforeBegin$(n)}}detachNodes(){let t=0;for(;t<this.length;){let e=this.$[t++];this.__parent.removeChild$(e)}}}function B(t,e){var n=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(t.prototype,n),t}S.init$(),function(t,e){var n=Object.getOwnPropertyDescriptors(e);Object.defineProperties(t.prototype,n)}(_,{flag$(t){this.className.baseVal=t},flagSelf$(t){var e=this;this.flag$=function(t){return e.flagSync$(e.__extflags=t)},this.flagSelf$=function(t){return e.flagSync$(e.__ownflags=t)},this.className.baseVal=(this.className.baseVal||"")+" "+(this.__ownflags=t)},flagSync$(){return this.className.baseVal=(this.__extflags||"")+" "+(this.__ownflags||"")}});var F="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:null,O={version:"2.0.0",global:F,ctx:null,document:F.document};F.imba=O,F.customElements||(F.customElements={define:function(){return!0},get:function(){return!0}}),O.setTimeout=function(t,e){return setTimeout((function(){return t(),O.commit()}),e)},O.setInterval=function(t,e){return setInterval((function(){return t(),O.commit()}),e)},O.clearInterval=F.clearInterval,O.clearTimeout=F.clearTimeout,O.q$=function(t,e){return(e instanceof Element?e:document).querySelector(t)},O.q$$=function(t,e){return(e instanceof Element?e:document).querySelectorAll(t)},O.inlineStyles=function(t){var e=document.createElement("style");e.textContent=t,document.head.appendChild(e)};var I=/-./g;O.toCamelCase=function(t){return t.indexOf("-")>=0?t.replace(I,(function(t){return t.charAt(1).toUpperCase()})):t};var j=function(t,e,n){for(var i,r;(i=n)&&(n=n.next);)(r=n.listener)&&(n.path&&r[n.path]?e?r[n.path].apply(r,e):r[n.path]():e?r.apply(n,e):r.call(n)),n.times&&--n.times<=0&&(i.next=n.next,n.listener=null)};O.listen=function(t,e,n,i){var r,s,o;return(o=(s=(r=t.__listeners__||(t.__listeners__={}))[e]||(r[e]={})).tail||(s.tail=s.next={})).listener=n,o.path=i,s.tail=o.next={},o},O.once=function(t,e,n){var i=O.listen(t,e,n);return i.times=1,i},O.unlisten=function(t,e,n,i){var r,s,o=t.__listeners__;if(o&&(r=o[e]))for(;(s=r)&&(r=r.next);)if(r==n||r.listener==n){s.next=r.next,r.listener=null;break}},O.emit=function(t,e,n){var i;(i=t.__listeners__)&&(i[e]&&j(0,n,i[e]),i.all&&j(0,[e,n],i.all))},O.scheduler=new class{constructor(){var t=this;this.queue=[],this.stage=-1,this.batch=0,this.scheduled=!1,this.listeners={},this.__ticker=function(e){return t.scheduled=!1,t.tick(e)}}add(t,e){if((e||-1==this.queue.indexOf(t))&&this.queue.push(t),!this.scheduled)return this.schedule()}listen(t,e){var n;return(n=this.listeners)[t]||(n[t]=new Set),this.listeners[t].add(e)}unlisten(t,e){return this.listeners[t]&&this.listeners[t].delete(e)}get promise(){var t=this;return new Promise((function(e){return t.add(e)}))}tick(t){var e,n=this,i=this.queue;if(this.ts||(this.ts=t),this.dt=t-this.ts,this.ts=t,this.queue=[],this.stage=1,this.batch++,i.length)for(let t=0,r=(e=i)?e.toIterable?e.toIterable():e:[],s=r.length;t<s;t++){let e=r[t];"string"==typeof e&&this.listeners[e]?this.listeners[e].forEach((function(t){return t.tick instanceof Function?t.tick(n):t instanceof Function?t(n):void 0})):e instanceof Function?e(this.dt,this):e.tick&&e.tick(this.dt,this)}return this.stage=2,this.stage=this.scheduled?0:-1,this}schedule(){return this.scheduled||(this.scheduled=!0,-1==this.stage&&(this.stage=0),r(this.__ticker)),this}},O.commit=function(){return O.scheduler.add("render")},O.tick=function(){return O.commit(),O.scheduler.promise},O.mount=function(t,e){let n=e||document.body,i=t;if(t instanceof Function){let e={_:n},r=function(){return O.ctx=e,t(e)};i=r(),O.scheduler.listen("render",r)}else i.__schedule=!0;return n.appendChild(i)};const P={};O.tags=new class{constructor(){this.__types={}}lookup(t){return this.__types[t]}get(t,e){return t&&"component"!=t?this.__types[t]?this.__types[t]:e&&F[e]?F[e]:F.customElements.get(t)||q:q}create(t){return this.__types[t]?this.__types[t].create$():document.createElement(t)}define(t,e,n){this.__types[t]=e;let i=e.prototype;return i.render&&i.end$==Element.prototype.end$&&(i.end$=i.render),n&&n.extends?P[t]=e:F.customElements.define(t,e),e}};var T,A={get(t,e){let n=t,i=void 0;for(;n&&null==i;)(n=n.$parent)&&(i=n[e]);return i}};B(Node,{get $context(){return this.$context_||(this.$context_=new Proxy(this,A))},get $parent(){return this.up$||this.parentNode},init$(){return this},replaceWith$(t){return t instanceof Node||!t.replace$?this.parentNode.replaceChild(t,this):t.replace$(this),t},insertInto$(t){return t.appendChild$(this),this},insertBefore$(t,e){return this.insertBefore(t,e)},insertBeforeBegin$(t){return this.parentNode.insertBefore(t,this)},insertAfterEnd$(t){return this.nextSibling?this.nextSibling.insertBeforeBegin$(t):this.parentNode.appendChild(t)},insertAfterBegin$(t){return this.childNodes[0]?this.childNodes[0].insertBeforeBegin$(t):this.appendChild(t)}}),B(Comment,{replaceWith$(t){return t&&t.joinBefore$?t.joinBefore$(this):this.parentNode.insertBefore$(t,this),this.parentNode.removeChild(this),t}}),B(Element,{emit(t,e,n={bubbles:!0}){null!=e&&(n.detail=e);let i=new CustomEvent(t,n);this.dispatchEvent(i);return i},slot$(t,e){return this},on$(t,e,n){var i,r="on$"+t;this[r]instanceof Function&&(i=this[r](e,n)),i=new u(e,n);var s=e.capture,o=e.passive,a=s;return o&&(a={passive:o,capture:s}),this.addEventListener(t,i,a),i},text$(t){return this.textContent=t,this},insert$(t,e,n){let i=typeof t;if("undefined"===i||null===t){if(n&&n instanceof Comment)return n;let t=document.createComment("");return n?n.replaceWith$(t):t.insertInto$(this),t}if(t===n)return t;if("object"!==i){let i,r=t;return 128&e&&256&e?void(this.textContent=r):n?n instanceof Text?(n.textContent=r,n):(i=document.createTextNode(r),n.replaceWith$(i,this),i):(this.appendChild$(i=document.createTextNode(r)),i)}return n?n.replaceWith$(t,this):t.insertInto$(this),t},get flags(){var t=this;return this.$flags||(this.$flags=new i(this),this.flag$=function(e){return t.flagSync$(t.__extflags=e)},this.flagSelf$=function(e){return t.flagSync$(t.__ownflags=e)}),this.$flags},flag$(t){this.className=t},flagSelf$(t){var e=this;let n=this.__extflags||(this.__extflags=this.className);this.flag$=function(t){return e.flagSync$(e.__extflags=t)},this.flagSelf$=function(t){return e.flagSync$(e.__ownflags=t)},this.className=(n?n+" ":"")+(this.__ownflags=t)},flagSync$(){return this.className=(this.__extflags||"")+" "+(this.__ownflags||"")+" "+(this.$flags||"")},open$(){return this},close$(){return this},end$(){this.render&&this.render()},css$(t,e,n){return this.style[t]=e}}),Element.prototype.appendChild$=Element.prototype.appendChild,Element.prototype.removeChild$=Element.prototype.removeChild,Element.prototype.insertBefore$=Element.prototype.insertBefore,Element.prototype.replaceChild$=Element.prototype.replaceChild,Element.prototype.set$=Element.prototype.setAttribute,Element.prototype.setns$=Element.prototype.setAttributeNS,ShadowRoot.prototype.insert$=Element.prototype.insert$,ShadowRoot.prototype.appendChild$=Element.prototype.appendChild$,O.createLiveFragment=function(t,e,n){var i=C.createDocumentFragment();return i.setup$(t,e),n&&(i.up$=n),i},O.createIndexedFragment=function(t,e){return new S(t,e)},O.createKeyedFragment=function(t,e){return new k(t,e)};var M=function(){let t=T;if(T=null,t)for(let n=0,i=(e=t)?e.toIterable?e.toIterable():e:[],r=i.length;n<r;n++){i[n].mounted$()}var e};class q extends HTMLElement{static init$(){return super.inherited instanceof Function&&super.inherited(this)}constructor(){super(),this.setup$(),this.build&&this.build()}setup$(){return this.__slots={},this.__f=0}init$(){return this.__f|=1,this}slot$(t,e){var n;return"__"!=t||this.render?(n=this.__slots)[t]||(n[t]=O.createLiveFragment(0,null,this)):this}schedule(){return O.scheduler.listen("render",this),this.__f|=64,this}unschedule(){return O.scheduler.unlisten("render",this),this.__f&=-65,this}connectedCallback(){let t=this.__f;if(!(16&t))return this.mounted instanceof Function&&(T||(T=[],Promise.resolve().then(M)),T.unshift(this)),1&t||this.init$(),8&t||(this.awaken&&this.awaken(),this.__f|=8),t||this.render&&this.render(),this.mount$(),this}mount$(){if(this.__schedule&&this.schedule(),this.mount instanceof Function){let t=this.mount();t&&t.then instanceof Function&&t.then(O.commit)}return this.__f|=16,this}mounted$(){return this.mounted instanceof Function&&this.mounted(),this}disconnectedCallback(){if(this.__f&=-17,64&this.__f&&this.unschedule(),this.unmount instanceof Function)return this.unmount()}tick(){return this.render&&this.render()}awaken(){return this.__schedule=!0}get isMounted(){return 0!=(16&this.__f)}get isAwakened(){return 0!=(8&this.__f)}get isScheduled(){return 0!=(64&this.__f)}}q.init$(),F.customElements.define("imba-element",q),O.createElement=function(t,e,n,i,r,s){var o=document.createElement(t);return i&&(o.className=i),s&&o.setAttribute("data-"+s,""),null!==r&&o.text$(r),n&&n instanceof Node&&o.insertInto$(n),o},O.createComponent=function(t,e,n,i,r,s){var o;return P[t]?((o=P[t].create$(o)).slot$=q.prototype.slot$,o.__slots={}):o=document.createElement(t),o.up$=n,o.__f=e,o.init$(),null!==r&&o.slot$("__").text$(r),i&&(o.className=i),s&&o.setAttribute("data-"+s,""),o},O.createSVGElement=function(t,e,n,i,r,s){var o=document.createElementNS("http://www.w3.org/2000/svg",t);return i&&(o.className.baseVal=i),n&&n instanceof Node&&o.insertInto$(n),o};class L extends(imba.tags.get("button","HTMLButtonElement")){init$(){return super.init$(),this.setAttribute("data-i6f3bfb96","")}static create$(){return t=imba.document.createElement("button"),e=this,Object.defineProperties(t,Object.getOwnPropertyDescriptors(e.prototype)),t;var t,e}static init$(){return super.inherited instanceof Function&&super.inherited(this)}render(){var t,e,n;return this,this.open$(),e=1,t=this.$||(e=0,this.$={}),(n=this.__slots.__)&&!n.isEmpty$()||(n="click me"),n===t.b__||(t.b_=this.insert$(t.b__=n,0,t.b_)),this.close$(e),this}}L.init$(),imba.tags.define("app-button",L,{extends:"button"}),n(0);var D=0;class W extends(imba.tags.get("component","ImbaElement")){incr(){return D++}reset(){return D=0}render(){var t,e,n,i,r,s,o;return this,this.open$(),e=n=1,t=this.$||(e=n=0,this.$={}),e||(i=imba.createElement("p",0,this,null,"The total number is",null)),i=t.b||(t.b=i=imba.createElement("h1",4096,this,null,null,null)),(r=D)===t.c||(t.c_=i.insert$(t.c=r,0,t.c_)),s=o=1,(i=t.d||(s=o=0,t.d=i=imba.createComponent("app-button",0,this,null,"increment",null))).slot$("__",t),s||i.on$("click",{incr:!0},this),s||!i.setup||i.setup(o),i.end$(o),s||i.insertInto$(this),e||(i=imba.createElement("div",0,this,"reset","reset",null)),e||i.on$("click",{reset:!0},this),this.close$(n),this}}imba.tags.define("home-page",W,{}),n(1);class V extends(imba.tags.get("component","ImbaElement")){render(){var t,e,n,i,r;return this,this.open$(),e=1,i=r=1,n=(t=this.$||(e=0,this.$={})).b||(i=r=0,t.b=n=imba.createComponent("home-page",0,this,null,null,null)),i||!n.setup||n.setup(r),n.end$(r),i||n.insertInto$(this),this.close$(e),this}}imba.tags.define("app-root",V,{}),n(2)}]);