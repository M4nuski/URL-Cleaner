//URL Cleaner for YouTube™ v1.0
//Options Script

var InfoText = document.getElementById("InfoText");
var EnabledCheckBox = document.getElementById("EnabledCheckBox");

chrome.storage.sync.get( 'YUC_Enabled' , loadOptions);
EnabledCheckBox.addEventListener("click", changeOptions);

function changeText() {
	if (EnabledCheckBox.checked) {
		InfoText.innerHTML = "Playlists will not be loaded.";
	} else InfoText.innerHTML = "YouTube™ works as usual.";
};

function loadOptions( value ) {
	EnabledCheckBox.checked = value.YUC_Enabled;
	changeText();
};

function changeOptions(){
	changeText();	
	chrome.storage.sync.set({'YUC_Enabled': EnabledCheckBox.checked}, function() {} );
};
