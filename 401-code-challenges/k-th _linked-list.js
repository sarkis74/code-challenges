'use strict';

const LinkedList = require('./linked-list');

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAfter(1, 'a');
list.append(4);
