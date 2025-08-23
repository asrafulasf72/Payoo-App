// Login Button Functionalty
document.getElementById('btn-login')
.addEventListener('click', function(e){
    e.preventDefault();
    
    const number='01855401650';
    const pin='1234';

    const PhoneNumber=document.getElementById('mobileNumber').value;
    // console.log(PhoneNumber);
    const ValidNumber=parseInt(PhoneNumber);
    const securityPin=document.getElementById('pinNumber').value;
    // console.log(securityPin);
    const validPin=parseInt(securityPin);

    if(ValidNumber==number && validPin==pin ){
        window.location.href="./home.html";
    }else{
        alert("Invalid Phone Or Pin")
    }

})