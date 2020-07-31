/**
 * @fileoverview Initializes the Grindstone constructor and exports for consumption.
 */
(function (root, lib) {
  if (typeof exports !== 'undefined') {
    module.exports = lib();
  }
  root.Grindstone = lib();
  root.$ = lib();
})(window, function () {
  /** @namespace Grindstone */

  /**
   * Create new instances of our constructor using familiar, jQuery-style syntax.
   * @function $()
   * @memberof Grindstone
   * @param {HTMLElement|string} selector
   * @param {HTMLElement|string} context optional
   * @returns {NodeList} collection
   * @example
   * $('.selector');
   * $('.selector', '#container');
   */

  const Grindstone = function (selector, context) {
    const set = this;

    if (selector) {
      let ctx;
      if (typeof selector === 'string') {
        if (context) {
          if (typeof context === 'string') {
            ctx = document.querySelectorAll(context);
          } else if (utils.isElementArray(context)) {
            ctx = context;
          }
          // apply context when adding to the current set
          if (ctx instanceof Array) {
            ctx.forEach((item) => {
              const foundContexts = document.querySelectorAll(item);
              Array.prototype.forEach.call(foundContexts, (key) => {
                utils.applyContext(key, selector, set);
              });
            });
          } else {
            Array.prototype.forEach.call(ctx, (item) => {
              utils.applyContext(item, selector, set);
            });
          }
        } else {
          // set = [...set, ...document.querySelectorAll(selector)];
          set.push.apply(set, document.querySelectorAll(selector));
        }
      } else if (utils.isElementArray(selector)) {
        // set = [...set, ...selector];
        set.push.apply(set, selector);
      } else {
        set.push(selector);
      }
    }

    this.set = set; // backwards compatibility
    return this;
  };

  Grindstone.prototype = [];

  const $ = function (selector, context) {
    return new Grindstone(selector, context);
  };

  $.fn = Grindstone.prototype;

  // @include ./utils/index.js
  // @include ./lib/index.js

  return $;
});
