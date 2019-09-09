const CheckWordsList = require('../main/CheckWords');

describe('Should Test Words', function () {

    beforeEach(() => {

    })

    test('Should return all words close to word input', () => {
        expect(CheckWordsList.checkClosetWords('word',['dard','wphk','djfn','wfgrk','mgfd','cord','work'])).toEqual(['cord','work'])
    });
    test('Should return closet word to output', () => {
        // const CheckWord = new CheckWords;
        expect(CheckWordsList.returnsWord('dog',['cot','mat','lat'],'cat')).toStrictEqual(['cot'])
    })
});
