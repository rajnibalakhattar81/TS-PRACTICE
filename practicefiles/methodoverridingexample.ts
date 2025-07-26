class BasePage {
  navigate(): void {
    console.log("Navigating to base page");
  }
}

class LoginPage2 extends BasePage {
   override navigate(): void {
    console.log("Navigating to login page");
  }
}

const obj=new LoginPage2();
obj.navigate();   /// to call derived class function

const obj2=new BasePage();
obj.navigate();   /// this will also call derived class function