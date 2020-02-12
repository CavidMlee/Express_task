import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { Menu } from '../../static'


export const TabList = ({ account, accountNumber, money }) => {
    return (
        <div className='TL_container'>
            <div>
                <div className='TL_account'>{account}</div>
                <div className='TL_number'>{accountNumber}</div>
            </div>
            <div className='TL_money'>{money}</div>
            <img src={Menu} />
        </div>
    )
}