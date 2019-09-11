const fs = require('fs');

class GetData {
    //Returns the words from the file and pushes them into a array
    static getDataFromFile(file) {
       return new Promise((resolve) => {
            const data = fs.readFileSync(file, 'utf-8');
            const dataToArray = data.split('\n').filter(i => i !== '');
           resolve(dataToArray);
                })
            }


    // Gets all words the same length as first word
    static returnWordsOfLength(firstWord,dictionary)  {
       return new Promise( resolve => {
           const wordsOfLength = dictionary.filter( word => firstWord.length === word.length);
           resolve(wordsOfLength)
       })
   }
}
module.exports = GetData;

