import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
	HeaderContainer,
	OptionLink,
	OptionsContainer,
	LogoContainer,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>Shop</OptionLink>
			<OptionLink to='/contact'>Contact</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={() => auth.signOut()}>
					Sign out
				</OptionLink>
			) : (
				<OptionLink to='/signin'>Sign In</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
