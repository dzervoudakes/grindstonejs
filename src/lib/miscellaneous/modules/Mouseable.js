/**
 * @typedef {Object} MouseableOpts
 * @prop {string} hoverClass class to apply when hovering over the target
 * @prop {string} activeClass class to apply when interacting with the target
 */

/**
 * Assign hover and active classes.
 * @method mouseable
 * @memberof Grindstone
 * @param {MouseableOpts} classes optional
 * @returns {NodeList} collection
 * @example
 * $('#selector').mouseable();
 * $('#selector').mouseable({ hoverClass: 'stuff', activeClass: 'things' });
 */

const mouseable = function(
  { hoverClass = 'over', activeClass = 'down' } = {
    hoverClass: 'over',
    activeClass: 'down'
  }
) {
  const events = {
    hover: utils.createInteraction('touchstart', 'mouseenter'),
    remove: utils.createInteraction('touchend', 'mouseleave'),
    down: utils.createInteraction('touchstart', 'mousedown'),
    up: utils.createInteraction('touchend', 'mouseup mouseleave')
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

$.fn.mouseable = mouseable;

// @if !NODE_ENV='production'
module.exports = mouseable;
// @endif
