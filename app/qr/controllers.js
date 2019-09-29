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
      amount: param.count
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
    amount: req.body.amount,
    tag: req.body.tag
  };
  console.log(data);
  let bag = await repository.getBag(data);
  if (!bag) {
    return res.notFound();
  }
  console.log(bag);
  let user = req.user;
  console.log(user);
  await userRepository.addBags(user, bag.amount);
  await repository.expire(bag);
  return res.success(user.bags);
};

