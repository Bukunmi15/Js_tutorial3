const expectedNumber = 5; 

// You can have mutiple else if in a statement and you can'.
if (expectedNumber == 1){
    console.log('You are the first person');
}else if (expectedNumber == 2){
    console.log('You are the second person');
}else if (expectedNumber == 3){
    console.log('You are the third person');
}else if(expectedNumber == 4 || expectedNumber == 5 || expectedNumber == 6){
    console.log('You are the Guest');
}else{                                   // Else is when is not among the else if values.  
    console.log('You are not expected');     
};


