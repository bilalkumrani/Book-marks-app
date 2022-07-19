const Item = require("../Models/ItemSchema");

const getAll = async (req, res) => {
  const items = await Item.find();
  if (!items) {
    return res.json({ error: true, message: "no item found!" });
  } else {
    return res.json(items);
  }
};
module.exports = getAll;
