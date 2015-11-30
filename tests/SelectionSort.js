/**
 * Created by badris on 30/11/2015.
 */



function selectionSort(items){
  for(var i=0;i<items.length-1;i++){
      var gk=i;
      for(var k=i+1;k<items.length;k++){
          if(items[k]<items[gk]){
              gk=k;
          }
      }
      var t1=items[i];
      var t2=items[gk];
      items[i]=t2;
      items[gk]=t1;

  }
    return items;
};

console.log(selectionSort([3,2,1]));