'use strict';

 /**
  * My implementation of Single Linked List
  */


function Node(url) {
    this.url = url;
    this.next = null;
};

function List() {
    this.head = null;
};

List.prototype.add = function(url) {
    var c = this.head;
    var node = new Node(url);
    //head of the list 
    if (!c) {
        this.head = node;

    } else {
        //move to the end of the list 
        while (c.next) {
            //  console.log(c.url+'-');
            c = c.next;
        }
        c.next = node;
    }


};

List.prototype.remove = function(url) {
    var c = this.head;
    while (c.url === url) {
        console.log('inside');
        c = c.next;
    }
    c.next = null;
};










var a = new List();
a.add('http://google.com');
a.add('http://yahoo.com');
a.remove('http://yahoo.com');
console.log(a);