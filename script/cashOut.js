// // alert();
document.getElementById("btn-cash-Out")
.addEventListener("click",function(event){
    event.preventDefault();
    
    const Pin= document.getElementById("pin-cash-out").value;
    const AgentNumber= document.getElementById("agent-num-cash-out").value;
    const withdrawAmount= document.getElementById("amount-cash-out").value;
    const ConvertWithdrawAmount= parseFloat(withdrawAmount);
    const mainBalance=document.getElementById("main-balance").innerText;
    const ConvertMainBalance= parseFloat(mainBalance);

    // const Pin= getInputValueByID("pin-cash-out");
    // const AgentNumber= getInputValueByID("agent-num-cash-out");
    // const withdrawAmount=getInputValueByID("amount-cash-out");
  
    // const mainBalance=getInputValueByID("main-balance");

    // getInputValueByID("pin-cash-out");
    // getInputValueByID("agent-num-cash-out");
    // getInputValueByID("amount-cash-out");

    // getInnerTextByID("main-balance");

    if(AgentNumber.length ===11 && Pin.length ===6){
        const sub = ConvertMainBalance - ConvertWithdrawAmount;
        document.getElementById("main-balance").innerText= sub.toFixed(2);
        alert("withdraw successful!");

        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`
        Cash-Out your Account ${ConvertWithdrawAmount}tk from ${AgentNumber} account number `
        container.appendChild(p)

        document.getElementById("pin-cash-out").value = "";
        document.getElementById("agent-num-cash-out").value = "";
       document.getElementById("amount-cash-out").value = "";

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