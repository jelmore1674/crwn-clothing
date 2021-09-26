import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/shop/shop.selector';
import CollectionItem from '../../Components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className='category'>
			<h2>Collection Page</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
