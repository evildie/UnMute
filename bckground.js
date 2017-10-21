//chrome.windows.onFocusChanged.addListener(function () {
	
	chrome.tabs.onHighlighted.addListener(function () {
		// MUTE other tabs
		chrome.tabs.query({
			'highlighted': false,		// un focus tab
			'muted':false,				// unmute tab
			'audible':true,				// but who can make sound
			'currentWindow':undefined,	// every windows
			'pinned':false,				// not pinned tab
		}, function (tabs) {
				for (var i = 0; i<=tabs.length; ++i)
				{
					console.log(tabs[i]);
					if(tabs[i].audible)
					{
						console.log(tabs[i]);
						chrome.tabs.update(tabs[i].id, {'muted':true,});
					}
				}
			}
		);
		
		// UnMUTE Current tab
		chrome.tabs.query({
			'highlighted': true,		// focus tab
			'muted':true,				// mute tab
			'audible':true,				// but who can make sound
			'currentWindow':undefined,	// every windows
			'pinned':false,				// not pinned tab
		}, function (tabs) {
				for (var i = 0; i<=tabs.length; ++i)
				{
					console.log(tabs[i]);
					if(tabs[i].audible)
					{
						console.log(tabs[i]);
						chrome.tabs.update(tabs[i].id, {'muted':false,});
					}
				}
			}
		);	
	});
//});
