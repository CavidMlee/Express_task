import React from 'react';
import { Tabs, Empty } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const Credit = () => {
    return (
        <div className='credit_container'>
            <div className='credit_leftside' >
                <div className='credit_title'>Asan kredit</div>
                <div>20% İllik faiz dərəcəsi</div>
                <div>48 ay maksimum müddət</div>
            </div>
            <div className='credit_img'></div>
        </div>
    )
}