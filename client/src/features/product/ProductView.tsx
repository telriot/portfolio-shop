//  ======================================== IMPORTS
import React, { FC } from 'react';
import Layout from 'features/layout/Layout';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectProduct } from './productSlice';
import BackButton from './components/BackButton';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BaseContainer from 'features/common/BaseContainer';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
//  ======================================== COMPONENT
const useStyles = makeStyles(() =>
	createStyles({
		grid: {
			height: '70vh'
		}
	})
);
const ProductView: FC = () => {
	//  ======================================== HOOKS
	const { id } = useParams() as { id: string };
	const classes = useStyles();
	const dispatch = useDispatch();
	const product = useSelector(selectProduct);
	console.log(id);
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	React.useEffect(() => {
		id && dispatch(fetchProduct(id));
	}, [dispatch, id]);
	//  ======================================== JSX
	return (
		<Layout>
			<BaseContainer>
				<BackButton />
				{product.data ? (
					<Grid container spacing={6} className={classes.grid}>
						<Grid item xs={12} md={5}>
							<ProductImage product={product.data} />
						</Grid>
						<Grid item xs={12} md={7}>
							<ProductDetails product={product.data} />
						</Grid>
					</Grid>
				) : (
					<div>Loading...</div>
				)}
			</BaseContainer>
		</Layout>
	);
};

//  ======================================== EXPORTS
export default ProductView;
//  ========================================
