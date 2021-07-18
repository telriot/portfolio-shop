//  ======================================== IMPORTS
import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Product } from 'storeTypes';
const useStyles = makeStyles(() =>
	createStyles({
		img: {
			height: '100%'
		},
		imgContainer: {
			height: '100%'
		}
	})
);
//  ======================================== COMPONENT
interface ProductImageProps {
	product: Product;
}
const ProductImage: FC<ProductImageProps> = ({ product }) => {
	//  ======================================== HOOKS
	const classes = useStyles();
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div className={classes.imgContainer}>
			<img className={classes.img} alt={product.name} src={product.imageSrc} />
		</div>
	);
};

//  ======================================== EXPORTS
export default ProductImage;
//  ========================================
