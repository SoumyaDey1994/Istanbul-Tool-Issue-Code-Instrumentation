const child = new (require('./index'));
const sum = child.getSum(1, 2);
console.log(`Sum is: ${sum}`);