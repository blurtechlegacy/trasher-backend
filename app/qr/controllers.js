const qr = require('./model');
const repository = require('./repository');

const generateText = (qrObj) =>
  `type=litterbag;count=${qrObj.count};v=${qrObj.version};id=${qrObj.id};tag=${qrobj.tag};`;

exports.createQrBulk = async (req, res) => {
  const count = req.body.size;
  const param = req.body.bagParam;
  let dataList = new Array(count);
  dataList.fill(new qr({
    version: param.version,
    tag: param.tag,
    count: param.count
  }));
  await repository.saveCodes(dataList, (err, list) => {
    if (err) {
      return res.validationError(err);
    }
    return res.success(list);
  });
};

exports.getLitterOfUser = async (req, res) => {
  let litter = await repository.getLitterOfUser(req.user.id);
  return res.success(litter);
};

exports.getLitterOfStorage = (req, res) => {

};

