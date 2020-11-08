const emojis = require('./emojis.js');


const getCategory = function (category) {
  const findCategory = emojis.filter((emoji) => {
    if (emoji.categories.includes(category)) {
      return emoji;
    }

  })
  return findCategory;
}











module.exports = getCategory;