//Grunt 的入口文件
//用于定义一些涂药Grunt 自动执行的任务

module.exports = grunt => {
    grunt.initConfig({
        build: {
            js: '1',
            css: '2'
        }
    })
    grunt.registerMultiTask('build', () => {
        console.log('build task')
    })

}