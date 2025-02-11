import React from "react";
import "../styles/pages/Cart.scss";
import QuantityBtn from "../components/common/QuantityBtn";
import icon_empty_cart from "../assets/images/cart-page/aww.png"; // Update the path to the correct location

type Props = {
  cartProducts: any[];
  quantities: number[];
  totalPrice: number;
  handleRemoveProduct: (productId: number) => void;
  setQuantities: (quantities: number[]) => void;
  setTotalPrice: (price: number) => void;
};

const CartPage = ({
  cartProducts,
  quantities,
  totalPrice,
  handleRemoveProduct,
  setQuantities,
  setTotalPrice,
}: Props) => {
  // handle quantity change
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);

    const newTotalPrice = cartProducts.reduce(
      (total, product, idx) => total + product.price * newQuantities[idx],
      0
    );
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-wrapper">
        {/* cart inner */}
        <div className="cart-inner">
          {Array.isArray(cartProducts) && cartProducts.length === 0 ? (
            <div className="empty-cart-message">
              <img src={icon_empty_cart} alt="Empty Cart" />
              <p>Your cart is empty.</p>
              <a href="/store">discover more</a>
            </div>
          ) : (
            <div className="cart-contain">
              {Array.isArray(cartProducts) &&
                cartProducts.map((product, index) => (
                  <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                      <div className="part-1">
                        <div className="name">{product.name}</div>
                        <div className="brand">
                          <span>Brand:</span>
                          {product.brand}
                        </div>
                        <div className="guarantee">
                          <span>Guarantee:</span>
                          {product.guarantee}
                        </div>
                      </div>
                      <div className="part-2">
                        <div className="price">${product.price.toFixed(2)}</div>
                        {/* quantity btn */}
                        <div className="quantity-toggle">
                          <QuantityBtn
                            showTitle={false}
                            initialQuantity={quantities[index]}
                            onQuantityChange={(newQuantity) =>
                              handleQuantityChange(index, newQuantity)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {/* remove btn */}
                    <div
                      className="remove-toggle"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <span className="fluent--delete-48-regular"></span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        {/* checkout contain */}
        {cartProducts.length > 0 && (
          <div className="checkout-contain">
            <div className="total-price">
              <h2>Total:</h2>
              <h2 className="price">${totalPrice.toFixed(2)}</h2>
            </div>
            <p className="total-items">{cartProducts.length} Items</p>
            <button className="proceed-checkout">Proceed to checkout</button>
            <div className="discount">
              <input type="text" placeholder="Discount code" />
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
