
// -------- log Out -------

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = './login.html'
})


// ----------- card click function start ------------
function showSectionById(id){
    document.getElementById('add-money-sec').classList.add('hidden');
    document.getElementById('cash-out-sec').classList.add ('hidden');
    document.getElementById('transaction-sec').classList.add ('hidden');
    document.getElementById('get-bonus-sec').classList.add ('hidden');
    document.getElementById('pay-bill-sec').classList.add ('hidden');
    document.getElementById('transfer-money-sec').classList.add ('hidden');
    document.getElementById(id).classList.remove('hidden') ;
    
}

document.getElementById('add-money').addEventListener('click', function(){
    showSectionById('add-money-sec');
});

document.getElementById('cash-out').addEventListener('click', function(){
    showSectionById('cash-out-sec');
});

document.getElementById('transaction').addEventListener('click', function(){
    showSectionById('transaction-sec');
});

document.getElementById('get-bonus').addEventListener('click', function(){
    showSectionById('get-bonus-sec');
});

document.getElementById('pay-bill').addEventListener('click', function(){
    showSectionById('pay-bill-sec');
});

document.getElementById('transfer-money').addEventListener('click', function(){
    showSectionById('transfer-money-sec');
});

// ----------- card click function end ------------


// function for getting number converted innertext ----

function innerTextToNumber(id){
    const inputValue = document.getElementById(id).innerText;
    const result = parseFloat(inputValue);
    return result;
}


// function for getting number converted input value ----

function inputValueToNumber(id){
    const inputValue = document.getElementById(id).value;
    const result = parseFloat(inputValue);
    return result;
}



// ******** add money section main function ********

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const pin = inputValueToNumber('add-money-pin');

    const currentBalance = innerTextToNumber('current-balance');

    const amountBeAdded = inputValueToNumber('add-money-amount');

    if(isNaN(amountBeAdded)){
        alert('Wrong Input. Input must be a number:');
        return;
    } else{

        if( pin === 12345){

            const balanceAfterAdded = currentBalance + amountBeAdded;
            document.getElementById('current-balance').innerText = balanceAfterAdded;

            // ---- transaction history adding ------
            const div = document.createElement('div');
            div.classList.add('bg-sky-500');
            div.classList.add('rounded-3xl');
            div.classList.add('mt-4');

            div.innerHTML = `
                <h1 class="text-xl font-bold ml-4 text-white">Add Money</h1>
                <p class="ml-4 text-white">Added $ ${amountBeAdded}. New Balance $ ${balanceAfterAdded}.</p>

            `
            document.getElementById('transaction-sec').appendChild(div);

        }else{
            alert('Wrong Pin.')
        }
    }    

})



// ******** cash out section main function ********

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const pin = inputValueToNumber('cash-out-pin');

    const currentBalance = innerTextToNumber('current-balance');

    const amountToBeOut = inputValueToNumber('cash-out-amount');

    if(isNaN(amountToBeOut)){
        alert('Wrong Input. Input must be a number:');
        return;
    } else{

        if( pin === 12345){
            if(currentBalance < amountToBeOut){
                alert("You don't have sufficient balance.");
                return;
            }else{

                const amountAfterOut = currentBalance - amountToBeOut;
                document.getElementById('current-balance').innerText = amountAfterOut;


                // ---- transaction history adding ------
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.classList.add('rounded-3xl');
            div.classList.add('mt-4');

            div.innerHTML = `
                <h1 class="text-xl font-bold ml-4 ">Cash Out</h1>
                <p class="ml-4 ">Withdraw $ ${amountToBeOut}. New Balance $ ${amountAfterOut}.</p>

            `
            document.getElementById('transaction-sec').appendChild(div);


            }
            

        }else{
            alert('Wrong Pin.')
        }
    }    

})


// ******** get  bonus section main function ********

document.getElementById('get-bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const pin = inputValueToNumber('coupon-pin');

    const currentBalance = innerTextToNumber('current-balance');

    const couponCode = inputValueToNumber('coupon-code');

    if(isNaN(couponCode)){
        alert('Wrong Input. Input must be a number:');
        return;
    } else{

        if( pin === 12345 && couponCode === 12345 ){

            const amountAfterBonus = currentBalance + 5000;
            document.getElementById('current-balance').innerText = amountAfterBonus;

            // ---- transaction history adding ------
            const div = document.createElement('div');
            div.classList.add('bg-green-300');
            div.classList.add('rounded-3xl');
            div.classList.add('mt-4');

            div.innerHTML = `
                <h1 class="text-xl font-bold ml-4 ">Bonus Amount</h1>
                <p class="ml-4 ">Bonus Added $5000. New Balance $ ${amountAfterBonus}.</p>

            `
            document.getElementById('transaction-sec').appendChild(div);

        }else{
            alert('Wrong Pin.')
        }
    }    

})


// ******** pay bill section main function ********

document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const pin = inputValueToNumber('pay-bill-pin');

    const currentBalance = innerTextToNumber('current-balance');

    const amountToBePay = inputValueToNumber('pay-bill-amount');

    if(isNaN(amountToBePay)){
        alert('Wrong Input. Input must be a number:');
        return;
    } else{

        if( pin === 12345){
            if(currentBalance < amountToBePay){
                alert("You don't have sufficient balance.");
                return;
            }else{

                const amountAfterPay = currentBalance - amountToBePay;
                document.getElementById('current-balance').innerText = amountAfterPay;


                // ---- transaction history adding ------
            const div = document.createElement('div');
            div.classList.add('bg-teal-300');
            div.classList.add('rounded-3xl');
            div.classList.add('mt-4');

            div.innerHTML = `
                <h1 class="text-xl font-bold ml-4 ">Pay Bill</h1>
                <p class="ml-4 ">Bill Payed $ ${amountToBePay}. New Balance $ ${amountAfterPay}.</p>

            `
            document.getElementById('transaction-sec').appendChild(div);


            }
            

        }else{
            alert('Wrong Pin.')
        }
    }    

})


// ******** transfer amount section main function ********

document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const pin = inputValueToNumber('transfer-pin');

    const currentBalance = innerTextToNumber('current-balance');

    const amountToBeOut = inputValueToNumber('transfer-amount');

    if(isNaN(amountToBeOut)){
        alert('Wrong Input. Input must be a number:');
        return;
    } else{

        if( pin === 12345){
            if(currentBalance < amountToBeOut){
                alert("You don't have sufficient balance.");
                return;
            }else{

                const amountAfterOut = currentBalance - amountToBeOut;
                document.getElementById('current-balance').innerText = amountAfterOut;


                // ---- transaction history adding ------
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.classList.add('rounded-3xl');
            div.classList.add('mt-4');

            div.innerHTML = `
                <h1 class="text-xl font-bold ml-4 ">Transfer Money</h1>
                <p class="ml-4 ">Transfered $ ${amountToBeOut}. New Balance $ ${amountAfterOut}.</p>

            `
            document.getElementById('transaction-sec').appendChild(div);


            }
            

        }else{
            alert('Wrong Pin.')
        }
    }    

})