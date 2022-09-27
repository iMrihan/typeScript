// let myNum: number;
// myNum = 2;
// console.log(myNum);
// let myStr: string;
// myStr = "Welcome to the typeScript learning platform";
// console.log(myStr);
// let myBool: boolean;
// myBool = true;
// console.log(myBool);
// let myAnyType: any;
// myAnyType = "Kuch bhi chalega";
// console.log(myAnyType);
// let arrStr: String[];
// arrStr = ["Hello", "World"];
// console.log(arrStr);
// let arrNum: number[];
// arrNum = [1, 2, 3, 4, 5];
// console.log(arrNum);
// let anyType;
// anyType = "Check this out";
// console.log(anyType);
// Type Assertion :------------->
// Angle-Bracket Type :--------->
// let fieldAssist;
// fieldAssist = "Good work space";
// console.log((<string>fieldAssist).length);
// As-Syntex : ------------->
// console.log((fieldAssist as string).length);
// Inline Type Annotation:------>
// let namets = (namepro: { firstname: string; lastname: string }) => {
//   console.log(namepro.firstname + " " + namepro.lastname);
// };
// namets({ firstname: "Rihan", lastname: "Khan" });
// TypeScript Interfaces :--->
// interface Namepro {
//   firstname: string;
//   lastname: string;
// }
// let namets = (namepro: Namepro) => {
//   console.log(namepro.firstname + " " + namepro.lastname);
// };
// namets({ firstname: "Rihan", lastname: "Khan" });
var Student = /** @class */ (function () {
    function Student(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Student.prototype.getFirstname = function () {
        console.log("My firstname is " + this.firstname);
    };
    Student.prototype.getLastname = function () {
        console.log("My lastname is " + this.lastname);
    };
    Student.prototype.getAge = function () {
        console.log("My Age is " + this.age);
    };
    return Student;
}());
var student1 = new Student("Rihan", "Khan", 24);
student1.getAge();
