var today = new Date().toISOString().split("T")[0];
document.getElementById("est_date").setAttribute("min", today);

function check(){
    var yard = document.getElementById('yard').value;
    var name = document.getElementById('name').value;
    var agent = document.getElementById('agent');

    if(yard === "HK" && name ==="JACK"){
        agent.disabled = true;
        agent.value = 'Not Applicable';
    }
    else{
        agent.disabled = false;
        agent.value = 'Agent *'
    }
}

function validateCheckbox() {
    var checkbox = document.getElementById('active');
    var errorHeader = document.getElementById('errorHeader');
    console.log(checkbox.value);
    

    if (checkbox.checked == false) {
      errorHeader.textContent = 'Error: Please check the active Button.';

    } else {
      errorHeader.textContent = '';
    }
}



function amountcheck(){
    var amount = document.getElementById('amount');
    var payment = document.getElementById('payment');

    if(amount.value > 0){
        payment.disabled = false;
    }
    else{
        payment.disabled = true;
    }
    
}  

function checkAmountLength() {
    var amountField = document.getElementById('amount');
    var amountValue = amountField.value;

    if (amountValue.length > 10) {
      showToast('Amount cannot be more than 10 characters.');
    }
}

function showToast(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(function() {
      toast.style.display = 'none';
    }, 3000);
}


function save(event) {
    event.preventDefault();
    showToast('Data saved successfully');
}



