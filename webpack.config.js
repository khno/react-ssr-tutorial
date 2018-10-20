var webpack=require('webpack');
var path=require('path');

module.exports={
  entry:{
    app:'./client/app.js',
    vendor:['react', 'react-dom']
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js',
    publicPath: '/'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:path.resolve(__dirname,'node_modules'),
        include:path.resolve(__dirname,'client'),
        query:{
          presets:['latest','stage-0', 'react']
        }
      },{
        test:/\.tpl$/,
        loader:'ejs-loader'
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
      },{
        test:/\.less$/,
        loader:'style-loader!css-loader!postcss-loader!less-loader'
      },{
        test:/\.scss$/,
        loader:'style-loader!css-loader!postcss-loader!sass-loader'
      },{
        test:/\.html$/,
        loader:'html-loader'
      },{
        test:/\.(png|jpg|gif|svg)$/i,
        loader:'file-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader:'file-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.(csv|tsv)$/,
        loader:'csv-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.xml$/,
        loader:'xml-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      }
    ]
  },
  devServer:{
     hot:true,
     contentBase:path.resolve(__dirname,'dist'),
     publicPath:'/',
  },
  plugins:[
    // 公用的 js 库
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor', filename:'vendor.bundle.js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool:"inline-source-map"
}
