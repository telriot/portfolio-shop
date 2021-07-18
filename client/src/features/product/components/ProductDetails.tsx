//  ======================================== IMPORTS
import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Product } from 'storeTypes';
import { formatPrice } from 'utils/format/formatPrice';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Button from 'features/common/BaseButton';
import MenuItem from 'features/common/BaseMenuItem';
import Select from 'features/common/BaseSelect';
import { useEffect } from 'react';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-end'
		}
	})
);
//  ======================================== COMPONENT
interface ProductDetailsProps {
	product: Product;
}
const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	//  ======================================== HOOKS
	const classes = useStyles();


	//  ======================================== STATE
	const [size, setSize] = useState('');
	const [quantity, setQuantity] = useState('');
	const [sizeOptions, setSizeOptions]=useState<React.ReactNodeArray>([])
	const [quantityOptions, setQuantityOptions] = React.useState<
		Record<string, React.ReactNodeArray>
	>({});
	// const [quantityOptions, setQuantityOptions] = useState<React.ReactNodeArray>([])
	//  ======================================== HANDLERS
	const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) =>
		setSize(event.target.value as string);
	const handleQuantityChange = (event: React.ChangeEvent<{ value: unknown }>) =>
		setQuantity(event.target.value as string);
	//  ======================================== EFFECTS

	useEffect(() => {
		let initialSize:string
		const buildSizeOptions = Object.entries(product.stock).map(([key, value]) => {
			return (
				<MenuItem disabled={!value} key={`${product.id} ${key}`} value={key}>
					{key.toUpperCase()}
				</MenuItem>
			);
		});
		const buildOptionsObj = () => {
			const options: Record<string, React.ReactNodeArray> = {};
			Object.entries(product.stock).forEach(([key,value]) => {
				const max = value < 8 ? value : 8;
				if(!initialSize && value){
					initialSize = key
				}
				for (let i = 1; i <= max; i++) {
					if (!options[key]) {
						options[key] = [];
					}
					options[key].push(
						<MenuItem key={`${product.id}-${key}-${i}`} value={i}>
							{i}
						</MenuItem>
					);
				}
			});
			return options;
		};
		setSizeOptions(buildSizeOptions)
		setQuantityOptions(buildOptionsObj());
		setSize(initialSize)
		setQuantity('1')
	}, [product]);

	//  ======================================== JSX
	return (
		<div className={classes.root}>
			<Typography>{formatPrice(product.price)}</Typography>
			<Typography>{product.name}</Typography>
			<Typography>{product.description}</Typography>
			<FormControl>
				<InputLabel id='size-select-label'>Size</InputLabel>
				<Select
					variant='outlined'
					labelId='size-select-label'
					id='size-select'
					value={size}
					onChange={handleSizeChange}>
					{sizeOptions}
				</Select>
			</FormControl>

			<FormControl>
				<InputLabel id='quantity-select-label'>Qty</InputLabel>
				<Select
					variant='outlined'
					labelId='quantity-select-label'
					id='quantity-select'
					value={quantity}
					onChange={handleQuantityChange}>
					{quantityOptions[size]}
				</Select>
			</FormControl>
			<Button>Add to cart</Button>
		</div>
	);
};

//  ======================================== EXPORTS
export default ProductDetails;
//  ========================================
