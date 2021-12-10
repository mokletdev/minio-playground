const fs = require('fs');
const validate = require('validate.js');

const minio = require('../database/minio');
const { CODE } = require('../utils/commons');
const response = require('../utils/response');

const uploadImage = async (req, res) => {
  let result = {};

  try {
    const { files } = req;

    if (validate.isEmpty(files)) {
      return response.error(res, 'File cannot be empty!', CODE.NOT_FOUND);
    }

    const imageBuffer = fs.readFileSync(files.image.path);
    result = await minio.putObject('mokletdev-minio', files.image.name, imageBuffer);

    return response.data(res, result, 'Image has been uploaded.', CODE.SUCCESS)
  }

  catch (err) {
    return response.error(res, 'Fail to upload image!', CODE.INTERNAL_ERROR)
  }
};

module.exports = {
  uploadImage
};
