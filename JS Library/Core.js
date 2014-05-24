/* JS Library Core
 *
 * Includes full selector; object "El"
 * Includes detector to remove class "over" on touch-enabled devices
 * Leverages Sizzle.js
 */
	
	// Global object
	
	var El = El || {};
	
	El.global = this;
	
	// Simple selector: IDs only
	
	Elem = function(element){
		return document.getElementById(element);
	};
	
	// Selector: single elements (returns the first element that matches the selector)
	
	El.getDOM = function (selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		var typeOf = typeof selector;
		if (typeOf === "string") {
			return El.global.Sizzle(selector,context)[0];
		} else {
			if (selector.nodeType === 1 || selector.nodeType === 9){
				return selector;
			} else {
				if (typeOf === "object" && typeof selector.setInterval !== "undefined"){
					return selector;
				} else {
					return undefined;
				}
			}
		}
	};
	
	// Selector: array (returns an array of elements that match the selector)
	
	El.getDOMList = function (selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		if (typeof selector === "string"){
			return El.global.Sizzle(selector,context);
		} else {
			return [];
		}
	};
	
	// Test parameters function: to be used for checking if a parameter is undefined
	
	function testParam(parameter){
		return parameter != undefined && parameter != "";
	};
	
	// Remove class "over" on touch-enabled devices to remove sticky-hover-state bugs
 
	if ('createTouch' in document){
		try {
			var pattern = /.over\b/,
			sheet, rule, selectors, newSelector,
			selectorAdded, newRule, i, j, k;
			for (i = 0; i < document.styleSheets.length; i++){
				sheet = document.styleSheets[i];
				for (j = sheet.cssRules.length - 1; j >= 0; j--){
					rule = sheet.cssRules[j];
					if (rule.type !== CSSRule.STYLE_RULE || !pattern.test(rule.selectorText)){
						continue;
					}
					selectors = rule.selectorText.split(",");
					newSelector = '';
					selectorAdded = false;
					// Iterate over the selectors and test them against the pattern
					for (k = 0; k < selectors.length; k++){
						// Add string to the new selector if it didn't match
						if (pattern.test(selectors[k])){
							continue;
						}
						if (!selectorAdded){
							newSelector += selectors[k];
							selectorAdded = true;
						} else {
							newSelector += ", " + selectors[k];
						}
					}
					// Remove the rule, and add the new one if we've got something
					// added to the new selector
					if (selectorAdded){
						newRule = rule.cssText.replace(/([^{]*)?/, newSelector + " ");
						sheet.deleteRule(j);
						sheet.insertRule(newRule, j);
					} else {
						sheet.deleteRule(j);
					}
				}
			}
		} catch(e){}
	}