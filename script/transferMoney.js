// // alert();
document.getElementById("btn-trans")
.addEventListener("click",function(event){
    event.preventDefault();
    
    const Pin= document.getElementById("pin-trans").value;
    const AgentNumber= document.getElementById("account-num-trans").value;
    const withdrawAmount= document.getElementById("amount-trans").value;
    const ConvertWithdrawAmount= parseFloat(withdrawAmount);
    const mainBalance=document.getElementById("main-balance").innerText;
    const ConvertMainBalance= parseFloat(mainBalance);

   
    if(AgentNumber.length ===11 && Pin.length ===6){
        const sub = ConvertMainBalance - ConvertWithdrawAmount;
        document.getElementById("main-balance").innerText= sub.toFixed(2);
        alert("Transfer successful!");

        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`
        Transfer your Account ${ConvertWithdrawAmount}tk from ${AgentNumber} account number. `
        container.appendChild(p);

        document.getElementById("pin-trans").value = "";
        document.getElementById("account-num-trans").value = "";
        document.getElementById("amount-trans").value = "";
        
        
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
