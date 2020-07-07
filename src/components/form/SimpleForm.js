import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
	textInput: {
		width: '90%',
		maxWidth: '310px',
		color: '#616161',
	},
	btn: {
		marginTop: '40px',
	},
}));

const styles = {
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: ' 100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

function SimpleForm({ setSubmitted }) {
	const classes = useStyles();

	const initialValues = {
		name: '',
		email: '',
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid Email address')
			.required('This Field is Required'),
	});

	const handleSubmit = (values, actions) => {
		console.log(values);
		console.log(actions);
		actions.resetForm();
		setSubmitted(true);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			validateOnMount={false}
			enableReinitialize={true}
		>
			{({ values, errors, touched, handleChange }) => (
				<Form autoComplete='off' style={styles.formContainer}>
					<Field
						as={TextField}
						id='name'
						name='name'
						label='Name'
						placeholder='How should we call you?'
						variant='standard'
						margin='dense'
						className={classes.textInput}
						onChange={handleChange}
						value={values.name}
						type='text'
					/>
					<Field
						as={TextField}
						id='email'
						name='email'
						label='Email'
						placeholder='myname@gmail.com'
						variant='standard'
						margin='dense'
						className={classes.textInput}
						onChange={handleChange}
						value={values.email}
						type='email'
						error={errors.email && touched.email}
						helperText={errors.email && touched.email ? errors.email : null}
						required
					/>

					<Button
						variant='contained'
						color='primary'
						className={classes.btn}
						type='submit'
						disabled={values.email && !errors.email ? false : true}
					>
						Subscribe
					</Button>
				</Form>
			)}
		</Formik>
	);
}

export default SimpleForm;
