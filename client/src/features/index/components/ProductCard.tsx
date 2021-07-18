//  ======================================== IMPORTS
import React, { FC } from 'react';
import { Product } from 'storeTypes';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { formatPrice } from 'utils/format/formatPrice';
import { useHistory } from 'react-router';
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex'
		},
		title: {
			textAlign: 'center'
		},
		description: {
			textAlign: 'center'
		},
		price: {
			textAlign: 'center'
		}
	})
);

//  ======================================== COMPONENT

interface ProductCardProps {
	product: Product;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
	//  ======================================== HOOKS
	const classes = useStyles();
    const history = useHistory()
	//  ======================================== STATE
	//  ======================================== HANDLERS
	const goToDetail = () => {
		history.push(`/product/${product.id}`);
	};

	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<Card elevation={0}>
			<CardActionArea onClick={goToDetail}>
				<CardMedia
					component='img'
					alt={product.name}
					height='200'
					image={product.imageSrc}
					title={product.name}
				/>
				<CardContent>
					<Typography
						className={classes.title}
						gutterBottom
						variant='h5'
						component='h2'>
						{product.name}
					</Typography>
					<Typography
						className={classes.description}
						variant='body2'
						color='textSecondary'
						component='p'>
						{product.description}
					</Typography>
					<Typography className={classes.price} variant='body1' component='p'>
						{formatPrice(product.price)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

//  ======================================== EXPORTS
export default ProductCard;
//  ========================================
