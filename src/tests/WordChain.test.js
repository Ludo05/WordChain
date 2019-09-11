const WordChain = require('../main/WordChain');

describe('Should text word chain class', () => {
    it('should return words arent same length',  () => {

    });

    it('should return words arent right length',  () => {

    });
});

describe('Should return the right array of words',  () => {
    it('should return the right word chain',  () => {
        const wordChain = new WordChain('cat','dog');
       expect(wordChain.run()).toEqual([ 'cat', 'cot', 'cog', 'dog' ]);
    });


});

