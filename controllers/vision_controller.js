const vision = require('node-cloud-vision-api');

//TODO: replace with oauthClient
vision.init({ auth: process.env.VISION_API_KEY });


// Google vision API "post" method
module.exports = {
  searchImage: function(req, res) {
    console.log("In vision controller");
    let format = "url";
    if (req.body.imageData.match(/^data:/)) format = "base64"; 
    const request = new vision.Request({
      image: new vision.Image({ [format]: req.body.imageData }),
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
    }, (error) => {
      console.log('Error: ', error)
    });
  }
};
