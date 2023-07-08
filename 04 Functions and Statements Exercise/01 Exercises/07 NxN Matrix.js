function printNxNMatrix (n) {

   for (let i = 0; i < n; i++) {

    console.log(n.toString().repeat(n));

   }
}
   
printNxNMatrix(5);