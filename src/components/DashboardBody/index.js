import React from 'react';
import { Row, Col, Input, Icon as AntIcon } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { AccountsTab,Credit,Stats } from '../index'

export const DashboardBody = () => {
    return (
        <Row gutter={[24, 24]} className='DB_container'>
            <Col span={12}>
                <AccountsTab />
            </Col>
            <Col span={12}>
                <Row>
                    <Credit />
                </Row>
                <Row>
                    <Stats />
                </Row>
            </Col>
        </Row>
    )
}