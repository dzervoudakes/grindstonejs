/**
 * GrindstoneJS Gruntfile - some notes:
 * 
 * When outputting a custom build, some modules require the inclusion of others in order to work properly as currently programmed.
 * These dependencies are commented below...
 * 
 * By default, all modules require the library Core.
 */

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
		    dist: {
			    src: [
				    "src/Core.js", // INCLUDE THIS FILE BEFORE ALL OTHERS
		    		"src/Ajax.js",
		    		"src/Append.js",
		    		"src/Attributes.js",
		    		"src/Classes.js",
		    		"src/Clone.js",
		    		"src/CSS.js",
		    		"src/Dimensions.js",
		    		"src/Display.js",
		    		"src/DoubleTap.js",	// Requires Events.js
		    		"src/Each.js",
		    		"src/Events.js",
		    		"src/HTML.js",
		    		"src/Insert.js",
		    		"src/Mouseable.js",	// Requires Classes.js, Events.js
		    		"src/NewEl.js",
		    		"src/Offset.js",
		    		"src/Prepend.js",
		    		"src/Ready.js",
		    		"src/Remove.js",
		    		"src/ReplaceWith.js",
		    		"src/Resize.js",	// Requires Events.js
		    		"src/Scroll.js",	// Requires Events.js
		    		"src/ScrollTop.js",
		    		"src/Trigger.js",
		    		"src/Value.js",		// Requires Attributes.js
		    		"src/Wrap.js"	// Requires HTML.js
			    ],
			    dest: "dist/<%= pkg.name %>-v<%= pkg.version %>.js"
		    }
		},
		uglify: {
		    options: {
		    	banner: "/* Grindstone JavaScript Library v<%= pkg.version %> | Copyright (c) 2014, <%= grunt.template.today('yyyy') %> Dan Zervoudakes | https://github.com/DanZiti/GrindstoneJS/blob/master/LICENSE */\n"
		    },
		    build: {
            	src: "dist/<%= pkg.name %>-v<%= pkg.version %>.js",
				dest: "dist/<%= pkg.name %>-v<%= pkg.version %>.min.js"
        	}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	
	grunt.registerTask("default", ["concat", "uglify"]);
	
};