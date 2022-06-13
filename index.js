var user = prompt("Enter Username:");
            if (user != null) {
               console.log("Welcome to the Game " + user )
           }

function guessNumber(){
   var y = Math.floor(Math.random() * 2 + 1);
  
  var play;
  play = prompt("Enter a number to predict:")

  if(play<y){
      console.log("Enter a bigger Number " )
    
  } else if(play>y){
      console.log("Enter a smaller Number")
  } else if (play==y){
    console.log("Congrats! You scored 5 points" )
  }
      
}

 