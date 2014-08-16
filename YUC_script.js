
function CleanURL( request ) {
	if (request.url != null) {
		var listPos = request.url.search("&list=");
		if (listPos > -1) {
			var newURL = request.url.substr(0, listPos);	
			return {redirectUrl: newURL };
		}
	}
};

chrome.webRequest.onBeforeRequest.addListener( CleanURL,  {urls: ["*://www.youtube.com/*"]},  ["blocking"]); // , { urls: ["*//www.youtube.com/*"] }, ["blocking"]  );