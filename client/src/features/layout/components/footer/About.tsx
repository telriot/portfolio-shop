//  ======================================== IMPORTS
import React, {FC} from 'react'
import Header from './Header'
import Typography from '@material-ui/core/Typography'
import { mainInfo } from 'assets/config'
//  ======================================== COMPONENT
const About : FC = () => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <div>
            <Header>About</Header>
            <Typography>
                {mainInfo.about}
            </Typography>
        </div>
    )
}
 
//  ======================================== EXPORTS
export default About
//  ========================================