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
		document.getElementById("messages").innerHTML = data[0].content + data[0].username + <br> + data[1].content + data[1].username";
	}
}
