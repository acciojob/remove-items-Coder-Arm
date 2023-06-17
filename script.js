//your JS code here. If required.
const btn = document.getElementById("btn");
function callme(){
		const selectElement = document.getElementById("colorSelect");
	//total options
     let selectOptions = selectElement.options;
	//selected option
     let selected = selectOptions.selectedIndex;
	//remove selected option
	selectElement.remove(selected);
}
btn.addEventListener("click",callme);