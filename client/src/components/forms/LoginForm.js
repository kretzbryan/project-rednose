import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LoginForm = ({ login, isAuthenticated }) => {
	const [data, setData] = useState({
		username: '',
		password: '',
	});

	onChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = () => {
		login(data);
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<Fragment>
			<form
				onSubmit={onSubmit}
				method='POST'
				className={`form login-form`}
				autoComplete='off'>
				<div className='login-form__group form__group'>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className={'form__input login-form__input'}
						onChange={onChange}
					/>
					<label htmlFor='username' className={'form__label login-form__label'}>
						Username
					</label>
				</div>
				<div className='login-form__group form__group'>
					<input
						type='text'
						placeholder='Password'
						name='password'
						className={'form__input login-form__input'}
						onChange={onChange}
					/>
					<label htmlFor='password' className={'form__label login-form__label'}>
						Password
					</label>
				</div>
			</form>
			;
		</Fragment>
	);
};

LoginForm.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { login })(LoginForm);
