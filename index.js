// Code your solutions in this file
function tailsNeverFails(){
  let count=0;
  while(Math.random() >= 0.5){
    count++;
  }
  return("You got "+count+" tails in a row!");
}

function printBadges(arr){
 for(let i=1; i<arr.length+1; i++){
    console.log('Welcome '+arr[i-1]+'! You are employee #'+i+'.');
 }
 return arr
}
