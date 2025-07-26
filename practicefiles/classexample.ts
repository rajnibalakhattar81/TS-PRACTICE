//Accessing method of a class with object
class LoginPage { //creating class
 open(url: string): void {//creating method with input param
   console.log(`Navigating to ${url}`); //priniting the input variable
 }
}


const login = new LoginPage();//creating object
login.open("https://example.com/login"); // calling the method form line 3


//Accessing method of a class with static 


class LoginPage1 { //creating class
 static open(url: string): void { //creating method with input param
   console.log(`Navigating to ${url}`); //priniting the input variable
 }
}

LoginPage1.open("Static method in Typescript");

