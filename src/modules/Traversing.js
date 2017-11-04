	$.fn.parent = function(selector) {
		return priv.elementProp(this, 'parentNode', selector);
	};

	$.fn.next = function(selector) {
		return priv.elementProp(this, 'nextSibling', selector);
	};

	$.fn.prev = function(selector) {
		return priv.elementProp(this, 'previousSibling', selector);
	};

	$.fn.children = function(selector) {
		return priv.children(this, 1, selector);
	};

	$.fn.contents = function() {
		return priv.children(this);
	};
