let number1="";
let number2="";
let operator;
const c=document.querySelector("#c");
const d=document.querySelector("#del");
const percent=document.querySelector("#percent");
const slash=document.querySelector("#slash");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const asterisk=document.querySelector("#asterisk");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const minus=document.querySelector("#minus");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const plus=document.querySelector("#plus");
const zero=document.querySelector("#zero");
const dot=document.querySelector("#dot");
const equal=document.querySelector("#equal");

let input=document.querySelector("#input h2");
let calculate=document.querySelector("#calculate h2");

let max=10;
let max1=9999999999;
let max2=-999999999;
let temp="";
zero.addEventListener("click",()=>{InputNumber(zero.textContent)});
one.addEventListener("click",()=>{InputNumber(one.textContent)});
two.addEventListener("click",()=>{InputNumber(two.textContent)});
three.addEventListener("click",()=>{InputNumber(three.textContent)});
four.addEventListener("click",()=>{InputNumber(four.textContent)});
five.addEventListener("click",()=>{InputNumber(five.textContent)});
six.addEventListener("click",()=>{InputNumber(six.textContent)});
seven.addEventListener("click",()=>{InputNumber(seven.textContent)});
eight.addEventListener("click",()=>{InputNumber(eight.textContent)});
nine.addEventListener("click",()=>{InputNumber(nine.textContent)});

let maxc=15;
let max0=999999999999999;
let min=-99999999999999;
let op;
let tempOperator;

let ProvjeraDuzine=()=>{
    if(input.textContent.length>9){
        input.style.fontSize = "35px";
    }else{
        input.style.fontSize="40px";
    }
};
let Clear=()=>{
    input.textContent="";
    calculate.textContent="";
    op="";
    number1="";
    number2="";
    tempOperator="";
};
let Del=()=>{
    input.textContent=input.textContent.slice(0,input.textContent.length-1)
    ProvjeraDuzine();
};
let InputNumber=(c)=>{
    if(input.textContent.length<maxc){
        input.textContent+=c;
        ProvjeraDuzine();
    }
};
let addDot=()=>{
    if(input.textContent.includes('.')){
        return;
    }else{
        if(input.textContent.length==0){
            input.textContent+="0";
        }
        input.textContent+=".";
        ProvjeraDuzine();
    }
}

c.addEventListener("click",Clear);
d.addEventListener("click",Del);
plus.addEventListener("click",()=>operate('+'));
minus.addEventListener("click",()=>operate('-'))
equal.addEventListener("click",()=>operate('='));
asterisk.addEventListener("click",()=>operate('*'));
slash.addEventListener("click",()=>operate('/'));
percent.addEventListener("click",()=>operate('%'));
dot.addEventListener("click",addDot);


let add=()=>{
    console.log(`add ${number1} + ${number2}`)
    if(number1+number2>max1 || number1+number2<max2){
        alert("Number is to high!")
        clear();
    }else{
        if((number1+number2).toString().length>max){
            temp=(number1+number2).toString().slice(0,10)
            input.textContent=+temp;
        }else{
            input.textContent=number1+number2;
        }
        number1='';
        number2='';
        operator='';
    }
}
let subtract=()=>{
    console.log(`subtract ${number1} - ${number2}`)
    if(number1-number2>max1 || number1-number2<max2){
        alert("Number is to high!")
        clear();
    }else{
        if((number1-number2).toString().length>max){
            temp=(number1-number2).toString().slice(0,10)
            input.textContent=+temp;
        }else{
            input.textContent=number1-number2;
        }
        number1='';
        number2='';
        operator='';
    }
}
let multiply=()=>{
    console.log(`multiply ${number1} * ${number2}`)
    if(number1*number2>max1 || number1*number2<max2){
        alert("Number is to high!")
        clear();
    }else{
        if((number1*number2).toString().length>max){
            temp=(number1*number2).toString().slice(0,10)
            input.textContent=+temp;
        }else{
            input.textContent=number1*number2;
        }
        number1='';
        number2='';
        operator='';
    }
}
let divide=()=>{
    console.log(`devide ${number1} / ${number2}`)
    if(number1/number2>max1 || number1/number2<max2){
        alert("Number is to high!")
        clear();
    }else{
        if((number1/number2).toString().length>max){
            temp=(number1/number2).toString().slice(0,10);
            input.textContent=+temp;
        }else{
            input.textContent=number1/number2;
        }
        number1='';
        number2='';
        operator='';  
    }
}
let percentage=()=>{
    console.log(`percentage ${number1} % ${number2}`)
    if(number1/100*number2>max1 || number1/100*number2<max2){
        alert("Number is to high!")
        clear();
    }else{
        if((number1/100*number2).toString().length>max){
            temp=(number1/100*number2).toString().slice(0,10);
            input.textContent=+temp;
        }else{
            input.textContent=number1/100*number2;
        }
        number1='';
        number2='';
        operator='';
    }
}

let operate=(op)=>{   
    if(number1=='' && op!='='){
        number1=+input.textContent;
        input.textContent='';
        operator=op;
        calculate.textContent=number1+" "+operator;
    }else{
        number2=+input.textContent;

        if(operator=='+'){
            add();
            if(op!='='){
                operate(op);
            }else{
                calculate.textContent='';
            }
        }else if(operator=='-'){
            subtract();
            if(op!='='){
                operate(op);
            }else{
                calculate.textContent='';
            }
        }else if(operator=='*'){
            multiply();
            if(op!='='){
                operate(op);
            }else{
                calculate.textContent='';
            }
        }else if(operator=='/'){
            divide();
            if(op!='='){
                operate(op);
            }else{
                calculate.textContent='';
            }
        }else if(operator=='%'){
            percentage();
            if(op!='='){
                operate(op);
            }else{
                calculate.textContent='';
            }
        }
    }
}