 const AnawerGenertor = require('../src/answer-generator');
 
 describe('Generate Number', () => {
     it('should generate number', () => {
         const isUnique = (item,index,array) => {
             return array.lastIndexOf(item) === index;
         }
         
         const answer = AnawerGenertor.generate();
         expect(answer.length).toEqual(4);
         expect(answer.split('').every(isUnique)).toBeTruthy();
         expect(AnawerGenertor.generate()).not.toEqual(AnawerGenertor.generate());
     })
 })