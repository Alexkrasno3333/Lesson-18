function pythagorean(a,b) {
let c = Math.sqrt(a * a + b * b);
    return c;
}
let result = pythagorean(5, 12);
console.log(result);

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal', signDisplay: 'always' }) 
const formatNum = (num) => {
    if (num === 0) return num;
return formatter.format(num);
}

console.log(formatNum(1232323));

console.log(formatNum(-23.2132));




function formatNumber(num) {
  var parts = num.toFixed(3).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join('.');
}
console.log(formatNumber(1232323)); // '1 232 323'
console.log(formatNumber(1223.65378)); // '1 223.654'

function generatePassword(n) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[];:<>,.?/|";
  var password = "";
  for (var i = 0; i < n; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}
console.log(generatePassword(8));


function calc(firstNum, secondNum, precision) {
  return +(firstNum - secondNum).toFixed(precision);
}
calc(200, 50, 0); // 25
calc(200, 0.14, 1); // 0.1



function splitNumber(num) {
  const intPart = Math.trunc(num);
  const decimalPart = Math.abs(num - intPart).toFixed(2).slice(2);

  return {
    int: intPart,
    decimal: parseInt(decimalPart)
  };
}
splitNumber(2);    
splitNumber(2.34); 
splitNumber(-1.5); 

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
isPrime(4); // false
isPrime(5); // true
isPrime(17); // true
isPrime(18); // false
isPrime(-5); // false
















