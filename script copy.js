// document.getElementById("gmOutput").innerHTML=0.0;


function logMax(numArray){
    let max = numArray[0];
    for(i=1;i<numArray.length;i++){
        if(numArray[i]>max) {
            max = numArray[i];
        }
    }
    return max;    
}


console.log(logMax([-4,3,6]));
// 
function addNum(numArr){
    let sum=numArr[0]
    for(i=1; i<numArr.length;i++){
        sum+=numArr[i];
    }
    return sum;
}

console.log(addNum([5,10,29,5,10,100]));