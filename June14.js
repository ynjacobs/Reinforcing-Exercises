const names = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

// print "lowercase" if the string is all lowercase
// print "long" if the string is more than 4 characters
// print "long and lowercase" if the string's length is more than 4 characters and it's all lowercase
// otherwise print the string itself

const isLong = name => name.length > 4;

const isLower = name => name.toLowerCase() == name;

const checkBoth = name => {

    if(isLong(name) & isLower(name)) console.log('long and lowercase');
    
    else if(isLong(name)) console.log('long');
    
    else if(isLower(name)) console.log('lowercase');
    
    else console.log( name);
   
}

names.forEach(checkBoth)

// for (i=0, )
//  if (isLong &&  isLower) {
//     console.log('long and lowercase');
    
// }
// else  if (isLong) {
//     console.log('long');
    
// }

// else if (isLower) {
//     console.log('lower');
    
// }



// else {
//     console.log(name);
    

// The output should be:

// long
// lowercase
// lowercase
// lowercase
// long
// lowercase
// EX
// EST
// long and lowercase