//  ======================================== IMPORTS
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		header: {}
// 	})
// );

//  ======================================== COMPONENT
interface HeaderProps {
	children: string;
}
const Header: FC<HeaderProps> = ({ children }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<Box marginTop={3} marginBottom={6}>
			<Box marginBottom={2} display='flex' justifyContent='center'>
				<Typography variant='h4'>{children.toLocaleUpperCase()}</Typography>
			</Box>
			<Divider />
		</Box>
	);
};

//  ======================================== EXPORTS
export default Header;
//  ========================================
