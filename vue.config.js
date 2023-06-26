const {defineConfig} = require("@vue/cli-service");
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: "./",
    devServer: {
        hot: true,
        port: 8083, // 启动端口
        // open: true,  // 启动后是否自动打开网页
    },
    configureWebpack: {
        resolve: {

            fallback: { path: require.resolve("path-browserify") },
            extensions:['.js','.vue','.json','.jsx','.css','.scss'],

        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: ` @import "./src/assets/css/variables.scss";
                @import "./src/assets/css/mixin.scss";
                @import "./src/assets/css/index.scss";
                 `
            }
        }
    }
});
