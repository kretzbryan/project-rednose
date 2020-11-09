
const registerForm = {
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
            type: 'password',
            placeholder: 'Password',
            name: 'password1'
        },
        {
            type: 'password',
            placeholder: 'Re-type Password',
            name: 'password2'
        }
    ]
}

const loginForm = {
    inputs: [
        {
            type: 'text',
            placeholder: 'Username',
            name: 'username'
        },
        {
            type: 'password',
            placeholder: 'password',
            name: 'password'
        }],
    labels: [
        {
            type: 'text',
            placeholder: 'Username',
            name: 'username'
        },
        {
            type: 'password',
            placeholder: 'password',
            name: 'password'
        }
    ]
}

const postForm = {
    inputs: {
        type: 'text',
        placeholder: 'content',
        name: 'content'
    }
}

const gigForm = {
    inputs: [ 
        {
            type: 'text',
            placeholder: 'Location',
            name: 'location'
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