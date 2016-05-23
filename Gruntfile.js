module.exports = function(grunt) {

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			build: {
				src: ['dist']
			}
		},
		
		concat: {
		    dist: {
			    src: [
		    		'src/templates/Intro.js',
		    		'src/Core.js',
		    		'src/modules/*.js',
		    		'src/templates/Outro.js'
			    ],
			    options: {
				    banner: [
					    '/**',
						' * Grindstone JavaScript Library v<%= pkg.version %>',
						' * https://github.com/dzervoudakes/GrindstoneJS',
						' * ',
						' * Copyright (c) 2014, <%= grunt.template.today("yyyy") %> Dan Zervoudakes',
						' * Released under the MIT license',
						' * https://github.com/dzervoudakes/GrindstoneJS/blob/master/LICENSE',
						' */',
						'\n'
					].join('\n')
			    },
			    dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js'
		    }
		},
		
		uglify: {
		    options: {
		    	banner: '/* Grindstone JavaScript Library v<%= pkg.version %> | Copyright (c) 2014, <%= grunt.template.today("yyyy") %> Dan Zervoudakes | https://github.com/dzervoudakes/GrindstoneJS/blob/master/LICENSE */\n'
		    },
		    build: {
			    src: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js',
			    dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.min.js'
        	}
		},
		
		watch: {
			scripts: {
				files: ['<%= concat.dist.src %>'],
				tasks: ['build']
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('build', ['clean', 'concat', 'uglify']);
	
};