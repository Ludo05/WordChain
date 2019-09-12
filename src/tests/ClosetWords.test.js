const CheckWordsList = require('../main/CheckWords');

describe('Should Test Words', function () {
    test('Should return all words close to word input', () => {
        expect(CheckWordsList.checkClosestWords('word',['dard','wphk','djfn','wfgrk','mgfd','cord','work'])).toEqual(['cord','work'])
    });
    test('Should return closet word to output', () => {
        expect(CheckWordsList.returnsWord('dog',['cot','mat','lat','bot'],'cat')).toStrictEqual(['cot','bot'])
    })
});
