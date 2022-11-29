function compute()
{
    principal = document.getElementById("principal").value;

    //Create input variables
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var rateout = document.getElementById("rateoutput").value;
    var years = document.getElementById("years").value;
    }
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
 

//Get rate slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("rateoutput").innerText = rateout;
}

//display result
result.innerHTML= 'If you deposit '+principal+',\n'+
'at an interest rate of '+rate+'%.\n'+
'You will receive an amount of '+interest+',\n'+
'in the year '+actualyear.toString()

// calculate the result
result= document.getElementById('result')
