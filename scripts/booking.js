function selectRate(){
var rate = document.querySelectorAll(".small-button");
	for (var r of rate){
		const rb = document.createElement('input');
		rb.type = "radio";
		rb.name = "rate";
		rb.value = "rate";
		rb.addEventListener("change", calculate);
		r.appendChild(rb);
	}
}

var days = document.querySelectorAll(".day-selector li");
function selectDays(){
	for (var d of days){
		const cb = document.createElement('input');
		cb.type = "checkbox";
		cb.name = "day";
		cb.value = "day";
		cb.addEventListener("change", calculate);
		d.appendChild(cb);
	}
}


function countDays(){
	var counter=0;
	let check = document.getElementsByName("day");
	for (var c of check){
		if (c.checked === true){
			counter++;
			c.classList.add("clicked");
		}
		else{
			c.classList.remove("clicked");
		}
	}
return counter;
}

function changeRate(){
	var rate = document.getElementsByName("rate");
	if (rate[0].checked === true){
		return 35;
	}
	else if (rate[1].checked === true){
		return 20;
	}
	return 0;
}

var cost = document.getElementById("calculated-cost");
function calculate(){
var cd = countDays();
var cr = changeRate();
	cost.innerHTML = cd*cr;
}

function reset(){
	location.reload() ;
	calculate();
}

let clear = document.getElementById("clear-button");
clear.addEventListener("click", reset);
selectDays();
selectRate();
