/**
 * Created by badris on 29/11/2015.
 */


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



var a= new Stack();

a.add('1');
a.add('2');
console.log(a.pop());
console.log(a);