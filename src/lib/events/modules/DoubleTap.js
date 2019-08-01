/**
 * Trigger a function by double-tapping or double-clicking.
 * @method doubleTap
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $('#selector').doubleTap(function(){});
 */

const doubleTap = function(callback) {
	let active, interaction;
	this.each(function() {
		active = false;
		interaction = utils.createInteraction('touchend', 'click');
		$(this).on(interaction, () => {
			if (active) {
				callback();
				return (active = false);
			}
			active = true;
			setTimeout(() => {
				return (active = false);
			}, 350);
		});
	});
	return this;
};

$.fn.doubleTap = doubleTap;

// @if !NODE_ENV='production'
module.exports = doubleTap;
// @endif
