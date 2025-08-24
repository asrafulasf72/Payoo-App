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

document.getElementById('add-money-toggle-btn')
.addEventListener('click', function(){
     document.getElementById('cash-out-toggle').style.display='none';
    document.getElementById('add-money-toggle').style.display='block';
})

document.getElementById('cash-out-toggle-btn')
.addEventListener('click', function(){
    document.getElementById('cash-out-toggle').style.display='block';
    document.getElementById('add-money-toggle').style.display='none';
})

document.getElementById('btn-witdraw')
.addEventListener('click',function(e){
    e.preventDefault();
    
   const agentNumber=document.getElementById('agent-Number').value;
   const PinNumber= parseInt(document.getElementById('pin-Snumber').value);
   const WitdrawBalance=parseInt(document.getElementById('withdraw-amount').value);
   const AvailableBalance=parseInt(document.getElementById('available-balance').innerText);
   
   const totalNewBalance=AvailableBalance-WitdrawBalance;

   if(agentNumber.length<11){
    alert('Enter Valid Agent Number')
    return
   }else if(PinNumber!=validPin){
    alert('Enter Valid Pin')
    return
   }else if(AvailableBalance===0 || AvailableBalance<WitdrawBalance){
    alert('Balance Low');
    return
   }
   document.getElementById('available-balance').innerText=totalNewBalance;

})