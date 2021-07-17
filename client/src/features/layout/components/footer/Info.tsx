//  ======================================== IMPORTS
import React, { FC } from 'react';
import Header from './Header';
import Typography from '@material-ui/core/Typography'
import { mainInfo } from 'assets/config';
//  ======================================== COMPONENT
const Info: FC = () => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div>
			<Header>Info</Header>
            <Typography>{mainInfo.shopName}</Typography>
            <Typography>{mainInfo.addressLine1}</Typography>
            <Typography>{mainInfo.addressLine2}</Typography>
            <Typography>{mainInfo.phone}</Typography>
            <Typography>{mainInfo.email}</Typography>
		</div>
	);
};

//  ======================================== EXPORTS
export default Info;
//  ========================================
