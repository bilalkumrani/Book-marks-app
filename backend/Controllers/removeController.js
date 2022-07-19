const Item = require("../Models/ItemSchema");

const removeController = (req, res) => {
  if (!req.body) {
    return res.json("error");
  } else {
    const { _id } = req.body;
    Item.findByIdAndDelete(_id, () => {
      return res.json("deleted");
    });
  }
};
module.exports = removeController;
