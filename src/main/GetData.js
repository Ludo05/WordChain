const fs = require('fs');
const CheckWords = require('./CheckWords');
class GetData {
   static getDataFromFile(file) {
       return new Promise((resolve) => {
           const wordList = [];
            const data = fs.readFileSync(file, 'utf-8');
                    data.split('\n').filter(i => i !== '')
                        .forEach( em => wordList.push(em));
                    resolve(wordList)
                })
            }



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


GetData.getDataFromFile('./50kwords.txt')
    .then( data => GetData.returnWordsOfLength('cat',data))
    .then( words => CheckWords.checkClosetWords('cat',words))
    .then(shortenedList => CheckWords.returnClosetWord('tot',shortenedList))

module.exports = GetData;

//cat
//dog

//Return a word which is one character away from previous OR has the most char similar to destination word

