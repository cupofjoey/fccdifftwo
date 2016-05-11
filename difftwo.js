//This is for the Free Code Camp Intermediate Algorithm "Diff Two Arrays"
//Basically I decided to merge the two arrays, and whatever matched I would disregard, and whatever did
//not match was returned through a filter. It spit out whatever didn't match perfectly. 
//Please use the code if you are genuinely stuck. Remember, cut and paste only if you 
//understand what is fully going on. 

function diffArray(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  
   function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return mergedArray.filter(check);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);