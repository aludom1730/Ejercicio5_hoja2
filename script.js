let userNumber, isPositive;
let sumOfUserNumbers = 0;
do{
    userNumber = parseFloat(prompt("Dame un numero: "));
    if(isPositive)sumOfUserNumbers += userNumber;
    isPositive = userNumber>=0;
}while(isPositive);
console.log(`La suma de los valores positivos es ${sumOfUserNumbers}`);
 
