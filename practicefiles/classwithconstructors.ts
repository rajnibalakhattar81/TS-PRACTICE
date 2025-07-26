
//Optional Parameter Constructor
class Users {
 name: string;
 email?: string;


 constructor(name: string, email?: string) { //paramaterized constructor
   this.name = name;
   this.email = email;
 }  
}

//Default Constructor

class Users1 {
 constructor(){
   console.log ("its a default constructor");
 }
}

const userObj =new Users('Rajni');

console.log(userObj);

//const userObj1 =new Users1('Rajni'); //Expected 0 argument but get 1
const userObj1 =new Users1(); //default constructor is called without arguments

console.log(userObj1); // prints the empty constructor structure

