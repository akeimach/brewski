const router = require("express").Router();
const vision = require("node-cloud-vision-api");

vision.init({ auth: process.env.VISION_API_KEY });

// Matches with "/api/vision"
router.post("/", (req, res) => {
  
  let imageData = req.body.imageData;
  let format = "url";
  if (imageData.match(/^data:/)) format = "base64"; 
  const request = new vision.Request({
    // if [format] is string or base64, set imageData as value
    image: new vision.Image({ [format]: imageData }),
    features: [
      new vision.Feature("TEXT_DETECTION", 10),
      new vision.Feature("LOGO_DETECTION", 10),
      new vision.Feature("WEB_DETECTION", 10)
    ]
  });
  vision.annotate(request)
  .then((visionResult) => {
    let response = {
      logoDescription: "",
      textDescription: "",
      webDescription: ""
    }
    if (visionResult.responses[0].logoAnnotations) {
      response.logoDescription = visionResult.responses[0].logoAnnotations[0].description;
    }
    if (visionResult.responses[0].fullTextAnnotation) {
      response.textDescription = visionResult.responses[0].fullTextAnnotation.text;
    }
    if (visionResult.responses[0].webDetection) {
      response.webDescription = visionResult.responses[0].webDetection; //store bestGuessLabels and webEntities
    }
    console.log("Sending vision route response: \n" + response.logoDescription + "\n" + response.textDescription + "\n" + response.webDescription);
    res.json(response);
  })
  .catch((error) => {
    console.log("Error: ", error)
  });
});

module.exports = router;