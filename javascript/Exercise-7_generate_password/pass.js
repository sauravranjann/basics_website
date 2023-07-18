let lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '<', '>', '?', '/', '|', '~'];

let numericvalue = ['0','1','2','3','4','5','6','7','8','9'];

let funnyvalue = ["loveYouTeacher", "password", "nariyalTel"," sunnyLeone", "badamTel", "harpic"," jhadooPochha"," creamPowder","password","admin","123456","letmein","qwert","abc123","monkey","iloveyou","trustno1","sunshine","master","dragon","football","password1","admin123","welcome"]


class passwordgenerator{
    strongpassword(){
        let password1=""
        for(let i=0;i<2;i++)
        {
            let lows=lowercaseAlphabets[Math.floor(Math.random()* lowercaseAlphabets.length)]
            let highs=uppercaseAlphabets[Math.floor(Math.random()* uppercaseAlphabets.length)]
            let spec=specialSymbols[Math.floor(Math.random()*specialSymbols.length)]
            let mume=numericvalue[Math.floor(Math.random()*numericvalue.length)]
            password1=password1+lows+highs+spec+mume;
        }
       return password1;

    }
    weakpassword(){
        let password2=""
        for(let i=0;i<4;i++)
        {
           let lowss=lowercaseAlphabets[Math.floor(Math.random()* lowercaseAlphabets.length)]
           let highss=uppercaseAlphabets[Math.floor(Math.random()* uppercaseAlphabets.length)] 
           password2=lowss+highss+password2;
        }
        return password2;

    }
    
    funnyvaluues(){
        
        let password3=funnyvalue[Math.floor(Math.random()*funnyvalue.length)]
        return password3;
    }



}
let p1= document.getElementById("btn1")
let p2= document.getElementById("btn2")
let p3= document.getElementById("btn3")
let p4= document.getElementById("pass")

let s= new passwordgenerator();

s.strongpassword();
s.weakpassword();
s.funnyvaluues();

p1.onclick=()=>{
    let c=s.strongpassword();
    p4.innerHTML=c

}
p2.onclick=()=>{
   let d=s.weakpassword();
    p4.innerHTML=d

}
p3.onclick=()=>{
    let e=s.funnyvaluues();
    p4.innerHTML=e

}

