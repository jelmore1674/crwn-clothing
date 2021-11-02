import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selector';
import {
	CartIconContainer,
	ItemCountContainer,
	ShoppingIconContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
