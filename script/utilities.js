function getInputValueByID(id){
    const value=document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;


}
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById.innerText=value;
}

function handleToggle(id,status){
    document.getElementById(id).style.display=status;
}