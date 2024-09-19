// add money to the account

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);
    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber);
    // verify pin number

    if(pinNumber==='1234'){
        console.log('Adding ,money to your account');
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const addmoneyNum = parseFloat(addMoney);
        const balanceNum = parseFloat(balance);
        const newBalance = addmoneyNum+balanceNum;
        console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;

    }
    else{
        alert('Failed to add money please try again');
    }
})