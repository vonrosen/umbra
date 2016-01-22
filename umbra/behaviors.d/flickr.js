// vim:set sw=8 et:

var UMBRA_TIME_TO_WAIT_BEFORE_CLICK_PHOTOSTREAM = 10000;
var UMBRA_TIME_TO_WAIT_FOR_PAGE_LOAD = 5000;
var UMBRA_PHOTOSTREAM_CLICK_LIMIT = 100;
var clicksCompleted = 0;

setInterval(function() {	
	if (clicksCompleted > UMBRA_PHOTOSTREAM_CLICK_LIMIT) return;
	
	window.scrollBy(0,50); 
}, 100);

setTimeout(function() { 
	//click on first photo in photo-stream
	var firstPhoto = document.querySelector(".overlay")
	
	if (firstPhoto) {
		firstPhoto.click();
		
		setTimeout(function() {
			setInterval(function() {
				if (clicksCompleted > UMBRA_PHOTOSTREAM_CLICK_LIMIT) return;
				
				var nextButton = document.querySelector(".navigate-target.navigate-next")
				if (nextButton) {
					nextButton.click();
					clicksCompleted++;
				}
			}, 1000);
		}, UMBRA_TIME_TO_WAIT_FOR_PAGE_LOAD);
	}
	
	
}, UMBRA_TIME_TO_WAIT_BEFORE_CLICK_PHOTOSTREAM);

//Called from outside of this script.
var umbraBehaviorFinished = function() {
	return (clicksCompleted > UMBRA_PHOTOSTREAM_CLICK_LIMIT);
}