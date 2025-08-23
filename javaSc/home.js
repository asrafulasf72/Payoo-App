const validPin='1234';
document.getElementById('add-money-btn')
.addEventListener('click', function(e){
    e.preventDefault();
    
    const bankName=document.getElementById('selectBank').value
    const accNumber=document.getElementById('AcNumber').value
    const addAmount=parseInt(document.getElementById('add-amount').value)
    const secPin=parseInt(document.getElementById('pin-number').value);

    const AvailableBalance=parseInt(document.getElementById('available-balance').innerText)
    
    if(accNumber.length<11){
        alert("Please Enter 11 Digit Valid Account Number");
        return;
    }else if(secPin!=validPin){
        alert("Enter Valid Pin Number")
        return;
    }
    const totalBalance=AvailableBalance+addAmount;
    document.getElementById('available-balance').innerText=totalBalance;

   
})