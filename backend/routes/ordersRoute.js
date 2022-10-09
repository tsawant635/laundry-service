// get post and delete orders only loged in user can do
const router = require("express").Router();
const orders = require("../models/orderModel");
let orderIdString = "OR";
let orderIdModel = require("../models/orderId");


// getting all orders
router.get('/', async (req, res) => {
  try {
    const data = await orders.find({ user: req.user });
    res.status(200).json({
      status: "success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: error.message
    })
  }
})

//deleting order
router.delete('/:id', async (req, res) => {
  try {
    const data = await orders.deleteOne({ orderid: req.params.id });
    if (data === null) {
      return res.status(500).json({
        status: "failure",
        message: "no orders found"
      })
    }
    res.status(200).json({
      status: "success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: error.message
    })
  }
})



router.post('/', async (req, res) => {
  try {
    const id = await orderIdModel.findOne({ _id: "6329931ec2ef4d95d27b8e6e" });
    const data = await orders.create({
      totalItems: req.body.totalItems,
      orderDate: String(new Date()),
      totalPrice: req.body.totalPrice,
      status: req.body.status,
      orderid: orderIdString + id.orderid,
      user: req.user,
      StoreInformation: req.body.StoreInformation,
      Orders: req.body.Orders
    })

    const newId = await orderIdModel.updateOne({ _id: "6329931ec2ef4d95d27b8e6e" }, { orderid: id.orderid + 1 });
    res.status(200).json({
      status: "success",
      // OrderData: data
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failure",
      message: error.message
    })
  }
})
module.exports = router;