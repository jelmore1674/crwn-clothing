import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import './cart-drowpdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
