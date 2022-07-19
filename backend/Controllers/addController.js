const Item = require("../Models/ItemSchema");

const addController = (req, res) => {
  if (!req.body) {
    return res.json("error");
  } else {
    const { name, link } = req.body;
    Item.create({ name, link }, (err) => {
      if (err) {
        return res.json("error");
      } else {
        return res.json("created");
      }
    });
  }
};
module.exports = addController;
