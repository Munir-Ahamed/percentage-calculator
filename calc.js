var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('result');
var form = document.getElementById('percent')

form.addEventListener('submit', function(event) {
     if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    
    }
    else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var r = x / y;
        
        resultField.innerText = "answer" + r*100;
        event.preventDefault();
        
    }
});
