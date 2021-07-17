//  ======================================== IMPORTS
import React, {FC} from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
      marginRight:theme.spacing(3),
      height:'3.25rem',
      width:'3.25rem'
    }
	})
);
//  ======================================== COMPONENT
export interface SocialButtonsProps {
  size?: number;
  className?: string;
}
const SocialButtons : FC<SocialButtonsProps> = ({ className }) => {
  //  ======================================== HOOKS
  const classes = useStyles();

  //  ======================================== STATE
  //  ======================================== HANDLERS
  //  ======================================== EFFECTS
  //  ======================================== JSX
  return (
    <Box display='flex' justifyContent='center' marginY={3}>
      <FacebookIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
    </Box>
  );
};

//  ======================================== EXPORTS
export default SocialButtons;
//  ========================================
