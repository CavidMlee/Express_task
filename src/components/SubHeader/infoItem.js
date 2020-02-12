import React from 'react';
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const InfoItem = ({ title, count }) => {
    return (
        <Col className='info_container'>
            <Col  className='info_title'>{title}</Col>
            <Col  className='info_count'>{count}</Col>
        </Col>
    )
}