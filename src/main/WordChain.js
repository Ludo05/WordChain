const GetData = require('../main/GetData');
const CheckWords = require('../main/CheckWords');


class WordChain{
        constructor(firstWord,lastWord){
            this._firstWord = firstWord;
            this._lastWord = lastWord;
        }

     getFirstWord() {
        return this._firstWord;
    }

     setFirstWord(value) {
        this._firstWord = value;
    }

    getLastWord() {
        return this._lastWord;
    }

    validateInputs(firstWord, secondWord) {
        if (
            firstWord.length < 3 ||
            firstWord.length > 7 ||
            secondWord.length < 3 ||
            secondWord.length > 7
        ) {
            if (firstWord.length !== secondWord.length) {
                console.log("Need to be the same length");
                return;
            }
            console.log("Not valid input lengths");
            return;
        }
    }

 async run()  {
            const {_firstWord, _lastWord} = this;
            this.validateInputs(_firstWord,_lastWord);
            const chain = [];
            chain.push(this.getFirstWord());
            while (this._firstWord !== this._lastWord) {
               const dictionary = await GetData.getDataFromFile('./50kwords.txt');
               const wordsOfLength = await GetData.returnWordsOfLength(this.getFirstWord(), dictionary);
               const closeWords = await CheckWords.checkClosetWords(this.getFirstWord(), wordsOfLength);
               const shortenedList = await CheckWords.returnsWord(this.getLastWord(), closeWords, this.getFirstWord());
               const wordChosen = await CheckWords.getOneWord(shortenedList);

               chain.push(wordChosen);
               this.setFirstWord(wordChosen)
            }
            console.log(chain)
    }
}

const wordChain = new WordChain('cat','dog')
// wordChain.run();
