var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [...[element], arr[0]]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  var array = [];
  var insideArray = arr[0];
  array.unshift(element, insideArray);
  return array;
}
