var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  return [...[element], arr[0]]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  var array = [];
  array.push([element], arr[0])
  return array;
}
