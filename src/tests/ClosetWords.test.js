const CheckWords = require('../main/CheckWords');
const getWord = require('../main/testWork')
describe('Should Test Words', function () {
    test('Should return all words close to word input', () => {
        const CheckWord = new CheckWords;
        expect(CheckWord.checkClosetWords('word',['ward','wprk','djfn','work','mord','tord','lord'])).toStrictEqual([ "ward", "work", "mord", "tord", "lord"])
    });
    test('Should return closet word to output', () => {
        // const CheckWord = new CheckWords;
        expect(getWord.test('cat',['cot','mat','lat','dam'])).toStrictEqual('cot')
    })
});
