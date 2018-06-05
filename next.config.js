const remarkCapitalize = require('remark-capitalize')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    mdPlugins: [remarkCapitalize],
    hastPlugins: []
  }
})

module.exports = withMDX()
