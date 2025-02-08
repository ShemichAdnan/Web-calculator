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
const negation=document.querySelector("#negation");

let input=document.querySelector("#input h2");
let calculate=document.querySelector("#calculate h2");


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
let max=999999999999999;
let min=-99999999999999;
let op;
let tempOperator;

let ProvjeraDuzine=()=>{
    if(input.textContent.length>9){
        input.style.fontSize = "40px";
    }else{
        input.style.fontSize="50px";
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
    if(input.textContent=="-"){
        input.textContent="";
    }
    ProvjeraDuzine();
};
let InputNumber=(c)=>{
    if(input.textContent.length<maxc){
        input.textContent+=c;
        ProvjeraDuzine();
    }
};
let AddDot=()=>{
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
let NumberNegation=()=>{
    if(input.textContent!=""){
        input.textContent=input.textContent*-1;
    }    
}
let Calculation=()=>{
    if(number2=="0" && tempOperator=="/"){
        Clear();
        alert("Dijeljenje sa 0 nije moguće!");
    }else if(number1!=null && number2!=null && number1!="" && number2!=""){
        let result;
        if(tempOperator=="+"){
            result=+number1 + +number2;
        }else if(tempOperator=="-"){
            result=+number1 - +number2;
        }else if(tempOperator=="*"){
            result=+number1 * +number2;
        }else if(tempOperator=="/"){
            result=number1/number2;
        }else{
            result=(+number1/100)* +number2;
        }

        if(result>max || result<min){
            Clear();
            alert("Previše velik / previše mal broj!");
        }
        else{
            if(result.toString().length>maxc){
                temp=result.toString().slice(0,15)
                input.textContent=temp;
                ProvjeraDuzine();
            }else{
                input.textContent=result;
                ProvjeraDuzine();
            }
            number1="";
            number2="";
            tempOperator="";
        }
    }
}

let Operate=(c)=>{
    op=c;
    Execution();
}

let Execution=()=>{
    if(input.textContent==null || input.textContent==""){
        
        input.textContent="0";
        if(tempOperator=="*" || tempOperator=="/"){
            input.textContent="1";
        }else if(tempOperator=="%"){
            input.textContent="100";
        }
    }

    if(number1=="" && op!="="){
        if(input.textContent[input.textContent.length-1]=="."){
            number1=input.textContent.slice(0,input.textContent.length-1)
        }
        else{
            number1=input.textContent;
        }

        input.textContent="";
        tempOperator=op;
        calculate.textContent=number1+" "+tempOperator;
    }
    else{
        if(input.textContent[input.textContent.length-1]=="."){
            number2=input.textContent.slice(0,input.textContent.length-1)
        }
        else{
            number2=input.textContent;
        }
        Calculation();
        if(op!="="){
            Execution();
        }else{
            calculate.textContent="";
        }
    }
}

c.addEventListener("click",Clear);
d.addEventListener("click",Del);
plus.addEventListener("click",()=>Operate('+'));
minus.addEventListener("click",()=>Operate('-'))
equal.addEventListener("click",()=>Operate('='));
asterisk.addEventListener("click",()=>Operate('*'));
slash.addEventListener("click",()=>Operate('/'));
percent.addEventListener("click",()=>Operate('%'));
dot.addEventListener("click",AddDot);
negation.addEventListener("click",NumberNegation);
