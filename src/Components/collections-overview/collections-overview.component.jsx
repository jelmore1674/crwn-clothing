import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
