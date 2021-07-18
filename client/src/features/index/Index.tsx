//  ======================================== IMPORTS
import React, { FC } from 'react';
import Layout from 'features/layout/Layout';
import BaseContainer from 'features/common/BaseContainer';
import Featured from './components/Featured'
import Image from 'features/common/Image';
import {
	bannerSm,
	bannerSmWebp,
	bannerMd,
	bannerMdWebp,
	bannerLg,
	bannerLgWebp,
	bannerXl,
	bannerXlWebp
} from 'assets/images';
import Box from '@material-ui/core/Box';
//  ======================================== COMPONENT
const Index: FC = () => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<Layout>
			<Box maxHeight='500px' overflow='hidden'>
				<Image
					alt='Main banner, white tshirt detail'
					src={bannerLg}
					webp={bannerLgWebp}
					srcSet={`${bannerSm} 600w, ${bannerMd} 1000w, ${bannerLg} 2000w, ${bannerXl} 4000w`}
					webpSrcSet={`${bannerSmWebp} 600w, ${bannerMdWebp} 1000w, ${bannerLgWebp} 2000w, ${bannerXlWebp} 4000w`}
				/>
			</Box>

			<BaseContainer>
				<Featured/>
			</BaseContainer>
			<Box maxHeight='500px' overflow='hidden'>
				<Image
					alt='Main banner, white tshirt detail'
					src={bannerLg}
					webp={bannerLgWebp}
					srcSet={`${bannerSm} 600w, ${bannerMd} 1000w, ${bannerLg} 2000w, ${bannerXl} 4000w`}
					webpSrcSet={`${bannerSmWebp} 600w, ${bannerMdWebp} 1000w, ${bannerLgWebp} 2000w, ${bannerXlWebp} 4000w`}
				/>
			</Box>
		</Layout>
	);
};

//  ======================================== EXPORTS
export default Index;
//  ========================================
