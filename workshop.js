function firstLetter(inputString) {
   if (inputString === undefined) {
       return undefined;
   }
   else {
        return inputString[0];
   }
   
}

function lastLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else {
        return inputString [inputString.length -1];
    }
}

function letterAtPosition(inputString, position) {
    if (inputString !== undefined) {
        return inputString[position];
    }
    else {
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
   if (typeof num1 === 'number' && typeof num2 === 'number') {
         return num1 + num2;
     }
     else {
         return undefined;
     }
    }

function multiplyTwoNumbers(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
         return num1 * num2;
     }
     else {
         return undefined;
     }
}

function calculator(operation, num1, num2) {

    switch(operation){
         
         case "add":
             
             return (num1+num2);
             
             
         case "mult":
             
             return (num1*num2);
             
         
         case "sub":
         
             return (num1-num2);
             
             
         case "div":
         
             return (num1/num2);
             
     }
}

function repeatString(inputString, numRepetitions) {
    if (numRepetitions < 0) {
        return "";
    }
    else {
        return Array(numRepetitions + 1).join(inputString);
    }
}

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function longestWord(inputString) {
    var arr = inputString.split(" ");
     var longest;
     var max = 0;
     for(var i = 0; i < arr.length; i++) {
         for(var j = 0; j < arr[i].length; j++) {
                 max++;
             if(arr[i].length > max) {
                 longest = arr[i];
             }
         }
     }
     
     if ( inputString === "") {
         return "";
     }
     
     return longest;
}

function capitalize(inputString) {
    var lower = inputString.toLowerCase();
     var split = lower.split(' ');
     var upperCase = [];
     for (var i = 0; i < split.length; i++) {
         upperCase.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));
     }
     
     return upperCase.join(' ');
}

function sumOfNumbers(arrayOfNumbers) {
    var total = 0;
     for(var i = 0; i < arrayOfNumbers.length; i++) {
         if(isNaN(arrayOfNumbers[i])) {
             return undefined;
         } else {
             total += arrayOfNumbers[i];
         }
     }
     
     return total;
}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};