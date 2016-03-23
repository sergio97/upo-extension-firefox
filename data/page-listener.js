var body = document.body.textContent;
// var body = $("body").html()

// console.log("******************************************");
// console.log(body);

// console.log("Emitting message from page-listener...");
self.port.emit("page_body", body);

// console.log("Finished executing page-listener :)");
