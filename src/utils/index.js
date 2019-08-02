/**
 * @fileoverview Defines a set of reusable shared methods for use throughout the library
 */
const utils = (() => {
	const applyContext = (item, selector, set) => {
		const elems = item.querySelectorAll(selector);
		Array.prototype.forEach.call(elems, el => {
			if (set.indexOf(el) === -1) {
				set.push(el);
			}
		});
	};

	const children = (set, nodeType, selector) => {
		const newSet = $();
		for (const item of set) {
			for (let child = item.firstChild; child; child = child.nextSibling) {
				if (nodeType === undefined || nodeType === child.nodeType) {
					if (!selector || $(child).is(selector)) newSet.push(child);
				}
			}
		}
		return newSet;
	};

	const createInteraction = (touchEvt, mouseEvt) =>
		'ontouchend' in document ? touchEvt : mouseEvt;

	const elementProp = (set, propName, selector) =>
		$.fn.map.call(set, function() {
			let find = this;
			while (true) {
				const element = find[propName];
				if (!element) break;
				if (element.nodeType !== 1) {
					find = element;
					continue;
				}
				if (!selector || $(element).is(selector)) {
					return element;
				}
				break;
			}
		});

	const isElementArray = obj => obj instanceof Array;

	const matchesFuncName = Element.prototype.matches
		? 'matches'
		: Element.prototype.matchesSelector
		? 'matchesSelector'
		: Element.prototype.webkitMatchesSelector
		? 'webkitMatchesSelector'
		: Element.prototype.mozMatchesSelector
		? 'mozMatchesSelector'
		: Element.prototype.msMatchesSelector
		? 'msMatchesSelector'
		: undefined;

	return {
		applyContext,
		children,
		createInteraction,
		elementProp,
		isElementArray,
		matchesFuncName
	};
})();

// @if !NODE_ENV='production'
module.exports = utils;
// @endif
