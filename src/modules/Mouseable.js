	/** @namespace Mouseable */
	
	/**
	 * Create hover and active states.
	 * @method mouseable
	 * @memberof Mouseable
	 * @param {object} classes optional
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').mouseable();
	 * $('#selector').mouseable({ hoverClass: 'stuff', activeClass: 'things' });
	 */

	$.fn.mouseable = function({ hoverClass = 'over', activeClass = 'down' } = { hoverClass: 'over', activeClass: 'down' }) {
		
		const events = {
			hover:  priv.createInteraction('touchstart', 'mouseenter'),
			remove: priv.createInteraction('touchend', 'mouseleave'),
			down:   priv.createInteraction('touchstart', 'mousedown'),
			up: 	priv.createInteraction('touchend', 'mouseup mouseleave')
		};
		
		this.each(function() {
			$(this)
				.on(events.hover, () => {
					$(this).addClass(hoverClass);
				})
				.on(events.remove, () => {
					$(this).removeClass(hoverClass);
				})
				.on(events.down, () => {
					$(this).addClass(activeClass);
				})
				.on(events.up, () => {
					$(this).removeClass(activeClass);
				});
		});
		
		return this;
	};
