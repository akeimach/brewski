const config = {
  projectId: 'brewski-189517',
  keyFilename: 'brewski-3ffc28c18baa.json'
};

const gcloud = require('google-cloud')(config);
const visionClient = gcloud.vision(config);

module.exports = {
  searchImage: function(req, res) {
    // console.log(req);
    // console.log(req.body);
    const gcsImageUri = 'gs://gapic-toolkit/President_Barack_Obama.jpg';

    const requestsElement = {
      image : { source : {
        gcsImageUri : gcsImageUri
      }
    },
    features : { type : gcloud.vision.v1.types.Feature.Type.FACE_DETECTION }
    };
    visionClient.batchAnnotateImages({requests: requestsElement})
    .then(function(responses) {
      console.log(responses[0]);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}






