import React, {useState} from 'react';
import {connect} from 'react-redux';
import {reset_password_confirm} from '../actions/auth';
import { Navigate } from "react-router-dom";


const ResetPasswordConfirm = ({params, reset_password_confirm}) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormDate] = useState({
        new_password: '',
        re_new_password: ''
    });


    const {new_password, re_new_password} = formData;

    const onChange = e => setFormDate({...formData, [e.target.name]: e.target.value});



    const onSubmit = e => {
        e.preventDefault();

        const uid = params.uid;
        const token = params.token;
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };




    if(requestSent){
        return <Navigate to='/'/> 
    }else {console.log('request not sent')}




    return (
        <div className='container mt-5'>
                <h1>Сменить пароль</h1>
                <p>Введите новый пароль</p>
                <form onSubmit={e => onSubmit(e)}>
                <div className = 'form-group'>
                        <input 
                            className='form-control'
                            type='password' 
                            placeholder='New Password' 
                            name='new_password' 
                            value={new_password} 
                            onChange={e => onChange(e)} 
                            minLength='6'
                            required
                        />
                    </div>
                    <div className = 'form-group'>
                        <input 
                            className='form-control'
                            type='password' 
                            placeholder='Confirm New Password' 
                            name='re_new_password' 
                            value={re_new_password} 
                            onChange={e => onChange(e)} 
                            minLength='6'
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>Сменить пароль</button>
                </form>
        </div>
    );

};



export default  connect(null, {reset_password_confirm})(ResetPasswordConfirm); 