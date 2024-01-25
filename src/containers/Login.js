import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import {login} from  '../actions/auth';




const Login = ({login, isAuthenticated}) => {
    const [formData, setFormDate] = useState({
        email: '',
        password: ''
    });


    const {email, password} = formData;

    const onChange = e => setFormDate({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };




    if(isAuthenticated){
        return <Navigate to='/'/>
    } 




    return (
        <div className='container mt-5'>
                <h1>Логин</h1>
                <p>Войдите в ваш аккаунт</p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className = 'form-group'>
                        <input 
                        className='form-control' 
                        type='email' 
                        placeholder='Email' 
                        name='email' 
                        value={email} 
                        onChange={e => onChange(e)} 
                        required
                        />
                    </div>
                    <div className = 'form-group'>
                        <input 
                            className='form-control'
                            type='password' 
                            placeholder='Password' 
                            name='password' 
                            value={password} 
                            onChange={e => onChange(e)} 
                            minLength='6'
                            required
                        />
                    </div>   
                    <button className='btn btn-primary' type='submit'>Войти</button>
                </form>
                <p className='mt-3'>
                    Нет акаунта? <Link to='/signup'>Зарегистрироваться</Link>
                </p>
                <p className='mt-3'>
                    Забыли пароль? <Link to='/reset-password'>Сбросить пароль</Link>
                </p>
        </div>
    );

};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {login})(Login); 