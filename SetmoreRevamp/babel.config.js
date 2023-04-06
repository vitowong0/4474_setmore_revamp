module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
    '@babel/plugin-syntax-jsx',
  ],
};
