const arr = ['rube','fjgj','juge'];

const lastWord = 'ruby';
//FINDS SIMILAR WORD TO ADD TO THE CHAIN
const arm = [];
const test  = (last,arr) => {
   let similarity = 0;
   const lass = last.split('');
    arr.map( (word,index) => {
    for(let i = 0; i < lass.length; i++){
         if (word.includes(lass[i])) {
             similarity++
         }
        }
         arm.push({similarity,index});
         similarity = 0
    });
    const maxSimilarity = arm.reduce((prev, current) => (prev.similarity > current.similarity) ? prev : current);

    return arr[maxSimilarity.index]

};
const  m = test(lastWord,arr);
console.log(m)


module.exports = test;
