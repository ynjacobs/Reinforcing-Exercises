// 003111 # 3 = 1 + 1 + 1
// 813372 # 8 + 1 + 3 = 3 + 7 + 2
// 17935 # 1 + 7 = 3 + 5
// 56328116

function luckCheck(ticket){
   
    
    if(ticket == null) {
        return false;
    }
    else if  (ticket.length ==0 /*&& typeof ticket !== "number"*/){
    return false;
     }
    else if(ticket.length % 2== 0){
        limit = ticket.length/2;
        let firstArray_txt = ticket.slice(0, limit);
        let firstArray = new Array(firstArray_txt.length);
        for (var i = 0; i < firstArray_txt.length;i++)
        {
            firstArray[i] = parseInt(firstArray_txt[i]);
        }
        // console.log(typeof firstArray);
        
        let secondArray_txt = ticket.slice(limit);
        let secondArray = new Array(secondArray_txt.length);
        for (var i = 0; i < secondArray_txt.length;i++)
        {
            secondArray[i] = parseInt(secondArray_txt[i]);
        }
        
        let compare1 = firstArray.reduce((accu, curVal) => { 
            return accu + curVal; 
        }, 0);
        let compare2 = secondArray.reduce((accu, curVal) => { 
            return accu + curVal; 
        }, 0);
        return compare1 === compare2;
    }
    else if(ticket.length % 2 == 1){
        limit = ticket.length/2;
        let firstArray_txt = ticket.slice(0, limit);
        let firstArray = new Array(firstArray_txt.length);
        for (var i = 0; i < firstArray_txt.length;i++)
        {
            firstArray[i] = parseInt(firstArray_txt[i]);
        }
        let secondArray_txt = ticket.slice(limit+1);
        let secondArray = new Array(secondArray_txt.length);
        for (var i = 0; i < secondArray_txt.length;i++)
        {
            secondArray[i] = parseInt(secondArray_txt[i]);
        }
        
        compare1 = firstArray.reduce((accu, curVal) => { 
            return accu + curVal; 
        }, 0);
        compare2 = secondArray.reduce((accu, curVal) => { 
            return accu + curVal;
        }, 0);
        return compare1 === compare2;

    }
}

console.log(luckCheck('003111'));
console.log(luckCheck('17935'));
console.log(luckCheck(''));
console.log(luckCheck('kkkkkk'));
console.log(luckCheck('123450'));
console.log(luckCheck(null));





