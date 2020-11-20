const path = require('path');
 
module.exports = {
    entry:'./src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    mode:'development',
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
      } 
};





// const path = require('path');
 
// module.exports = {
//     entry:'./src/app.js',
//     output: {
//         path:path.join(__dirname,'public'),
//         filename: 'bundle.js'
//     },
//     mode:'development',
//     module: {
//         rules:[{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: 'babel-loader',
//                 options: { 
//                 presets: ['@babel/preset-env','@babel/preset-react']
//                 },
//             }
//         }]
//     },
//     devtool: 'eval-cheap-module-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         compress: true,
//         port: 9000
//       } 
// };

