import React from 'react';
import { addItem } from '../../Redux/cart/cart.actions';
import { connect } from 'react-redux';
import {
	PriceContainer,
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	CollectionItemContainer,
	NameContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage className='image' imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				ADD TO CART
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
