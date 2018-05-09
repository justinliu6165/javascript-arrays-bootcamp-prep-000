var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [[element], arr[0],...]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToTheEndOfArray(arr,element) {
  return [arr, element, ...];
}

function destructivelyAddElementToEndOfArray(arr,element){
  
}