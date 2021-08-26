// Creating a stack
class Stack {
    constructor () {
        this.items = [];
        this.size = 0;
    }
    // Add an item to the stack
    push(item) {
        this.items.push(item);
        this.size++;
    }
    // Remove an item from the stack
    pop() {
        if(this.size === 0) { //check if the stack is empty
            return "Underflow!";
        } else {
            this.items.pop();
            this.size--;
        } 
    }
    // Getting the top item in the stack without removing it
    peek() {
        if(this.size === 0) {
            return "This stack is empty";
        } else {
            return this.items[this.size];
        }
    }
}
const newStack = new Stack(); //instansiate an object fro the stack class

//Methods
newStack.push(100);
newStack.push(200);
newStack.push(300);
newStack.pop();
newStack.peek();
console.log(newStack);