// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];
  var domFunc = function(elem) {
  	if(elem.classList && elem.classList.contains(className)) {
  		results.push(elem);
  	}
  	if (elem.childNodes === null) {
  		return results;
  	}
  	else {
  		for (var i=0; i<elem.childNodes.length; i++) {
  			domFunc(elem.childNodes[i]);
  		}
  	}
  }
  domFunc(document.body);
  return results;

};
