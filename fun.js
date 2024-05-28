// ************* question 1. to reverse the number. **************
function function1() {
    // program to reverse a no.
    function function_1(num) {
        let reversed_num = 0;
        while (num !== 0) {
            reversed_num = reversed_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return reversed_num;
    }
    const num = prompt("Enter a positive number:", 123); //calling prompt
    const result = function_1(num);
    document.getElementById("reverseANS").innerHTML = "Reversed number is: " + result;
}

//  *************question 2. to check the Number is prime or not..? -------
function function2() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 2));
    let isPrime = true;

    // check if number is equal to 1
    if (num === 1) {
        document.getElementById("primeANS").innerHTML = "1 is neither prime nor composite number.";
    }

    // check if number is greater than 1
    else if (num > 1) {
        // looping through 2 to num -1
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            document.getElementById("primeANS").innerHTML = `${num} is a prime number`;
        } else {
            document.getElementById("primeANS").innerHTML = `${num} is not a prime number`;
        }
    }
    // check if number is less than 1
    else {
        document.getElementById("primeANS").innerHTML = "The number is negitive number.";
    }
}

//  *************question 3. calculate your age..? -------
function function3() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter Your Year of Birth:", 1998));
    if (num < 1930) {
        document.getElementById("ageANS").innerHTML = `Please enter valid age`;
    }
    else {
        let d = new Date();
        let year = d.getFullYear();
        const age = year - num;
        document.getElementById("ageANS").innerHTML = `Your age is ${age}`;
    }
}

//***** Q.no.4 number is perfect or not****

function function4() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 4));
    let n = num;

    // function_4(n);
    function function_4(n) {
        var temp = 0;
        for (var i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                temp = temp + i;
            }
        }

        if (temp === n && temp !== 0) {
            document.getElementById("perfectANS").innerHTML = `${n} is a prefect number`;
        }
        else {
            document.getElementById("perfectANS").innerHTML = `${n} is a not perfect number`;
        }
    }
    function_4(n);
}

//***** Q.no.5 number is even or odd****
function function5() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 4));
    if (num % 2 == 0) {
        document.getElementById("oddEvenANS").innerHTML = `${num} is Even.`;
    }
    else {
        document.getElementById("oddEvenANS").innerHTML = `${num} is Odd.`;
    }
}

//***** Q.no.6 factorial of your number****
function function6() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 8));
    const function_6 = (num) => {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        document.getElementById("factorialANS").innerHTML = `Factor of ${num} are ${arr}.`;
    }
    function_6(num);
}

//***** Q.no.7 sum of digits of your number****
function function7() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 123));
    let n = num;
    function function_7(n) {
        let sum = 0;
        let mod;
        while (n > 0) {
            mod = n % 10;
            sum = sum + mod;
            n = parseInt(n / 10);
        }
        document.getElementById("sumANS").innerHTML = `${sum} is the sum of digit ${num}`;
    }
    function_7(n);
}


// ***** Q.no.8 Prime factor of your number****
function function8() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter a positive number:", 8));
    const function_8 = (num) => {
        let arr = [];
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        document.getElementById("factorANS").innerHTML = `Prime factor of your number ${num} are: ${arr}.`;
    }
    function_8(num);
}

// ***** Q.no.9 year is leap year or not****

function function9() {
    // take input from the user from prompt
    let num = parseInt(prompt("Enter the year:", 1996));
    if ((num % 4 == 0) && (num % 100 != 0)) {
        document.getElementById("leapYearANS").innerHTML = `${num} is a Leap Year.`;
    }
    else if (num % 400 == 0) {
        document.getElementById("leapYearANS").innerHTML = `${num} is a Leap Year.`;
    }
    else {
        document.getElementById("leapYearANS").innerHTML = `${num} is not a leap Year.`;
    }
}

