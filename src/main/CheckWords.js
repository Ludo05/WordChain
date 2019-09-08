const GetData = require('../main/GetData');

class CheckWordsList {

    static checkClosetWords(firstWord, arrayOfWords) {
        const wordsAccept = [];
        arrayOfWords.map(word => {
            if (this.checkCharsDifference(firstWord, word) === 1) {
                wordsAccept.push(word)
            }
        });
        return wordsAccept;
    }

   static checkCharsDifference(firstWord, wordInArray) {
        let diff = 0;
        firstWord = firstWord.split('').sort();
        wordInArray = wordInArray.split('').sort();
        wordInArray.filter((char) => {
            if (!firstWord.includes(char)) {
                diff++
            }
        });
        return diff
    }

   static returnClosetWord(last,dictionary) {
        let arm = []
        let similarity = 0;
        const lass = last.split('');
        dictionary.map( (word,index) => {
            for(let i = 0; i < lass.length; i++){
                if (word.includes(lass[i])) {
                    similarity++
                }
            }
            arm.push({similarity,index});
            similarity = 0
        });
        const maxSimilarity = arm.reduce((prev, current) => (prev.similarity > current.similarity) ? prev : current);
console.log(dictionary[maxSimilarity.index])
        // return  arm[maxSimilarity]

    }






















    // }returnClosetWord(word,dictionary){
    //     const lastWord = 'dog'.split();
    //     console.log(lastWord)
    //     dictionary.map( w => {
    //        //Check which words has similar words as the last word.
    //         //I want to see if the array has a similar word and is one step closer to getting to dog.
    //        if(w.contains(lastWord)) {
    //
    //
    //         return w
    //
    //        }
    //     });
    //
    // }
}


module.exports = CheckWordsList;











    //      addToChain(endChainWord,arr){
//         //Want to check if any of the words in array contain letters from the final word.
//         arr.map( (word) => {
//         if(this.checkCharsDifference(endChainWord,word)){
//
//         }
//         });
//          //If they do must also check that its not already in the array.
//
//          //Must also check if they word is one letter array from the previous word.
//
//          //Add word to the array.
//          return word;
//          //If nothing is available return a message.
//      }
// }
