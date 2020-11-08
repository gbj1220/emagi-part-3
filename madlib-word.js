const getRandom = require('./random-element.js')
const getCategory = require('./get-category.js');



const madLibWord = function (word) {
  const category = getCategory(word);
  if (category.length <= 0) {
    return word
  } else if (category.length > 0) {
  const randomize = getRandom(category);
  return randomize.symbol
}
}
madLibWord('face')//?




























module.exports = madLibWord;
