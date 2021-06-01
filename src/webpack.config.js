const fs = require('fs')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (argv) => {
  const dist = path.resolve(argv.dist)
  fs.rmSync(dist, { recursive: true, force: true })
  fs.mkdirSync(dist)

  const info = JSON.parse(fs.readFileSync(argv.info).toString())

  const doc = require('./builder-markdown')(argv.cheatsheet)
  require('./builder-manifest')(dist, info)
  require('./builder-image')(dist, argv.logo, info.title)

  return {
    mode: argv.mode || 'production',
    entry: path.resolve(__dirname, './entry.js'),
    output: {
      filename: 'app.bundle.js',
      path: dist
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.bundle.css'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './index.ejs'),
        meta: {
          description: { name: 'description', content: info.description },
          keywords: { name: 'keywords', content: info.keywords },
          'og:title': { property: 'og:title', content: info.title },
          'og:description': { property: 'og:description', content: info.description },
          'og:type': { property: 'og:type', content: 'website' },
          'og:url': { property: 'og:url', content: info.mainUrl },
          'theme-color': { name: 'theme-color', content: info.themeColor }
        },
        templateParameters: {
          info,
          doc,
          updatedAt: new Date()
        }
      }),
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin()
      ]
    }
  }
}
