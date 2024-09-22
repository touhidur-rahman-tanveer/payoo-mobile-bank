
function getValueById(id){
    const value = document.getElementById(id).value;
    return value;
}

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault;

    if(getValueById('mobile-number') === '12345' && getValueById('pin') === '12345'){
        window.location.href = './main.html'
    }else{
        alert('wrong number and pin combination.')
    }
})