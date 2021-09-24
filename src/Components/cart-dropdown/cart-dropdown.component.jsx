import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import './cart-drowpdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history }) => {
	const handleGoToCheckout = () => {
		history.push('./checkout');
	};

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty.</span>
				)}
			</div>
			<CustomButton onClick={handleGoToCheckout}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
