/* $.ajax()
 *
 * Basic AJAX call for pulling external data into the DOM
 *
 * Parameters:
 * -Method ("GET"/"POST")
 * -URL (data path)
 * -Async (true/false)
 * -Callback (function to invoke if successful)
 */
	
	var xmlhttp;
	
	$.ajax = function(method,url,async,callback){
		if (testParam(method) && testParam(url) && testParam(async) && testParam(callback)){ // All parameters must be defined
			xmlhttp = new XMLHttpRequest(); // Modern browsers
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 304)){
					callback();
				}
			};
			xmlhttp.open(method,url,async);
			xmlhttp.send();
		} else {
			throw new Error("Please define 'GET'/'POST', the URL, Async true/false, and the function to be ran if successful.");
		}
		return xmlhttp;
	};