function VerifyBmi() {
	let W = document.getElementById('inputWeight').value ;
	let H = document.getElementById('inputHeight').value ;
	let BMI = W / Math.pow(H,2);
	
	if (BMI < 18.5) {
		window.alert("You Underweight");
	}
	else if (BMI >= 18.5 && BMI <= 24.9){
		window.alert("Your Normal Weight");
	}
	else if (BMI >=25 && BMI <= 29.9){
		window.alert("You're Overweight");
	}
	else if (BMI >=30){
		window.alert("You're Obese");
	}
}

