import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchAllProductsRequest, actLoadMore } from '../actions/index';
import Products from '../components/client/Products';
import queryString from 'query-string';

class ProductsContainer extends Component {
  componentDidMount() {
    const { products } = this.props;
    this.props.fetchAllProducts(products);
  }

  async componentDidUpdate(preProps, preState) {
    const {
      products: { limit, keyword, category },
    } = this.props;
    const {
      products: { limit: preLimit, keyword: preKeyword, category: preCategory },
    } = preProps;

    if (
      preLimit !== limit ||
      preKeyword !== keyword ||
      category !== preCategory
    ) {
      const { history } = this.props;
      let filters = keyword ? { keyword } : {};
      filters = category ? { ...filters, category } : filters;
      const query = queryString.stringify(filters);
      history.push({
        ...history.location,
        search: query,
      });
      this.props.fetchAllProducts(this.props.products);
    }
  }

  render() {
    const { products, loadMore } = this.props;
    return (
      <Products
        products={products.data}
        loadMore={loadMore}
        isLoadMore={products.isLoadMore}
        loading={products.loading}
        hasMore={products.hasMore}
      />
    );
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
