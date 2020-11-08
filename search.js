const emojis = require('./emojis.js');


const searching = function (name) {
  const search = emojis.filter((emoji) => {
    if (emoji.name.includes(name.toLowerCase())) {
      return emoji;
    }

  })
  return search;
}



module.exports = searching;