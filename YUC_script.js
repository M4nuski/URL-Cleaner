//YouTube URL Cleaner v1.0
//Background Script

var CleaningEnabled = false;
var LastUpdateTime = 0;

chrome.storage.sync.get( 'YUC_Enabled' , loadOptions);

chrome.webRequest.onBeforeRequest.addListener(	cleanURL,  
												{urls: ["*://www.youtube.com/*"]},
												["blocking"]);
																								
function loadOptions( value ) {
	CleaningEnabled = value.YUC_Enabled;
	LastUpdateTime = new Date().getTime();
};

function lazyOptionUpdate() {

	if ( (new Date().getTime() - LastUpdateTime) > 2000 ) {
		chrome.storage.sync.get( 'YUC_Enabled' , loadOptions);
	}
};

function cleanURL( request ) {
	if ((request.url != null) & CleaningEnabled) {
		var listPos = request.url.search("&list=");
		if (listPos > -1) {
			var newURL = request.url.substr(0, listPos);	
			return {redirectUrl: newURL };
		}
	}
	lazyOptionUpdate();
};

