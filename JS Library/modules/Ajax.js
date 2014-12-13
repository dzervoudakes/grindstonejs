/**
 * ajax()
 *
 * Basic AJAX call for pulling external data into the DOM and sending data to external servers
 *
 * Parameters - to be programmed as properties of an object:
 * -method ("GET"/"POST")
 * -url (data path)
 * -async (true/false)
 * -success (callback to invoke if successful)
 * -header (adds a custom HTTP header to the request)
 * -headerValue (value of the custom HTTP header)
 * -sendStr (string to be sent for POST requests)
 */
	
	$.ajax = function(obj){
		var method, url, async, success, header, headerValue, sendStr;
		function prop(property){
			return obj.hasOwnProperty(property);
		};
		if (obj && typeof obj === "object"){
			method   = (prop("method"))   ? obj.method   : null;
			url      = (prop("url"))      ? obj.url      : null;
			async    = (prop("async"))    ? obj.async    : true;
			success  = (prop("success"))  ? obj.success  : null;
			sendStr  = (prop("str"))      ? obj.sendStr  : null;
		} else {
			throw new Error("Ajax request cannot be sent.");
		}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				success(xmlhttp);
			}
		};
		xmlhttp.open(method,url,async);
		if (prop("header") && prop("headerValue")){
			xmlhttp.setRequestHeader(header,headerValue);
		} else {
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
		}
		xmlhttp.send(sendStr);
		return xmlhttp;
	};