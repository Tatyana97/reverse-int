module.exports = function reverse (n) {
    let number;
if (n < 0){
 number = n* (-1);
   console.log(number);
   number = String(number).split('').reverse();
   if(number[0]==0){
      number.shift();
   }
   return number.join('')
}
let result = String(n).split('');
   return result.reverse().join('');


}
