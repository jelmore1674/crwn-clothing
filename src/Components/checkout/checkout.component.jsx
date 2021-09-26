import React from 'react';

import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import {
	selectCartItems,
	selectCartTotal,
} from '../../Redux/cart/cart.selector';

function CheckoutPage({ cartItems, total }) {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem cartItem={cartItem} key={cartItem.id} />
			))}
			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
			<StripeCheckoutButton price={total} />
			<div className='test-warning'>
				** Please use the following test credit card for payment **
				<br />
				4242 4242 4242 4242 - EXP 01/22 - CVC - 123
			</div>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
