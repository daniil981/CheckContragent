import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useParams, Navigate } from 'react-router-dom';

import {verify} from  '../actions/auth';




const Activate = ({verify, params}) => {
    const [verified, setVerified] = useState(false);
    const {uid, token} = useParams();


    const verify_account = e => {

        verify(uid, token);
        setVerified(true);
    };




    if(verified){
        return <Navigate to='/'/>
    } 




    return (
        <div className='container mt-5'>
                <h1>Регистрация</h1>
                <p>Подтверждение</p>
                <div> 
                    <button className='btn btn-primary' type='button' onClick={verify_account}>Подтвердить</button>
                </div>
                <p className='mt-3'>
                    Нет акаунта? <Link to='/signup'>Зарегистрироваться</Link>
                </p>
                <p className='mt-3'>
                    Забыли пароль? <Link to='/reset-password'>Сбросить пароль</Link>
                </p>
        </div>
    );

};




export default connect(null, {verify})(Activate); 