import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchAllProductsRequest, actLoadMore } from '../actions/index';
import Products from '../components/Products/Products';

class ProductsContainer extends Component {
  componentDidMount() {
    const { products } = this.props;
    this.props.fetchAllProducts(products);
  }

  async componentDidUpdate(preProps, preState) {
    const {
      products: { limit, keyword },
    } = this.props;
    const {
      products: { limit: preLimit, keyword: preKeyword },
    } = preProps;
    if (preLimit !== limit || preKeyword !== keyword) {
      const { history } = this.props;
      history.push({
        ...history.location,
        search: keyword ? `?keyword=${keyword}` : '',
      });
      this.props.fetchAllProducts(this.props.products);
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
