/**
 * ajax()
 *
 * Basic AJAX call for pulling external data into the DOM and sending data to external servers
 *
 * Parameter - to be programmed as an object with the following properties:
 * -method ("GET"/"POST")
 * -url (data path)
 * -async (true/false)
 * -success (callback to invoke if successful)
 * -header (adds a custom HTTP header to the request)
 * -headerValue (value of the custom HTTP header)
 * -sendStr (string to be sent for POST requests)
 */
	
	$.ajax = function(_obj) {
		
		var method, url, async, success, header, headerValue, sendStr, xmlhttp;
		
		function prop(_property) {
			return _obj.hasOwnProperty(_property);
		};
		
		if (_obj && typeof _obj === "object") {
			
			method   = (prop("method"))   ? _obj.method   : null;
			url      = (prop("url"))      ? _obj.url      : null;
			async    = (prop("async"))    ? _obj.async    : true;
			success  = (prop("success"))  ? _obj.success  : null;
			sendStr  = (prop("str"))      ? _obj.sendStr  : null;
			
		}
		
		else {
			throw new Error("Ajax request cannot be sent.");
		}
		
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				success(xmlhttp);
			}
		};
		xmlhttp.open(method, url, async);
		
		if (prop("header") && prop("headerValue")) {
			xmlhttp.setRequestHeader(header, headerValue);
		}
		
		else {
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		}
		
		xmlhttp.send(sendStr);
		return xmlhttp;
	};
