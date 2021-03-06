/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _internal_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _internal_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_internal_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _internal_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _internal_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_internal_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events_intersect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _events_intersect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_events_intersect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _events_selection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_events_selection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _events_resize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_events_resize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _internal_fragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLiveFragment", function() { return _internal_fragment__WEBPACK_IMPORTED_MODULE_6__["createLiveFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIndexedFragment", function() { return _internal_fragment__WEBPACK_IMPORTED_MODULE_6__["createIndexedFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createKeyedFragment", function() { return _internal_fragment__WEBPACK_IMPORTED_MODULE_6__["createKeyedFragment"]; });












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _internal_fragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};
var $customElements;
var root = ((typeof window !== 'undefined') ? window : (((typeof globalThis !== 'undefined') ? globalThis : null)));

var imba = {
	version: '2.0.0',
	global: root,
	ctx: null,
	document: root.document
};

root.imba = imba;

($customElements = root.customElements) || (root.customElements = {
	define: function() { return true; },
	get: function() { return true; }
});

imba.setTimeout = function(fn,ms) {
	
	return setTimeout(function() {
		
		fn();
		return imba.commit();
	},ms);
};

imba.setInterval = function(fn,ms) {
	
	return setInterval(function() {
		
		fn();
		return imba.commit();
	},ms);
};

imba.clearInterval = root.clearInterval;
imba.clearTimeout = root.clearTimeout;

if (false) {};

imba.q$ = function (query,ctx){
	
	return ((ctx instanceof Element) ? ctx : document).querySelector(query);
};

imba.q$$ = function (query,ctx){
	
	return ((ctx instanceof Element) ? ctx : document).querySelectorAll(query);
};

imba.inlineStyles = function (styles){
	
	var el = document.createElement('style');
	el.textContent = styles;
	document.head.appendChild(el);
	return;
};

var dashRegex = /-./g;

imba.toCamelCase = function (str){
	
	if (str.indexOf('-') >= 0) {
		
		return str.replace(dashRegex,function(m) { return m.charAt(1).toUpperCase(); });
	} else {
		
		return str;
	};
};


var emit__ = function(event,args,node) {
	
	var prev;
	var cb;
	var ret;
	
	while ((prev = node) && (node = node.next)){
		
		if (cb = node.listener) {
			
			if (node.path && cb[node.path]) {
				
				ret = args ? cb[node.path].apply(cb,args) : cb[node.path]();
			} else {
				
				
				ret = args ? cb.apply(node,args) : cb.call(node);
			};
		};
		
		if (node.times && --node.times <= 0) {
			
			prev.next = node.next;
			node.listener = null;
		};
	};
	return;
};


imba.listen = function (obj,event,listener,path){
	var $__listeners__;
	
	var cbs;
	var list;
	var tail;
	cbs = ($__listeners__ = obj.__listeners__) || (obj.__listeners__ = {});
	list = cbs[event] || (cbs[event] = {});
	tail = list.tail || (list.tail = (list.next = {}));
	tail.listener = listener;
	tail.path = path;
	list.tail = tail.next = {};
	return tail;
};


imba.once = function (obj,event,listener){
	
	var tail = imba.listen(obj,event,listener);
	tail.times = 1;
	return tail;
};


imba.unlisten = function (obj,event,cb,meth){
	
	var node;
	var prev;
	var meta = obj.__listeners__;
	if (!meta) { return };
	
	if (node = meta[event]) {
		
		while ((prev = node) && (node = node.next)){
			
			if (node == cb || node.listener == cb) {
				
				prev.next = node.next;
				
				node.listener = null;
				break;
			};
		};
	};
	return;
};


imba.emit = function (obj,event,params){
	var cb;
	
	if (cb = obj.__listeners__) {
		
		if (cb[event]) { emit__(event,params,cb[event]) };
		if (cb.all) { emit__(event,[event,params],cb.all) };
	};
	return;
};





imba.scheduler = new _internal_scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]();
imba.commit = function() { return imba.scheduler.add('render'); };
imba.tick = function() {
	
	imba.commit();
	return imba.scheduler.promise;
};




imba.mount = function (mountable,into){
	
	let parent = into || document.body;
	let element = mountable;
	if (mountable instanceof Function) {
		
		let ctx = {_: parent};
		let tick = function() {
			
			imba.ctx = ctx;
			return mountable(ctx);
		};
		element = tick();
		imba.scheduler.listen('render',tick);
	} else {
		
		
		element.__schedule = true;
	};
	
	return parent.appendChild(element);
};


const CustomTagConstructors = {};

class ImbaElementRegistry {
	
	
	constructor(){
		
		this.__types = {};
	}
	
	lookup(name){
		
		return this.__types[name];
	}
	
	get(name,klass){
		
		if (!name || name == 'component') { return ImbaElement };
		if (this.__types[name]) { return this.__types[name] };
		if (false) {};
		if (klass && root[klass]) { return root[klass] };
		return root.customElements.get(name) || ImbaElement;
	}
	
	create(name){
		
		if (this.__types[name]) {
			
			
			return this.__types[name].create$();
		} else {
			
			return document.createElement(name);
		};
	}
	
	define(name,klass,options){
		
		this.__types[name] = klass;
		
		
		let proto = klass.prototype;
		if (proto.render && proto.end$ == Element.prototype.end$) {
			
			proto.end$ = proto.render;
		};
		
		if (options && options.extends) {
			
			CustomTagConstructors[name] = klass;
		} else {
			
			root.customElements.define(name,klass);
		};
		return klass;
	}
};

