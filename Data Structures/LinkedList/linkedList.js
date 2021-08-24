class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //the list is empty
        this.tail = this.head;
        this.size = 0;
    }
    //append
    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    //prepend - add data at the start of linked list
    prepend(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    //insert at index
    insertAt(data, index){
        if(index === 0) {
            this.preprend(data);
        } else if(index >= this.size) {
            this.append(data)
        } else {
            const newNode = new Node(data);
            let current, previous;
            current = this.head;
            let count = 0;

            while(count < index) {
                previous = current; //node before the index we want to insert at
                count++;
                current = current.next; //node after the index we want to insert at
            }
            newNode.next = current;
            previous.next = newNode;
            this.size++;
        }
    }

     //Print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
    
}
const linkedlist1 = new LinkedList();
linkedlist1.append(2);
linkedlist1.append(235);
linkedlist1.append(45);
linkedlist1.prepend(19);
linkedlist1.insertAt(37, 2);

linkedlist1.printListData();