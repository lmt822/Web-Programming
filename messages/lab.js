// Mengtian Li
// lab.js
// for Json
function parse(){
	xhr = new XMLHttpRequest();
	xhr.open("get", "data.json", true);
	xhr.onreadystatechange = myCallBackFunc;
	xhr.send();
	function myCallBackFunc(){
		data = JSON.parse(xhr.responseText);
		document.getElementById("messages").innerHTML = xhr.responseText.content;
	}
}
