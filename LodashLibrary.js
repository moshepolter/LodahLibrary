const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if(end === undefined){
      var end = start;
      var start = 0;
    }
    if(start > end){
      var temp = end;
      end = start;
      start = temp;
    }
   var isInRange = (start <= number && number < end)
     return isInRange

  },
 words(string){
   const words = string.split(' ')
   return words
 },

  pad(string, length){
    if(length <= string.length){
      return string
    }
 const startPaddingLength = Math.floor((length - string.length) / 2);
const endPaddingLength = length - string.length - startPaddingLength;
    return " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
  },
  has(object, key){
	if(key === undefined){
    return false
  }
  var hasValue = Object.keys(object);
    return hasValue.includes(key)
  },
  invert(object) {
  let newInvertedObject = {}
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = object[key];
     originalValue = key.object
    newInvertedObject[value] = key;


  }

  return newInvertedObject;
},
  findKey(object, predicate){
    for(let key in object){
             let value = object.key
      let originalValue = object[key]
      var predicateReturnValue = predicate(value) 
      if(predicateReturnValue){
        return key
      }
    }
     return undefined
  },
drop(array, n){
    if(!n){
      n=1
    } 
var droppedArray = array.slice(n);
      return droppedArray 
  },
	dropWhile(array, predicate){
	const ann = (element, index) =>{
    return !predicate(element, index, array)
  };
    let dropNumber = array.findIndex(ann);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;    
  },
chunk(array, size){
  if(size === undefined){
    size = 1
  }
  let arrayChunk = []
  for(let i = 0; i < array.length; i=i+size){
    var arrayChu = array.slice(i, i+size)
    arrayChunk.push(arrayChu);
  }
       return arrayChunk
}
}
// Do not write or modify code below this line.
module.exports = _;
