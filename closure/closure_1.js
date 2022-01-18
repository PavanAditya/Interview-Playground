// ! Example 1

function showName(firstName, lastName) {

    // var nameIntro = "Hi,"; // ? var dec here can be used inside the child func as it is init before return
    return makeFullName();

    function makeFullName() {
        return nameIntro + " " + firstName + " " + lastName;
    }
    
    var nameIntro = "Hi,"; // ? var dec here cannot be used inside the child func as it is init after return
    
}
console.log(showName("I am", "Pavan"));
// ? OP: (Hi, I am Pavan) if var is init before return 
// ? OP: (undefined I am Pavan) if var is init after return 


// ! Example 2

function x() {
    var a = 1;
    return function y() {
        var b = 2;
        return function z() {
            var c = 3;
            console.log(a, b, c); // ?  1 2 3
        }
    }
};

let z = x;
z()()();
// ? Since x is a function & it returns a function, with a nested return function, it is invoked thrice.
// ?  It is similar to the following:
// ?  let z1 = z();
// ?  let z2 = z1();
// ?  let z3 = z2();
// ? OP: 1 2 3