var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [...[element], arr[0]]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr,element) {
  return [...arr[0], [element]]
}

function destructivelyAddElementToEndOfArray(arr,element){
  
}