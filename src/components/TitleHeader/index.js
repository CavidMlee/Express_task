import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const TitleHeader = ({ title, ActiveBtn }) => {
    return (
        <div className='TH_container'>
            <h1 className='TH_title'>{title}</h1>
            {
                ActiveBtn &&
                <Button className='TH_btn'>
                    Actions <Icon type="down" />
                </Button>
            }
        </div>
    )
}