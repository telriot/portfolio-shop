import React, { FC, HTMLAttributes } from 'react';
import {
	makeStyles,
	createStyles,
	useTheme
} from '@material-ui/core/styles';

interface IImageProps extends HTMLAttributes<HTMLImageElement> {
	alt: string;
	src: string;
	webp: string;
	srcSet?: string;
	webpSrcSet?: string;
}
const useStyles = makeStyles(() =>
	createStyles({
		image: {
			width: '100%',
			height: '100%',
			objectFit: 'fill',
			backgroundRepeat: 'no-repeat',
			backgroundSize: ' cover',
			transition: 'transform 0.5s ease'
		}
	})
);

const Image: FC<IImageProps> = ({ alt, src, webp, srcSet, webpSrcSet }) => {
	const theme = useTheme();
	const classes = useStyles();
	const buildResponsiveSizes = (breakpoints: Record<string, number>) => {
		const sizes = Object.values(breakpoints).map((value) => {
			const parsedSize = value.toString() + 'px';
			return `(max-width: ${parsedSize}) ${parsedSize} `;
		});
		return sizes.join();
	};
	const sizes = buildResponsiveSizes(theme.breakpoints.values);
	return (
		<picture>
			<source sizes={sizes} srcSet={webpSrcSet || webp} type='image/webp' />
			<img
				className={classes.image}
				alt={alt}
				sizes={sizes}
				srcSet={srcSet || src}
			/>
		</picture>
	);
};

export default Image;
