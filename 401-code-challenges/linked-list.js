'use strict';
const Node = require('./node');
console.log(Node);

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }
    insertBefore(value, newVal) { // Need to search value via loop and stop once there
        let newNode = new Node(newVal); // Create new node object
        if(!this.head) { // If head is not null
            throw new Error('Error');
        }
        if(this.head.value == value) {
            return this.head;
        }
        let current = this.head; // Current is assigned the head object occupying the same spot
        while(current.next){ // Keep looping until null(final value) reached
            // Need to check if current value matches input value
            if(current.next.value == value) {
                // If match found new Node(newVal) --> current(head) object
                newNode.next = current.next; // new node is assigned current(head)
                this.head.next = newNode; // Prior node needs to be assigned to newNode
            }
            current = current.next;
        }
        return this.head;
    }
    insertAfter(value, newVal) { // Need to search value via loop and stop once there
        let newNode = new Node(newVal);
        if(!this.head) {
            throw new Error('Error');
        }
        if(this.head.value == value) {
            return this.head;
        }
        let current = this.head;
        while(current.next){
            if(current.next.value == value) {
                current = current.next;
                newNode.next = current.next; // new node is assigned current(head)
                current.next = newNode;
                // current = newNode;
            }
            current = current.next;
        }
        return this.head;
    }
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertBefore(3, 'a')

console.log(list)