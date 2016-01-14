// (grunt config file)
module.exports = function(grunt){
  //project config.
  grunt.initConfig({ //initialization of grunt: here, we are also passing in an object.
    pkg: grunt.file.readJSON('package.json'), //this is a reference to the package.json file we need for configuration.
    uglify: {
      options: {
        banner: '/*<%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n' //pkg.json is referenced again here to specify uglify options.
      },
      build: {
        src: 'client/app.js', //start point.
        dest: 'server/public/assets/scripts/app.min.js' //end point.
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: "node_modules/", //current working directory. copies out info & then writes to needed dir.
        src: [ // (start)
          "angular/angular.min.js",
          "angular/angular.min.js.map",  //this is specific to angular since this is the core to our client side experience.
          "angular/angular-csp.css"
        ],
        "dest": "server/public/vendors" // (end)
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy'); //loadNpmTask registers the tasks we need when we run Grunt.
  grunt.loadNpmTasks('grunt-contrib-uglify'); //these are part of Grunt's automation process (copying/moving files & minifying code).
  //minifying makes code more web-friendly.
    //default tasks.

  grunt.registerTask('default',['copy','uglify']);
};