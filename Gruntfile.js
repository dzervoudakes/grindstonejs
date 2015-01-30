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
		    		"modules/DoubleTap.js",
		    		"modules/Each.js",
		    		"modules/Events.js",
		    		"modules/HTML.js",
		    		"modules/Insert.js",
		    		"modules/Mouseable.js",
		    		"modules/NewEl.js",
		    		"modules/Offset.js",
		    		"modules/Prepend.js",
		    		"modules/Ready.js",
		    		"modules/Remove.js",
		    		"modules/ReplaceWith.js",
		    		"modules/Resize.js",
		    		"modules/Scroll.js",
		    		"modules/Trigger.js",
		    		"modules/Value.js",
		    		"modules/WrapInner.js"
			    ],
			    dest: "bin/<%= pkg.name %>-v<%= pkg.version %>.js"
		    }
		},
		uglify: {
		    options: {
		    	banner: "/* GrindstoneJS JavaScript Library <%= pkg.version %> | Copyright (c) 2014, <%= grunt.template.today('yyyy') %> Dan Zervoudakes | https://github.com/DanZiti/GrindstoneJS/blob/master/LICENSE */"
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