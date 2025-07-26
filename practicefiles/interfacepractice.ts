interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}

const user2: User = {
  id: 1,
  name: "Rajni"
};

console.log(user2);

//const u: User = { id: 1 };  //Error: 'name' is missing


