const GetData = require('../main/GetData');

describe('Get Data Tests',  ()  => {
    test('should return data from text file', () => {
        return expect(GetData.getDataFromFile('../../../files.txt')).resolves.toEqual('kdkd')
    });
});

describe('Get Data Tests',  ()  => {
    test('should return words of length', () => {
        return expect(GetData.returnWordsOfLength('joe', ['moe', 'd', 'ejr', 'dk'])).resolves.toEqual(['moe', 'ejr'])
    });
});