imba.tags = new ImbaElementRegistry();

var proxyHandler = {
	get(target,name){
		
		let ctx = target;
		let val = undefined;
		while (ctx && val == undefined){
			
			if (ctx = ctx.$parent) {
				
				val = ctx[name];
			};
		};
		return val;
	}
};



extend$(Node,{
	
	
	get $context(){
		
		return this.$context_ || (this.$context_ = new Proxy(this,proxyHandler));
	},
	
	get $parent(){
		
		return this.up$ || this.parentNode;
	},
	
	init$(){
		
		return this;
	},
	
	
	replaceWith$(other){
		
		if (!((other instanceof Node)) && other.replace$) {
			
			other.replace$(this);
		} else {
			
			this.parentNode.replaceChild(other,this);
		};
		return other;
	},
	
	insertInto$(parent){
		
		parent.appendChild$(this);
		return this;
	},
	
	insertBefore$(el,prev){
		
		return this.insertBefore(el,prev);
	},
	
	insertBeforeBegin$(other){
		
		return this.parentNode.insertBefore(other,this);
	},
	
	insertAfterEnd$(other){
		
		if (this.nextSibling) {
			
			return this.nextSibling.insertBeforeBegin$(other);
		} else {
			
			return this.parentNode.appendChild(other);
		};
	},
	
	insertAfterBegin$(other){
		
		if (this.childNodes[0]) {
			
			return this.childNodes[0].insertBeforeBegin$(other);
		} else {
			
			return this.appendChild(other);
		};
	},
});

extend$(Comment,{
	
	
	replaceWith$(other){
		
		if (other && other.joinBefore$) {
			
			other.joinBefore$(this);
		} else {
			
			this.parentNode.insertBefore$(other,this);
		};
		
		this.parentNode.removeChild(this);
		
		return other;
	},
});


extend$(Element,{
	
	
	emit(name,detail,o = {bubbles: true}){
		
		if (detail != undefined) { o.detail = detail };
		let event = new CustomEvent(name,o);
		let res = this.dispatchEvent(event);
		return event;
	},
	
	slot$(name,ctx){
		
		return this;
	},
	
	on$(type,mods,scope){
		
		
		var check = 'on$' + type;
		var handler;
		
		
		if (this[check] instanceof Function) {
			
			handler = this[check](mods,scope);
		};
		
		handler = new _events__WEBPACK_IMPORTED_MODULE_2__["EventHandler"](mods,scope);
		var capture = mods.capture;
		var passive = mods.passive;
		
		var o = capture;
		
		if (passive) {
			
			o = {passive: passive,capture: capture};
		};
		
		this.addEventListener(type,handler,o);
		return handler;
	},
	
	
	text$(item){
		
		this.textContent = item;
		return this;
	},
	
	insert$(item,f,prev){
		
		let type = typeof item;
		
		if (type === 'undefined' || item === null) {
			
			
			if (prev && (prev instanceof Comment)) {
				
				return prev;
			};
			
			let el = document.createComment('');
			prev ? prev.replaceWith$(el) : el.insertInto$(this);
			return el;
		};
		
		
		if (item === prev) {
			
			return item;
		} else if (type !== 'object') {
			
			let res;
			let txt = item;
			
			if ((f & 128) && (f & 256)) {
				
				
				
				
				this.textContent = txt;
				return;
			};
			
			if (prev) {
				
				if (prev instanceof Text) {
					
					prev.textContent = txt;
					return prev;
				} else {
					
					res = document.createTextNode(txt);
					prev.replaceWith$(res,this);
					return res;
				};
			} else {
				
				this.appendChild$(res = document.createTextNode(txt));
				return res;
			};
		} else {
			
			prev ? prev.replaceWith$(item,this) : item.insertInto$(this);
			return item;
		};
		return;
		
	},
	get flags(){
		var self = this;
		
		if (!(this.$flags)) {
			
			this.$flags = new _internal_flags__WEBPACK_IMPORTED_MODULE_0__["Flags"](this);
			this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
			this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		};
		return this.$flags;
	},
	
	flag$(str){
		
		this.className = str;
		return;
	},
	
	flagSelf$(str){
		var self = this;
		
		
		
		let existing = (this.__extflags || (this.__extflags = this.className));
		this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
		this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		this.className = (existing ? (existing + ' ') : '') + (this.__ownflags = str);
		return;
	},
	
	flagSync$(){
		
		return this.className = ((this.__extflags || '') + ' ' + (this.__ownflags || '') + ' ' + (this.$flags || ''));
	},
	
	open$(){
		
		return this;
	},
	
	close$(){
		
		return this;
	},
	
	end$(){
		
		if (this.render) { this.render() };
		return;
	},
	
	css$(key,value,mods){
		
		return this.style[key] = value;
	},
});

Element.prototype.appendChild$ = Element.prototype.appendChild;
Element.prototype.removeChild$ = Element.prototype.removeChild;
Element.prototype.insertBefore$ = Element.prototype.insertBefore;
Element.prototype.replaceChild$ = Element.prototype.replaceChild;
Element.prototype.set$ = Element.prototype.setAttribute;
Element.prototype.setns$ = Element.prototype.setAttributeNS;

ShadowRoot.prototype.insert$ = Element.prototype.insert$;
ShadowRoot.prototype.appendChild$ = Element.prototype.appendChild$;




