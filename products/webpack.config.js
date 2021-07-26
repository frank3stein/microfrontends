const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            // 4. We need to change the reference to index to bootstrap, as we want to export mount from bootstrap.
            // exposes: {
            //     './ProductsIndex': './src/index'
            // },
            exposes: {
                './ProductsIndex': './src/bootstrap.js'
            },
            // 1. name of the plugin to share
            // but now, since the module is only loaded once, cart module won't have access to it standalone.
            // to remedy this situation, we need to use a bootstrap file so webpack solves this issue for us.
            // if there are different versions of faker, both will be loaded, which is desirable.
            shared: ['faker'],
            // 2. but what if we want to load only a single version, for example for React.
            // We do not want different copies of React on the same page. 
            // 3. When both modules are loaded as singletons, only one version will be loaded and the other module
            // will error Unsatisfied version .... 
            
            // So singleton will override the shared rule
            // shared: {
            //     faker: {
            //         singleton: true
            //     }
            // }
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

