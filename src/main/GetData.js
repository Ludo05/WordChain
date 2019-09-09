const fs = require('fs');

class GetData {
    //Returns the words from the file and pushes them into a array
   static getDataFromFile(file) {
       return new Promise((resolve) => {
           const wordList = [];
            const data = fs.readFileSync(file, 'utf-8');
                    data.split('\n').filter(i => i !== '')
                        .forEach( em => wordList.push(em));
                    resolve(wordList)
                })
            }


    // Gets all words the same length as first word
    static returnWordsOfLength(firstWord,dictionary)  {
       const newWords = [];
       return new Promise( resolve => {
           dictionary.map( word => {
               if(firstWord.length === word.length){
                   newWords.push(word)
               }
           });
           resolve(newWords)
       })
   }
}

module.exports = GetData;

