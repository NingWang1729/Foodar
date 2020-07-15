function verify_form() {
	var state = document.getElementById("state");
	if (state.value == "") {
		alert("The state should not be blank");
		return false;
	} else {
		alert("Thank you for registering with Foodar!");
		return true;
	}
}
function clear_form() {
	alert("Form reset!");
}

function input_color(address) {
	var input = document.getElementById(address);
	input.value = "";
	input.style.color = "black";
}

function order_cost(reset) {
	if (reset) {
		var total = document.getElementById("order_cost");
		total.innerHTML = "Your order costs:";
		alert("Order Reset!");
		return;
	}
	console.log("Conducting order cost calculations");
	var cost = 0.00;
	var food_menu = document.getElementsByTagName("input");
	for (var i = 0; i < food_menu.length; i++) {
		if (food_menu[i].id == "shrimp_skewers" && food_menu[i].checked == true) {
			console.log("Checking skewers");
			cost = 8.00;
		} else if (food_menu[i].id == "pizza" && food_menu[i].checked == true) {
			console.log("Checking pizza");
			cost = 12.00;
		} else if (food_menu[i].id == "burger_and_fries" && food_menu[i].checked  == true) {
			console.log("Checking borger");
			cost = 10.00;
		} 
		if (food_menu[i].id == "small"  && food_menu[i].checked == true) {
			console.log("Adding small tip");
			cost *= 1.05;
		} else if (food_menu[i].id == "medium"  && food_menu[i].checked == true) {
			console.log("Adding medium tip");
			cost *= 1.15;
		} else if (food_menu[i].id == "large"  && food_menu[i].checked == true) {
			console.log("Adding large tip");
			cost *= 1.25;
		}
	}
	console.log(cost);
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
  		currency: 'USD',
  		minimumFractionDigits: 2
	})
	var total = document.getElementById("order_cost");
	total.innerHTML = "Your order costs: " + formatter.format(cost);
}

function open_ad() {
			var header = document.getElementsByTagName("header");
			console.log(header[0]);

			var ad = document.createElement("p");
			ad.style.textAlign = "center";
			ad.style.backgroundColor = "green";
			ad.class = "advertisement";
			ad.style.marginTop = "0px";

			var close = document.createElement("button");
			close.type = "button";
			close.addEventListener("click", close_ad);
			close.innerHTML = "x";
			close.style.marginLeft = "99%";
			// close.style.borderWidth = "0px";
			// close.borderColor = "none";


			var bold = document.createElement("b");
			var link = document.createElement("a");
			link.style.paddingTop = "2px";
			link.style.paddingBottom = "2px";
			link.id = "home_page";
			link.href = "index.html";
			link.class = "home_redirect";
			link.innerHTML = "Free Food Delivery Services Near You!";
			bold.appendChild(link);
			ad.appendChild(bold);


			header[0].insertBefore(ad, header[0].childNodes[0]);
			header[0].insertBefore(close, header[0].childNodes[0]);
		}

function close_ad() {
	alert("Here we go again");
	var header = document.getElementsByTagName("header");
	header[0].removeChild(header[0].childNodes[0]);
	header[0].removeChild(header[0].childNodes[0]);
}
