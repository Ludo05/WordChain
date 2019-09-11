const WordChain = require('../main/WordChain');

describe('Should text word chain class', () => {
    it('should return words arent same length',  () => {
        expect(WordChain.validateInputs('ddkf','gjh')).toEqual('Need to be the same length')

    });

    it('should return words arent right length',  () => {
        expect(WordChain.validateInputs('f','h')).toEqual('Not valid input lengths')
    });
});

describe('Should return the right array of words', async () => {
    it('should return the right word chain', async () => {
        const wordChain = new WordChain('cat','dog');
        return expect(wordChain.run()).resolves.toEqual([ 'cat', 'cot', 'cog', 'dog' ]);
    });


});

