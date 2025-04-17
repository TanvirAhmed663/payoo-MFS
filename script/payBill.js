// alert()
// // alert();
document.getElementById("btn-pay-bill")
.addEventListener("click",function(event){
    event.preventDefault();
    
    const Pin= document.getElementById("pay-bill-pin").value;
    const AgentNumber= document.getElementById("pay-bill-ac-num").value;
    const withdrawAmount= document.getElementById("pay-bill-amount").value;
    const ConvertWithdrawAmount= parseFloat(withdrawAmount);
    const mainBalance=document.getElementById("main-balance").innerText;
    const ConvertMainBalance= parseFloat(mainBalance);

    // const Pin= getInputValueByID("pay-bill-pin");
    // const AgentNumber=getInputValueByID("pay-bill-ac-num");
    // const withdrawAmount= getInputValueByID("pay-bill-amount");
    // const mainBalance=getInnerTextByID("main-balance");
    

    // getInputValueByID("pay-bill-pin");
    // getInputValueByID("pay-bill-ac-num");
    // getInputValueByID("pay-bill-amount");

    // getInnerTextByID("main-balance");


    if(AgentNumber.length ===11 && Pin.length ===6){
        const sub = ConvertMainBalance - ConvertWithdrawAmount;
        document.getElementById("main-balance").innerText= sub.toFixed(2);
        alert("Pay Bill successful!");

        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`
        Pay bill transfer your Account ${ConvertWithdrawAmount}tk from ${AgentNumber} account number `
        container.appendChild(p)

        document.getElementById("pay-bill-pin").value = "";
        document.getElementById("pay-bill-ac-num").value = "";
        document.getElementById("pay-bill-amount").value = "";

    }
    else{
        if(AgentNumber.length !== 11){
            alert("Wrong Number!!");
        }
        else if(Pin.length !==6){
           alert("Wrong PIN!!");
        }
        else{
            alert(" Something else! check your internet!");
        }
 
    }
    
})