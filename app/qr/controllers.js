const qr = require('./model');
const repository = require('./repository');

const userRepository = require('../user/repository');

const generateText = (qrObj) =>
  `{type:litterbag,count:${qrObj.count},v:${qrObj.version},id:${qrObj.id},tag:${qrobj.tag}}`;

exports.createQrBulk = async (req, res) => {
  const count = req.body.size;
  const param = req.body.bagParam;
  let dataList = [];
  for (let i=0; i<count; i++) {
    dataList.push(new qr({
      version: param.version,
      tag: param.tag,
      count: param.count
    }));
  }
  await repository.saveCodes(dataList, (err, list) => {
    if (err) {
      return res.validationError(err);
    }
    return res.success(list);
  });
};

exports.scan = async (req, res) => {
  const data =  {
    id: req.body.parcelId,
    count: req.body.count,
    tag: req.body.tag
  };
  let bags = await repository.getBags(data);
  if (!bags) {
    return res.notFound();
  }
  req.user.bags += bags.count;
  await user.save();
  await repository.expire(bags);
  return res.success(req.user.bags);
};

