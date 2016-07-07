module.exports = function(grunt) {
    grunt.initConfig({
        /* JSX compiling */
        react: {
            dynamic_mappings: {
                files: [
                    /* ui-components compiling */
                    {
                        expand: true,
                        cwd: './src/components',
                        src: ['**/**.jsx'],
                        dest: './app/components',
                        ext: '.js'
                    },
                    {
                        expand: true,
                        cwd: './src/controllers',
                        src: ['**/**.jsx'],
                        dest: './app/controllers',
                        ext: '.js'
                    },
                ]
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**/*.js'], dest: 'app/'}
                ]
            }
        },

        /* Cleaning build results */
        clean: {
            build: ['./app/']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('build', ['clean', 'copy', 'react']);
};
