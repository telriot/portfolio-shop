//  ======================================== IMPORTS
import React, { FC } from 'react';
import BaseButton from 'features/common/BaseButton';
import { useHistory } from 'react-router';
//  ======================================== COMPONENT
const BackButton: FC = () => {
	//  ======================================== HOOKS
	const history = useHistory();
	//  ======================================== STATE
	//  ======================================== HANDLERS
	const goBack = () => history.goBack();
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return <BaseButton onClick={goBack}>Back</BaseButton>;
};

//  ======================================== EXPORTS
export default BackButton;
//  ========================================
