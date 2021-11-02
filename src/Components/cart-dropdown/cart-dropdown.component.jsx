import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import {
	CartDropdownButton,
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const handleGoToCheckout = () => {
		history.push('./checkout');
		dispatch(toggleCartHidden());
	};

	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessageContainer>
						Your cart is empty.
					</EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CartDropdownButton onClick={handleGoToCheckout}>
				GO TO CHECKOUT
			</CartDropdownButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
