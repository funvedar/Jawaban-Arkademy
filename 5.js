function pairSocks(arr){
	var arr
	var sorted_arr = arr.slice().sort();
		var results = [];
	for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
	}

	var names = results;
	var uniqueNames = getUnique(names);
    	function getUnique(array){
        	var uniqueArray = [];
        	for(i=0; i < array.length; i++){
            	if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            	}
        	}
       	 	return uniqueArray;
   	 	}	
var total = uniqueNames.length;
console.log(total + ' pairs');
}