/**
 * GrindstoneJS Gruntfile - some notes:
 * 
 * When outputting a custom build, some modules require the inclusion of others in order to work properly as currently programmed.
 * These dependencies are commented below...
 * 
 * By default, all modules require the library Core.
 */

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
		    dist: {
			    src: [
				    "Core.js",
		    		"modules/Ajax.js",
		    		"modules/Append.js",
		    		"modules/Attributes.js",
		    		"modules/Classes.js",
		    		"modules/Clone.js",
		    		"modules/CSS.js",
		    		"modules/Dimensions.js",
		    		"modules/Display.js",
		    		"modules/DoubleTap.js",	// Requires Events.js
		    		"modules/Each.js",
		    		"modules/Events.js",
		    		"modules/HTML.js",
		    		"modules/Insert.js",
		    		"modules/Mouseable.js",	// Requires Classes.js, Events.js
		    		"modules/NewEl.js",
		    		"modules/Offset.js",
		    		"modules/Prepend.js",
		    		"modules/Ready.js",
		    		"modules/Remove.js",
		    		"modules/ReplaceWith.js",
		    		"modules/Resize.js",	// Requires Events.js
		    		"modules/Scroll.js",	// Requires Events.js
		    		"modules/Trigger.js",
		    		"modules/Value.js",		// Requires Attributes.js
		    		"modules/WrapInner.js"	// Requires HTML.js
			    ],
			    dest: "bin/<%= pkg.name %>-v<%= pkg.version %>.js"
		    }
		},
		uglify: {
		    options: {
		    	banner: "/* Grindstone JavaScript Library v<%= pkg.version %> | Copyright (c) 2014, <%= grunt.template.today('yyyy') %> Dan Zervoudakes | https://github.com/DanZiti/GrindstoneJS/blob/master/LICENSE */\n"
		    },
		    build: {
            	src: "bin/<%= pkg.name %>-v<%= pkg.version %>.js",
				dest: "bin/<%= pkg.name %>-v<%= pkg.version %>.min.js"
        	}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	
	grunt.registerTask("default", ["concat","uglify"]);
	
};