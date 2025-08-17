module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],  // target   == your CURRENT Node's version
    '@babel/preset-typescript',
  ],
};
