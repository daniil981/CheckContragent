import React, {useState} from 'react';
import {connect} from 'react-redux';
import {reset_password} from '../actions/auth'
import { Navigate } from "react-router-dom";






const ResetPassword = ({reset_password}) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormDate] = useState({
        email: '',
        password: ''
    });


    const {email} = formData;

    const onChange = e => setFormDate({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };



    if(requestSent){
     return   <Navigate to='/'/>
    } else {console.log('request not sent')}








    return (
        <div className='container mt-5'>
                <h1>Сменить пароль</h1>
                <p>Введите ваш email</p>
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
                    <button className='btn btn-primary' type='submit'>Сменить пароль</button>
                </form>
        </div>
    );

};



export default connect(null, {reset_password})(ResetPassword); 