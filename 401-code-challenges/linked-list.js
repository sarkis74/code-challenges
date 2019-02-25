'use strict';
const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            console.log('at this point this is what head looks like: ', this.head)
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }
}