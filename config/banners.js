/* eslint-disable max-len */
const { stripIndents } = require('common-tags');
const pkg = require('../package.json');

module.exports = {
	max: stripIndents`
		/**
		 * Grindstone JavaScript Library v${pkg.version}
		 * ${pkg.repository.url}
		 *
		 * Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name}
		 * Released under the MIT license
		 * ${pkg.repository.url}/blob/master/LICENSE
		 */
	` + '\n\n',
	min: `/* Grindstone JavaScript Library v${pkg.version} | Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.repository.url}/blob/master/LICENSE */\n`
};
