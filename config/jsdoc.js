'use strict';

/**
 * @fileoverview Defines configuration for documentation output.
 */
module.exports = {
	opts: {
		destination: './docs',
		encoding: 'utf8',
		template: './node_modules/minami'
	},
	source: {
		include: ['./README.md']
	}
};
