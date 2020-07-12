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