import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './components-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overivew'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
