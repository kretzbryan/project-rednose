import { login } from '../actions/auth';


const registerForm = {
    name: 'register',
    className: 'register-form',
    values: {
        username: '',
        password: ''
    },
    buttonText: 'Register',
    headerValue: 'Sign Up',
    inputs: [
        {
            key: '0',
            type: 'text',
            placeholder: 'First Name',
            name: 'firstName',
            label: {
                htmlFor: 'firstName',
                className: 'login-form__label'
            }
        },
        {
            key: '1',
            type: 'text',
            placeholder: 'Last Name',
            name: 'lastName',
            label: {
                htmlFor: 'lastName',
                className: 'login-form__label'
            }
        },
        {
            key: '2',
            type: 'text',
            placeholder: 'Username',
            name: 'username',
            label: {
                htmlFor: 'username',
                className: 'login-form__label'
            }
        },
        {
            key: '3',
            type: 'email',
            placeholder: 'Email',
            name: 'email',
            label: {
                htmlFor: 'email',
                className: 'login-form__label'
            }
        },
        {
            key: '4',
            type: 'password',
            placeholder: 'Password',
            name: 'password1',
            label: {
                htmlFor: 'password1',
                className: 'login-form__label'
            }
        },
        {
            key: '5',
            type: 'password',
            placeholder: 'Re-type Password',
            name: 'password2',
            label: {
                htmlFor: 'password2',
                className: 'login-form__label'
            }
        }
    ]
}

const loginForm = {
    name: 'login',
    className: 'login-form',
    values: {
        username: '',
        password: ''
    },
    buttonText: 'Log In',
    headerValue: 'Sign In',
    inputs: [
        {
            key: '0',
            type: 'text',
            placeholder: 'Username',
            name: 'username',
            className: 'login-form__input',
            label: {
                htmlFor: 'username',
                className: 'login-form__label'
            }
        },
        {
            key: '1',
            type: 'password',
            value: null,
            placeholder: 'password',
            name: 'password',
            className: 'login-form__input',
            label: {
                htmlFor: 'location',
                className: 'login-form__label'
            }
        }]
}

const postForm = {
    name: 'addpost',
    inputs: {
        type: 'text',
        placeholder: 'Say Something...',
        name: 'content'
    }
}

const gigForm = {
    inputs: [ 
        {
            type: 'text',
            placeholder: 'Location',
            name: 'location',
            label: {
                htmlFor: 'location'
            }
        },
        {
            type: 'text',
            placeholder: 'Title',
            name: 'title'
        },
        {
            type: 'text',
            placeholder: 'Description',
            name: 'description'
        }
    ]
}

const userForm = {
   inputs: [
       {
            type: 'text',
            placeholder: 'First Name',
            name: 'firstName'
        },
        {
            type: 'text',
            placeholder: 'Last Name',
            name: 'lastName'
        },
        {
            type: 'text',
            placeholder: 'Username',
            name: 'username'
        },
        {
            type: 'email',
            placeholder: 'Email',
            name: 'email'
        },
        {
            type: 'text',
            placeholder: 'Image Url',
            name: 'profileImage'
        },
        {
            type: 'text',
            placeholder: 'Occupation',
            name: 'occupation'
        },
        {
            type: 'text',
            placeholder: 'Location',
            name: 'location'
        }
    ]
}


export { registerForm, loginForm, postForm, gigForm, userForm };