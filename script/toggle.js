// alert();

document.getElementById("Add-Money").style.display="none";
document.getElementById("Cash-Out").style.display="none";
document.getElementById("transfer-money").style.display="none";
document.getElementById("get-bonus").style.display="none";
document.getElementById("Pay-Bill").style.display="none";
document.getElementById("transaction-history").style.display="none";

document.getElementById("Add-Money-Box")
.addEventListener("click", function(){
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("transaction-history").style.display="none";
    document.getElementById("Add-Money").style.display="block";
})
document.getElementById("Cash-Out-Box")
.addEventListener("click", function(){
    document.getElementById("Cash-Out").style.display="block";
    document.getElementById("Add-Money").style.display="none";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("transaction-history").style.display="none";
})
document.getElementById("Trans-Box")
.addEventListener("click", function(){
    document.getElementById("transfer-money").style.display="block";
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("Add-Money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("transaction-history").style.display="none";
})
document.getElementById("get-bonus-box")
.addEventListener("click", function(){
    document.getElementById("get-bonus").style.display="block";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("Add-Money").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("transaction-history").style.display="none";
})
document.getElementById("Pay-Bill-box")
.addEventListener("click", function(){
    document.getElementById("Pay-Bill").style.display="block";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("Add-Money").style.display="none";
    document.getElementById("transaction-history").style.display="none";
})
document.getElementById("Pay-Bill-box")
.addEventListener("click", function(){
    document.getElementById("Pay-Bill").style.display="block";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("Add-Money").style.display="none";
    document.getElementById("transaction-history").style.display="none";
})
document.getElementById("transaction-box")
.addEventListener("click", function(){
    document.getElementById("transaction-history").style.display="block";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("Cash-Out").style.display="none";
    document.getElementById("Add-Money").style.display="none";
})

