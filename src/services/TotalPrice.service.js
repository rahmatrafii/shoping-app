export const TotalPrice = (cart) => {
  let totalPrice = 0;
  cart.map((item) => {
    const total = item.price * item.quantity;
    totalPrice += total;
  });
  return totalPrice;
};
