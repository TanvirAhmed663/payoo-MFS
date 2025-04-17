
//step 1
document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const AccountNumber= document.getElementById("Account-number").value;
   // const convertedAccountNumber=parseInt(AccountNumber);
    const Pin= document.getElementById("pin").value;
   // const convertedPin=parseInt(Pin);
    
    console.log("Account Number:", AccountNumber);
console.log(" PIN:", Pin);

    if(AccountNumber.length ===11 && Pin.length ===6){
        window.location.href="./main.html";
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