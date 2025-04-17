// console.log(9)

document.getElementById("btn-add-money")
.addEventListener('click',function(event){
    event.preventDefault();
    const AccountNumber= document.getElementById("add-money-ac-num").value;
    const Amount =document.getElementById("add-money-amount").value;
    const convertedAmount= parseFloat(Amount);
    const Pin=document.getElementById("add-money-pin").value;
    const mainBalance= document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    
    if(AccountNumber.length ===11 && Pin.length ===6){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText= sum.toFixed(2);
        alert("money added successful");
        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`
        added your Account ${convertedAmount}tk from ${AccountNumber} account number `
        container.appendChild(p)

        document.getElementById("add-money-pin").value = "";
         document.getElementById("add-money-ac-num").value = "";
        document.getElementById("add-money-amount").value = "";

        
    }
    else{
        if(AccountNumber.length !== 11){
            alert("Wrong Account Number!!");
        }
        else{
           alert("Wrong PIN!!");
        }
    
 
    }
    
})
