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
            //Use first word and check if it has another chained word possible.

            //If it does use that word and repeat if it doesn't ++ array and try again

            //TODO could use recursion.
            }
        }
}
module.exports = CheckWordsList;

