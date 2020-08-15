import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchAllProductsRequest, actLoadMore } from '../actions/index';
import Products from '../components/Products/Products';

class ProductsContainer extends Component {
  componentDidMount() {
    const {
      products: { limit },
    } = this.props;
    this.props.fetchAllProducts(limit);
  }

  async componentDidUpdate(preProps, preState) {
    const { products } = this.props;
    if (preProps.products.limit !== products.limit) {
      this.props.fetchAllProducts(products.limit);
    }
  }

  render() {
    const { products, loadMore } = this.props;
    return <Products products={products.data} loadMore={loadMore} />;
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: (limit) => dispatch(actFetchAllProductsRequest(limit)),
  loadMore: () => dispatch(actLoadMore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
