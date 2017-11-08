	$.fn.wrap = function(structure) {
		this.each(function() {
			if (typeof structure !== 'string' || !structure.startsWith('<') || !structure.endsWith('>')) throw new Error('wrap() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			const contents = this.outerHTML;
			this.outerHTML = structure + contents;
		});
		return this;
	};
	
	$.fn.wrapInner = function(structure) {
		this.each(function() {
			if (typeof structure !== 'string' || !structure.startsWith('<') || !structure.endsWith('>')) throw new Error('wrapInner() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			const contents = $(this).html();
			$(this).html(structure + contents);
		});
		return this;
	};
 