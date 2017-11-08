	$.extend = function(target, ...args) {
		if (typeof target !== 'object' || !args.length === 0) throw new Error('Cannot merge properties into the target: argument is not an object.');
		for (let arg of args) {
			if (typeof arg !== 'object') throw new Error('Cannot merge properties into the target: argument is not an object.');
			target = Object.assign(target, arg);
		}
		return target;
	};
