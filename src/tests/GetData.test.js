const GetData = require('../main/GetData');

describe('Get Data Tests',  function ()   {
    test('should return words of length', () => {
        return expect(GetData.returnWordsOfLength('joe', ['moe', 'd', 'ejr', 'dk'])).resolves.toEqual(['moe', 'ejr'])
    });

    test('should return data from text file', async () => {
        return GetData.getDataFromFile('src/main/50kwords.txt')
            .then( data => expect(data.length).toBe(49028));
    });

    test('should return data from text file', async () => {
        return GetData.getDataFromFile('src/main/50kwords.txt')
            .then( data => expect(data.filter( i => i === 'cat')).toStrictEqual(['cat']));
    });
});




