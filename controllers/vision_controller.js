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

// Google vision API "post" method
module.exports = {
  searchImage: function(req, res) {
    console.log("In vision controller");
    let imageData = {
      base64: req.body.imageData
    };
    if (isURL(req.body.imageData)) {
      imageData = {
        url: req.body.imageData
      }
    } 
    const request = new vision.Request({
      image: new vision.Image(imageData),
      features: [
        new vision.Feature('TEXT_DETECTION', 10),
        new vision.Feature('LOGO_DETECTION', 10),
      ]
    });
    vision.annotate(request).then((res) => {
      // handle response
      const logoDescription = res.responses[0].logoAnnotations[0].description;
      console.log(logoDescription);
      const textDescription = res.responses[0].textAnnotations[0].description;
      console.log(textDescription);
    }, (e) => {
      console.log('Error: ', e)
    });
  }
};
