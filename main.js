const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');
const searchFor = require('./search.js');
const randomElement = require('./random-element.js');
const emojis = require('./emojis');
const getCategory = require('./get-category.js');
const madLibs = require('./madlib-word.js')
const command = process.argv[2];
const argv3 = process.argv[3];
const words = process.argv.slice(3);



switch (command) {
    case 'encode':
        if (argv3 === undefined) {
            console.log('Please enter a word or sentence to be encoded.');
        } else {
            const encoded = words.map(encodeWord);
            console.log(encoded.join(' '))
        } break;
    
    case 'translate':
        const translation = words.map(translateWord);
        if (argv3 === undefined) {
            console.log('Please enter a word or sentence to be translated.');
        } else {
            console.log(translation.join(' '));
        }
    
    case 'search':
        if (argv3 === undefined) {
            console.log('Please enter a valid search term.');
        } else {
            const newArr = searchFor(argv3)
            for (emoji of newArr) {
                if (argv3 !== undefined) {
                    console.log(emoji.symbol);
                }

            }
        }
        break;
    
    case 'random':
        const randomNess = randomElement(emojis);
        if (argv3 === undefined) {
            console.log(randomNess.symbol);
        } else if (argv3 !== undefined) {
            const catMatch = randomElement(getCategory(argv3));
            console.log(catMatch.symbol);
        } else {
            console.log('That item is not known to our directories, please try a different item.')
        }
        break;
    
    case 'madLibs':
        if (argv3 === undefined) {
            console.log('Add text to make a madLibs!')
        } else {
            console.log(words.map(madLibs).join(' '));
        };
        break;
    
    default:
        console.log('Your choices for what to write after "node main.js" (and a space!) are.:');
        console.log('* "encode" followed by a space and then as many letters as you want.');
        console.log('* "translate" followed by a space and then as many words as you want.');
        console.log('* "search" followed by a space and then one word.')
}   
