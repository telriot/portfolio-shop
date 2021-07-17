//  ======================================== IMPORTS
import Button from '@material-ui/core/Button';
import { Theme, withStyles } from '@material-ui/core/styles';

const BaseButton = withStyles((theme:Theme) => ({
  root: {
    color: '#fff',
    '&:hover': {
      background: theme.palette.secondary.light,
    },
  },
}))(Button);

export default BaseButton;
