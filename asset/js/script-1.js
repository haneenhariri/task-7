/* 1- Write a program that take 3 integers from user then print the max
element and the min element. */
function maxMin(){
    let arrNum=[];
    arrNum[0] =parseInt(document.getElementById("num1").value);
    arrNum[1] =parseInt(document.getElementById("num2").value);
    arrNum[2] =parseInt(document.getElementById("num3").value);
    let max = arrNum[0];
    for(let i=0 ; i<arrNum.length ; i++)
    {
        if(arrNum[i]>max)
        {
            max=arrNum[i];
        }
    }
    let min = arrNum[0];
    for(let i=0 ; i<arrNum.length ; i++)
        {
            if(arrNum[i]<min)
            {
                min=arrNum[i];
            }
        }
    document.getElementById("max").innerHTML=max;
    document.getElementById("min").innerHTML=min;
}

/* 2 - Write a program that take character from user then if it is vowel chars
(a,e,I,o,u) then print vowel otherwise print consonant */
function charVC(){
    let arrChar = ["a","e","i","o","u"];
    let input = document.getElementById("char").value;
    let output ;
    for(let i=0;i<arrChar.length;i++)
        {
            if(input == arrChar[i])
                {
                    output = "vowel";
                    break;
                }
            else if(input != arrChar[i]) {
                output = "consonant";
            }
        }
        document.getElementById("charOut").innerHTML=output 
}
/* 3- Write a program that allows user to insert integer then print a
multiplication table up to 12. */
function generate(){
    let num = parseInt(document.getElementById("mult").value);
    let out = document.getElementById("multOut");
    for(let i=1 ; i<=12 ; i++)
        {
            out.innerHTML+= num +"x"+ i +"="+ num*i + "<br>";
        } 
}

/* 4 – Write a program that allows to user to insert number then print all
even numbers between 1 to this number */
function evenNum(){
    let even = parseInt(document.getElementById("even").value);
    let outEven =document.getElementById("evenOut");
    let num;
    for(let i=1 ; i<=even ; i++)
    {
        if(i%2 == 0)
            {
                outEven.innerHTML+= i +" " ;
            }
    } 
}
/* 5- Write a program to enter marks of five subjects and calculate total,
average and percentage. */
function mark(){
    let arr=[] , sum=0 , avrg , per;
    arr[0]=parseInt(document.getElementById("mark1").value);
    arr[1]=parseInt(document.getElementById("mark2").value);
    arr[2]=parseInt(document.getElementById("mark3").value);
    arr[3]=parseInt(document.getElementById("mark4").value);
    arr[4]=parseInt(document.getElementById("mark5").value);
    for(let i=0; i<5 ;i++)
        {
            sum=sum+arr[i];
        }
    avrg = sum / 5 ;
    document.getElementById("totalAvrg").innerHTML=avrg;
    per = Math.round(sum /500*100) ;
    let mark = document.getElementById("markout");
    document.getElementById("totalPer").innerHTML = per;
    for(let i=0 ; i< 5; i++)
        {
           let markPer = arr[i]*100/100;
            if( markPer >= 90)
                mark.innerHTML += markPer  + "" + "A" 
            else if( markPer >= 80)
                mark.innerHTML += markPer  + "" + "B"
            else if( markPer >= 70)
                mark.innerHTML += markPer +"" + "C"
            else if( markPer >= 60)
                mark.innerHTML += markPer  + "" + "D"
            else if(markPer >= 40)
                mark.innerHTML += markPer  + "" + "A"
            else
                console.log(markPer,"F");
        }
}   

/* part-2 */
function img(src,color){
    let imgC= document.getElementById("change");
    imgC.setAttribute("src",src);
    let bg = document.getElementById("task1");
    bg.style.backgroundColor = color ;

}

let icon = document.getElementById("icon");
let task2 =document.getElementById("task2")
icon.onclick = function(){
    task2.classList.add('dark-them');
}


