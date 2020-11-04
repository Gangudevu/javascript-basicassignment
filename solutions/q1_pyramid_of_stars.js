/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (input) => {
    let rows = input;
   let print = '';
   for (let i=1; i<=rows; i++){
       for(let j=1; (j<=rows-i); j++){
           print =print+ ' ';
       }
       for(let k=1; k<=i; k++ ){
           print =print+ ' *';
       }
       print =print+ "  \n";
   }
   console.log(print);
   return print;  
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
    *
   * *
  * * *
 * * * *
* * * * *
* * * * * *

*/


module.exports = buildPyramid;