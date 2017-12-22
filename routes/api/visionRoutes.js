const router = require("express").Router();
const vision = require('node-cloud-vision-api');


//TODO: replace with oauthClient
vision.init({ auth: process.env.VISION_API_KEY });

// Matches with "/api/vision"
router.post("/", (req, res) => {
  
  console.log("In vision router");
  let imageData = req.body.imageData;
  let format = "url";
  if (imageData.match(/^data:/)) format = "base64"; 
  const request = new vision.Request({
    image: new vision.Image({ [format]: imageData }),
    features: [
      new vision.Feature('TEXT_DETECTION', 10),
      new vision.Feature('LOGO_DETECTION', 10),
    ]
  });
  vision.annotate(request)
  .then((visionResult) => {
    // handle response
    let response = {
        logoDescription: "",
        textDescription: ""
    }
    console.log("=======================")
    const logoDescription = visionResult.responses[0].logoAnnotations[0].description;
    console.log(logoDescription);
    response.logoDescription = logoDescription;
    const textDescription = visionResult.responses[0].textAnnotations[0].description;
    console.log(textDescription);
    response.textDescription = textDescription;
    console.log("sending route response");
    res.json(response);
  })
  .catch((error) => {
    console.log('Error: ', error)
  });
});





module.exports = router;