/**
 * 
 */

arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 

var temp;
var tempCount;
var popular = arr1[0];  // most occured
var count = 1;			// numbers of occurences


for (var i = 0; i < (arr1.length - 1); i++) {
  temp = arr1[i];
  tempCount = 0;
  for (var j = 1; j < arr1.length; j++) {
    if (temp == arr1[j])
      tempCount++;
  }
  
  if (tempCount > count)
  {
    popular = temp;
    count = tempCount;
  }
}

console.log("Most occured element is:\'",	popular, "\'", count, "times");
	
	

	
		


