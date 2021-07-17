//  ======================================== IMPORTS
import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BaseContainer from 'features/common/BaseContainer';
import SocialLinks from './SocialLinks';
import About from './footer/About';
import Info from './footer/Info';
import Newsletter from './footer/Newsletter';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		}
	})
);
//  ======================================== COMPONENT
const Footer: FC = () => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BaseContainer>
				<Grid container spacing={8}>
					<Grid item xs>
						<Info />
					</Grid>
					<Grid item xs>
						<About />
					</Grid>
					<Grid item xs>
						<Newsletter />
					</Grid>
				</Grid>
				<SocialLinks/>
			</BaseContainer>
		</div>
	);
};

//  ======================================== EXPORTS
export default Footer;
//  ========================================
