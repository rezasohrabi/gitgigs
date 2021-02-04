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
}