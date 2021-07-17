import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles((theme) => ({
	disabled: {
		color: theme.palette.text.primary
	},
	root: {
		width: '100%'
	},
	helperText: { position: 'absolute', top: '3rem' }
}));

interface FormTextFieldProps {
    className:string
	disabled?: boolean;
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'number';
	multiline?: boolean;
	rows?: number;
}
const FormTextField: FC<FormTextFieldProps> = ({
    className,
	disabled,
	label,
	name,
	type = 'text',
	multiline,
	rows
}) => {
	const classes = useStyles();

	return (
		<Field
			InputProps={{
				classes: {
                    root:className,
					disabled: classes.disabled
				},
				'data-testid': `testid-${name}`
			}}
			InputLabelProps={{
				classes: {
					disabled: classes.disabled
				}
			}}
			FormHelperTextProps={{
				className: classes.helperText
			}}
			classes={{ root: classes.root }}
			disabled={disabled}
			component={TextField}
			type={type}
			label={label}
			name={name}
			multiline={multiline}
			rows={rows}
			variant={multiline ? 'outlined' : 'standard'}
		/>
	);
};

export default FormTextField;
