const permutations = (arr) =>{

    if(arr.length <= 1) return [arr];
    
    let result = [];

    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        let newArr = [...arr.slice(0, i), ...arr.slice(i+1, arr.length)];
        for(let item of permutations(newArr)){
            result.push([val, ...item]);
        }
    }

    return result;
}
  
// Do not edit below this line
module.exports = permutations;
