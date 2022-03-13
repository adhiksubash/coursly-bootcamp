import Cart from "../models/cart.js";

class CartController {
  getCartByUserId(req, res) {
    const id = req.query?.userId;
    Cart.findOne({ userId: userId })
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }

  storeCart(req, res) {
    const { userId, productId } = req.body;
    const cart = new Cart({
      userId,
      productId
    });
    cart
      .save()
      .then((result) => {
        res
          .status(200)
          .json({ message: "Cart Added Successfully", success: true });
      })
      .catch((err) => {
        res.status(500).json({ message: err, success: false });
      });
  }
}

export default CartController;
