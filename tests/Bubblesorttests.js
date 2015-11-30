/**
 *  Recollecting the simplest sorting algorithm of all the bubble sort
 * Created by badris on 30/11/2015.
 */

var assert = require('assert');

function bubbleSort(items){
    for(var k=0;k<(items.length);k++) {
        for (var i = 0; i < (items.length); i++) {


            if (items[i] > items[i + 1]) {
                var t1 = items[i];
                var t2 = items[i + 1];
                items[i] = t2;
                items[i + 1] = t1;

            }


        }
    }
    return (items);
};




describe('bubble sorting', function() {

    it('[3,2,1] should return [1,2,3]',function(){


        assert([1,2,3],bubbleSort([3,2,1]));

    });

});
