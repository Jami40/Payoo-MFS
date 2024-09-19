 document.getElementById('add-money-btn').addEventListener('click',function(event){
     event.preventDefault();
     // console.log('add money btn added')
     const addNumber=document.getElementById('add-number').value;
     // console.log(addNumber);
     const pinNumber=document.getElementById('pin-number').value;
     // console.log(pinNumber);


     if(pinNumber==='1234'){
         // console.log("pin matched");
         const balanceAvailabe =document.getElementById('balance').   innerText;        
         console.log(balanceAvailabe);
         const balanceNumberr = parseFloat(balanceAvailabe);
         console.log(balanceNumberr);
         const addmoneyNum= parseFloat(addNumber)
         console.log(addmoneyNum);

         const totalBalance=balanceNumberr+addmoneyNum;
         document.getElementById('balance').innerText=totalBalance;
     }
     else{
       alert("Wrong pin");
     }
 })
document.getElementById('Cashout-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money btn added')
    const addNumber=document.getElementById('out-number').value;
    // console.log(addNumber);
    const pinNumber=document.getElementById('out-pin-number').value;
    console.log(pinNumber);


    if(pinNumber==='1234'){
        // console.log("pin matched");
        const balanceAvailabe =document.getElementById('balance').innerText;
        console.log(balanceAvailabe);
        const balanceNumberr = parseFloat(balanceAvailabe);
        console.log(balanceNumberr);
        const addmoneyNum= parseFloat(addNumber)
        console.log(addmoneyNum);

        const totalBalance=balanceNumberr-addmoneyNum;
        document.getElementById('balance').innerText=totalBalance;
    }
    else{
        alert("Wrong pin");
    }
})