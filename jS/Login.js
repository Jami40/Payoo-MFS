document.getElementById('btn-id').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Login button clicked');

    const phoneNumber=document.getElementById('phone-number').value;

    console.log(phoneNumber);

})