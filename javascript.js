let number1="";
let number2="";
let operator;

let input=document.querySelector("#input h2");
let calculate=document.querySelector("#calculate h2");

let maxc=15;
let max=999999999999999;
let min=-99999999999999;
let op;
let tempOperator;

let greska=false;
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
    greska=false;
    if(input.textContent.length<maxc){
        input.textContent+=c.textContent;
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
            greska=true
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
    if(greska==false){
        op=c.textContent;
        Execution();
    }else{
        return
    }
    
}

let Execution=()=>{
    if(greska==true){
        return
    }else{
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
    
}


