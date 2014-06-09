var Keypad = document.calculator;
var Accumulate = 0;
var flagCheck = false;
var operator = "";
function Number(Num) {
	if (flagCheck){
		Keypad.ReadOut.value = Num;
		flagCheck = false;
	}
	else {
		if(Keypad.ReadOut.value=="0"){
			Keypad.ReadOut.value = Num;
		}
		else {
			Keypad.ReadOut.value+=Num;
		}
	}
}
function Operation (Op) {
	var read = Keypad.ReadOut.value;
	if (flagCheck && operator != "=");
	else {
		flagCheck = true;
		if (operator == '+') {
			Accumulate+= parseFloat(read);
		}else if (operator =='-'){
			Accumulate -=parseFloat(read);
		} else if (operator == '*') {
			Accumulate *=parseFloat(read);
		} else if (operator =='/') {
			Accumulate /=parseFloat(read);
		} else {
			Accumulate = parseFloat(read);
		}

		Keypad.ReadOut.value = Accumulate;
		operator = Op;
	}
 }
 function ClearEntry () {
		Keypad.ReadOut.value = "0";
		flagCheck = true;
	}
 function Clear() {
 	Accumulate = 0;
	operator = "";
	ClearEntry();
 }