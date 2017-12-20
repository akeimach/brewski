const vision = require('node-cloud-vision-api');

//TODO: replace with oauthClient
vision.init({ auth: process.env.VISION_API_KEY });

function isURL(imageData) {
  var urlPattern = new RegExp("^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?" + // port
    "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
    "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
  return urlPattern.test(imageData);
}

//Takes a file blob and returns a base64dataURL
function getImageBase64(file, callback) {
    var reader = new FileReader();
    reader.onload = function gotImage(event) {
        var image = event.target.result;
        callback(image)
    };
    reader.readAsDataURL(file);
}

function isBase64image(base64string) {
    var legal = base64string[base64string.length - 1] === "=";
    console.log(legal);
    var base64reg = new RegExp(/data:image\/([a-zA-Z]*);base64,([^\"]*)/);
    var valid = base64reg.test(base64string);
    console.log(valid);
    var image = base64string.search(/data:image/) !== -1;
    console.log(image);
    return (legal && valid && image);
}

// Google vision API "post" method
module.exports = {
  searchImage: function(req, res) {
    console.log("In vision controller");
    console.log(req.body);
    console.log("Client");
    // var files = event.originalEvent.dataTransfer.files;
    let imageData = __dirname + '/38040.jpg';
    if (isURL(req.body.imageData)) {
      imageData = {
        url: req.body.imageData
      }
    } 
    const request = new vision.Request({
      image: new vision.Image(imageData),
      features: [
        new vision.Feature('LABEL_DETECTION', 10),
      ]
    });
    vision.annotate(request).then((res) => {
      // handling response
      console.log(JSON.stringify(res.responses))
    }, (e) => {
      console.log('Error: ', e)
    });
  }
};
