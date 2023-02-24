/*   
1 - create a container variable
2 - open a FOR cycle for which: 
    a - the variable i = 1 is initialized;
    b - condition to be verified is that i<=100;
    c - add a unit to variable i (i++);
3 - each time the condition is verified, create a new element div inside the HTML;
4 - add a class to this element so that it can be targeted inside the css;
5 - append all the elements div inside the container
6 - create an IF condition:
    a - ELSE IF the variable 1 is a multiple of 3 AND a multiple of 5, then:
        i - write "FizzBuzz";
        ii - background-color is #f0466f;    
    b - IF the variable 1 is a multiple of 3 ONLY, then:
        i - write "Fizz";
        ii - background-color is #0cd6a1;
    c - ELSE IF the variable 1 is a multiple of 5 ONLY, then:
        i - write "Buzz";
        ii - background-color is #ffd166;
    d - ELSE:
        i - jut write the appropriate number;
        ii - background-color is #1389b2;
*/

//create a container variable
let container = document.querySelector('.container');

//check
console.log(container);
console.log(container.innerHTML);
//check

//open a FOR cycle
for (let i = 1; i <= 100; i++) {

    //create a new element div inside the HTML;
    let square = document.createElement('div');

    //add a class to this element so that it can be targeted inside the css;
    square.classList.add("square");

    //append all the elements div inside the container
    container.append(square);
    
    //CHECK
    console.log(i);
    //CHECK

    //create an IF condition:
    if (i % 3 == 0 && i % 5 == 0) {

        square.append('fizzbuzz');
        square.style.backgroundColor = "#f0466f"; 

      } else if (i % 3 == 0) {

        square.append('fizz');
        square.style.backgroundColor = "#0cd6a1"; 

      } else if (i % 5 == 0) {

        square.append('buzz');
        square.style.backgroundColor = "#ffd166"; 

      } else {

        square.append(i);
        square.style.backgroundColor = "#1389b2"; 

      }

}