	$.fn.hasClass = function(cls) {
		let hasCls;
		this.each(function() {
			hasCls = this.classList.contains(cls);
		});
		return hasCls;
	};

	$.fn.addClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.add(clsName);
			});
		});
		return this;
	};

	$.fn.removeClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.remove(clsName);
			});
		});
		return this;
	};

	$.fn.toggleClass = function(cls) {
		const classes = cls.split(' ');
		this.each(function() {
			classes.forEach(clsName => {
				this.classList.toggle(clsName);
			});
		});
		return this;
	};
