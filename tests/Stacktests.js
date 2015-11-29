/**
 * Stack implementation on Node JS using linked list
 * Created by badris on 29/11/2015.
 */

var assert = require('assert');

function Node(text){
    this.text=text;
    this.next=null;
};



function Stack(){
    this.top=null;

};


Stack.prototype.add = function(text){
    var c=this.top;
    var item= new Node(text);
    if(!c){
        this.top=item;
    }else{
        while(c.next){
            c= c.next;
        }
        c.next=item;
    }
    return c;
};


Stack.prototype.pop = function(){
    var c=this.top;
    // var item=new Node(text);
    //
    var popeditem;
    if(!c){

    }
    else{
        while(c.next){
            c=c.next;
        }
        if(!c.next){
            popeditem=c.text;
            delete c.text;//=null;
            delete c.next;//=null;
        }


    }
    return popeditem;
};



Stack.prototype.peek = function(){
    var c=this.top;
    // var item=new Node(text);
    //
    var peekeditem;
    if(!c){

    }
    else{
        while(c.next){
            c=c.next;
        }
        if(!c.next){
            peekeditem=c.text;
            // delete c.text;//=null;
            // delete c.next;//=null;
        }


    }
    return peekeditem;
};



describe('pop()', function() {

    it('pop should remove the top item from the stack',function(){

        var a= new Stack();

        a.add('1');
        a.add('2');
        assert('2',a.pop());
        assert.equal('{"top":{"text":"1","next":{}}}', JSON.stringify(a));
    });

});


describe('peek()', function() {

    it('peek should not remove the top item from the stack but just display the item',function(){

        var a= new Stack();

        a.add('1');
        a.add('2');
        assert('2',a.peek());
        assert.equal('{"top":{"text":"1","next":{"text":"2","next":null}}}', JSON.stringify(a));
    });

});


