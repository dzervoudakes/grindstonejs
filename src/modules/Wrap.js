	$.fn.wrap = function(structure) {
		this.each(function() {
			if (typeof structure === 'string' && structure.startsWith('<') && structure.endsWith('>')) {
				const contents = this.outerHTML;
				this.outerHTML = structure + contents;
			} else {
				throw new Error('wrap() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			}
		});
		return this;
	};
	
	$.fn.wrapInner = function(structure) {
		this.each(function() {
			if (typeof structure === 'string' && structure.startsWith('<') && structure.endsWith('>')) {
				const contents = $(this).html();
				$(this).html(structure + contents);
			} else {
				throw new Error('wrapInner() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			}
		});
		return this;
	};
 