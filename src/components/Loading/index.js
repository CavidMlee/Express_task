import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const Loading = () => {
    return (
        <div className='Loading'>
            <Spin size="large" />
        </div>

    )
}