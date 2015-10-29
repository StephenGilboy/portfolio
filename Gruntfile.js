module.exports = function(grunt) {
  
  grunt.initConfig({
    jade: {
      debug: {
        options: {
          pretty: true
        },
        files: {
          'build/debug/index.html' : 'src/index.jade'
        }
      },
      release: {
        options: {
          pretty: true
        },
        files: {
          'build/release/index.html' : 'src/index.jade'
        }
      }
    },
    copy: {
      debug: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'theme/fonts/*',
            dest: 'build/debug/fonts'
          },
          {
            expand: true,
            flatten: true,
            src: 'theme/images/*',
            dest: 'build/debug/images'
          },
          {
            expand: true,
            flatten: true,
            src: 'src/ResumeStephenGilboy.pdf',
            dest: 'build/debug'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'theme/scripts/jquery.min.js',
              'theme/plugins/instafeed/instafeed.min.js',
              'theme/plugins/magnific-popup/jquery.magnific-popup.min.js',
              'theme/plugins/one-page-nav/jquery.nav.js',
              'theme/plugins/owl-carousel/owl.carousel.min.js',
              'theme/plugins/shuffle/jquery.shuffle.modernizr.min.js',
              'theme/plugins/twitter-fetcher/twitterFetcher_min.js',
              'theme/plugins/jquery-validate/jquery.validate.min.js',
              'theme/plugins/wowjs/wow.min.js',
              'theme/scripts/main.js'
              ],
            dest: 'build/debug/scripts'
          },
          {
            expand: true,
            flatten: true,
            src: [
              "theme/styles/animate.min.css",
              "theme/styles/normalize.css",
              "theme/plugins/magnific-popup/magnific-popup.css",
              "theme/plugins/owl-carousel/owl.carousel.css",
              "theme/styles/font-awesome.min.css",
              "theme/styles/main.css"
            ],
            dest: 'build/debug/styles'
          }
        ]
      },
      release: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'theme/fonts/*',
            dest: 'build/release/fonts'
          },
          {
            expand: true,
            flatten: true,
            src: 'theme/images/*',
            dest: 'build/release/images'
          },
          {
            expand: true,
            flatten: true,
            src: 'src/ResumeStephenGilboy.pdf',
            dest: 'build/release'
          }
        ]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      release: {
        files: { 
          'build/release/scripts/libs.min.js': [
              'theme/scripts/jquery.min.js',
              'theme/plugins/instafeed/instafeed.min.js',
              'theme/plugins/magnific-popup/jquery.magnific-popup.min.js',
              'theme/plugins/one-page-nav/jquery.nav.js',
              'theme/plugins/owl-carousel/owl.carousel.min.js',
              'theme/plugins/shuffle/jquery.shuffle.modernizr.min.js',
              'theme/plugins/twitter-fetcher/twitterFetcher_min.js',
              'theme/plugins/jquery-validate/jquery.validate.min.js',
              'theme/plugins/wowjs/wow.min.js',
              'theme/scripts/main.js'
              ]
        }
      }
    },
    cssmin: {
      options: {},
      release: {
        files: { 
          'build/release/styles/site.min.css' : [
              "theme/styles/animate.min.css",
              "theme/styles/normalize.css",
              "theme/plugins/magnific-popup/magnific-popup.css",
              "theme/plugins/owl-carousel/owl.carousel.css",
              "theme/styles/font-awesome.min.css",
              "theme/styles/main.css"
          ] 
        }
      }
    },
    htmlbuild: {
      debug: {
        src: 'build/debug/index.html',
        dest: 'build/debug/index.html',
        options: {
          replace: true,
          scripts: {
            libs: [
              'build/debug/scripts/jquery.min.js',
              'build/debug/scripts/instafeed/instafeed.min.js',
              'https://maps.googleapis.com/maps/api/js?v=3.exp',
              'build/debug/scripts/jquery.magnific-popup.min.js',
              'build/debug/scripts/jquery.nav.js',
              'build/debug/scripts/owl.carousel.min.js',
              'build/debug/scripts/jquery.shuffle.modernizr.min.js',
              'build/debug/scripts/twitterFetcher_min.js',
              'build/debug/scripts/jquery.validate.min.js',
              'build/debug/scripts/wow.min.js',
              'build/debug/scripts/main.js'
            ]
          },
          styles: {
            libraries: [
              'build/debug/styles/*.css'
            ]
          }
        }
      },
      release: {
        src: 'build/release/index.html',
        dest: 'build/release/index.html',
        options: {
          replace: true,
          scripts: {
            libs: [
              'build/release/scripts/libs.min.js'
            ]
          },
          styles: {
            libraries: [
              'build/release/styles/site.min.css'
            ]
          }
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('debug', ['jade:debug', 'copy:debug', 'htmlbuild:debug', 'serve']);
  grunt.registerTask('release', ['jade:release', 'copy:release', 'uglify:release', 'cssmin:release', 'htmlbuild:release', 'serve']);
};