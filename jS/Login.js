document.getElementById('btn-id').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('Login button clicked');

    const phoneNumber=document.getElementById('phone-number').value;

    const pinNumber=document.getElementById('Pin-number').value;

    // console.log(phoneNumber);

    // console.log(pinNumber);

    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('You are logged in');
        window.location.href='/newpage.html';
    }
    else{
        alert('You made wrong command');
    }

})