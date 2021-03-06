//  ======================================== IMPORTS
import React, { FC } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
			{children}
			<Footer />
		</div>
	);
};

//  ======================================== EXPORTS
export default Layout;
//  ========================================
