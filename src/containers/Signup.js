import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import {signup} from  '../actions/auth';




const Signup = ({signup, isAuthenticated}) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });


    const {name, email, password, re_password} = formData;

    const onChange = e => setFormDate({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if( password === re_password){

            signup(name, email, password, re_password);
            setAccountCreated(true);
        }



        
    };




    if(isAuthenticated){
        return <Navigate to='/'/>
    } 


    if(accountCreated){
        return <Navigate to='/'/>
    }



    return (
        <div className='container mt-5'>
                <h1>Регистрация</h1>
                <p>Создайте ваш акаунт</p>
                <form onSubmit={e => onSubmit(e)}>
                <div className = 'form-group'>
                        <input 
                        className='form-control' 
                        type='name' 
                        placeholder='Name' 
                        name='name' 
                        value={name} 
                        onChange={e => onChange(e)} 
                        required
                        />
                    </div>
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
                    <div className = 'form-group'>
                        <input 
                            className='form-control'
                            type='password' 
                            placeholder='Re Password' 
                            name='re_password' 
                            value={re_password} 
                            onChange={e => onChange(e)} 
                            minLength='6'
                            required
                        />
                    </div>   
                    <button className='btn btn-primary' type='submit'>Создать</button>
                </form>
                <p className='mt-3'>
                    Уже зарегистрированы? <Link to='/login'>Войти</Link>
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


export default connect(mapStateToProps, {signup})(Signup); 