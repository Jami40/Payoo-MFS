document.getElementById('btnn-cashout').addEventListener('click',function(){
    document.getElementById('cashout-id').classList.remove('hidden');
    document.getElementById('addMoney-id').classList.add('hidden');

})
document.getElementById('btnn-add-money').addEventListener('click',function(){
    document.getElementById('addMoney-id').classList.remove('hidden');
    document.getElementById('cashout-id').classList.add('hidden');

})