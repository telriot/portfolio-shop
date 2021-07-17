//  ======================================== IMPORTS
import React, {FC} from 'react'
import Container from '@material-ui/core/Container';
//  ======================================== COMPONENT
interface BaseContainerProps {
    children:React.ReactNode
}
const BaseContainer : FC<BaseContainerProps> = ({children}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
       <Container maxWidth='xl'>
           {children}
       </Container>
    )
}
 
//  ======================================== EXPORTS
export default BaseContainer
//  ========================================