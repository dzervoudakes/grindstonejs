	/** @namespace Mouseable */
	
	/**
	 * @method mouseable
	 * @memberof Mouseable
	 * @param {object} classes optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').mouseable();
	 * $('#selector').mouseable({ hoverClass: 'stuff', activeClass: 'things' });
	 * @description Create hover and active states.
	 */

	$.fn.mouseable = function(classes = { hoverClass: 'over', activeClass: 'down' }) {

		if (classes && typeof classes !== 'object') throw new Error('Classes parameter for mouseable() must be an object with properties "hoverClass" and/or "activeClass".');
		
		const events = {
			hover:  priv.createInteraction('touchstart', 'mouseenter'),
			remove: priv.createInteraction('touchend', 'mouseleave'),
			down:   priv.createInteraction('touchstart', 'mousedown'),
			up: 	priv.createInteraction('touchend', 'mouseup mouseleave')
		};
		
		this.each(function() {
			$(this)
				.on(events.hover, () => {
					$(this).addClass(classes.hoverClass || 'over');
				})
				.on(events.remove, () => {
					$(this).removeClass(classes.hoverClass || 'over');
				})
				.on(events.down, () => {
					$(this).addClass(classes.activeClass || 'down');
				})
				.on(events.up, () => {
					$(this).removeClass(classes.activeClass || 'down');
				});
		});
		
		return this;
	};
