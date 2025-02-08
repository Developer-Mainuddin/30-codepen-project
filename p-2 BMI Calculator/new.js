document.getElementById("calc").addEventListener("submit", calculate); 	
	
function calculate(e){
var radios = document.getElementsByName('gender');
var height = Number(document.getElementById("num1").value);
var weight = Number(document.getElementById("num2").value);
var height2 = height * height;
var bmi = (weight / height2)*10000;	
		e.preventDefault();
		document.getElementById("result").innerHTML = bmi.toFixed(2);
	for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
    break;
 }
}
if (radios[i].value == 0){
	  
  if(bmi <= 18.5) {
		document.getElementById("message").innerHTML = "Underweight!";
	 return;
	}
		else if (bmi <= 24.9) {
		document.getElementById("message").innerHTML = "Normal weight!";
	return;
	}
	
  else if (bmi <= 27.3) {
		document.getElementById("message").innerHTML = "Slightly overweight!";
	return;
	}
	
  else if (bmi <= 32.3) {
		document.getElementById("message").innerHTML = "Overweight!";
	return;
	}
	
  else if (bmi <= 45.0) {
		document.getElementById("message").innerHTML = "Obese!";
	return;
	}
	
  else if (bmi => 45.1) {
	    document.getElementById("message").innerHTML = "Extremely obese!";
	return;
	} 
  }
	else{
			if (bmi <= 20.5) {
		document.getElementById("message").innerHTML = "Underweight!";
	 return;
	}
   else if (bmi <= 25.9) {
		document.getElementById("message").innerHTML = "Normal weight!";
	return;
	}
	
   else if (bmi <= 29.3) {
		document.getElementById("message").innerHTML = "Slightly overweight!";
	return;
	}
	
   else if (bmi <= 34.3) {
		document.getElementById("message").innerHTML = "Overweight!";
	return;
	}
	
  else if (bmi <= 45.0) {
		document.getElementById("message").innerHTML = "Obese!";
	return;
	}
	
  else if (bmi => 45.1) {
	    document.getElementById("message").innerHTML = "Extremely obese!";
	return;
	} 		
 }
}
