document.getElementById('button-login').addEventListener('click', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber==='01700539292' && pinNumber==='1234'){
        console.log('You are logged in');
        window.location.href = 'home.html';
    }
    else{
        alert('Please enter correct number and password')
    }
});

