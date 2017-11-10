/**,
* Grindstone JavaScript Library v3.1.4
* https://github.com/dzervoudakes/GrindstoneJS
* 
* Copyright (c) 2014, 2017 Dan Zervoudakes and contributors
* Released under the MIT license
* https://github.com/dzervoudakes/GrindstoneJS/blob/master/LICENSE
*/

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, lib) {
	if (typeof exports !== 'undefined') return module.exports = lib(); // requireable
	return root.Grindstone = root.$ = lib(); // standard DOM implementation
})(this, function () {

	var Grindstone = function Grindstone(selector, context) {
		var set = this;
		if (selector) {
			var ctx = void 0,
			    elems = void 0;
			if (typeof selector === 'string') {
				if (context) {
					if (typeof context === 'string') {
						ctx = document.querySelectorAll(context);
					} else if (priv.isElementArray(context)) {
						ctx = context;
					} else {
						ctx = [context];
					}
					Array.prototype.forEach.call(ctx, function (item) {
						elems = item.querySelectorAll(selector);
						Array.prototype.forEach.call(elems, function (el) {
							if (set.indexOf(el) === -1) {
								set.push(el);
							}
						});
					});
				} else {
					set.push.apply(set, document.querySelectorAll(selector));
				}
			} else if (priv.isElementArray(selector)) {
				set.push.apply(set, selector);
			} else {
				set.push(selector);
			}
		}
		this.set = set; // backwards compatibility
		return this;
	};

	Grindstone.prototype = [];

	var $ = function $(selector, context) {
		return new Grindstone(selector, context);
	};

	$.fn = Grindstone.prototype;

	// private functions
	var priv = {
		children: function children(set, nodeType, selector) {
			var newSet = $();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;

					for (var child = item.firstChild; child; child = child.nextSibling) {
						if (nodeType === undefined || nodeType === child.nodeType) {
							if (!selector || $(child).is(selector)) newSet.push(child);
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return newSet;
		},
		createInteraction: function createInteraction(touchEvt, mouseEvt) {
			return 'ontouchend' in document ? touchEvt : mouseEvt;
		},
		elementProp: function elementProp(set, propName, selector) {
			return $.fn.map.call(set, function () {
				var find = this;
				while (true) {
					var element = find[propName];
					if (!element) break;
					if (element.nodeType != 1) {
						find = element;
						continue;
					}
					if (!selector || $(element).is(selector)) return element;
					break;
				}
			});
		},
		isElementArray: function isElementArray(obj) {
			return obj instanceof Array;
		},
		matchesFuncName: Element.prototype.matches ? 'matches' : Element.prototype.matchesSelector ? 'matchesSelector' : Element.prototype.webkitMatchesSelector ? 'webkitMatchesSelector' : Element.prototype.mozMatchesSelector ? 'mozMatchesSelector' : Element.prototype.msMatchesSelector ? 'msMatchesSelector' : undefined
	};

	$.ajax = function (opts) {

		if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') throw new Error('XHR properties are not properly defined.');

		var _opts$method = opts.method,
		    method = _opts$method === undefined ? 'GET' : _opts$method,
		    _opts$url = opts.url,
		    url = _opts$url === undefined ? '' : _opts$url,
		    _opts$async = opts.async,
		    async = _opts$async === undefined ? true : _opts$async,
		    _opts$dataType = opts.dataType,
		    dataType = _opts$dataType === undefined ? '' : _opts$dataType,
		    _opts$body = opts.body,
		    body = _opts$body === undefined ? null : _opts$body,
		    _opts$header = opts.header,
		    header = _opts$header === undefined ? 'Content-Type' : _opts$header,
		    _opts$headerValue = opts.headerValue,
		    headerValue = _opts$headerValue === undefined ? 'application/x-www-form-urlencoded; charset=UTF-8' : _opts$headerValue;


		return new Promise(function (resolve, reject) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open(method, url, async);
			xmlhttp.responseType = dataType;
			xmlhttp.setRequestHeader(header, headerValue);
			xmlhttp.onload = function () {
				return resolve(xmlhttp.response);
			};
			xmlhttp.onerror = function () {
				return reject('failure');
			};
			xmlhttp.send(body);
			return xmlhttp;
		});
	};

	$.fn.append = function (element) {
		this.each(function () {
			var _this = this;

			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					var dom = document.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function (item) {
						_this.appendChild(item);
					});
				}
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};

	$.fn.attr = function (attribute, value) {
		var elemAttribute = void 0;
		this.each(function () {
			if (value || value === '') {
				this.setAttribute(attribute, value);
			} else {
				elemAttribute = this.getAttribute(attribute);
			}
		});
		return value ? this : elemAttribute;
	};

	$.fn.hasAttr = function (attribute) {
		var exists = void 0;
		this.each(function () {
			if (attribute) exists = $(this).attr(attribute) !== null;
		});
		return exists;
	};

	$.fn.removeAttr = function (attribute) {
		this.each(function () {
			if (attribute) this.removeAttribute(attribute);
		});
		return this;
	};

	$.fn.hasClass = function (cls) {
		var hasCls = void 0;
		this.each(function () {
			hasCls = this.classList.contains(cls);
		});
		return hasCls;
	};

	$.fn.addClass = function (cls) {
		var classes = cls.split(' ');
		this.each(function () {
			var _this2 = this;

			classes.forEach(function (clsName) {
				_this2.classList.add(clsName);
			});
		});
		return this;
	};

	$.fn.removeClass = function (cls) {
		var classes = cls.split(' ');
		this.each(function () {
			var _this3 = this;

			classes.forEach(function (clsName) {
				_this3.classList.remove(clsName);
			});
		});
		return this;
	};

	$.fn.toggleClass = function (cls) {
		var classes = cls.split(' ');
		this.each(function () {
			var _this4 = this;

			classes.forEach(function (clsName) {
				_this4.classList.toggle(clsName);
			});
		});
		return this;
	};

	$.fn.clone = function () {
		return this.map(function () {
			return this.cloneNode(true);
		});
	};

	$.fn.css = function (styles, value) {
		var returnedStyle = void 0,
		    returnStyle = void 0;
		this.each(function () {
			if ((typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
				Object.assign(this.style, styles);
			} else if (typeof styles === 'string' && (value === undefined || value === null)) {
				returnedStyle = this.style[styles];
				returnStyle = true;
			} else if (typeof styles === 'string') {
				this.style[styles] = value;
			}
		});
		return returnStyle ? returnedStyle : this;
	};

	$.fn.data = function (valueName, newValue) {
		if (newValue) {
			this.each(function () {
				$(this).attr('data-' + valueName, newValue);
			});
			return this;
		} else {
			var elemValue = void 0;
			this.each(function () {
				elemValue = $(this).attr('data-' + valueName);
			});
			return elemValue;
		}
	};

	$.fn.removeData = function (valueName) {
		this.each(function () {
			$(this).removeAttr('data-' + valueName);
		});
		return this;
	};

	$.debounce = function (fn, wait, immediate) {
		var timeout = void 0;
		var debounce = function debounce() {
			var context = this;
			var args = arguments;
			var later = function later() {
				timeout = null;
				if (!immediate) fn.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) fn.apply(context, args);
		};
		return debounce;
	};

	$.fn.height = function (num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function () {
				this.style.height = num + 'px';
			});
			return this;
		} else {
			if (this.set[0] === document) {
				return document.body.clientHeight;
			} else if (this.set[0] === window) {
				return window.innerHeight;
			} else {
				return this.set[0].offsetHeight;
			}
		}
	};

	$.fn.width = function (num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function () {
				this.style.width = num + 'px';
			});
			return this;
		} else {
			if (this.set[0] === document) {
				return document.body.clientWidth;
			} else if (this.set[0] === window) {
				return window.innerWidth;
			} else {
				return this.set[0].offsetWidth;
			}
		}
	};

	$.fn.show = function (delay) {
		var _this5 = this;

		if (delay) {
			setTimeout(function () {
				$.fn.show.call(_this5);
			}, delay);
		} else {
			this.each(function () {
				if (this.style.display === 'none') {
					this.style.display = $(this).data('_prevdisplay') || '';
					$(this).removeData('_prevdisplay');
				}
			});
		}
		return this;
	};

	$.fn.hide = function (delay) {
		var _this6 = this;

		if (delay) {
			setTimeout(function () {
				$.fn.hide.call(_this6);
			}, delay);
		} else {
			this.each(function () {
				if (this.style.display !== 'none') {
					if (this.style.display) $(this).data('_prevdisplay', this.style.display);
					this.style.display = 'none';
				}
			});
		}
		return this;
	};

	$.fn.doubleTap = function (callback) {
		var active = void 0,
		    interaction = void 0;
		this.each(function () {
			active = false;
			interaction = priv.createInteraction('touchend', 'click');
			$(this).on(interaction, function () {
				if (active) {
					callback();
					return active = false;
				}
				active = true;
				setTimeout(function () {
					return active = false;
				}, 350);
			});
		});
		return this;
	};

	$.fn.each = function (callback) {
		var set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach(function (item, index, array) {
			callback.call(item, index, array);
		});
		return this;
	};

	$.fn.eq = function (index) {
		return $(this.set[index]);
	};

	$.fn.on = function (action, callback) {
		this.each(function () {
			var _this7 = this;

			var events = action.split(' ');
			events.forEach(function (evt) {
				_this7.addEventListener(evt, callback, false);
			});
		});
		return this;
	};

	$.fn.off = function (action, callback) {
		this.each(function () {
			var _this8 = this;

			var events = action.split(' ');
			events.forEach(function (evt) {
				_this8.removeEventListener(evt, callback, false);
			});
		});
		return this;
	};

	$.extend = function (target) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || !args.length === 0) throw new Error('Cannot merge properties into the target: argument is not an object.');
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var arg = _step2.value;

				if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object') throw new Error('Cannot merge properties into the target: argument is not an object.');
				target = Object.assign(target, arg);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return target;
	};

	$.fn.is = function (filterBy) {
		if (typeof filterBy === 'function') {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var item = _step3.value;

					if (filterBy.call(item, this.indexOf(item), item)) return true;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		} else {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _item = _step4.value;

					if (_item[priv.matchesFuncName](filterBy)) return true;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}
		return false;
	};

	$.fn.map = function (callback) {
		var newSet = $();
		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			for (var _iterator5 = this[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				var item = _step5.value;

				var ret = callback.call(item);
				if (ret !== undefined && ret !== null) newSet.push(ret);
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5.return) {
					_iterator5.return();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		return newSet;
	};

	$.fn.filter = function (filterBy) {
		return $.fn.map.call(this, function () {
			if ($(this).is(filterBy)) return this;
		});
	};

	$.fn.not = function (filterBy) {
		return $.fn.map.call(this, function () {
			if (!$(this).is(filterBy)) return this;
		});
	};

	$.fn.first = function () {
		return $(this.set[0]);
	};

	$.fn.last = function () {
		return $(this.set[this.set.length - 1]);
	};

	$.fn.focus = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('focus', callback);
			});
		} else {
			this.set[0].focus();
		}
		return this;
	};

	$.fn.get = function (index) {
		return this.set[index];
	};

	$.fn.html = function (content) {
		var text = void 0;
		this.each(function () {
			if (content || content === '') {
				this.innerHTML = content;
			} else {
				text = this.innerHTML;
			}
		});
		return content ? this : text;
	};

	$.fn.before = function (content) {
		this.each(function () {
			var _this9 = this;

			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {
					var dom = document.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function (item) {
						_this9.parentNode.insertBefore(item, self);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this);
			}
		});
		return this;
	};

	$.fn.after = function (content) {
		this.each(function () {
			var _this10 = this;

			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {
					var dom = document.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function (item) {
						_this10.parentNode.insertBefore(item, self.nextSibling);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};

	$.fn.mouseable = function () {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { hoverClass: 'over', activeClass: 'down' },
		    _ref$hoverClass = _ref.hoverClass,
		    hoverClass = _ref$hoverClass === undefined ? 'over' : _ref$hoverClass,
		    _ref$activeClass = _ref.activeClass,
		    activeClass = _ref$activeClass === undefined ? 'down' : _ref$activeClass;

		var events = {
			hover: priv.createInteraction('touchstart', 'mouseenter'),
			remove: priv.createInteraction('touchend', 'mouseleave'),
			down: priv.createInteraction('touchstart', 'mousedown'),
			up: priv.createInteraction('touchend', 'mouseup mouseleave')
		};

		this.each(function () {
			var _this11 = this;

			$(this).on(events.hover, function () {
				$(_this11).addClass(hoverClass);
			}).on(events.remove, function () {
				$(_this11).removeClass(hoverClass);
			}).on(events.down, function () {
				$(_this11).addClass(activeClass);
			}).on(events.up, function () {
				$(_this11).removeClass(activeClass);
			});
		});

		return this;
	};

	$.fn.offset = function (position) {
		if (!position || typeof position !== 'string') throw new Error('offset() position must be a string: acceptable values are "left" and "top".');
		if (position !== 'left' && position !== 'top') throw new Error('offset() position must be either "left" or "top".');
		var el = this.set[0];
		if (position === 'left') {
			var offsetLeft = 0;
			do {
				if (!isNaN(el.offsetLeft)) offsetLeft += el.offsetLeft;
			} while (el = el.offsetParent);
			return offsetLeft;
		} else if (position === 'top') {
			var offsetTop = 0;
			do {
				if (!isNaN(el.offsetTop)) offsetTop += el.offsetTop;
			} while (el = el.offsetParent);
			return offsetTop;
		}
	};

	$.fn.prepend = function (element) {
		this.each(function () {
			var _this12 = this;

			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterbegin', element);
				} else {
					var dom = document.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function (item) {
						_this12.insertBefore(item, self.firstChild);
					});
				}
			} else {
				this.insertBefore(element, this.firstChild);
			}
		});
		return this;
	};

	$.fn.ready = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('DOMContentLoaded', callback);
			});
		}
		return this;
	};

	$.fn.load = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('load', callback);
			});
		}
		return this;
	};

	$.fn.remove = function (target) {
		if (target) {
			var elems = document.querySelectorAll(target);
			elems = Array.prototype.slice.call(elems);
			this.each(function () {
				var _this13 = this;

				elems.forEach(function (el) {
					_this13.removeChild(el);
				});
			});
		} else {
			this.each(function () {
				this.parentNode.removeChild(this);
			});
		}
		return this;
	};

	$.fn.replaceWith = function (content) {
		this.each(function () {
			this.outerHTML = content ? content : '';
		});
		return this;
	};

	$.fn.resize = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('resize', callback);
			});
		}
		return this;
	};

	$.fn.scroll = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('scroll', callback);
			});
		}
		return this;
	};

	$.fn.scrollTop = function (top) {
		var topOffset = void 0;
		this.each(function () {
			switch (this) {
				case window:
					if (typeof top === 'number') {
						this.scrollTo(0, top);
					} else {
						topOffset = this.pageYOffset;
					}
					break;
				case document:
					if (typeof top === 'number') {
						this.body.scrollTop = top;
					} else {
						topOffset = this.body.scrollTop;
					}
					break;
				default:
					if (typeof top === 'number') {
						this.scrollTop = top;
					} else {
						topOffset = this.scrollTop;
					}
			}
		});
		return typeof top === 'number' ? this : topOffset;
	};

	$.fn.scrollLeft = function (left) {
		var leftOffset = void 0;
		this.each(function () {
			switch (this) {
				case window:
					if (typeof left === 'number') {
						this.scrollTo(left, 0);
					} else {
						leftOffset = this.pageXOffset;
					}
					break;
				case document:
					if (typeof left === 'number') {
						this.body.scrollLeft = left;
					} else {
						leftOffset = this.body.scrollLeft;
					}
					break;
				default:
					if (typeof left === 'number') {
						this.scrollTop = left;
					} else {
						leftOffset = this.scrollLeft;
					}
			}
		});
		return typeof left === 'number' ? this : leftOffset;
	};

	$.fn.submit = function (callback) {
		if (typeof callback === 'function') {
			this.each(function () {
				$(this).on('submit', callback);
			});
		} else {
			this.each(function () {
				this.submit();
			});
		}
		return this;
	};

	$.fn.parent = function (selector) {
		return priv.elementProp(this, 'parentNode', selector);
	};

	$.fn.next = function (selector) {
		return priv.elementProp(this, 'nextSibling', selector);
	};

	$.fn.prev = function (selector) {
		return priv.elementProp(this, 'previousSibling', selector);
	};

	$.fn.children = function (selector) {
		return priv.children(this, 1, selector);
	};

	$.fn.contents = function () {
		return priv.children(this);
	};

	$.fn.trigger = function (evt) {
		var customEvent = new Event(evt);
		this.each(function () {
			this.dispatchEvent(customEvent);
		});
		return this;
	};

	$.fn.val = function (newValue) {
		if (newValue && typeof newValue === 'string') {
			this.each(function () {
				this.value = newValue;
			});
			return this;
		} else {
			return this.set[0].value;
		}
	};

	$.fn.wrap = function (structure) {
		this.each(function () {
			if (typeof structure !== 'string' || !structure.startsWith('<') || !structure.endsWith('>')) throw new Error('wrap() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			var contents = this.outerHTML;
			this.outerHTML = structure + contents;
		});
		return this;
	};

	$.fn.wrapInner = function (structure) {
		this.each(function () {
			if (typeof structure !== 'string' || !structure.startsWith('<') || !structure.endsWith('>')) throw new Error('wrapInner() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			var contents = $(this).html();
			$(this).html(structure + contents);
		});
		return this;
	};

	return $;
});