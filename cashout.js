document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();
    const cashoutMoney = document.getElementById('input-cashout').value;
    console.log(cashoutMoney);
    const pinNumber = document.getElementById('cashout-pin').value;
    console.log(pinNumber);

    if(pinNumber==='1234'){
        console.log('reduces the money');
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const cashoutNum = parseFloat(cashoutMoney);
        const balanceNum = parseFloat(balance);
        const newBalance = balanceNum - cashoutNum ;
        console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to cash Out please try again');
    }

})