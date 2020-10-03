
exports.min = function min (array) {
  if(array === undefined || array.length==0 ){
    return 0;
  }
  let length = array.length;
  let min = array[0];
  for (let i = 1; i<length; i++){
    if(array[i]<min){
      min = array[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  if(array === undefined || array.length==0 ){
    return 0;
  }
  let length = array.length;
  let max = array[0];
  for (let i = 1; i<length; i++){
    if(array[i]>max){
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length==0 ){
    return 0;
  }
  let length = array.length;
  let sum = 0;
  for (let i = 0; i<length; i++){
    sum += array[i];
  }
  return (sum/length);
}
