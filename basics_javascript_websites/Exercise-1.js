let x = Math.floor(Math.random() * 100);
let k=0;
let y
while(x!=y)
{
    
   y=prompt("enter the guessing no : ");
   k++
    if(x>y)
    {
        console.log("guess no is smaller than the random number "+ x)
    }
    else if(x<y)
    {
        console.log("guess number is greater than the random number "+ x)
    }
    else if(x==y)
    {
        console.log("You guess the correct number");
        console.log("you guess the no in " + k +" chance")
    }
}   
   

