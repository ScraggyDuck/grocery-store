import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/client/Cart';
import {
  actIncreaseQuantity,
  actDecreaseQuantity,
  actDeleteProduct,
} from '../actions/cartActions';

class CartContainer extends Component {
  render() {
    const { cart, increase, decrease, deleteProduct } = this.props;
    return (
      <Cart
        cart={cart}
        increase={increase}
        decrease={decrease}
        deleteProduct={deleteProduct}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch(actIncreaseQuantity(id)),
  decrease: (id) => dispatch(actDecreaseQuantity(id)),
  deleteProduct: (id) => dispatch(actDeleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
