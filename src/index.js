module.exports = function getZerosCount(number, base) {
  //функция поиска повторов
  const countDuplicates = function(arr, compareNumber){
    let test = 0;
    for(let i = 0, len = arr.length; i < len; i++){
      if(arr[i] === compareNumber){test++}
    }
    return test;
  }

  //поиск простых делитетей
  let deviders =[];
  let devided = base;
  while(devided != 1){
    for(let i = 2; i <= devided; i++){
      if(devided % i === 0){
        deviders.push(i);
        devided /= i;
        i = 1;
      }
    }
  }

  //вычисление  
  let answer = 0;
  for(let i = 0, len = deviders.length; i < len;i++){
    let preAnswer = 0
    for(let devider = deviders[i]; devider <= number; devider *= deviders[i]){
      preAnswer += Math.floor(number/devider);
    }
    preAnswer = Math.floor(preAnswer / countDuplicates(deviders,deviders[i]));
    if(preAnswer < answer || answer === 0){
      answer = preAnswer;
    }
  }
  return answer
}