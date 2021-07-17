//  ======================================== IMPORTS
import React, { FC } from 'react';
import Header from './Header';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Formik, Form } from 'formik';
import BaseButton from 'features/common/BaseButton';
import FormTextField from 'features/common/FormTextField';
const useStyles = makeStyles((theme: Theme) => ({
	serverError: {
		color: '#F44336',
		marginTop: theme.spacing(1)
	},
	button: {
		background: theme.palette.primary.main
	},
    input:{
        marginBottom:theme.spacing(2)
    }
}));

//  ======================================== COMPONENT
interface InitialValues {
	email: string;
}
const Newsletter: FC = () => {
	//  ======================================== HOOKS
	const classes = useStyles();
	//  ======================================== STATE
	const [errorMessage, setErrorMessage] = React.useState('');
	//  ======================================== HANDLERS
	const handleSubmit = async (values: InitialValues) => {
		const response = await fetch('/api/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		});
		return response;
	};
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<>
			<Header>Newsletter</Header>
			<Formik
				initialValues={{
					email: ''
				}}
				//  validationSchema={contactSchema}
				onSubmit={async (values, formikHelpers) => {
					try {
						await handleSubmit(values);
						console.log(values, 'sent');
						window.alert('Messaggio inviato con successo');
						formikHelpers.resetForm();
					} catch (error) {
						setErrorMessage(error.message);
						console.log(error);
					}
				}}>
				{({ isSubmitting }) => (
					<Form>

						<Box paddingX={2} width='100%'>
						<FormTextField className={classes.input} label='Sign to our newsletter' name='firstName' />
							{isSubmitting && <LinearProgress />}
							<BaseButton
								className={classes.button}
								disabled={isSubmitting}
								fullWidth
								type='submit'>
								Signup
							</BaseButton>
							{errorMessage && (
								<Typography
									className={classes.serverError}
									variant='caption'
									component='p'>
									{errorMessage}
								</Typography>
							)}
						</Box>
					</Form>
				)}
			</Formik>
		</>
	);
};

//  ======================================== EXPORTS
export default Newsletter;
//  ========================================
