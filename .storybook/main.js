const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  // 絶対パス通す
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src')
    ]
    return config
  }
}
