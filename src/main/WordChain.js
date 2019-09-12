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

    static validateInputs(firstWord, secondWord) {
            if (firstWord.length !== secondWord.length) {
                return "Need to be the same length";
            }
            if(firstWord.length === secondWord.length){
                if (firstWord.length < 3 || firstWord.length > 7 || secondWord.length < 3 || secondWord.length > 7) {
                return "Not valid input lengths";
                }
        }
    }

    async runChain (chain) {
        const checkWords = new CheckWords();
        const dictionary = await GetData.getDataFromFile('./50kwords.txt');
        const wordsOfLength = await GetData.returnWordsOfLength(this.getFirstWord(), dictionary);
        const closeWords = await CheckWords.checkClosestWords(this.getFirstWord(), wordsOfLength);
        const shortenedList = await CheckWords.returnsWord(this.getLastWord(), closeWords, this.getFirstWord());
        const wordChosen = await checkWords.getOneWord(shortenedList,this._lastWord);
        chain.push(wordChosen);
        this.setFirstWord(wordChosen)
    }

 async run()  {
            const {_firstWord, _lastWord} = this;
            WordChain.validateInputs(_firstWord,_lastWord);
            const chain = [];
            chain.push(this.getFirstWord());
            while (this._firstWord !== this._lastWord) {
            const run = await this.runChain(chain)
            }
            // return  chain;
            console.log(chain)
    }
}
module.exports = WordChain;

const wordChain = new WordChain('ruby','code');
wordChain.run();
