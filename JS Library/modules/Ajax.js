/* El.ajax
 *
 * Basic AJAX call for pulling external data into the DOM
 *
 * Parameters:
 * -Method ("GET"/"POST")
 * -URL (data path)
 * -Async (true/false)
 * -Fn (element to receive the new data)
 *
 * Requires: Core.js
 */
	
	El.ajax = function(Method,URL,Async,Fn){
		if (testParam(Method) && testParam(URL) && testParam(Async) && testParam(Fn)){ // All parameters must be defined
			var xmlhttp;
			if (window.XMLHttpRequest){
				xmlhttp = new XMLHttpRequest(); // Modern browsers
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Older IE
			}
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 304)){
					Fn.innerHTML = xmlhttp.responseText;
				}
			};
			xmlhttp.open(Method,URL,Async);
			xmlhttp.send(null);
		} else {
			throw new Error("Please define 'GET'/'POST', the URL, Async true/false, and the function to be ran if successful.");
		}
	};