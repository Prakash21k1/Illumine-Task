
// Initializing firebase database
const firebaseConfig = {
    apiKey: "AIzaSyDF14F2sCfTK5ziYBCLzrqYR45xt01AzYg",
    authDomain: "form-3ec36.firebaseapp.com",
    databaseURL: "https://form-3ec36-default-rtdb.firebaseio.com",
    projectId: "form-3ec36",
    storageBucket: "form-3ec36.appspot.com",
    messagingSenderId: "485058924774",
    appId: "1:485058924774:web:052964aaa10cc339b86b27"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
const ref = database.ref("data");


// Function to disable the dates which are less than current dates.
var today = new Date().toISOString().split("T")[0];
document.getElementById("est_date").setAttribute("min", today);



// Function to disable agent field if yard = 'HK' and name = 'JACK'
function check(){
    var yard = document.getElementById('yard').value;
    var name = document.getElementById('name').value;
    var agent = document.getElementById('agent');

    if(yard === "HK" && name ==="JACK"){
        agent.disabled = true;
        agent.value = 'NA';
    }
    else{
        agent.disabled = false;
        agent.value = '';
    }
}

// Function to check if the active checkbox is checked and to display an error message in the header if its not checked
function validateCheckbox() {
    var checkbox = document.getElementById('active');
    var errorHeader = document.getElementById('errorHeader');
    
    if (checkbox.checked == false) {
      errorHeader.textContent = 'Error: Please check the active Button.';

    } else {
      errorHeader.textContent = '';
    }
}


// Function to disable payment if no amount is entered.
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

// Function to check if the amount entered is more than 10 characters
function checkAmountLength() {
    var amountField = document.getElementById('amount');
    var amountValue = amountField.value;

    if (amountValue.length > 10) {
      return false;
    }
    else{
        return true;
    }
}

// Function to display a toast message
function showToast(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(function() {
      toast.style.display = 'none';
    }, 3000);
}

// This function checks if the amount is less than 10 char and then pushes the data to firebase database 
// if no errors detected and display a success toast message and resets the form.
function save(event) {
    event.preventDefault();

    if(checkAmountLength()){
        const yard = document.getElementById('yard').value;
        const name = document.getElementById('name').value;
        const unit_no = document.getElementById('unit_no').value;
        const usage = document.getElementById('usage').value;
        const type = document.getElementById('type').value;
        const size = document.getElementById('size').value;
        const est_date = document.getElementById('est_date').value;
        const est_type = document.getElementById('est_type').value;
        const damage_type = document.getElementById('damage_type').value;
        const uom = document.getElementById('uom').value;
        const bill_to = document.getElementById('bill_to').value;
        const lessee = document.getElementById('lessee').value;
        const agent = document.getElementById('agent').value;
        const amount = document.getElementById('amount').value;
        const payment = document.getElementById('payment').value;
        const active = document.getElementById('active').value;
        const remark = document.getElementById('remark').value;


        ref.push({
            yard : yard,
            name:name,
            Unit_No : unit_no,
            Usage:usage,
            Type:type,
            size:size,
            Estimmate_date : est_date,
            Estimate_type : est_type,
            Damage_type : damage_type,
            UOM:uom,
            Bill_to:bill_to,
            lessee:lessee,
            agent:agent,
            amount:amount,
            payment:payment,
            active:active,
            remark:remark
    
        })
    
        document.getElementById('form').reset();

        showToast('Data saved successfully');
    }
    else{
        showToast('Amount cannot be more than 10 characters.');
    }
}


