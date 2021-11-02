import React from 'react';

import CheckoutItem from '../checkout-item/checkout-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../../Redux/cart/cart.selector';
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
	StripeCheckoutButtonContainer,
} from './checkout.styles';

function CheckoutPage({ cartItems, total }) {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map((cartItem) => (
				<CheckoutItem cartItem={cartItem} key={cartItem.id} />
			))}
			<TotalContainer>
				<span>TOTAL: ${total}</span>
			</TotalContainer>
			<StripeCheckoutButtonContainer price={total} />
			<WarningContainer>
				** Please use the following test credit card for payment **
				<br />
				4242 4242 4242 4242 - EXP 01/22 - CVC - 123
			</WarningContainer>
		</CheckoutPageContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
