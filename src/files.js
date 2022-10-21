const fs = require("fs");
const path = require("path");

const file = fs.readdir("./images/gallery-images", function(err, file) {
	var files = Array.from(file);
	console.log(files);
});
const f = {
	logo1: require("./gallery-images/WhatsApp Image 2022-10-19 at 5.40.20 PM (1).jpeg")
		.default,
};
console.log("./images/gallery-images");
// console.log(files);

// module.exports = { files };
