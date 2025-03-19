const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    clean: true, // Очистка папки dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Обработка CSS
        use: ['style-loader', 'css-loader'], // Используем style-loader и css-loader для обработки CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Разрешаем Webpack импортировать JSX-файлы
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Используйте ваш index.html как шаблон
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка для статических файлов
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
};