imba.createLiveFragment = _internal_fragment__WEBPACK_IMPORTED_MODULE_3__["createLiveFragment"];
imba.createIndexedFragment = _internal_fragment__WEBPACK_IMPORTED_MODULE_3__["createIndexedFragment"];
imba.createKeyedFragment = _internal_fragment__WEBPACK_IMPORTED_MODULE_3__["createKeyedFragment"];



var mountedQueue;
var mountedFlush = function() {
	
	let items = mountedQueue;
	mountedQueue = null;
	if (items) {
		
		for (let $i = 0, $items = iter$(items), $len = $items.length; $i < $len; $i++) {
			let item = $items[$i];
			
			item.mounted$();
		};
	};
	return;
};


class ImbaElement extends HTMLElement {
	static init$(){
		return super.inherited instanceof Function && super.inherited(this);
	}
	
	constructor(){
		
		super();
		this.setup$();
		if (this.build) { this.build() };
	}
	
	setup$(){
		
		this.__slots = {};
		return this.__f = 0;
	}
	
	init$(){
		
		this.__f |= 1;
		return this;
	}
	
	
	slot$(name,ctx){
		var $slots;
		
		if (name == '__' && !(this.render)) {
			
			return this;
		};
		
		return ($slots = this.__slots)[name] || ($slots[name] = imba.createLiveFragment(0,null,this));
	}
	
	schedule(){
		
		imba.scheduler.listen('render',this);
		this.__f |= 64;
		return this;
	}
	
	unschedule(){
		
		imba.scheduler.unlisten('render',this);
		this.__f &= ~64;
		return this;
	}
	
	connectedCallback(){
		
		let flags = this.__f;
		
		if (flags & 16) {
			
			return;
		};
		
		if (this.mounted instanceof Function) {
			
			if (!mountedQueue) {
				
				mountedQueue = [];
				Promise.resolve().then(mountedFlush);
			};
			mountedQueue.unshift(this);
		};
		
		if (!(flags & 1)) {
			
			this.init$();
		};
		
		if (!(flags & 8)) {
			
			if (this.awaken) { this.awaken() };
			this.__f |= 8;
		};
		
		if (!flags) {
			
			if (this.render) { this.render() };
		};
		
		this.mount$();
		return this;
	}
	
	mount$(){
		
		if (this.__schedule) { this.schedule() };
		
		if (this.mount instanceof Function) {
			
			let res = this.mount();
			if (res && (res.then instanceof Function)) {
				
				res.then(imba.commit);
			};
		};
		this.__f |= 16;
		return this;
	}
	
	mounted$(){
		
		if (this.mounted instanceof Function) { this.mounted() };
		return this;
	}
	
	disconnectedCallback(){
		
		this.__f &= ~16;
		if (this.__f & 64) { this.unschedule() };
		if (this.unmount instanceof Function) { return this.unmount() };
	}
	
	tick(){
		
		return this.render && this.render();
	}
	
	awaken(){
		
		return this.__schedule = true;
	}
	
	get isMounted(){
		
		return (this.__f & 16) != 0;
	}
	
	get isAwakened(){
		
		return (this.__f & 8) != 0;
	}
	
	get isScheduled(){
		
		return (this.__f & 64) != 0;
		
	}
}; ImbaElement.init$();

root.customElements.define('imba-element',ImbaElement);


imba.createElement = function (name,bitflags,parent,flags,text,sfc){
	
	var el = document.createElement(name);
	
	if (flags) { el.className = flags };
	
	if (sfc) {
		
		el.setAttribute('data-' + sfc,'');
	};
	
	if (text !== null) {
		
		el.text$(text);
	};
	
	if (parent && (parent instanceof Node)) {
		
		el.insertInto$(parent);
	};
	
	return el;
};

imba.createComponent = function (name,bitflags,parent,flags,text,sfc){
	
	
	var el;
	
	if (CustomTagConstructors[name]) {
		
		el = CustomTagConstructors[name].create$(el);
		el.slot$ = ImbaElement.prototype.slot$;
		el.__slots = {};
	} else {
		
		el = document.createElement(name);
	};
	
	el.up$ = parent;
	el.__f = bitflags;
	el.init$();
	
	if (text !== null) {
		
		el.slot$('__').text$(text);
	};
	
	if (flags) { el.className = flags };
	
	if (sfc) {
		
		el.setAttribute('data-' + sfc,'');
	};
	
	return el;
};



