chrome.app.runtime.onLaunched.addListener(function() { 
  chrome.app.window.create("index.html", { 
    frame: "chrome", bounds: { width: 500, height: 900}, minWidth:500, minHeight: 900 
  }); 
}); 
chrome.commands.onCommand.addListener(function(command) { 
  console.log("Command triggered: " + command); 
  if (command == "cmdNew") { 
    chrome.app.window.create("index.html", { 
      frame: "chrome", bounds: { width: 500, height: 900}, minWidth:500, minHeight: 900 
    }); 
  } 
});
