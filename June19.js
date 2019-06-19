const longestConsecutive = function(arr, k) {
var stringToCompare = '';

if(arr && arr.length == 0 && k < 1 && k > arr.length) return '';

for(var i = 0; i < arr.length; i++)
{
    if (i < arr.length - k)
    {
    var firstString = ''; 
    
    for(var j=0; j < k; j++ )
        {
            firstString += arr[i + j] ;
            
        }

    if(firstString.length > stringToCompare.length)
    {
        stringToCompare = firstString;
    }
}
}
console.log(stringToCompare)
};



longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3); 
// -> 'marblesmittensbye'
//9 7 

// If there is a tie, return the first one.

longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2); 
// --> "abigailtheta"



// Return "" if the array is empty or if k is negative or larger than the length of the array.

