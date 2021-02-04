export default function runArrayMethods() {
    
    findMax([43,543,4234,3,2,1,96]);

    function findMax(arr) {
        let max = 0;

        if(Array.isArray) 
            if(!Array.isArray(arr)) return;
        else if(arr.constructor.toString().indexOf('Array') === -1)  return 
        // arr instanceof Array

        for(let i = 0 ; i < arr.length ; i++){
            compareArray(arr[i])
        }

        function compareArray(val) {
            let num = Number(val);
            if(num > max) max = num;
            else return;
        }

        console.log('Max value is:', max);

    }
    logMethods(['reza', 'hasan', 'hamid', 'reza', 'mohammad']);
    function logMethods(arr){
        console.log("array origin value:", arr);
        console.log("pop return value:", arr.pop());
        console.log("push value:", arr.push('soheil'));
        console.log("shift first value:", arr.shift());
        console.log("unshift first value:", arr.unshift('masood'));
        console.log("splice:", arr.splice(2, 0, ...['splice', 'splice']));
        console.log("concat:", arr.concat(['array1', 'array1', 'array1', 'array1'], ['array2', 'array2', 'array2']));
        console.log("slice:", arr.slice(0,10));
    }
}