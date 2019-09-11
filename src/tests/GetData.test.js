const GetData = require('../main/GetData');

describe('Get Data Tests',  function ()   {
    test('should return words of length', () => {
        return expect(GetData.returnWordsOfLength('joe', ['moe', 'd', 'ejr', 'dk'])).resolves.toEqual(['moe', 'ejr'])
    });

    test('should return data from text file', async () => {
        return expect(GetData.getDataFromFile('../words.txt')).resolves.toEqual(['jj','jjk']);
    });
});




