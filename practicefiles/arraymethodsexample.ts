let users: string[] = ['sid', 'rahul'];
let scores1: Array<number> = [95, 85];

//adds an element at the end
users.push('sanjay'); 
console.log(users);    // output would be  ['sid', 'rahul', 'sanjay']

//removes the last element
users.pop(); 
console.log(users); //['sid', 'rahul']

//removes the first element
users.shift()
console.log(users); //['rahul']

//Add element to the beginning
users.unshift('rajni')
console.log(users); //['rajni','rahul']

//Check if array contains a value
console.log(users.includes('rahul'));  // returns true

//Get index of an element
console.log(users.indexOf('sid')); //returns -1
console.log(users.indexOf('rajni')); //returns -1


//Return new array with matched values
console.log(users.filter(u => u.startsWith('s')));   // returns []
console.log(users.filter(u => u.startsWith('r')));   // returns ['rajni', 'rahul']

//Transform each element
console.log(users.map(u => u.toUpperCase()));// returns [ 'RAJNI', 'RAHUL' ]

//Find the first match
//console.log(users.find(u => u === 'rahul')); //returns rahul

//Convert array to string
//console.log(users.join(', '));        //returns rajni,rahul 

//Loop through items
users.forEach(u => console.log(u)); //