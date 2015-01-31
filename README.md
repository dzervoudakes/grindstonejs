GrindstoneJS
=================

A lightweight jQuery alternative for modern browsers with familiar syntax.

This library does not aim to "replace" jQuery: it is merely an ensemble of the functions I use most often, and a few of my own...  This library will NOT work in IE8, but works great in IE9+ and all modern browsers.

Full documentation and examples: http://grindstonejs.drzwebdev.com/

For custom builds:
 -Download the GrindstoneJS-master .zip file and extract in a local folder on your machine
 -Install Node.js on your machine
 -Open the root directory of your project in the CLI and install Grunt (make sure to explicitly install the "Grunt CLI")
 -After installing Grunt, install the Grunt plugins "grunt-contrib-concat" and "grunt-contrib-uglify" (minimum version dependencies listed in "package.json")
 -Within "Gruntfile.js", you will see an array of all the specific modules which are being concatenated and minified: simply add and remove modules as you see fit, and feel free to rename the resultant uncompressed/compressed files as you please
 -If everything went smoothly, you should be able to simply navigate to your local project in the CLI and type in "grunt" > enter/return...

Node.js installation: https://github.com/joyent/node/wiki/installing-node.js-via-package-manager/

Grunt.js install via npm: http://gruntjs.com/installing-grunt/

grunt-contrib-concat: https://github.com/gruntjs/grunt-contrib-concat/

grunt-contrib-uglify: https://github.com/gruntjs/grunt-contrib-uglify/
