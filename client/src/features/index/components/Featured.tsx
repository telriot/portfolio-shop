//  ======================================== IMPORTS
import React, { FC } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts, selectProducts } from '../indexSlice';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
//  ======================================== COMPONENT
const Featured: FC = () => {
	//  ======================================== HOOKS
	const dispatch = useDispatch();
	//  ======================================== STATE
	const products = useSelector(selectProducts);
	const renderedItems = products?.data.map((product) => (
		<Grid key={product.id} item xs={12} sm={6} md={4}>
			<ProductCard product={product} />
		</Grid>
	));
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	React.useEffect(() => {
		dispatch(fetchFeaturedProducts());
	}, [dispatch]);

	//  ======================================== JSX
	return (
		<div>
			<Header>Featured products</Header>
			<Grid container spacing={3}>
					{renderedItems}
			</Grid>
		</div>
	);
};

//  ======================================== EXPORTS
export default Featured;
//  ========================================
