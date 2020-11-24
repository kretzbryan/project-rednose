import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, login } from '../../actions/auth';
import { addPost, deletePost, editPost,addPostComment  } from '../../actions/post';


const Form = ({ isAuthenticated, form: { inputs, values, className, buttonText, name  }, login, register}) => {
        const [ formInputs, setFormInputs ] = useState([]);
        const [ formValues, setFormValues ] = useState({});
        

        const handleChange = (e) => {
            e.preventDefault()
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
            })
    }

    const onSubmit =  async e => {
        e.preventDefault();
        name === 'login' && login(formValues);
        name === 'register' && register(formValues);
        name === 'addPost' && addPost(formValues);
        name === 'deletePost' && deletePost(formValues);
        name === 'editPost' && editPost(formValues);
        name == 'addPostComment' && addPostComment(formValues);

    }

    useEffect(()=> {
        setFormInputs([...inputs]);
        setFormValues({
            ...values
        })
    }, [])

    if( name === 'login' && isAuthenticated ) {
        return <Redirect to='/home' />;
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit} method='POST' className={`form ${className}`} autoComplete='off'>
                {formInputs && formInputs.map( input => {
                    const { key, className, type, placeholder, name, label } = input;
                    

                    
                    return(
                        label ? (
                                <div key={ key } className={className + "__group form__group"}>
                                    <input type={type} placeholder={placeholder} name={name} className={`form__input ${className}`} onChange={handleChange}/>
                                    <label htmlFor={label.htmlFor} className={`form__label ${label.className}`}>{placeholder}</label>
                                </div>
                        ) : (
                            <div key={ key } className={className + "__group form__group"}>
                                <input type={type} placeholder={placeholder} name={name} />
                            </div>
                        )
                    )
                })}
                <button type="submit" className={`btn btn-primary ${className}__button`}>{buttonText}</button>
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}


const mapStateToProps = state => ({
    form: state.form,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login, register })(Form)
