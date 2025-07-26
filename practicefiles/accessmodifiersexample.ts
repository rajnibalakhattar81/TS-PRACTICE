class UserProfile {
  public name: string;
  private password: string;
  protected email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  public showProfile(): void {
    console.log(`Name: ${this.name}`);
  }

  private showPassword(): void {
    console.log(`Password: ${this.password}`);
  }

  protected showEmail(): void {
    console.log(`Email: ${this.email}`);
  }
}

//Inheritance with Protected Member

class AdminProfile extends UserProfile {
  constructor(name: string, password: string, email: string) {
    super(name, password, email);
  }

  display(): void {
    console.log(`Admin Email: ${this.email}`); // Accessible due to 'protected'
  }
}
const adminObj=new AdminProfile('Rajni','Test@123','rajnibalakhattar81@gmail.com');

adminObj.display();
