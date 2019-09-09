class CheckWordsList {

    //Gets all the words with a difference of one
    static checkClosetWords(head, arrayOfWords) {
        const wordsAccept = [];
        let count = 0;
        arrayOfWords.forEach( word => {
            for (let i = 0; i < word.length; i++) {
                if(head[i] === word[i]){
                    count++
                }
            }
            if(head.length - count === 1) {
                wordsAccept.push(word)
            }
            count = 0;
        });
        return wordsAccept;
    }


    //Returns words which are characters in the same place as the last word.
    static returnsWord (lastWord,arr,startWord) {
        const newArr = [];
        arr.map( word => {
            for (let i = 0; i < word.length; i++) {
                if(word[i] === lastWord[i]){
                    if(startWord[i] !== word[i])
                        newArr.push(word)
                }
            }

        });
        return newArr;
    }

    //Need a function which will check ahead to see if the word has a follow up.
    static getOneWord (arr) {
        if(arr.length === 1){
            return arr[0]
        } else {
            return arr[arr.length - 1]
            }
        }
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
