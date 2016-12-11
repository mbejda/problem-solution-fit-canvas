module.exports = function(grunt) {
    // Automaticamente carga las tareas
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
         // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: [
               '/**',
               ' * <%= pkg.description %>',
               ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
               ' * @link <%= pkg.homepage %>',
               ' * @author <%= pkg.author %>',
               ' * @license MIT License, http://www.opensource.org/licenses/MIT',
               ' */'
             ].join('\n')
        },
    // Task configuration.
        gruntas: {
            app: 'app',
            api: 'api',
            distFolder: 'dist',
            scripts: 'src/js',
            scss: 'src/scss',
            styles: 'src/scss',
            images: 'assets/img',
            svg: 'assets/svg',
            bower: 'bower_components',
            test: 'test',
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['<%= gruntas.scripts %>/*.js'],
                dest: '<%= gruntas.distFolder %>/js/<%= pkg.name %>.js'
            }
        },
        sass: {
            test: {
                options: {
                    style: 'expanded'
                },
                files: {
                '<%= gruntas.test %>/assets/css/main.css': '<%= gruntas.test %>/assets/scss/main.scss'
                }
            },
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                '<%= gruntas.distFolder %>/css/<%= pkg.name %>.css': '<%= gruntas.scss %>/*.scss'
                }
            },
            distcompress: {
                options: {
                    style: 'compress'
                },
                files: {
                '<%= gruntas.distFolder %>/css/<%= pkg.name %>.min.css': '<%= gruntas.scss %>/*.scss'
                }
            }
        },
        uglify: {
          options: {
            banner: '<%= meta.banner %>'
          },
          dist: {
            src: ['<%= concat.dist.dest %>'],
            dest: '<%= gruntas.distFolder %>/js/<%= pkg.name %>.min.js'
          }
        },
        jshint: {
          files: ['Gruntfile.js', 'gruntas.scripts %>/*.js'],
          options: {
            jshintrc: true
          }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dev: {
                src: '<%= gruntas.styles %>/main.css',
                dest: '<%= gruntas.styles %>/main.css'
            },
            production: {
                src: '<%= gruntas.styles %>/main.css',
                dest: '<%= gruntas.distFolder %>/css/main.css',
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            // scripts: {
            //     files: [
            //     'Gruntfile.js',
            //     '<%= gruntas.test %>/assets/js/app.js',
            //     ],
            //     tasks: ['concat:dev'],
            //     options: {
            //         spawn: false,
            //         livereload: true
            //     }
            // },
            scss: {
                files: ['<%= gruntas.test %>/assets/scss/*.scss','<%= gruntas.scss %>*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            html: {
                files: ['./**/*.html'],
                tasks: [],
                options: {
                    spawn: false
                }
            }
        },
        bump: {
            options: {
              files: ['package.json'],
              updateConfigs: [],
              commit: true,
              commitMessage: 'Release v%VERSION%',
              commitFiles: ['package.json'],
              createTag: true,
              tagName: 'v%VERSION%',
              tagMessage: 'Version %VERSION%',
              push: true,
              pushTo: 'upstream',
              gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
              globalReplace: false,
              prereleaseName: false,
              metadata: '',
              regExp: false
            }
          }
    });




    //Estas son realmente las tareas que vamos a correr.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('release', ['bump']);
    grunt.registerTask('build', [ 'concat:dist', 'uglify:dist', 'sass:dist', 'sass:distcompress']);
};