// Q.no.10 calculate the power of the number****
function function10() {
    let num1 = parseInt(prompt("Enter a positive number:", 4)); //calling prompt in function10 to get input
    let num2 = parseInt(prompt("Enter power of number:", 3)); // again calling prompt in function10 to get input
    let num3 = 1;
    let i = 0;
    while (i != num2) {
        num3 = num1 * num3;
        i++;
    }
    document.getElementById("powerANS").innerHTML = `The number ${num1} to the power ${num2} is ${num3}.`;
    // console.log(num3);
}

// Q.no.11 reverse your String****
function function11() {
    // take input from the user from prompt
    let str = (prompt("Enter a String:", "Hello"));

    // function_11(n);
    function function_11(n) {
        // Step 1. Use the split() method to return a new array
        let splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        document.getElementById("ReverseStringANS").innerHTML = joinArray;
    }
    function_11(str);
}
// ***** Q.no.12 Count Vowels your Word****
function function12() {
    // take input from the user from prompt
    let str = (prompt("Enter a String:", "Apple"));
    str = str.toLocaleLowerCase();
    const function_12 = (str) => {
        let arr = str.split("");
        let count = 0;
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
                count++;
            }
        }
        // console.log("Number of vowels is " + count + " in " + str);
        document.getElementById("vowelsANS").innerHTML = `Number of vowels is ${count} in word ${str}.`;
    };
    function_12(str);
}


// Q.no.13 Word is palindrome or not****
function function13() {
    // take input from the user from prompt
    let str = (prompt("Enter a String:", "tenet"));

    // function_13(n);
    function function_13(n) {
        // Step 1. Use the split() method to return a new array
        let splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        if (str == joinArray) {
            document.getElementById("palindromeANS").innerHTML = joinArray + " is palindrome word.";
        }
        else {
            document.getElementById("palindromeANS").innerHTML = str + " is not palindrome word. that is this: " + joinArray;
        }
        // document.getElementById("palindromeANS").innerHTML = joinArray;
    }
    function_13(str);
}

// Q.no.15 calculate compound Intrest****
function function14() {
    let principal = parseFloat(prompt("Enter the Principal Amount:", 10000)); //calling prompt in function14 to get input
    let rate = parseFloat(prompt("Enter the rate of Intrest:", 7.5)); // again calling prompt in function14 to get input
    let num = parseFloat(prompt("Enter the number of Years:", 1)); // again calling prompt in function14 to get input

    let amount = parseFloat(principal * (Math.pow((1 + rate / 100), num)));
    console.log(amount);
    let CI = parseFloat(amount - principal);
    // console.log(CI);
    document.getElementById("compoundANS").innerHTML = `The Compound Intrest with Principal ${principal}, Intrest ${rate} and Time ${num} is ${CI.toPrecision(5)}.`;
}


// Q.no.15 calculate Body Mass Index****
function function15() {
    let num1 = parseFloat(prompt("Enter your height (in meter):", 1.75)); //calling prompt in function15 to get input
    let num2 = parseInt(prompt("Enter your weight (in kg.):", 75)); // again calling prompt in function15 to get input
    let num3 = Math.pow(num1, 2);
    let bmi = num2 / num3;
    // console.log(bmi.toPrecision(3));
    document.getElementById("bmiANS").innerHTML = `The Body Mass Index with height ${num1} and weight ${num2} is ${bmi.toPrecision(3)}.`;
}


// Q.no.16 genetate random number between two numbers****
function function16() {
    let num1 = parseInt(prompt("Enter a positive number:", 10)); //calling prompt in function16 to get input
    let num2 = parseInt(prompt("Enter power of number:", 20)); // again calling prompt in function16 to get input
    let result;
    if (num2 > num1) {
        result = (Math.floor(Math.random() * (num2 - num1 + 1)) + num1); //math formula to get random no.s b/w 2 no.s
    }
    else {
        result = (Math.floor(Math.random() * (num1 - num2 + 1)) + num2); //math formula to get random no.s b/w 2 no.s
    }
    // result= (Math.floor(Math.random()*(num2 - num1 + 1)) + num1);
    // console.log(result);
    document.getElementById("randomANS").innerHTML = `The random number between ${num1} and ${num2} is ${result}.`;
}






