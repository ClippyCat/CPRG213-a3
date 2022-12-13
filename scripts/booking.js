/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var rate=20;
var dayCounter = 0;
var calculatedCost = document.getElementById("calculated-cost");
var days = document.querySelectorAll(".day-selector li");

function selectDays(){
	for (var d of days){
		const cb = document.createElement('input');
		cb.type = "checkbox";
		cb.name = "day";
		cb.value = "day";
		d.appendChild(cb);
	}
}

selectDays();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var check = document.getElementsByName("day");
function countDays(){
	dayCounter = 0;
	for (var c of check){
		if (c.checked === true){
			dayCounter++;
			c.classList.add("clicked");
		}
		else{
			c.classList.remove("clicked");
		}
	}
	calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear = document.getElementById("clear-button");

let reset = function(){
	location.reload() ;
	calculatedCost.innerHTML = "0";
	dayCounter=0;
};
clear.addEventListener("click", reset);

/********* change rate *********/

function changeRate(a, b){
	a.classList.add("clicked");
	b.classList.remove("clicked");
	if (a.id === "half"){
		rate=20;
	}
	else{
		rate= 35;
	}
	//calculate();
}

// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let half = document.getElementById("half");
let full = document.getElementById("full");
let h = changeRate(half, full);
let f = changeRate(full, half);

half.addEventListener("click", h);
full.addEventListener("click", f);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
	calculatedCost.innerHTML = rate * dayCounter;
}

for (var c of check){
	c.addEventListener = ("change", countDays);
	console.log("days="+dayCounter);
}
console.log("rate="+rate);
