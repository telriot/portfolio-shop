//  ======================================== IMPORTS
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import React, {FC} from 'react'

//  ======================================== COMPONENT
interface HeaderProps {
    children:React.ReactNode
}
const Header : FC<HeaderProps> = ({children}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <Box marginBottom={3}>
            <Typography variant='h6'>
            {children}
            </Typography>
            <Divider/>
        </Box>
    )
}
 
//  ======================================== EXPORTS
export default Header
//  ========================================