//  ======================================== IMPORTS
import React, { FC } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BaseContainer from 'features/common/BaseContainer';
//  ======================================== COMPONENT
interface LayoutProps {
	children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div>
			<Navbar />
			<BaseContainer>{children}</BaseContainer>
			<Footer />
		</div>
	);
};

//  ======================================== EXPORTS
export default Layout;
//  ========================================
