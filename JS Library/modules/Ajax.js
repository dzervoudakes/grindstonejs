/* ajax()
 *
 * Basic AJAX call for pulling external data into the DOM and sending data to external servers
 *
 * Parameters:
 * -method ("GET"/"POST")
 * -url (data path)
 * -async (true/false)
 * -callback (function to invoke if successful)
 * -header (adds an HTTP header to the request)
 * -headerValue (value of the HTTP header)
 * -str (string to be sent for POST requests)
 */
	
	$.ajax = function(obj){
		var method, url, async, callback, header, headerValue, sendStr;
		function prop(property){
			return obj.hasOwnProperty(property);
		};
		if (obj && typeof obj === "object"){
			method   = (prop("method"))   ? obj.method   : null;
			url      = (prop("url"))      ? obj.url      : null;
			async    = (prop("async"))    ? obj.async    : true;
			callback = (prop("callback")) ? obj.callback : null;
			sendStr  = (prop("str"))      ? obj.sendStr  : null;
		} else {
			throw new Error("Ajax request cannot be sent.");
		}
		$.xmlhttp = new XMLHttpRequest();
		$.xmlhttp.onreadystatechange = function(){
			if ($.xmlhttp.readyState == 4 && $.xmlhttp.status == 200){
				callback();
			}
		};
		$.xmlhttp.open(method,url,async);
		if (prop("header") && prop("headerValue")){
			$.xmlhttp.setRequestHeader(header,headerValue);
		}
		$.xmlhttp.send(sendStr);
		return $.xmlhttp;
	};