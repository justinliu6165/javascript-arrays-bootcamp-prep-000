var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [...[element], arr[0]]
}

function destructivelyAddElementToBeginningOfArray(arr, elements) {
  var array = [];
  array.push(elements, arr[0]);
  return array;
}
