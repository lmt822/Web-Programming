// Mengtian Li
// lab.js
// for Json
function parse(){
	xhr = new XMLHttpRequest();
	xhr.open("get", "data.json", true);
	xhr.onreadystatechange = myCallBackFunc;
	xhr.send();
	function myCallBackFunc(){
		if (xhr.readyState == 4 && xhr.status == 200){
			data = JSON.parse(xhr.responseText);
			var newHTML = data[0].content + data[0].username + "<br>" + data[1].content + data[1].username;
			document.getElementById("messages").innerHTML = newHTML;	
		}
		
	}
}
