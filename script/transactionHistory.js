// alert()
document.getElementById("transaction-box")
.addEventListener("click",function(){
    handleToggle("Add-Money","none");
    handleToggle("Cash-Out","none");
    handleToggle("transaction-history","block");
})