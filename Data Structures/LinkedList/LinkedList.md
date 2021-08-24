## Notes on Single Linked List Data Structure
### Why Linked List?
- When using arrays, adding and deleting elements at the start/specific index can be slow since we are shifting the indices of all other elements.
- The above problem can be solved using objects since elements are stored at random positions(unordered), therefore there is no need to shift the indices of elememts while adding or deleting an element.
- HOWEVER, iteration of objects is a problem since objects are unordered data.
- Therefore, linked lists solve this problem.

### What is a Linked List (Focusing on a single linked list)
It is a data structure full of elements linked to each other. Every element knows about the next element.
- The elements are called nodes.
- Each node has the data and a pointer to the next node.
- The head node is the first node.
- The tail(last node) has a reference to null.

### Operations on a single linked list
Below are some of the operations on a single linked list. This list does not exhaust all the functions and the operations can be done in several ways.
- Append/ Adding data to the end of the linked list. `append(data)`
- Prepend/ Adding data to the start of a linked list. `preppend(data)`
- Insert data at a specific index. `insertAt(data, index)`
- Reversing a single linked list.