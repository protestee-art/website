import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      size: this.props.product.availableSizes[0],
    };
  }

  handleAddProduct = () => {
    const { product, size } = this.state;
    product.size = size;
    product.id = product.id + product.size;
    this.props.addProduct(product);
  }

  handleSizeChange = (size) => {
    this.setState({size});
  }

  render () {

    const { product } = this.state;

    product.quantity = 1;

    let formattedPrice = formatPrice(product.price, product.currencyId);

    let productInstallment;

    if (!!product.installments) {
      const installmentPrice = product.price / product.installments;

      productInstallment = (
        <div className="installment">
          <span>or {product.installments} x</span>
          <b>
            {product.currencyFormat}
            {formatPrice(installmentPrice, product.currencyId)}
          </b>
        </div>
      );
    }

    return (
      <div
        className="shelf-item"
        data-sku={product.sku}
      >
        {product.isFreeShipping && (
          <div className="shelf-stopper">Free shipping</div>
        )}
        <Thumb
          classes="shelf-item__thumb"
          // src={require(`../../../../static/productgs/${product.sku}_1.jpg`)}
          alt={product.title}
        />
        <p className="shelf-item__title">{product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            <small>{product.currencyFormat}</small>
            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
          </div>
          <select name="size" onChange={(e)=>{this.handleSizeChange(e.target.value)}}> 
            {product.availableSizes.map((size) => <option value={size}>{size}</option> )}
          </select>
          {productInstallment}
        </div>
        <div 
          className="shelf-item__buy-btn"
          onClick={this.handleAddProduct}
        >Add to cart</div>
      </div>
    );
  }
};

export default connect(
  null,
  { addProduct }
)(Product);
