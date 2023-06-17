//your JS code here. If required.
const btn = document.getElementById("btn");
function callme(){
		const selectElement = document.getElementById("colorSelect");
	//selected option
     let selected = selectElement.selectedIndex;
	//remove selected option
	selectElement.remove(selected);
}
btn.addEventListener("click",callme);