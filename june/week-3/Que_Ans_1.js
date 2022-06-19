// 1. An array is given, return the sum of all the positives numbers. 

    const input = [ 1, -5, 2, 10, -30, 29, 50];

    function sumofpositiveNums(input){
        var sum = 0;

        for(var i = 0; i < input.length; i++){
            if(input[i] > 0){
                sum = sum + input[i];
            }
        }
        return sum;

    }
   var result =  sumofpositiveNums([1, -5, 2, 10, -30, 29, 50]);

       console.log(result);





