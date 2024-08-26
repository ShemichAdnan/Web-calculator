let number1='';
let number2;
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

let max=999999999;
zero.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="0"});
one.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="1"});
two.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="2"});
three.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="3"});
four.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="4"});
five.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="5"});
six.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="6"});
seven.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="7"});
eight.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="8"});
nine.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="9"});

let clear=()=>{
    input.textContent='';
    calculate.textContent='';
    operator='';
    number1='';
    number2='';
};
let del=()=>{
    input.textContent=input.textContent.slice(0,input.textContent.length-1)
}
let add=()=>{
    console.log(`add ${number1} + ${number2}`)
    if(number1+number2>max){
        alert("Number is to high!")
        clear();
    }else{
        input.textContent=number1+number2;
        number1='';
        number2='';
        operator='';
    }
}
let subtract=()=>{
    console.log(`subtract ${number1} - ${number2}`)
    input.textContent=number1-number2;
    number1='';
    number2='';
    operator='';
}
let multiply=()=>{
    console.log(`multiply ${number1} * ${number2}`)
    if(number1*number2>max){
        alert("Number is to high!")
        clear();
    }else{
        input.textContent=number1*number2;
        number1='';
        number2='';
        operator='';
    }
}
let divide=()=>{
    console.log(`devide ${number1} / ${number2}`)
    input.textContent=number1/number2;
    number1='';
    number2='';
    operator='';
}

let operate=(op)=>{
    console.log("radi")
    
    if(number1=='' && op!='='){
        console.log("prvi")
        number1=+input.textContent;
        input.textContent='';
        operator=op;
        calculate.textContent=number1+" "+operator;
    }else{
        console.log("drugi")
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
        }
        
    }
    console.log(number1)
    console.log(operator)
}
c.addEventListener("click",clear);
d.addEventListener("click",del);
plus.addEventListener("click",()=>operate('+'));
minus.addEventListener("click",()=>operate('-'))
equal.addEventListener("click",()=>operate('='));
asterisk.addEventListener("click",()=>operate('*'));
slash.addEventListener("click",()=>operate('/'));
