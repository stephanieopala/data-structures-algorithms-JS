class Queue {
  constructor() {
    this.items = [];
  }
  // inserting an elememnt/item at the end
  enqueue(item) {
    this.items.push(item);
  }

  // removing an element/item at the front of the queue
  dequeue() {
    if(this.items.length === 0) {
      return;
    } else {
      this.items.shift();
    }
  }

  // check if queue is empty
  isEmpty() {
    this.items.length === 0;
  }

  //get the element at the front of the queue
  peek() {
    if(this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }
}

const newQueue = new Queue();
newQueue.enqueue(14);
newQueue.enqueue(90);
newQueue.enqueue(36);
newQueue.dequeue();
console.log(newQueue.peek());