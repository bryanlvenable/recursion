// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
  	return String(obj);
  }
  else if (obj === null) {
  	return 'null';
  }
  else if (obj === true) {
  	return 'true';
  }
  else if (obj === false) {
  	return 'false';
  }
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  // Cases for arrays
  else if (Array.isArray(obj)) {
  	var len = obj.length;
  	if (len === 0) {
  		return '[]';
  	}
  	else {
  		var result = '[';
  		for (var i=0; i<len-1; i++) {
  			result = result + stringifyJSON(obj[i]) + ',';
  		}
  		result = result + stringifyJSON(obj[len-1]) + ']'
  		return result;
  	}
  }
  // Cases for objects
  else {
  	var objKeys = Object.keys(obj);
  	var len = objKeys.length;
  	if (len === 0) {
  		return '{}';
  	}
  	else {
  		var result = '{';
  		for (var i=0; i<len-1; i++) {
  			// Take care of the unstringifiableValues
  			if (typeof obj[objKeys[i]] === 'function' || obj[objKeys[i]] === undefined){
  				return '{}';
  			}
  			result = result + '"' + objKeys[i] + '":' + stringifyJSON(obj[objKeys[i]]) + ',';
  		}
  		result = result + '"' + objKeys[len-1] + '":' + stringifyJSON(obj[objKeys[len-1]]) + '}';
  		return result;
  	}
  }
};

