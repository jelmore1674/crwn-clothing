import React from 'react';

import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../Redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	Image,
	ImageContainer,
	QuantityArrow,
	QuantityContainer,
	TextContainer,
	RemoveButton,
	ValueContainer,
} from './checkout-item';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<Image alt='item' src={imageUrl} />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<QuantityArrow onClick={() => removeItem(cartItem)}>
					&#10094;
				</QuantityArrow>
				<ValueContainer>{quantity}</ValueContainer>
				<QuantityArrow onClick={() => addItem(cartItem)}>
					&#10095;
				</QuantityArrow>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButton onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
