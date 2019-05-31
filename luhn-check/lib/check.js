function check(str) {

  str = str.split("");

  // Do every 2nd number from last number

  for (var i = str.length-2; i >= 0; i-=2) {

    // Multiply every second number by 2
    str[i] *= 2;

    // If result is 2 digits, we added the digits together
    if (str[i] > 9) {
      str[i] = str[i].toString();
      str[i] = Number(str[i][0]) + Number(str[i][1])
    }
  }

  // Take the sum of all the digits in the array

  var num = 0;

  for (var i of str) {

    i = Number(i);
    num += i;
  }

 return ((num % 10) === 0);

}

check("79927398712");
module.exports = check;