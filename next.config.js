const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png']
})