imba.createSVGElement = function (name,bitflags,parent,flags,text,sfc){
	
	var el = document.createElementNS("http://www.w3.org/2000/svg",name);
	if (flags) {
		
		if (false) {} else {
			
			el.className.baseVal = flags;
		};
	};
	if (parent && (parent instanceof Node)) {
		
		el.insertInto$(parent);
	};
	return el;
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flags", function() { return Flags; });
class Flags {
	
	
	constructor(dom){
		
		this.dom = dom;
		this.string = "";
	}
	
	contains(ref){
		
		return this.dom.classList.contains(ref);
	}
	
	add(ref){
		
		if (this.contains(ref)) { return this };
		this.string += (this.string ? ' ' : '') + ref;
		this.dom.classList.add(ref);
		
		return this;
	}
	
	remove(ref){
		
		if (!this.contains(ref)) { return this };
		var regex = new RegExp('(^|\\s)*' + ref + '(\\s|$)*','g');
		this.string = this.string.replace(regex,'');
		this.dom.classList.remove(ref);
		
		return this;
	}
	
	toggle(ref,bool){
		
		if (bool == undefined) { bool = !this.contains(ref) };
		return bool ? this.add(ref) : this.remove(ref);
	}
	
	valueOf(){
		
		return this.string;
	}
	
	toString(){
		
		return this.string;
	}
	
	sync(){
		
		return this.dom.flagSync$();
	}
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
var raf = (typeof requestAnimationFrame !== 'undefined') ? requestAnimationFrame : (function(blk) { return setTimeout(blk,1000 / 60); });


class Scheduler {
	
	constructor(){
		var self = this;
		
		this.queue = [];
		this.stage = -1;
		this.batch = 0;
		this.scheduled = false;
		this.listeners = {};
		
		this.__ticker = function(e) {
			
			self.scheduled = false;
			return self.tick(e);
		};
		this;
	}
	
	add(item,force){
		
		if (force || this.queue.indexOf(item) == -1) {
			
			this.queue.push(item);
		};
		
		if (!(this.scheduled)) { return this.schedule() };
	}
	
	listen(ns,item){
		var $listeners;
		
		($listeners = this.listeners)[ns] || ($listeners[ns] = new Set());
		return this.listeners[ns].add(item);
	}
	
	unlisten(ns,item){
		
		return this.listeners[ns] && this.listeners[ns].delete(item);
	}
	
	get promise(){
		var self = this;
		
		return new Promise(function(resolve) { return self.add(resolve); });
	}
	
	tick(timestamp){
		var self = this;
		
		var items = this.queue;
		if (!(this.ts)) { this.ts = timestamp };
		this.dt = timestamp - this.ts;
		this.ts = timestamp;
		this.queue = [];
		this.stage = 1;
		this.batch++;
		
		if (items.length) {
			
			for (let i = 0, $items = iter$(items), $len = $items.length; i < $len; i++) {
				let item = $items[i];
				
				if (typeof item === 'string' && this.listeners[item]) {
					
					this.listeners[item].forEach(function(item) {
						
						if (item.tick instanceof Function) {
							
							return item.tick(self);
						} else if (item instanceof Function) {
							
							return item(self);
						};
					});
				} else if (item instanceof Function) {
					
					item(this.dt,this);
				} else if (item.tick) {
					
					item.tick(this.dt,this);
				};
			};
		};
		this.stage = 2;
		this.stage = this.scheduled ? 0 : -1;
		return this;
	}
	
	schedule(){
		
		if (!(this.scheduled)) {
			
			this.scheduled = true;
			if (this.stage == -1) {
				
				this.stage = 0;
			};
			raf(this.__ticker);
		};
		return this;
	}
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};
const keyCodes = {
	esc: [27],
	tab: [9],
	enter: [13],
	space: [32],
	up: [38],
	down: [40],
	del: [8,46]
};




extend$(Event,{
	
	
	wait$mod(state,params){
		
		return new Promise(function(resolve) {
			
			return setTimeout(resolve,(((typeof params[0]=='number'||params[0] instanceof Number)) ? params[0] : 1000));
		});
	},
	
	sel$mod(state,params){
		
		return state.event.target.closest(params[0]) || false;
	},
	
	throttle$mod({handler: handler,element: element,event: event},params){
		
		if (handler.throttled) { return false };
		handler.throttled = true;
		let name = params[0];
		if (!((typeof name=='string'||name instanceof String))) {
			
			name = ("in-" + (event.type || 'event'));
		};
		let cl = element.classList;
		cl.add(name);
		handler.once('idle',function() {
			
			cl.remove(name);
			return handler.throttled = false;
		});
		return true;
	},
});




class EventHandler {
	
	constructor(params,closure){
		
		this.params = params;
		this.closure = closure;
	}
	
	getHandlerForMethod(el,name){
		
		if (!el) { return null };
		return el[name] ? el : this.getHandlerForMethod(el.parentNode,name);
	}
	
	emit(name,...params){
		return imba.emit(this,name,params);
	}
	on(name,...params){
		return imba.listen(this,name,...params);
	}
	once(name,...params){
		return imba.once(this,name,...params);
	}
	un(name,...params){
		return imba.unlisten(this,name,...params);
	}
	
	async handleEvent(event){
		var $currentEvents;
		
		var target = event.target;
		var element = event.currentTarget;
		var mods = this.params;
		var i = 0;
		let commit = true;
		let awaited = false;
		let prevRes = undefined;
		
		
		($currentEvents = this.currentEvents) || (this.currentEvents = new Set());
		this.currentEvents.add(event);
		
		let state = {
			element: element,
			event: event,
			modifiers: mods,
			handler: this
		};
		
		for (let $i = 0, $keys = Object.keys(mods), $l = $keys.length, handler, val; $i < $l; $i++){
			handler = $keys[$i];val = mods[handler];
			
			if (handler.indexOf('~') > 0) {
				
				handler = handler.split('~')[0];
			};
			
			let args = [event,this];
			let res = undefined;
			let context = null;
			
			if (handler[0] == '$' && handler[1] == '_' && (val[0] instanceof Function)) {
				
				handler = val[0];
				args = [event,state].concat(val.slice(1));
				context = element;
			} else if (val instanceof Array) {
				
				args = val.slice();
				
				for (let i = 0, $items = iter$(args), $len = $items.length; i < $len; i++) {
					let par = $items[i];
					
					
					
					if (typeof par == 'string' && par[0] == '~' && par[1] == '$') {
						
						let name = par.slice(2);
						let chain = name.split('.');
						let value = state[chain.shift()] || event;
						
						for (let i = 0, $ary = iter$(chain), $len = $ary.length; i < $len; i++) {
							let part = $ary[i];
							
							value = value ? value[part] : undefined;
						};
						
						args[i] = value;
					};
				};
			};
			
			
			
			if (handler == 'stop') {
				
				event.stopImmediatePropagation();
			} else if (handler == 'prevent') {
				
				event.preventDefault();
			} else if (handler == 'ctrl') {
				
				if (!event.ctrlKey) { break; };
			} else if (handler == 'commit') {
				
				commit = true;
			} else if (handler == 'silence') {
				
				commit = false;
			} else if (handler == 'alt') {
				
				if (!event.altKey) { break; };
			} else if (handler == 'shift') {
				
				if (!event.shiftKey) { break; };
			} else if (handler == 'meta') {
				
				if (!event.metaKey) { break; };
			} else if (handler == 'self') {
				
				if (target != element) { break; };
			} else if (handler == 'once') {
				
				
				element.removeEventListener(event.type,this);
			} else if (handler == 'options') {
				
				continue;
			} else if (keyCodes[handler]) {
				
				if (keyCodes[handler].indexOf(event.keyCode) < 0) {
					
					break;
				};
			} else if (handler == 'trigger' || handler == 'emit') {
				
				let name = args[0];
				let detail = args[1];
				let e = new CustomEvent(name,{bubbles: true,detail: detail});
				e.originalEvent = event;
				let customRes = element.dispatchEvent(e);
			} else if (typeof handler == 'string') {
				
				let mod = handler + '$mod';
				
				if (event[mod] instanceof Function) {
					
					
					handler = mod;
					context = event;
					args = [state,args];
				} else if (handler[0] == '_') {
					
					handler = handler.slice(1);
					context = this.closure;
				} else {
					
					context = this.getHandlerForMethod(element,handler);
				};
			};
			
			if (handler instanceof Function) {
				
				res = handler.apply(context || element,args);
			} else if (context) {
				
				res = context[handler].apply(context,args);
			};
			
			if (res && (res.then instanceof Function)) {
				
				if (commit) { imba.commit() };
				awaited = true;
				
				res = await res;
			};
			
			if (res === false) {
				
				break;
			};
			
			state.value = res;
		};
		
		if (commit) { imba.commit() };
		this.currentEvents.delete(event);
		if (this.currentEvents.size == 0) {
			
			this.emit('idle');
		};
		
		return;
	}
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLiveFragment", function() { return createLiveFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndexedFragment", function() { return createIndexedFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKeyedFragment", function() { return createKeyedFragment; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};


extend$(_dom__WEBPACK_IMPORTED_MODULE_0__["DocumentFragment"],{
	
	
	get $parent(){
		
		return this.up$ || this.__parent;
	},
	
	
	setup$(flags,options){
		
		this.__start = imba.document.createComment('start');
		this.__end = imba.document.createComment('end');
		
		this.__end.replaceWith$ = function(other) {
			
			this.parentNode.insertBefore(other,this);
			return other;
		};
		
		this.appendChild(this.__start);
		return this.appendChild(this.__end);
	},
	
	
	
	text$(item){
		
		if (!this.__text) {
			
			this.__text = this.insert$(item);
		} else {
			
			this.__text.textContent = item;
		};
		return;
	},
	
	insert$(item,options,toReplace){
		
		if (this.__parent) {
			
			
			
			return this.__parent.insert$(item,options,toReplace || this.__end);
		} else {
			
			return _dom__WEBPACK_IMPORTED_MODULE_0__["Element"].prototype.insert$.call(this,item,options,toReplace || this.__end);
		};
	},
	
	insertInto$(parent,before){
		
		if (!this.__parent) {
			
			this.__parent = parent;
			
			parent.appendChild$(this);
		};
		return this;
	},
	
	replaceWith$(other,parent){
		
		this.__start.insertBeforeBegin$(other);
		var el = this.__start;
		while (el){
			
			let next = el.nextSibling;
			this.appendChild(el);
			if (el == this.__end) { break; };
			el = next;
			
		};
		return other;
	},
	
	appendChild$(child){
		
		this.__end ? this.__end.insertBeforeBegin$(child) : this.appendChild(child);
		return child;
	},
	
	removeChild$(child){
		
		child.parentNode && child.parentNode.removeChild(child);
		return this;
	},
	
	isEmpty$(){
		
		let el = this.__start;
		let end = this.__end;
		
		while (el = el.nextSibling){
			
			if (el == end) { break; };
			if ((el instanceof _dom__WEBPACK_IMPORTED_MODULE_0__["Element"]) || (el instanceof _dom__WEBPACK_IMPORTED_MODULE_0__["Text"])) { return false };
		};
		return true;
	},
});


extend$(_dom__WEBPACK_IMPORTED_MODULE_0__["ShadowRoot"],{
	
	get $parent(){
		
		return this.host;
	},
});

class TagCollection {
	
	constructor(f,parent){
		
		this.__f = f;
		this.__parent = parent;
		
		if (!((f & 128)) && (this instanceof KeyedTagFragment)) {
			
			this.__start = _dom__WEBPACK_IMPORTED_MODULE_0__["document"].createComment('start');
			if (parent) { parent.appendChild$(this.__start) };
		};
		
		if (!(f & 256)) {
			
			this.__end = _dom__WEBPACK_IMPORTED_MODULE_0__["document"].createComment('end');
			if (parent) { parent.appendChild$(this.__end) };
		};
		
		this.setup();
	}
	
	get $parent(){
		
		return this.__parent;
	}
	
	appendChild$(item,index){
		
		
		if (this.__end && this.__parent) {
			
			this.__end.insertBeforeBegin$(item);
		} else if (this.__parent) {
			
			this.__parent.appendChild$(item);
		};
		return;
	}
	
	replaceWith$(other){
		
		this.detachNodes();
		this.__end.insertBeforeBegin$(other);
		this.__parent.removeChild$(this.__end);
		this.__parent = null;
		return;
	}
	
	joinBefore$(before){
		
		return this.insertInto$(before.parentNode,before);
	}
	
	insertInto$(parent,before){
		
		if (!this.__parent) {
			
			this.__parent = parent;
			before ? before.insertBeforeBegin$(this.__end) : parent.appendChild$(this.__end);
			this.attachNodes();
		};
		return this;
	}
	
	replace$(other){
		
		if (!this.__parent) {
			
			this.__parent = other.parentNode;
		};
		other.replaceWith$(this.__end);
		this.attachNodes();
		return this;
		
	}
	setup(){
		
		return this;
	}
};

class KeyedTagFragment extends TagCollection {
	static init$(){
		return super.inherited instanceof Function && super.inherited(this);
	}
	
	setup(){
		
		this.array = [];
		this.changes = new Map();
		this.dirty = false;
		return this.$ = {};
	}
	
	push(item,idx){
		
		
		if (!(this.__f & 1)) {
			
			this.array.push(item);
			this.appendChild$(item);
			return;
		};
		
		let toReplace = this.array[idx];
		
		if (toReplace === item) {
			
			true;
		} else {
			
			this.dirty = true;
			
			let prevIndex = this.array.indexOf(item);
			let changed = this.changes.get(item);
			
			if (prevIndex === -1) {
				
				
				this.array.splice(idx,0,item);
				this.insertChild(item,idx);
			} else if (prevIndex === idx + 1) {
				
				if (toReplace) {
					
					this.changes.set(toReplace,-1);
				};
				this.array.splice(idx,1);
			} else {
				
				if (prevIndex >= 0) { this.array.splice(prevIndex,1) };
				this.array.splice(idx,0,item);
				this.insertChild(item,idx);
			};
			
			if (changed == -1) {
				
				this.changes.delete(item);
			};
		};
		return;
	}
	
	insertChild(item,index){
		
		if (index > 0) {
			
			let other = this.array[index - 1];
			
			other.insertAfterEnd$(item);
		} else if (this.__start) {
			
			this.__start.insertAfterEnd$(item);
		} else {
			
			this.__parent.insertAfterBegin$(item);
		};
		return;
	}
	
	removeChild(item,index){
		
		
		
		if (item.parentNode == this.__parent) {
			
			this.__parent.removeChild(item);
		};
		return;
	}
	
	attachNodes(){
		
		for (let i = 0, $items = iter$(this.array), $len = $items.length; i < $len; i++) {
			let item = $items[i];
			
			this.__end.insertBeforeBegin$(item);
		};
		return;
	}
	
	detachNodes(){
		
		for (let $i = 0, $items = iter$(this.array), $len = $items.length; $i < $len; $i++) {
			let item = $items[$i];
			
			this.__parent.removeChild(item);
		};
		return;
	}
	
	end$(index){
		var self = this;
		
		if (!(this.__f & 1)) {
			
			this.__f |= 1;
			return;
		};
		
		if (this.dirty) {
			
			this.changes.forEach(function(pos,item) {
				
				if (pos == -1) {
					
					return self.removeChild(item);
				};
			});
			this.changes.clear();
			this.dirty = false;
		};
		
		
		if (this.array.length > index) {
			
			
			
			while (this.array.length > index){
				
				let item = this.array.pop();
				this.removeChild(item);
			};
			
		};
		return;
	}
}; KeyedTagFragment.init$();

class IndexedTagFragment extends TagCollection {
	static init$(){
		return super.inherited instanceof Function && super.inherited(this);
	}
	
	
	setup(){
		
		this.$ = [];
		return this.length = 0;
	}
	
	end$(len){
		
		let from = this.length;
		if (from == len || !this.__parent) { return };
		let array = this.$;
		let par = this.__parent;
		
		if (from > len) {
			
			while (from > len){
				
				par.removeChild$(array[--from]);
			};
		} else if (len > from) {
			
			while (len > from){
				
				this.appendChild$(array[from++]);
			};
		};
		this.length = len;
		return;
	}
	
	attachNodes(){
		
		for (let i = 0, $items = iter$(this.$), $len = $items.length; i < $len; i++) {
			let item = $items[i];
			
			if (i == this.length) { break; };
			this.__end.insertBeforeBegin$(item);
		};
		return;
	}
	
	detachNodes(){
		
		let i = 0;
		while (i < this.length){
			
			let item = this.$[i++];
			this.__parent.removeChild$(item);
		};
		return;
	}
}; IndexedTagFragment.init$();

function createLiveFragment(bitflags,options,par){
	
	var el = _dom__WEBPACK_IMPORTED_MODULE_0__["document"].createDocumentFragment();
	el.setup$(bitflags,options);
	if (par) { el.up$ = par };
	return el;
};

function createIndexedFragment(bitflags,parent){
	
	return new IndexedTagFragment(bitflags,parent);
};

function createKeyedFragment(bitflags,parent){
	
	return new KeyedTagFragment(bitflags,parent);
};




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElement", function() { return HTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragment", function() { return DocumentFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowRoot", function() { return ShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return CustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
if (false) {};



var {Document: Document,Node: Node,Text: Text,Comment: Comment,Element: Element,SVGElement: SVGElement,HTMLElement: HTMLElement,DocumentFragment: DocumentFragment,ShadowRoot: ShadowRoot,Event: Event,CustomEvent: CustomEvent,MouseEvent: MouseEvent,document: document} = window;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};




extend$(_dom__WEBPACK_IMPORTED_MODULE_0__["SVGElement"],{
	
	
	flag$(str){
		
		this.className.baseVal = str;
		return;
	},
	
	flagSelf$(str){
		var self = this;
		
		
		
		this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
		this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		this.className.baseVal = (this.className.baseVal || '') + ' ' + (this.__ownflags = str);
		return;
	},
	
	flagSync$(){
		
		return this.className.baseVal = ((this.__extflags || '') + ' ' + (this.__ownflags || ''));
	},
});



/***/ }),
/* 8 */
/***/ (function(module, exports) {

function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};
var isGroup = function(obj) {
	
	return (obj instanceof Array) || (obj && (obj.has instanceof Function));
};

var bindHas = function(object,value) {
	
	if (object instanceof Array) {
		
		return object.indexOf(value) >= 0;
	} else if (object && (object.has instanceof Function)) {
		
		return object.has(value);
	} else if (object && (object.contains instanceof Function)) {
		
		return object.contains(value);
	} else if (object == value) {
		
		return true;
	} else {
		
		return false;
	};
};

var bindAdd = function(object,value) {
	
	if (object instanceof Array) {
		
		return object.push(value);
	} else if (object && (object.add instanceof Function)) {
		
		return object.add(value);
	};
};

var bindRemove = function(object,value) {
	
	if (object instanceof Array) {
		
		let idx = object.indexOf(value);
		if (idx >= 0) { return object.splice(idx,1) };
	} else if (object && (object.delete instanceof Function)) {
		
		return object.delete(value);
	};
};

function createProxyProperty(target){
	
	function getter(){
		
		return target[0] ? target[0][target[1]] : undefined;
	};
	
	function setter(v){
		
		return target[0] ? ((target[0][target[1]] = v)) : null;
	};
	
	return {
		get: getter,
		set: setter
	};
};



extend$(Element,{
	
	getRichValue(){
		
		return this.value;
	},
	
	setRichValue(value){
		
		return this.value = value;
	},
	
	bind$(key,value){
		
		let o = value || [];
		
		if (key == 'data') {
			
			if (!(this.__f & 16384)) {
				
				this.__f |= 16384;
				if (this.change$) { this.on$('change',{_change$: true},this) };
				if (this.input$) { this.on$('input',{capture: true,_input$: true},this) };
			};
		};
		
		Object.defineProperty(this,key,(o instanceof Array) ? createProxyProperty(o) : o);
		return o;
	},
});

Object.defineProperty(Element.prototype,'richValue',{
	get(){
		
		return this.getRichValue();
	},
	set(v){
		
		return this.setRichValue(v);
	}
});

extend$(HTMLSelectElement,{
	
	
	change$(e){
		
		if (!(this.__f & 16384)) { return };
		
		let model = this.data;
		let prev = this.__richValue;
		this.__richValue = undefined;
		let values = this.getRichValue();
		
		if (this.multiple) {
			
			if (prev) {
				
				for (let $i = 0, $items = iter$(prev), $len = $items.length; $i < $len; $i++) {
					let value = $items[$i];
					if (values.indexOf(value) != -1) { continue; };
					
					bindRemove(model,value);
				};
			};
			
			for (let $i = 0, $items = iter$(values), $len = $items.length; $i < $len; $i++) {
				let value = $items[$i];
				
				if (!prev || prev.indexOf(value) == -1) {
					
					bindAdd(model,value);
				};
			};
		} else {
			
			this.data = values[0];
		};
		return this;
	},
	
	getRichValue(){
		var $res;
		
		if (this.__richValue) {
			
			return this.__richValue;
		};
		
		$res = [];
		for (let $i = 0, $items = iter$(this.selectedOptions), $len = $items.length; $i < $len; $i++) {
			let o = $items[$i];
			
			$res.push(o.richValue);
		};
		return this.__richValue = $res;
	},
	
	syncValue(){
		
		let model = this.data;
		
		if (this.multiple) {
			
			let vals = [];
			for (let i = 0, $items = iter$(this.options), $len = $items.length; i < $len; i++) {
				let option = $items[i];
				
				let val = option.richValue;
				let sel = bindHas(model,val);
				option.selected = sel;
				if (sel) { vals.push(val) };
			};
			this.__richValue = vals;
		} else {
			
			for (let i = 0, $items = iter$(this.options), $len = $items.length; i < $len; i++) {
				let option = $items[i];
				
				let val = option.richValue;
				if (val == model) {
					
					this.__richValue = [val];
					this.selectedIndex = i;break;
				};
			};
		};
		return;
	},
	
	end$(){
		
		return this.syncValue();
	},
});

extend$(HTMLOptionElement,{
	
	setRichValue(value){
		
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		
		if (this.__richValue !== undefined) {
			
			return this.__richValue;
		};
		return this.value;
	},
});

extend$(HTMLTextAreaElement,{
	
	setRichValue(value){
		
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		
		if (this.__richValue !== undefined) {
			
			return this.__richValue;
		};
		return this.value;
	},
	
	input$(e){
		
		return this.data = this.value;
	},
	
	end$(){
		
		return this.value = this.data;
	},
});

extend$(HTMLInputElement,{
	
	
	input$(e){
		
		if (!(this.__f & 16384)) { return };
		let typ = this.type;
		
		if (typ == 'checkbox' || typ == 'radio') {
			
			return;
		};
		
		this.__richValue = undefined;
		return this.data = this.richValue;
	},
	
	change$(e){
		
		if (!(this.__f & 16384)) { return };
		
		let model = this.data;
		let val = this.richValue;
		
		if (this.type == 'checkbox' || this.type == 'radio') {
			
			let checked = this.checked;
			if (isGroup(model)) {
				
				return checked ? bindAdd(model,val) : bindRemove(model,val);
			} else {
				
				return this.data = checked ? val : false;
			};
		};
	},
	
	setRichValue(value){
		
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		
		if (this.__richValue !== undefined) {
			
			return this.__richValue;
		};
		
		let value = this.value;
		let typ = this.type;
		
		if (typ == 'range' || typ == 'number') {
			
			value = this.valueAsNumber;
			if (Number.isNaN(value)) { value = null };
		} else if (typ == 'checkbox') {
			
			if (value == undefined || value === 'on') { value = true };
		};
		
		return value;
	},
	
	end$(){
		
		if (this.__f & 16384) {
			
			let typ = this.type;
			if (typ == 'checkbox' || typ == 'radio') {
				
				let val = this.data;
				if (val === true || val === false || val == null) {
					
					this.checked = !!val;
				} else {
					
					this.checked = bindHas(val,this.richValue);
				};
			} else {
				
				this.richValue = this.data;
			};
		};
		return;
	},
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};

extend$(SVGElement,{
	
	
	flag$(str){
		
		this.className.baseVal = str;
		return;
	},
	
	flagSelf$(str){
		var self = this;
		
		
		
		this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
		this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		this.className.baseVal = (this.className.baseVal || '') + ' ' + (this.__ownflags = str);
		return;
	},
	
	flagSync$(){
		
		return this.className.baseVal = ((this.__extflags || '') + ' ' + (this.__ownflags || ''));
	},
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
const observers = {};

class IntersectEvent extends CustomEvent {
	static init$(){
		return super.inherited instanceof Function && super.inherited(this);
	}
	
	in$mod(state){
		
		let detail = state.event.detail;
		let ratio = detail.intersectionRatio;
		let last = state.handler.lastRatio;
		state.handler.lastRatio = ratio;
		return !last || last < ratio;
	}
	
	out$mod(state){
		
		let detail = state.event.detail;
		let ratio = detail.intersectionRatio;
		let last = state.handler.lastRatio;
		state.handler.lastRatio = ratio;
		return !ratio || last > ratio;
	}
}; IntersectEvent.init$();

function callback(name){
	
	return function(entries) {
		var $res;
		
		$res = [];
		for (let $i = 0, $items = iter$(entries), $len = $items.length; $i < $len; $i++) {
			let entry = $items[$i];
			
			let e = new IntersectEvent(name,{bubbles: false,detail: entry});
			$res.push(entry.target.dispatchEvent(e));
		};
		return $res;
	};
};

function getIntersectionObserver(){
	var $intersect;
	
	return ($intersect = observers.intersect) || (observers.intersect = new IntersectionObserver(
		callback('intersect'),
		{threshold: [0,1]}
	));
};

Element.prototype.on$intersect = function(mods,context) {
	var $root, $v_;
	
	let obs;
	if (mods.options) {
		
		let opts = Object.assign({event: 'intersect'},mods.options[0]);
		if ((typeof ($root = opts.root)=='string'||$root instanceof String)) {
			
			opts.root = document.querySelector(opts.root);
		};
		let ev = ((($v_ = opts.event),delete opts.event, $v_));
		obs = mods.options.obs = new IntersectionObserver(callback(ev),opts);
	} else {
		
		obs = getIntersectionObserver(mods);
	};
	return obs.observe(this);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {


var selHandler;

function activateSelectionHandler(){
	
	if (!selHandler) {
		
		selHandler = function(e) {
			
			if (e.handled$) { return };
			e.handled$ = true;
			
			let target = document.activeElement;
			if (target && target.matches('input,textarea')) {
				
				let custom = new CustomEvent('selection',{
					detail: {
						start: target.selectionStart,
						end: target.selectionEnd
					}
				});
				return target.dispatchEvent(custom);
			};
		};
		return document.addEventListener('selectionchange',selHandler);
	};
};

Element.prototype.on$selection = function(mods,context) {
	
	return activateSelectionHandler();
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

function extend$(target,ext){
	// @ts-ignore
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	// @ts-ignore
	Object.defineProperties(target.prototype,descriptors);
	return target;
};
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };

class ResizeEvent extends CustomEvent {static init$(){
	return super.inherited instanceof Function && super.inherited(this);
}
}; ResizeEvent.init$();

var resizeObserver = null;

function getResizeObserver(){
	
	return resizeObserver || (resizeObserver = new ResizeObserver(function(entries) {
		
		for (let $i = 0, $items = iter$(entries), $len = $items.length; $i < $len; $i++) {
			let entry = $items[$i];
			
			let e = new ResizeEvent('resize',{bubbles: false,detail: entry});
			entry.target.dispatchEvent(e);
		};
		return;
	}));
};

extend$(Element,{
	
	
	on$resize(chain,context){
		
		return getResizeObserver().observe(this);
	},
});


/***/ })
/******/ ]);
