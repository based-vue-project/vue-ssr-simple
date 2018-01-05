/*
 * webpack的nodeAPI
 */

// client
const webpack = require('webpack')
const wpCfg = require('./webpack.js')
const compiler = webpack(wpCfg.getConfig()) // 导入的 webpack 函数需要传入一个 webpack 配置对象,就会得到一个 webpack Compiler 实例
// server
const wpServerCfg = require('./webpack.server.js')
const serverCompiler = webpack(wpServerCfg)

const fs = require('fs-extra')
const path = require('path')
fs.removeSync(path.resolve('./build'))

// 手动触发 webpack 执行器，或者是让它执行构建并监听变更
// compiler.watch(watchOptions, handler)  开发时使用
// compiler.run (callback) 线上使用
compiler.watch({}, (err, stats) => {
    if (err === null && stats.compilation.errors.length === 0) {
        console.log('编译成功')
    } else {
        console.log('编译出现错误...')
        console.log(stats.compilation.errors[0].message)
    }
})

serverCompiler.watch({}, (err, stats) => {
    if (err === null && stats.compilation.errors.length === 0) {
        console.log('编译成功')
    } else {
        console.log('编译出现错误...')
        console.log(stats.compilation.errors[0].message)
    }
})