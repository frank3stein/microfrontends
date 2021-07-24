const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("./package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    merge: "production",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                // marketing/remoteEntry is the location we will look at
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);